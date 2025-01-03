---
title: Features
description: A list of features of Kubero
---
# Features

## Open Source
Kubero’s open-source nature provides transparency, cost-effectiveness, and flexibility. Users can access and modify the source code, tailoring it to specific needs while maintaining full control over deployments and data. With **no licensing fees**, it’s accessible to individuals and organizations alike, supported by a vibrant community that contributes features, fixes, and improvements.

The collaborative model fosters innovation and security, as the code is continuously audited and improved. Open-source ensures sustainability, allowing the community to maintain and evolve the platform over time. Kubero’s transparency, adaptability, and community-driven approach make it a reliable and ethical choice for application deployment.

## Buildpacks
Kubero supports buildpacks, a cloud-native application packaging format that automates the build and deployment process. Buildpacks are a standardized way to package applications, providing a consistent and efficient workflow for developers. They automatically detect, compile, and configure applications, simplifying the deployment process and reducing errors.

Kubero’s buildpack support streamlines the development lifecycle, enabling developers to focus on writing code rather than managing dependencies and configurations. By automating the build process, buildpacks enhance productivity, reduce complexity, and ensure consistency across environments. Kubero’s buildpack integration accelerates application development, making it easier to create, deploy, and scale applications.

## Pull Request Apps
Kubero’s pull request apps feature enables developers to create temporary environments for testing code changes. Pull request apps are automatically deployed when a pull request is opened, providing a dedicated environment for reviewing and testing changes. This feature streamlines the code review process, allowing developers to validate changes in a real-world environment before merging them.

Pull request apps are isolated from the main application, ensuring that changes do not impact the production environment. Developers can test new features, fixes, and updates without affecting existing users, reducing the risk of errors and downtime. Kubero’s pull request apps feature enhances collaboration, accelerates development, and improves code quality by enabling rapid feedback and validation.

## Addons
Kubero’s addons feature extends the platform’s functionality by providing additional services and resources. Addons are pre-configured components that enhance applications with features such as databases and caches. They simplify the integration of essential services, enabling developers to focus on building applications rather than managing infrastructure.

Addons are deployed highly available and scalable, ensuring that applications can handle increased traffic and demand. Kubero’s addons feature simplifies the deployment and management of essential services, enabling developers to build robust and reliable applications.

## Cronjobs
The cronjobs feature automates recurring tasks by scheduling jobs to run at specified intervals. Cronjobs are used for tasks such as backups, data processing, and maintenance, ensuring that critical operations are performed regularly and reliably. This feature simplifies the management of repetitive tasks, reducing manual effort and minimizing errors.

## Autoscale
The autoscale feature in Kubero provides significant benefits by dynamically adjusting application resources to match demand. This ensures optimal performance and cost efficiency.

When traffic to an application increases, autoscale automatically adds more instances or allocates additional resources, preventing slowdowns or downtime due to insufficient capacity. Conversely, during periods of low activity, it scales down resources, reducing unnecessary usage and lowering costs.

This adaptability eliminates the need for manual intervention, saving time and effort for developers and operations teams. It also ensures applications remain responsive and reliable under fluctuating workloads, providing a seamless user experience. With autoscale, Kubero helps users maintain efficiency and performance, even in unpredictable conditions.

## CLI
Having a Command-Line Interface (CLI) in Kubero is incredibly empowering and convenient for users. The CLI provides a streamlined way to interact with the platform, offering speed and precision that graphical interfaces often can't match.

With Kubero's CLI, users can perform a wide range of tasks, such as creating Kubernetes clusters, installing Kubero, managing applications, and deploying updates—all through simple commands. This efficiency is particularly valuable for developers and system administrators who prefer scripting and automation, as they can integrate these commands into workflows or CI/CD pipelines for seamless operations.

The CLI also supports remote management, enabling users to control their deployments from anywhere with terminal access. Its intuitive design ensures that even complex tasks can be executed quickly, reducing the learning curve and empowering users to focus on their applications instead of operational overhead.

In essence, the CLI in Kubero enhances productivity, supports automation, and offers developers the flexibility and control they need to manage their Kubernetes deployments effectively.

## GitOps
GitOps in Kubero streamlines application deployment by using Git repositories as the single source of truth. When changes are pushed, Kubero automatically updates the Kubernetes environment, ensuring consistency and reducing manual errors.

This approach enhances collaboration, tracks changes for auditing, and ensures environments stay in sync with the repository. With its self-healing capability, GitOps boosts reliability and simplifies modern DevOps workflows.

## Vulnerability Scans
Kubero's vulnerability scans enhance security by automatically detecting weaknesses in application images and repositories. Using tools like Trivy, it identifies outdated dependencies, misconfigurations, and known vulnerabilities.

This proactive approach allows developers to address issues early in the pipeline, reducing the risk of exploits in production. Integrated scanning ensures that only secure, compliant images are deployed, providing peace of mind and aligning with best practices for software security.

By integrating vulnerability scans directly into the development workflow, Kubero helps maintain robust, secure applications with minimal effort.

## Templates
Using one of Kubero’s templates offers significant benefits by simplifying and accelerating the deployment process. Templates provide pre-configured setups for popular applications and tools, like WordPress, MongoDB, or Redis, saving users from having to manually configure each service from scratch. This is especially useful for users who want to deploy complex applications quickly, as the template ensures everything is set up correctly from the start.

## Oauth2 Authentication
Kubero supports OAuth2 authentication, a secure and standardized protocol for user authentication and authorization. OAuth2 enables users to log in using their existing credentials from providers like Google, GitHub, or Microsoft, enhancing security and convenience.

## High Availability
Kubero ensures high availability by distributing workloads across multiple nodes, preventing single points of failure. This redundancy ensures that applications remain accessible even if individual nodes or components fail, maintaining uptime and reliability.

## Sleeping contianers
The "sleeping containers" feature in Kubero offers several key benefits. It helps optimize resource usage by turning off containers when they are not in use, such as during periods of low traffic or inactivity. This reduces unnecessary resource consumption, lowering infrastructure costs.

When the container is needed again, Kubero can quickly restart it, often within milliseconds, ensuring minimal disruption. This ability to pause and resume containers efficiently ensures that resources are only used when necessary, without sacrificing performance or availability.

Overall, "sleeping containers" help improve cost efficiency, reduce resource waste, and maintain a responsive system.

## Webconsole
Kubero's web console is a browser-based interface that simplifies managing applications and Kubernetes clusters. It allows users to directly access a pod and perform administrative tasks without using the kubectl.

## Notifications
Kubero's notification feature keeps users informed about the status of their applications by sending alerts for incidents, errors, or significant events. This ensures that developers are promptly notified of issues, such as deployment failures, performance degradation, or service outages.

## Metrics and Monitoring
Kubero provides metrics and monitoring capabilities to help users track the performance and health of their applications. By collecting data on resource usage, response times, and other key metrics, users can gain insights into application behavior and identify potential issues.