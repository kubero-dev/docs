# Installation on colima

Runs on macOS only with [colima](https://github.com/abiosoft/colima)

### 1. Install colima

```bash
brew install colima
```

### 2. Start colima with kubernetes

```bash
colima start --with-kubernetes
```

### 3. Install Kubero 

Select "n" on step 1) to skip the installation of the kubernetes cluster

```bash
kubero install
```