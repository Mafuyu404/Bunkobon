import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '少女与高塔~晨曦的公主与暮色森林',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    cover: "img/maiden_and_tower.webp",
    description: (
      <>
        和平时代的末期，各路奇才大放异彩，天赋平平却性格别扭的魔法世家二小姐维尔缇娜，为了实现愿望而踏上旅途，并由此拉开黄昏时代的帷幕。
        <br />
        旧势力的末路，新血液的喷薄，永夜的魔法森林终将迎来晨曦。
      </>
    ),
  },
];

function Feature({cover, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
        <img src={cover} />
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
