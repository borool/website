import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '',
    description: (
      <>
        This is my first Docusaurus site. Here I show examples of my <a href='../../docs/my-work/commercial'>commercial</a> and <a href='../../docs/my-work/freelance'>freelance</a> works.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--12')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
