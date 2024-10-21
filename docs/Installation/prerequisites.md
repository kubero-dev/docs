# Prerequisites
In order to install Kubero, you need to have a Kubernetes cluster and the `kubectl` command line tool installed.

## Kubernetes cluster
You can use any Kubernetes cluster. If you don't have access to a Kubernetes cluster, you have a few options. One option is to use [Kind](https://kind.sigs.k8s.io/docs/user/quick-start/) to start a cluster on your desktop, server or VM. Alternatively, you can use the Kubero CLI to create a cluster on one of the many cloud providers that offer Kubernetes as a service.

### Starting a local Kind cluster

```bash
wget https://raw.githubusercontent.com/kubero-dev/kubero/main/kind.yaml
kind create cluster --config kind.yaml
```

## kubero CLI (optional)
The Kubero CLI is a command line tool that can be used to install and manage Kubero. It is not required to install Kubero, but it can be helpful for managing Kubero resources.

You can install the Kubero CLI binary by running the following command:

```bash
curl -L https://get.kubero.dev | bash
```

Or you can install the Kubero CLI using Homebrew:

```bash
brew tap kubero-dev/kubero
brew install kubero-cli
```

### Environment variables for cloudcredentials (optional)

In order to enable the Kubero CLI to create clusters on cloud providers, you need to set the following environment variables:

**Scaleway**
```bash
export SCALEWAY_ACCESS_TOKEN=xxx
export SCALEWAY_PROJECTID=xxx
export SCALEWAY_ORGANIZATIONID=xxx
```
**Linode**
```bash
export LINODE_ACCESS_TOKEN=xxx
```
**Digital Ocean**
```bash
export DIGITALOCEAN_ACCESS_TOKEN=xxx
```
**Google GKE**
```bash
export GOOGLE_API_KEY=xxx
```