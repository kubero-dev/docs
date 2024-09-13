# Runpacks

:::info

Runpacks where originally called Builpacks. The name was changed to Runpacks to avoid confusion with the CNCF's buildpacks.io .
It might still appear as Buildpacks in some parts of the documentation and configuration files.

:::


Kubero Runpacks rely on public available images. 

Examples of Kubero Runpacks can be found here: https://github.com/kubero-dev/runpacks/tree/main/packs

Runpacks are defined as a set of three containers:

## Fetch (init container)
Fetches the code from a Git repository.
There is a working fetch container from kubero. But if you wish to build your own, you are free to change it in the runpack configuration.

## Build (init container)
Runs the build commands.
You can define which image will be used by selecting the runpack. The runpack can be configured with any Docker image.

## Run (container)
Run the final container
In the run stage, there are two options: worker and web. Only the web pod is attached to the ingress and will be accessible from outside the cluster.

## Example for a runpack configuration:

```yaml
  - name: Python
    language: Python
    fetch:
      repository: ghcr.io/kubero-dev/fetch
      tag: v1
    build:
      repository: python
      tag: 3.10-buster
      command: "python3 -m venv .venv && . .venv/bin/activate && pip install -r requirements.txt"
    run:
      repository: python
      tag: 3.10-buster
      command: "python3 -m venv .venv && . .venv/bin/activate && python3 main.py"
```

This config is stored in your Kubernetes cluster and can be changed by kubectl.

```bash
kubectl edit kuberoes kubero -n kubero
```
