---
id: goals-and-concepts
---


# Goals and Concept
Kubero provides a simple way to deploy 12-factor apps to kubernetes without the need for writing Kubernetes manifests or Dockerfiles. It is designed to simplify the deployment process for developers, so they can focus on building their applications, without worrying about the underlying infrastructure.

It implements the Heroku-like experience on top of Kubernetes.

In essence, Kubero is a Kubernetes Operator with a user-friendly UI. It requires only two containers:
 - The Kubero Operator
 - The Kubero UI

![alt text](../static/assets/img/kubero-concept.png)

To manage your application, Kubero provides multiple options, including the Kubero UI, the Kubero CLI, or the Kubectl. All data is stored and persisted in the Kubernetes API, which ensures data consistency and reliability.

## Streamlined CI/CD Process
Kubero's integrated CI/CD pipeline enables developers to deploy their applications quickly and easily. Kubero comes with an integrated CI/CD pipeline, which allows you to deploy your App with a simple push into a branch, or even start a new instance based on a Pull-Request.

The pipeline doesn't build a container image; instead, it pulls your code and runs the build scripts, which are mounted into your running container. This approach makes Kubero an incredibly fast solution compared to traditional methods that require building, pushing, and pulling container images from a registry.

That being said, Kubero can also deploy pre-built container images, giving you the flexibility to choose the approach that best suits your needs.

## Integrations/Runpacks

You can run everything that runs in a container. Kubero uses default images to build and run your app. But you can build your own builder if required. And create your custom deployment packs.

- GoLang (including Hugo, gin-gonic)
- Python (including Flask)
- JavaScript/NodeJS
- PHP (including Laravel)
- Ruby (including Rails)
- Static HTML
- Rust (including Rocket)
- ...


You find the preconfigured runpacks and examples here:
https://github.com/kubero-dev/runpacks

## Addons/Plugins
Addons are deployed with Kubernetes Operators which are configurable over the UI. Built-in Addons are shipped with the Kubero Operator. The other addons require a separate installation of the operator.

## Articles and Tutorials
 - [Kubero : alternative à Heroku pour Kubernetes](https://dev.to/deep75/kubero-alternative-a-heroku-pour-kubernetes--19am)
 - [Comparing selfhosted Heroku alternatives](https://dev.to/shoksuno/comparing-selfhosted-heroku-alternatives-249p)
 - [The simplest way to run your own Heroku on Kubernetes](https://dev.to/shoksuno/the-simplest-way-to-run-your-own-heroku-on-kubernetes-3l03)
 - [Replace Heroku with Kubero on Kubernetes (part 1)](https://dev.to/shoksuno/replace-heroku-with-kubero-on-kubernetes-2aoj)
 - [Kubero: A Powerful Heroku Alternative for Your Development Needs](https://medevel.com/kubero/)