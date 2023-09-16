import React from 'react';
// @ts-ignore
import  styles from './styles.module.scss'
export default function (props) {
    return (
        <div className={styles.outer}>
            <div  className={styles.gradient}></div>
            <div  className={styles.content}>
                {props.children}
            </div>
        </div>
    )
}