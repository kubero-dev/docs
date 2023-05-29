# Local development

## Clone the repository
```bash
git clone git@github.com:kubero-dev/kubero.git
copy .env.template .env
```

## export your kubernetes config 
```bash
kind get kubeconfig --name kubero-001 > ./kubeconfig
```
Make sure the context in your kubeconfig the same as in the .env file KUBERO_CONTEXT

## Start the UI Backend
```bash
yarn dev
```

## Build the Client UI
```bash
cd client
yarn dev
```
