---
title: Troubleshooting
description: Troubleshooting Kubero installation
sidebar_position: 6
---

# Troubleshooting Kubero installation

There is a kubero debug command in the kubero-cli to help you troubleshoot your installation. 

```bash
kubero debug
```


## 1. Kubero UI is not accessible

### Check the Kubero UI CRD

```bash
kubectl get kuberoes.application.kubero.dev kubero -n kubero
```

```bash title="Expected result"
NAME     AGE
kubero   8d
```

### Check if the Kubero UI is running

```bash
kubectl get pods -n kubero
```

```bash title="Expected result"
NAME                               READY   STATUS    RESTARTS   AGE
kubero-785c84f85f-d65t2            1/1     Running   0          6d18h
kubero-registry-7d6d5cdb74-8fqm2   1/1     Running   0          8d  <---- Optional
```

### Check the Kubero ingress

```bash
kubectl get ingress -n kubero
```

```bash title="Expected result"
NAME                      CLASS   HOSTS                      ADDRESS         PORTS     AGE
kubero                    nginx   demo.kubero.dev            45.79.240.209   80, 443   126d
kubero-registry-ingress   nginx   registry.demo.kubero.dev   45.79.240.209   80, 443   8d  <---- Optional
```

### Check if the DNS entry is correct

```bash
dig demo.kubero.dev +noall +question +answer
```

```bash title="Expected result"
; <<>> DiG 9.10.6 <<>> demo.kubero.dev +noall +question +answer
;; global options: +cmd
;demo.kubero.dev.		IN	A
demo.kubero.dev.	11574	IN	A	45.79.240.209
```

## 2. Kubero is not starting the apps

### Make sure the Kubero CRDs are installed

```bash
kubectl get customresourcedefinitions.apiextensions.k8s.io | grep kubero
```

```bash title="Expected result"
kuberoapps.application.kubero.dev                     2023-01-01T01:10:42Z
kuberocouchdbs.application.kubero.dev                 2023-01-01T01:10:43Z
kuberoelasticsearches.application.kubero.dev          2023-01-01T01:10:43Z
kuberoes.application.kubero.dev                       2023-01-01T01:10:43Z
kuberokafkas.application.kubero.dev                   2023-01-01T01:10:44Z
kuberomongodbs.application.kubero.dev                 2023-01-01T01:10:44Z
kuberomysqls.application.kubero.dev                   2023-01-01T01:10:44Z
kuberopipelines.application.kubero.dev                2023-01-01T01:10:45Z
kuberopostgresqls.application.kubero.dev              2023-01-01T01:10:45Z
kuberoredis.application.kubero.dev                    2023-01-01T01:10:45Z
```

### Check if the Kubero operator is running

```bash
kubectl get pods --all-namespaces | grep kubero-operator-controller-manager
```

```bash title="Expected result"
kubero-operator-system   kubero-operator-controller-manager-XXXXXXXX-yyyyyyy   2/2     Running     2 (19h ago)     9d
```

### Check the operators logs
The Namespace may be different on a OLM installation.

```bash
kubectl logs kubero-operator-controller-manager-XXXXXXXX-yyyyyyy -n kubero-operator-system -f
```

```bash title="Expected result"
{"level":"info","ts":1680789537.7990057,"logger":"helm.controller","msg":"Reconciled release","namespace":"tools-production","name":"cyberchef","apiVersion":"applicat^C{"level":"info","ts":1680789547.8039916,"logger":"helm.controller","msg":"Reconciled release","namespace":"kubero-demo","name":"demo","apiVersion":"application.kubero.dev/v1alpha1","kind":"KuberoPipeline","release":"demo"}
{"level":"info","ts":1680789549.4616005,"logger":"helm.controller","msg":"Reconciled release","namespace":"tools-production","name":"rsshub","apiVersion":"application.kubero.dev/v1alpha1","kind":"KuberoApp","release":"rsshub"}
```


## 3. You can't issue SSL Certs for your apps

### Make sure your domain is accessible for letsencrypt

```bash
curl --insecure https://myservice.example.com
```

### Check the SSL Cert Manager

Make sure all Certmanager components are running 
```bash
kubectl get pods -n cert-manager
```

```bash title="Expected result"
NAME                                      READY   STATUS      RESTARTS       AGE
cert-manager-99bb69456-x285b              1/1     Running     39 (39h ago)   171d
cert-manager-cainjector-ffb4747bb-cktsq   0/1     Completed   22             218d
cert-manager-cainjector-ffb4747bb-r8gbt   1/1     Running     43 (39h ago)   171d
cert-manager-webhook-545bd5d7d8-282n5     1/1     Running     0              171d
```
The logs of these pods may hint at what is going wrong.

### Search for your signing request

```bash
kubectl get certificaterequests.cert-manager.io --all-namespaces
```

```bash title="Expected result"
NAMESPACE                       NAME                        APPROVED   DENIED   READY   ISSUER             REQUESTOR                                         AGE
demo-production                 node-tls-525dn              True                True    letsencrypt-prod   system:serviceaccount:cert-manager:cert-manager   194d
demo-production                 node-tls-cmzh7              True                True    letsencrypt-prod   system:serviceaccount:cert-manager:cert-manager   74d
demo-production                 node-tls-h87n2              True                True    letsencrypt-prod   system:serviceaccount:cert-manager:cert-manager   134d
demo-production                 node-tls-qt5v9              True                True    letsencrypt-prod   system:serviceaccount:cert-manager:cert-manager   14d
```

### Check your cluster issuer

```
kubectl get clusterissuers.cert-manager.io
```

```bash title="Expected result"
NAME               READY   AGE
letsencrypt-prod   True    222d
```

```
kubectl get clusterissuers.cert-manager.io letsencrypt-prod -o yaml
```

```bash title="Expected result"
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: letsencrypt-prod
  resourceVersion: "1467"
  uid: 02bded44-f4f2-40e7-8c76-f66f0eaf0ca2
spec:
  acme:
    email: yourname@myservice.example.com
    preferredChain: ""
    privateKeySecretRef:
      name: letsencrypt
    server: https://acme-v02.api.letsencrypt.org/directory
    solvers:
    - http01:
        ingress:
          class: nginx
```


### Reset Admin password

Run this command to reset the admin password to `admin`:
```
kubectl exec -it kubero-XXXXXX -n kubero -- yarn cli:reset-admin
```