import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
    {
        title: '밀픽',
        description: (
            <>밀픽은 주변의 음식점들을 랜덤하게 추천해주는 서비스입니다.</>
        ),
    },
];

function Feature({ title, description }) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center padding-horiz--md">
                <a href="https://play.google.com/store/apps/details?id=com.readypicture.mealpick">
                    <h3>{title}</h3>
                    <img src="img/mealpick_logo.png" />
                </a>
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
