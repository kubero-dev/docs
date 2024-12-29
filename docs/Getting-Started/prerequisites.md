---
sidebar_position: 1
---

# Prerequisites

To install Kubero, you need a Kubernetes cluster and the `kubectl` command-line tool.

## Kubernetes Cluster

Kubero can be installed on any Kubernetes cluster. If you don’t have access to one, there are a few options to get started:

- **Local Deployment**: Use [Kind (Kubernetes IN Docker)](https://kind.sigs.k8s.io/docs/user/quick-start/), Minikube, Microk8s, K3s, or Colima to create a local cluster on your desktop, server, or virtual machine.
- **Cloud Deployment**: Use the Kubero CLI to create a cluster on one of the many cloud providers offering Kubernetes as a service. (e.g., AWS, Azure, Google Cloud, Digital Ocean, Linode, Scaleway, etc.)

Choose the option that best fits your setup and proceed with the installation.

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