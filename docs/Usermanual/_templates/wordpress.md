# Wordpress

Wordpress runs a bitnami image (bitnami/wordpress) and needs a few tweaks to make it work with Kubero.

```yaml
spec:
  image:
    run:
      securityContext:
        readOnlyRootFilesystem: false <------ writes a ton of configs during startup
  podSecurityContext:
    fsGroup: 1001 <------ makes the mounted storage writable for the running user. 
```