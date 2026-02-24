import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Commercial works',
    Svg: require('../../../static/img/tie-fashion-necktie-accessory-suit-elegance-clothes-svgrepo-com.svg').default,
    description: (
      <>
        <a href='../../docs/my-work/commercial'>Articles</a> I wrote while working for specific companies.
      </>
    ),
  },
  {
    title: 'Freelance works',
    description: (
      <>
        <a href='../../docs/my-work/freelance'>Articles</a> I wrote as a freelancer.
      </>
    ),
  },
  {
    title: 'Articles',
    description: (
      <>
        <a href='../../docs/my-work/freelance'>Articles</a> I wrote for personal use and to show my writing style.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
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
