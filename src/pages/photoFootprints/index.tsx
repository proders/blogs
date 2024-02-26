import React, {useState} from 'react';
import style from './index.module.scss'

interface dataSourceType {
  title: string,
  src: string,
  isShowTitle: boolean,
}
/*<div
    className={style.flexItem}
    style={{ height: `${card}px`}}
    key={index}
><img src={'img/banner/img_1.jpg'} height={'100%'} width={'100%'} alt={'img/banner/img_1.jpg'}/></div>*/
const PhotoFootprints = () => {
  const [dataSource,setDataSource] = useState<dataSourceType>()
  return <div className={style.main}>
    <div>

    </div>
  </div>
}
export default PhotoFootprints
