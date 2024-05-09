import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Installation
This is the installation guide for Kubero. It will guide you through the installation of the required components, the Kubero Operator and the Kubero UI.

All these steps can be performed with the Kubero CLI or [kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl). You can download the latest Kubero CLI version from the [releases page](https://github.com/kubero-dev/kubero-cli/releases/latest)

### Prerequisites
- Kubernetes cluster
- [kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl)
- [Kubero CLI (optional)](https://github.com/kubero-dev/kubero-cli/releases/latest)

## Components

### Ingress Controller
The Installation of the Ingress Controller depends on your Kubernetes provider. For example, if you are using Kind, you can use the following command:

<Tabs groupId="install-strategy">
  <TabItem value="kubectl" label="kubectl">

      kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml
  </TabItem>
  <TabItem value="cli" label="Kubero CLI">

      kubero install -c ingress
  </TabItem>
</Tabs>

For other Kubernetes providers, please use one of the following [resources](https://github.com/kubernetes/ingress-nginx/tree/main/deploy/static/provider)

### Metrics Server
The Metrics Server is required for the Kubero UI to display CPU and Memory usage. You can install it with the following command:

<Tabs groupId="install-strategy">
  <TabItem value="kubectl" label="kubectl">

      kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml
  </TabItem>
  <TabItem value="cli" label="Kubero CLI">

      kubero install -c metrics
  </TabItem>
</Tabs>

### Cert Manager
The Certmanager is requirede to generate and manage TLS certificates.
<Tabs groupId="install-strategy">
  <TabItem value="kubectl" label="kubectl">

      kubectl apply -f https://operatorhub.io/install/cert-manager.yaml
  </TabItem>
  <TabItem value="cli" label="Kubero CLI">

      kubero install -c certmanager
  </TabItem>
</Tabs>

### Monitoring Stack
(introduced in version v2.3.0)

In order to monitor your app with longterm statistics (metrics section), you will need to install Prometheus and kube-metrics. 
<Tabs groupId="install-strategy">
  <TabItem value="kubectl" label="kubectl">

      kubectl apply -f https://raw.githubusercontent.com/kubero-dev/kubero-operator/main/config/samples/application_v1alpha1_kuberoprometheus.yaml
  </TabItem>
  <TabItem value="cli" label="Kubero CLI">

      kubero install -c monitoring
  </TabItem>
</Tabs>


:::info

Make sure you nginx ingress controller is configured as described here : 

https://github.com/kubernetes/ingress-nginx/blob/main/docs/user-guide/monitoring.md

::: 


## Kubero Operator

There are two ways to install Kubero:
1) Minimal installation
2) Full installation with OLM (Operator Lifecycle Manager)

### Option 1) Minimal installation

The minimal installation will install the Kubero Operator and the required CRDs. The Kubero UI will be installed on a later step.
<Tabs groupId="install-strategy">
  <TabItem value="kubectl" label="kubectl">

      kubectl apply -f https://raw.githubusercontent.com/kubero-dev/kubero-operator/main/deploy/operator.yaml
  </TabItem>
  <TabItem value="cli" label="Kubero CLI">

      kubero install -c kubero-operator
  </TabItem>
</Tabs>

### Option 2) Full installation with OLM
The OLM installation will install the Operator Lifecycle Manager and the Kubero Operator. The Kubero UI will be installed on a later step.

**OLM (Operator Lifecycle Manager)**
```
kubectl create -f https://raw.githubusercontent.com/operator-framework/operator-lifecycle-manager/master/deploy/upstream/quickstart/crds.yaml

kubectl create -f https://raw.githubusercontent.com/operator-framework/operator-lifecycle-manager/master/deploy/upstream/quickstart/olm.yaml
```

**Kubero Operator**
```bash
kubectl create -f https://operatorhub.io/install/kubero-operator.yaml
```


## Kubero UI
The Kubero UI provides an API and a web interface to manage your Kubero installation. Without the Kubero UI, you can still use the Kubero Operator to manage your applications but you will need to use the kubectl to apply the rescources.

### Install Kubero UI with the Kubero CLI
```bash
kubero install -c kubero-ui
```


### Install Kubero UI with kubectl
These steps are not required if you have installed the Kubero UI with the Kubero CLI.

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

