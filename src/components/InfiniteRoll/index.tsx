import React from "react"
import style from './index.module.scss'

const InfiniteRoll = () => {

    return <>
        <div className={style.carousel}>
            <div className={style.group}>
                <div className={style.card}>A</div>
                <div className={style.card}>B</div>
                <div className={style.card}>C</div>
            </div>

            <div aria-hidden className={style.group}>
                <div className={style.card}>A</div>
                <div className={style.card}>B</div>
                <div className={style.card}>C</div>
            </div>
        </div>
    </>
}
export default InfiniteRoll