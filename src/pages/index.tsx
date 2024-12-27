import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
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
        <div className="hero__script">
          <div>
            <button className="btn-run-script">curl -L https://get.kubero.dev | bash
              <span className="icon"><i className="ri-file-copy-line"></i></span>
            </button>
          </div>
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
      </main>
    </Layout>
  );
}


/*
        <div className="codeBlockContent_biex">
          <pre className="prism-code language-bash codeBlock_bY9V thin-scrollbar" stylex="color: rgb(57, 58, 52); background-color: rgb(246, 248, 250);">
            <code className="codeBlockLines_e6Vv">
              <span className="token-line" stylex="color: rgb(57, 58, 52);">
                <span className="token plain">curl -fsSL get.kubero.dev | bash</span>
                
              </span>
            </code>
          </pre>
          <div className="buttonGroup__atx">
            <button type="button" aria-label="Copy code to clipboard" title="Copy" className="clean-btn">
              <span className="copyButtonIcons_eSgA" aria-hidden="true">
                <svg viewBox="0 0 24 24" className="copyButtonIcon_y97N">
                  <path fill="currentColor" d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"></path>
                </svg>
                <svg viewBox="0 0 24 24" className="copyButtonSuccessIcon_LjdS">
                  <path fill="currentColor" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
*/