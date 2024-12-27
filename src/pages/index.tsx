import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import ScreenshotsGallery from '@site/src/components/ScreenshotsGallery';
import CopyButton from '@site/src/components/CopyButton';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            href="https://demo.kubero.dev">
            Demo
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
      title={`Kuber is a ${siteConfig.title}`}
      description="Kubero is a platform as a service (PaaS) that enables developers to build, run, and operate applications on Kubernetes.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <ScreenshotsGallery />
      </main>
    </Layout>
  );
}
