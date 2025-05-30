import React, {useState} from 'react';
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
import PhotoFootprints from "@site/src/pages/photoFootprints";
import InfiniteRoll from "@site/src/components/InfiniteRoll";

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <div className={styles.heroBanner}>
            <div className={styles.leftSvg}>
                <img src={'img/svg/color-scheme-left.svg'} alt={'left'}/>
            </div>

            <div className="container">
                <h1 className="hero__title">{'辞暮'}</h1>
                <div className="hero__subtitle">
                    {/*{siteConfig.tagline}*/}
                    <TypingEffect text={siteConfig.tagline}/>
                </div>
                <div className={styles.buttons}>
                    <Link
                        style={{padding:0,border:0}}
                        className="button button--secondary button--lg"
                        to="/docs/life">
                        <BorderLight>
                            文档阅读 6min ⏱️
                        </BorderLight>
                    </Link>
                </div>
            </div>

            <div className={styles.rightSvg}>
                <img src={'img/svg/color-scheme-right.svg'} alt={'right'}/>
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
                {/*<BorderLight>没有想法啊</BorderLight>*/}
                <BrowserWindow>测试哈哈哈哈</BrowserWindow>
                <HighLight color='#25c2a0'>高亮当前文本</HighLight>
                <Confetti/>

                <PhotoFootprints />
                <InfiniteRoll />

                <br/>
            </main>
        </Layout>
    );
}
