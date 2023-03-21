---
id: quickstart
slug: /
---

# Quickstart
1) Download and unpack the <a href="https://github.com/kubero-dev/kubero-cli/releases/latest">Kubero CLI</a>

2) Run the kubero install command and follow the instructions

```bash
kubero install
```

<img src="assets/img/quickstart_console.png" />

## Install/upgrade a single component

It is possible to install every component separately. with the "-c" flag. This is useful if you want to upgrade a single component.
```bash
kubero install -c kubero-operator
```

List of all available components:

- kubernetes
- olm
- ingress
- metrics
- certmanager
- kubero-operator
- kubero-ui
- all (default, runs all components in the best order)
