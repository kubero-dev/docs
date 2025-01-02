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
          No hidden services or paid extra content to unlock
        </>
      ),
    },
    {
      icon: 'ri-hammer-line',
      title: 'Buildpacks',
      link: '/docs/Usermanual/features#buildpacks',
      description: (
        <>
          A wide range of languages and frameworks are supported (PHP, Ruby, Golang, Rust, Nodejs, Deno)
        </>
      ),
    },
    {
      icon: 'ri-git-pull-request-line',
      title: 'Pull request Apps',
      link: '/docs/Usermanual/features#pull-requtst-apps',
      description: (
        <>
          Deploy an app instance automaticly when a pull request is opened. Or deploy your app with a push to the Master
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
      icon: 'ri-line-chart-line',
      title: 'Autoscale',
      link: '/docs/Usermanual/features#autoscale',
      description: (
        <>
          Scale horizontally and vertically to fit the size your application really needs
        </>
      ),
    },
    {
      icon: 'ri-terminal-box-line',
      title: 'CLI',
      link: '/docs/Usermanual/features#cli',
      description: (
        <>
          Use the CLI to create a Kubernetes cluster, to install Kubero and manage your applications
        </>
      ),
    },
    {
      icon: 'ri-git-branch-line',
      title: 'GitOps',
      link: '/docs/Usermanual/features#gitops',
      description: (
        <>
          Connect your Pipeline with one of the many supported Git repositories (Github, Bitbucket, Gitea, Gitlab, Gogs ... )
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
      icon: 'ri-paint-brush-line',
      title: '130+ Templates',
      link: '/docs/Usermanual/features#templates',
      description: (
        <>
          Use templates to quickly spin up well known tools like Wordpress or Kuma.
        </>
      ),
    },
    {
      icon: 'ri-lock-line',
      title: 'SSO Authentication',
      link: '/docs/Usermanual/features#oauth2-authentication',
      description: (
        <>
          Choose from built-in, github or Oauth2 authentication method.
        </>
      ),
    },
    {
      icon: 'ri-image-line',
      title: 'CI/CD',
      link: '/docs/Usermanual/features#cicd-pipelines',
      description: (
        <>
          Use the built-in CI/CD pipeline and registry to build your image from a Dockerfile or by Nixpacks.
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
      icon: 'ri-window-line',
      title: 'Webconsole',
      link: '/docs/Usermanual/features#webconsole',
      description: (
        <>
          A console that can be used via the browser to maintain and debug the applications.
        </>
      ),
    },
    {
      icon: 'ri-chat-1-line',
      title: 'Notifications',
      link: '',
      description: (
        <>
          Customizable notification of incidents on the installed apps.
        </>
      ),
    },
    {
      icon: 'ri-heart-pulse-line',
      title: 'Metrics and Monitoring',
      link: '',
      description: (
        <>
          Predefined metrics and monitoring at a glance for the developer.
        </>
      ),
    },
  ];