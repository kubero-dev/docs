import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import ScreenshotsGallery from '@site/src/components/ScreenshotsGallery';
import CopyButton from '@site/src/components/CopyButton';

import styles from './index.module.css';
import { JSX } from 'react';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const title = "Heroku alternative for Kubernetes";
  // const title = "Open-source Solution for Kubernetes Deployments";
  // const title = "PaaS for Kubernetes";
  
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/*
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        */}

        <div className="flex items-center justify-center">
          <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl opacity-50 text-white bg-clip-text text-6xl box-content font-extrabold text-transparent text-center select-none">
              {title}
          </span>
          <h1 className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center text-white bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
              {title}
          </h1>
        </div>
        <h2 className="hero__subtitle text-white font-light">{siteConfig.tagline}</h2>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg mx-2 border-0"
            href="https://demo.kubero.dev">
            Demo
          </Link>
          <Link
            className="button button--secondary button--lg mx-2 bg-slate-400 border-0"
            href="https://github.com/kubero-dev/kubero">
            Github
          </Link>
        </div>
        <div className={styles.buttons}>
          <CopyButton />
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      //title={`Kubero is a ${siteConfig.title}`}
      title="Open-source Solution for Kubernetes Deployments"
      description="Kubero is a platform as a service (PaaS) that enables developers to build, run, and operate applications on Kubernetes.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <ScreenshotsGallery />
      </main>
    </Layout>
  );
}
