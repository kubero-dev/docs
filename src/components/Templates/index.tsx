import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { Template, TemplatesList } from './templates';
import 'remixicon/fonts/remixicon.css'

function TemplateCardY({name, icon, description}: Template) {
  return (
    <div className="rounded-md drop-shadow-md transition duration-300 ease-in-out hover:scale-105 card">
      <div className="px-4">
        <i className={icon + " "+styles.icon}></i>
        <Heading as="h3">{name}</Heading>
      </div>
      <div className="px-4">
        <p>{description}</p>
      </div>
    </div>
  );
}

function TemplateCard({name, icon, description, website}: Template) {
  return (
    <div className="rounded-lg shadow-md bg-neutral-100 dark:bg-neutral-700 text-left">

      <div className="w-20 my-5 mx-auto">
        <img className="rounded-md" src={icon} alt={'App Icon '+ name} />
      </div>

      <div className="px-6 pb-6">

        <h3 className="mb-2 text-xl font-bold tracking-wide text-neutral-800 dark:text-neutral-50">
          <a href={website} target='_blank'>{name}</a>
        </h3>

        <p className="mb-2 text-base text-neutral-500 dark:text-neutral-300">
          {description}
        </p>

      </div>

    </div>
  );
}

function TemplateCardP({name, icon, description}: Template) {
  return (
    <div className="relative mt-20">
      <div className="absolute mb-4 text-center transform translate-x-1/2 -top-10 right-1/2">
          <a href="#" className="relative block">
              <img alt="profil" src={icon} className="mx-auto object-cover rounded-lg h-20 w-20  border-2 border-white dark:border-gray-800"/>
          </a>
      </div>
      <div className="px-8 py-4 pt-14 bg-gray-200 rounded-lg shadow dark:bg-gray-800">
          <div>
              <p className="text-center text-2xl text-gray-800 dark:text-white">
                  {name}
              </p>
              <p className="font-light text-gray-500 text-md w-60 dark:text-gray-400">
                  Your friendliest open source all-in-one automation tool ✨ Workflow automation tool 100+ integration / Enterprise automation tool / Zapier Alternative
              </p>
              <p className="text font-light text-gray-500 dark:text-gray-200">
                <span className="px-2 py-1  text-base rounded text-white  bg-gray-400 font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 1792 1792">
                        <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                        </path>
                    </svg> 12348
                </span>
              </p>
          </div>
      </div>
  </div>
  );
}


function TemplateCardX({name, icon, description}: Template) {
  return (
    <div className="w-full p-4 bg-gray-100 rounded-lg shadow-md dark:bg-gray-800 sm:inline-block">
        <div className="flex items-start text-left">
            <div className="flex-shrink-0">
                <div className="relative inline-block">
                    <a href="#" className="relative block">
                        <img alt="profil" src={icon} className="mx-auto object-cover rounded-lg h-16 w-16 "/>
                    </a>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="absolute bottom-0 right-0 w-6 h-6 p-1 -mx-1 -my-1 text-white bg-green-600 rounded-full fill-current">
                        <path d="M19 11a7.5 7.5 0 0 1-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 0 1 1 11V3c3.38 0 6.5-1.12 9-3 2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04-1.03-3.41 2.84-2.15-3.56-.08L10 5.12 8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z">
                        </path>
                    </svg>
                </div>
            </div>
            <div className="ml-6">
                <p className="flex items-baseline mb-0">
                    <h3 className="font-bold text-gray-600 dark:text-gray-200">
                      {name}
                    </h3>
                </p>
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 1792 1792">
                        <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                        </path>
                    </svg>10342
                </div>
                <div className="mt-3">
                    <p className="max-w-xs mt-1 dark:text-white">
                      Your friendliest open source all-in-one automation tool ✨ Workflow automation tool 100+ integration / Enterprise automation tool / Zapier Alternative
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}

function TemplateCardL({name, icon, description}: Template) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
        <div className="relative w-16 mx-auto mb-3 -mt-10">
            <img className="-mt-1 rounded-md" src={icon} alt="cookie"/>
        </div>
        <h3 className="font-bold text-gray-600 dark:text-gray-200">{name}</h3>
        <span className="block w-full mb-3 leading-normal text-gray-800 ">
          {description}
        </span>
        <div className="flex items-center justify-between">
            <div className="w-1/2">
              asdf
            </div>
            <div className="w-1/2">
              asdf
            </div>
        </div>
    </div>
  );
}

export default function TemplatesGrid(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {TemplatesList.map((props, idx) => (
            <TemplateCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
