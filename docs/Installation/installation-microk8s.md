import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Installation on MicroK8s 


### 1. Install MicroK8s
https://microk8s.io/docs/getting-started 

### 2. Enable the required MicroK8s addons
```bash
microk8s enable dns ingress 
```

Optional but recommended: 
```bash
microk8s enable metrics-server cert-manager
```

Extract your kubeconfig and switch the context to this config
```bash
microk8s config > ~/.kube/config
kubectl config use-context microk8s
```

> For shortcut, use alias k = kubectl

Find the IP of the ingress controller
```bash
k get nodes -o wide
```

Point your domain to the IP from INTERNAL-IP field

### 3. Install Kubero Operator

<Tabs groupId="install-strategy">
  <TabItem value="kubectl" label="kubectl">

      kubectl apply -f https://raw.githubusercontent.com/kubero-dev/kubero-operator/main/deploy/operator.yaml
  </TabItem>
  <TabItem value="cli" label="Kubero CLI">

      kubero install -c kubero-operator
  </TabItem>
</Tabs>

### 4. Install Kubero UI

Run the kubero-cli to install the Kubero UI
```bash
kubero install -c kubero-ui
```

**Or** create the namespace, secrets and CRD manually

#### Create the namespace
```
kubectl create namespace kubero
```

#### Create the secrets
```bash
kubectl create secret generic kubero-secrets \
    --from-literal=KUBERO_WEBHOOK_SECRET=$(openssl rand -hex 20) \
    --from-literal=KUBERO_SESSION_KEY=$(openssl rand -hex 20) \
    --from-literal=GITHUB_PERSONAL_ACCESS_TOKEN=$GITHUB_TOKEN \
    -n kubero
```
| Variable | Required | Description |
|-------:|:-------:|:-----------|
| GIT_DEPLOYMENTKEY_PUBLIC | deprecated | (Bug in Operator =< v0.0.70, set to random string) |
| GIT_DEPLOYMENTKEY_PRIVATE_B64 | deprecated | (Bug in Operator =< v0.0.70, set to random string)  |
| KUBERO_WEBHOOK_SECRET | required | Random secret string |
| KUBERO_SESSION_KEY | required | Random secret string |
| KUBECONFIG_BASE64 | optional | Base64 encoded Kubeconfig, may contain multiple contexts (required for multi cluster)|
| KUBERO_USERS | optional | Base64 encoded jsonfile (see Authentication chapter) |
| GITHUB_PERSONAL_ACCESS_TOKEN | optional | Personal access token for GitHub API |
| GITEA_PERSONAL_ACCESS_TOKEN | optional | Personal access token for Gitea API |

#### Deploy the Kubero UI

```bash
 kubectl apply -f https://raw.githubusercontent.com/kubero-dev/kubero-operator/main/config/samples/application_v1alpha1_kubero.yaml -n kubero
```

### 5. (Optional) configure the clusterissuer for cert-manager

```yaml
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  annotations:
  name: letsencrypt-prod
spec:
  acme:
    email: changeme@yourdomain.com
    privateKeySecretRef:
      name: letsencrypt
    server: https://acme-v02.api.letsencrypt.org/directory
    solvers:
    - http01:
        ingress:
          class: nginx
```

```bash
kubectl apply -f clusterissuer.yaml
```