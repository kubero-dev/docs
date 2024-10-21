# Installation on miniKube


### 1. Install minikube on macOS

```bash
brew install minikube
```

For other OS, follow the instructions here:
https://minikube.sigs.k8s.io/docs/start/

### 2. Start a minikube cluster

```bash
minikube start --memory='6g' --cpus='4' --disk-size='50g' --ports=80,443 --addons=ingress --addons=metrics-server
```

### 3. Install Kubero 

Select "n" on step 1) to skip the installation of the kubernetes cluster

```bash
kubero install
```

### 4. configure DNS

```bash
echo "$(minikube ip) demo.kubero.dev" | sudo tee -a /etc/hosts
```

### Result

```bash
kubectl get pods -A                                                                                                                                                           main * ] 9:35 pm
NAMESPACE                NAME                                                  READY   STATUS      RESTARTS        AGE
cert-manager             cert-manager-5d864474d-8fvnj                          1/1     Running     0               61s
cert-manager             cert-manager-cainjector-85d499d4cc-wn9nw              1/1     Running     0               61s
cert-manager             cert-manager-webhook-d499d9459-tv9gh                  1/1     Running     0               61s
ingress-nginx            ingress-nginx-admission-create-ttbrh                  0/1     Completed   0               7m6s
ingress-nginx            ingress-nginx-admission-patch-lmn6x                   0/1     Completed   1               7m6s
ingress-nginx            ingress-nginx-controller-84df5799c-nm2m8              1/1     Running     0               7m6s
kube-system              coredns-7db6d8ff4d-lwdxn                              1/1     Running     0               8m10s
kube-system              etcd-minikube                                         1/1     Running     0               8m24s
kube-system              kube-apiserver-minikube                               1/1     Running     0               8m23s
kube-system              kube-controller-manager-minikube                      1/1     Running     0               8m24s
kube-system              kube-proxy-fbw8h                                      1/1     Running     0               8m10s
kube-system              kube-scheduler-minikube                               1/1     Running     0               8m23s
kube-system              metrics-server-c59844bb4-4jx6n                        1/1     Running     0               6m18s
kube-system              storage-provisioner                                   1/1     Running     1 (7m39s ago)   8m22s
kubero-operator-system   kubero-operator-controller-manager-7c59b88f64-qp8rp   2/2     Running     0               5m7s
kubero                   kubero-66f5bf6754-5hdvs                               1/1     Running     0               4m4s
```