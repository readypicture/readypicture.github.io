import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
    {
        title: '밥뭐먹지?',
        description: (
            <>
                밥 뭐먹지는 주변의 음식점들을 랜덤하게 추천해주는 서비스입니다.
            </>
        ),
    },
];

function Feature({ title, description }) {
    return (
        <div className={clsx('col col--12')}>
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
