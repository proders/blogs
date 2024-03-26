import React from "react"
import styles from './styles.module.scss'

interface BaseImgListProps{
    imgList:[]
}
const BaseImgList = (props:BaseImgListProps) => {

    return <>
        <div className={styles.imgMain}>
            {
                props.imgList.map((img:string)=>{
                    return  <img className={styles.image} src={img} alt={'标'} />
                })
            }
        </div>
    </>
}
export default BaseImgList