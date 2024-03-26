import React from "react"
import styles from './styles.module.scss'
import {PhotoProvider, PhotoView} from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

interface BaseImgListProps {
    imgList: []
}

const BaseImgList = (props: BaseImgListProps) => {
    return <>
        <div className={styles.imgMain}>
            <PhotoProvider>
                {
                    props.imgList.map((img: string) =>
                        <PhotoView src={img}>
                            <img className={styles.image} src={img} alt={'标'}/>
                        </PhotoView>)
                }
            </PhotoProvider>
        </div>
    </>
}
export default BaseImgList