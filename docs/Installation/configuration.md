# Configuration

## Kubero UI

The kubero configuration is stored in a ConfigMap in the kubero namespace. The ConfigMap is called kubero-config and is mounted into the kubero pod under `/etc/kubero/config.yaml`.

The config has three sections so far:

1. kubero: configures the UI
2. buildpacks: the selectable list of buildpacks
3. podSizeList: the selectable list of bods

A full example can be found here https://github.com/kubero-dev/kubero/blob/main/config.yaml

```yaml
kubero:
  readonly: false
  banner:
    show: false
    message: "Welcome to Kubero!"
    bgcolor: "#8560A9"
    fontcolor: "azure"
buildpacks:
  - name: NodeJS             # displayed Name
    language: JavaScript     # Language detection match
    fetch:
      repository: ghcr.io/kubero-dev/buildpacks/fetch
      tag: main
    build:
      repository: node       # image to use
      tag: latest            # tag to use
      command: "npm install" # command to run
    run:
      repository: node
      tag: latest
      command: "node index.js"
podSizeList:
- name: small
  description: 'Small (CPU: 0.25, Memory: 0.5Gi)'
  default: true
  # resources are defined as usual in Kubernetes
  # https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  resources:
    requests:
      memory: 0.5Gi
      cpu: 250m
    limits:
      memory: 1Gi
      cpu: 500m
```

Store the adjusted config in kubero UI CRD and apply it.

```bash
kubectl edit kuberoes kubero -n kubero
```



## Authentication
The UI has a built-in authentication to restrict access. All methods can be used simultaneously.

### Local
This may fit for single users and very small teams. The authentication credentials are stored in the environment variable KUBERO_USERS as a base64 encoded string.

:::caution

Do not use this example credentials

:::

**1) create an encrypted password**
```
PASSWORD=asdf &&
SALT=asdf &&
echo -n $PASSWORD | openssl dgst -sha256 -hmac $SALT
```

**2) create a JSON file with the encrypted password. For example users.json**
```json
[
  {
    "id": 1,
    "method": "local",
    "username": "asdf",
    "password": "8a8423ba78c8f3da60a602493663c1cdc248a89541b12980e292399c0f0cad21",
    "insecure": false
    "apitoken": "asdf",
  },
  {
    "id": 2,
    "method": "local",
    "username": "qwer",
    "password": "qwer",
    "insecure": true,
    "apitoken": "asdf",
  }
]
```
**3) encode the created file to base64**
```
cat users.json | base64
```

**4) put the env var in your secrets.yaml and apply it**
```yaml
apiVersion: v1
kind: Secret
metadata:
  name: kubero-secrets
type: Opaque
data:
    ...
    ...
stringData:
    KUBERO_USERS: "WwogIHsKICAgICJpZCI6IDEsCiAgICAibWV0aG9kIjogImxvY2FsIiwKICAgICJ1c2VybmFtZSI6ICJhc2RmIiwKICAgICJwYXNzd29yZCI6ICI4YTg0MjNiYTc4YzhmM2RhNjBhNjAyNDkzNjYzYzFjZGMyNDhhODk1NDFiMTI5ODBlMjkyMzk5YzBmMGNhZDIxIiwKICAgICJpbnNlY3VyZSI6IGZhbHNlCiAgfSwKICB7CiAgICAiaWQiOiAyLAogICAgIm1ldGhvZCI6ICJsb2NhbCIsCiAgICAidXNlcm5hbWUiOiAicXdlciIsCiAgICAicGFzc3dvcmQiOiAicXdlciIsCiAgICAiaW5zZWN1cmUiOiB0cnVlCiAgfQpd"
    ...
    ...
```

```bash
kubectl apply -f secrets.yaml -n kubero
```

### Github
If you have already have a Github team and want to grant access to them, use this section.

### Oauth2 (gitea)
This should fit all other usecases.
