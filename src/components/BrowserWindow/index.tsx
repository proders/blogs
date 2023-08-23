import React from 'react';
import style from './styles.module.css'

export default function BrowserWindow(props) {
    const url = props.url || 'https://spacexcode.com'
    const bodyPad = props.bodyPad || '1rem'
    const bodyBg = props.bodyBg || 'transparent'
    return (
        <div  className={style.browserWindow}>
            <div   className={style.header}>
                <div  className={style.button}>
                    <span style={{ background: 'rgb(242, 95, 88)'}}></span>
                    <span style={{ background: 'rgb(251, 190, 60)'}}></span>
                    <span style={{ background: 'rgb(88, 203, 66)'}}></span>
                </div>
                <div className={style.address}>{url}</div>
                <div className={style.menu}>
                    <div>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <div className={style.body} style={{ padding: bodyPad, backgroundColor: bodyBg }}>
                {props.children}
            </div>
        </div>
    );
}