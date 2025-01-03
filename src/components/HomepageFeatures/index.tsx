import styles from './styles.module.css';
import { FeatureItem, FeatureList } from './features';
import 'remixicon/fonts/remixicon.css'

function Feature({title, icon, description, link}: FeatureItem) {
  return (
    <a href={link} className='hover:no-underline'>
      <div className="rounded-md drop-shadow-md transition duration-300 ease-in-out hover:scale-105 card md:min-h-56">
        <div className="flex px-4">
          <i className={icon + " text-indigo-900 dark:text-indigo-500 "+styles.icon}></i>
          <h3 className="mt-3 ml-3 text-indigo-900 dark:text-indigo-500 ">{title}</h3>
        </div>
        <div className="px-4">
          <p>{description}</p>
        </div>
      </div>
    </a>
  );
}


export default function HomepageFeatures(): JSX.Element {
  return (
    <section>
      <h3 className="text-center text-2xl font-bold tracking-wide text-neutral-800 dark:text-neutral-400 mt-8">
        Features
      </h3>
      <p className="text-center text-base text-neutral-500 dark:text-neutral-500">
        Kubero is the most complete PaaS solution with a wide range of Enterprise-grade features. 
      </p>
      <div className={styles.features}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
