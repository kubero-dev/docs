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
          Scale horizontally and vertically to fit the size your application really needs.
        </>
      ),
    },
    {
      icon: 'ri-paint-brush-line',
      title: '140+ Templates',
      link: '/docs/Usermanual/features#templates',
      description: (
        <>
          Use templates for one-click-deplyoments of well known tools like Wordpress or Kuma.
        </>
      ),
    },
    {
      icon: 'ri-apps-2-ai-line',
      title: 'High Availability',
      link: '/docs/Usermanual/features#high-availability',
      description: (
        <>
          All apps and addons are deployed in a high available way to ensure no downtime when deploying or maintaining. 
        </>
      ),
    },
    {
      icon: 'ri-stack-line',
      title: 'Addons',
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
          Predefined metrics and monitoring at a glance for the developer.
        </>
      ),
    },
    {
      icon: 'ri-time-line',
      title: 'Cronjobs',
      link: '/docs/Usermanual/features#cronjobs',
      description: (
        <>
          Schedule periodically running jobs to run at fixed times, dates, or intervals
        </>
      ),
    },
    {
      icon: 'ri-window-line',
      title: 'Webconsole',
      link: '/docs/Usermanual/features#webconsole',
      description: (
        <>
          Access your pods and containers directly from the brower with the integrated webconsole
        </>
      ),
    },
    {
      icon: 'ri-git-branch-line',
      title: 'Push to deploy',
      link: '/docs/Usermanual/features#gitops',
      description: (
        <>
          Connect your Pipeline with your Git repository to build and deploy your application (GitoOps)
        </>
      ),
    },
    {
      icon: 'ri-hammer-line',
      title: 'Buildpacks',
      link: '/docs/Usermanual/features#buildpacks',
      description: (
        <>
          Use buildpacks.io, nixpacks or runpacks to build your application without writing a Dockerfile
        </>
      ),
    },
    {
      icon: 'ri-git-pull-request-line',
      title: 'Pull request Apps',
      link: '/docs/Usermanual/features#pull-requtst-apps',
      description: (
        <>
          Deploy a new app instance automaticly when a pull request is opened.
        </>
      ),
    },
    {
      icon: 'ri-bug-line',
      title: 'Vulnerability scans',
      link: '/docs/Usermanual/features#vulnerability-scans',
      description: (
        <>
          Run scans with trivy to detect Vulnerabilities in your images and repositories
        </>
      ),
    },
    {
      icon: 'ri-lock-line',
      title: 'Oauth2 support',
      link: '/docs/Usermanual/features#oauth2-authentication',
      description: (
        <>
          Choose from built-in, github or Oauth2 authentication method.
        </>
      ),
    },
    {
      icon: 'ri-zzz-line',
      title: 'Sleeping container',
      link: '/docs/Usermanual/features#sleeping-contianers',
      description: (
        <>
          Pods are turned off when not in use to save resources. When they are needed again, they can be started within milliseconds
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
      icon: 'ri-chat-1-line',
      title: 'Notifications',
      link: '/docs/Usermanual/features#notifications',
      description: (
        <>
          Customizable notification of incidents on the installed apps.
        </>
      ),
    },
  ];