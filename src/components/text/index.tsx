/**
 *
 * from:https://juejin.cn/post/7245316146336563261
 */
import React from 'react';
// @ts-ignore
import style from './styles.module.scss'

export default function Text(props:any): JSX.Element {
  return (
      <div className={style.container}>
           <div className={style.text}>
               {props.children}
           </div>
      </div>
  );
}
