import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Next Due Date:',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
            Meme analysis essay #1
            <br />
            Presentations 1-6 
      </>
    ),
  },
  {
    title: 'About',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Whether referring to someone as the "salt of the earth" or placing black and white text over an image of a cat, Western society has long used "memes" as a cultural shorthand; a means of expressing emotions and wit in as few words or images as possible. Half historical analysis, half critical media theory, this course charts the evolution of how common stories, stories that form the backbone of our culture, are employed, deployed and remixed to become part of our common discourse. As its core, this class explores the memes, especially those online, that both enrich the communicative process while at the same time setting boundaries on what and how we think about the world around us.
      </>
    ),
  },
  {
    title: 'For Next Class:',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Baudrillard – Simulacra and Simulation
        <br/>
        Carney – The Precession of Simulacra 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
