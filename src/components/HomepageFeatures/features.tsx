export type FeatureItem = {
  title: string;
  description: JSX.Element;
  icon: string;
  link: string;
};

export const FeatureList: FeatureItem[] = [
    {
      icon: 'ri-open-source-line',
      title: 'Open-Source',
      link: '/docs/Usermanual/features#open-source',
      description: (
        <>
          All components are open-source and self-hosted. 
          No hidden services or paid extra content to unlock!
        </>
      ),
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Autoscale',
      link: '/docs/Usermanual/features#autoscale',
      description: (
        <>
          Automatically scales applications horizontally to meet varying demands.
        </>
      ),
    },
    {
      icon: 'ri-apps-2-ai-line',
      title: 'High Availability',
      link: '/docs/Usermanual/features#high-availability',
      description: (
        <>
          Ensures applications and add-ons are deployed in a highly available manner, minimizing downtime during deployments and maintenance.
        </>
      ),
    },
    {
      icon: 'ri-paint-brush-line',
      title: '160+ Templates',
      link: '/docs/Usermanual/features#templates',
      description: (
        <>
          Use templates for one-click-deplyoments of well known tools like Wordpress or Kuma.
        </>
      ),
    },
    {
      icon: 'ri-stack-line',
      title: 'Add-ons',
      link: '/docs/Usermanual/features#addons',
      description: (
        <>
          Simple installation for addons like MySQL, Redis-Cluster, PostgreSQL, Kafka, CouchDB, Elasticsearch, MongoDB and more
        </>
      ),
    },
    {
      icon: 'ri-heart-pulse-line',
      title: 'Metrics and Monitoring',
      link: '/docs/Usermanual/features#metrics-and-monitoring',
      description: (
        <>
          Predefined application metrics and monitoring at a glance for the developer.
        </>
      ),
    },
    {
      icon: 'ri-time-line',
      title: 'Cronjobs',
      link: '/docs/Usermanual/features#cronjobs',
      description: (
        <>
          Allows scheduling of periodic tasks to run at fixed times, dates, or intervals.
        </>
      ),
    },
    {
      icon: 'ri-window-line',
      title: 'Web Console',
      link: '/docs/Usermanual/features#webconsole',
      description: (
        <>
          Enables direct access to pods and containers from the browser through an integrated web console. 
        </>
      ),
    },
    {
      icon: 'ri-git-branch-line',
      title: 'Push to Deploy',
      link: '/docs/Usermanual/features#push-to-deploy',
      description: (
        <>
          Integrates with Git repositories to build and deploy applications automatically upon code changes. (GitOps).
        </>
      ),
    },
    {
      icon: 'ri-hammer-line',
      title: 'Buildpacks',
      link: '/docs/Usermanual/features#buildpacks',
      description: (
        <>
          Use a Dockerfile, <b><a href="https://buildpacks.io/" target="_blank">buildpacks.io</a></b>, <b><a href="https://nixpacks.com/docs/getting-started" target="_blank">nixpacks</a></b> or runpacks to build your application without writing a Dockerfile
        </>
      ),
    },
    {
      icon: 'ri-git-pull-request-line',
      title: 'Pull Request Apps',
      link: '/docs/Usermanual/features#pull-requtst-apps',
      description: (
        <>
          Deploy a new app instance automaticly when a pull request is opened.
        </>
      ),
    },
    {
      icon: 'ri-bug-line',
      title: 'Vulnerability Scans',
      link: '/docs/Usermanual/features#vulnerability-scans',
      description: (
        <>
          Run scans with trivy to detect Vulnerabilities in your running images and repositories.
        </>
      ),
    },
    {
      icon: 'ri-lock-line',
      title: 'Basic Authentication',
      link: '/docs/Usermanual/features#basic-auth',
      description: (
        <>
          Protect your applications with basic authentication and manage users and passwords.
        </>
      ),
    },
    {
      icon: 'ri-shield-check-line',
      title: 'SSL Certs',
      link: '/docs/Usermanual/features#ssl-certificates',
      description: (
        <>
          Issue SSL certificates for your applications with cert-manager and Let's Encrypt.
        </>
      ),
    },
    {
      icon: 'ri-login-circle-line',
      title: 'Authentication',
      link: '/docs/Usermanual/features#oauth2-authentication',
      description: (
        <>
          Offers built-in authentication methods, including GitHub and OAuth2.
        </>
      ),
    },
    {
      icon: 'ri-zzz-line',
      title: 'Sleeping Containers',
      link: '/docs/Usermanual/features#sleeping-contianers',
      description: (
        <>
          Pods are turned off when not in use to save resources. When they are needed again, they can be started within milliseconds.
        </>
      ),
    },
    {
      icon: 'ri-terminal-box-line',
      title: 'CLI',
      link: '/docs/Usermanual/features#cli',
      description: (
        <>
          Use the CLI to create a Kubernetes cluster, to install Kubero and manage your applications and pipelines
        </>
      ),
    },
    {
      icon: 'ri-braces-line',
      title: 'API',
      link: '/docs/Usermanual/features#cli',
      description: (
        <>
          Use the API to extend your own applications with Kubero's features.
        </>
      ),
    },
    {
      icon: 'ri-code-box-line',
      title: 'IaC',
      link: '/docs/Usermanual/features#cli',
      description: (
        <>
          Deploy Kubero's Pipelines and Applications with your own CI/CD pipeline. (ArgoCD, Github Actions, ...)
        </>
      ),
    },
    {
      icon: 'ri-chat-1-line',
      title: 'Notifications',
      link: '/docs/Usermanual/features#notifications',
      description: (
        <>
          Configure customizable notifications for incidents on installed applications. 
        </>
      ),
    },
  ];