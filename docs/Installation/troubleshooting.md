---
title: Troubleshooting
---

# Troubleshooting Kubero installation

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
