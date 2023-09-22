import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';
import BrowserWindow from "@site/src/components/BrowserWindow";
import BorderLight from "@site/src/components/BorderLight";
import HighLight from "@site/src/components/HighLight";
import Confetti from "@site/src/components/Confetti";
import TypingEffect from "@site/src/components/TypingEffect";
import ReactSlick from "@site/src/components/ReactSlick";
import Text from "@site/src/components/text";

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();

    return (
        <div className={styles.heroBanner}>
            <div className={styles.leftSvg}>
                <img src='img/svg/color-scheme-left.svg'/>
            </div>

            <div className="container">
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/life">
                        <BorderLight>
                            文档阅读 5min ⏱️
                        </BorderLight>
                    </Link>
                </div>
            </div>

            <div className={styles.rightSvg}>
                <img src='img/svg/color-scheme-right.svg'/>
            </div>
        </div>
        /*   <header className={clsx('hero hero--primary', styles.heroBanner)}>

           </header>
             */
    );
}

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <HomepageHeader/>
            <main>
                <HomepageFeatures/>
                <BorderLight>没有想法啊</BorderLight>
                <BrowserWindow>测试哈哈哈哈</BrowserWindow>
                <HighLight color='#25c2a0'>高亮当前文本</HighLight>
                <Confetti/>
                <TypingEffect/>
                {/*<ReactSlick />*/}
                {/*<Text>show Time333333333333 !</Text>*/}
            </main>
        </Layout>
    );
}
