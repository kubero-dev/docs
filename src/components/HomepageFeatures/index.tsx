import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { FeatureItem, FeatureList } from './features';
import 'remixicon/fonts/remixicon.css'

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className="rounded-md drop-shadow-md transition duration-300 ease-in-out hover:scale-105 card">
      <div className="px-4">
        <i className={icon + " "+styles.icon}></i>
        <Heading as="h3">{title}</Heading>
      </div>
      <div className="px-4">
        <p>{description}</p>
      </div>
    </div>
  );
}


export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
