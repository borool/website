import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Commercial works',
    Svg: require('@site/static/img/imac-svgrepo-com.svg').default,
    link: '/docs/my-work/commercial',
    description: (
      <>
        Articles I wrote for my job.
      </>
    ),
  },
  {
    title: 'Freelance works',
    Svg: require('@site/static/img/file-3-svgrepo-com.svg').default,
    link: '/docs/my-work/freelance',
    description: (
      <>
        Articles I wrote as a freelancer.
      </>
    ),
  },
  {
    title: 'Articles',
    Svg: require('@site/static/img/heart-svgrepo-com.svg').default,
    link: '/docs/articles/README',
    description: (
      <>
        Articles I wrote for personal use.
      </>
    ),
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      {/* Wrap everything in a Link */}
      <Link to={link} className={styles.featureLink}>
        <div className="text--center">
          {Svg ? (
            <Svg className={styles.featureSvg} role="img" />
          ) : (
            <div className={styles.placeholder} /> // Fallback if Svg is missing
          )}
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
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
