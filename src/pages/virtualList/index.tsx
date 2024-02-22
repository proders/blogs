import React, {useEffect, useState} from 'react';
import virtualListStyle from './index.module.scss'

const VirtualList = () => {
    const ContainersHeight = 600;
    const virtualItemHeight = 100;
    const [currentIndex,setCurrentIndex] = useState(0)
    // 数据源
    const dataSource = ()=>{
        let result =[]
        for (let i=0;i<=100;i++){
            result.push(i)
        }
        return result
    }
    const renderList = ()=>{
    const number =  ContainersHeight/virtualItemHeight + 1;
        let result =[]
        for (let i=currentIndex+1;i<=number;i++){
            result.push(i)
        }
       return result
    }
    const virtualListScroll = () => {

      // setCurrentIndex(currentIndex+1)
    }

    useEffect(()=>{
      const virtualListDom:any = document.getElementById('virtualList')
        if(virtualListDom){
            virtualListDom.innerHTML = renderList().map((i:number)=>`<div class="virtualList_item_src-pages-virtualList-index-module">${i}</div>`).join("")
        }
        // virtualListDom.height = height;
        // virtualListDom.transform = transform;
    },[currentIndex])

    return <div className={virtualListStyle.virtualListContainers}>
        <div className={virtualListStyle.virtualContainer} onScroll={virtualListScroll}>
            <div className={virtualListStyle.virtualList} id={'virtualList'} >
            {/*     <div className={virtualListStyle.virtualList_item}>

             </div>*/}
            </div>
        </div>
    </div>

}
export default VirtualList
