import React, {useEffect, useRef, useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
// @ts-ignore
import banner1 from "@site/static/img/banner/img_4.jpg";
// @ts-ignore
import banner2 from "@site/static/img/banner/img_1.jpg";
// @ts-ignore
import banner3 from "@site/static/img/banner/img_3.jpg";
// @ts-ignore
import redMapIcon from "@site/static/img/redFlagMap/icon-2.png";
import styles from './index.module.scss'
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";



const BaiDuMap = (props: any) => {
    const [MapComponent, setMapComponent] = useState(null);
    const mapRef = useRef(null);
    const {siteConfig} = useDocusaurusContext();
    const {customFields} = siteConfig;
    const markers = [
        { id:'1', position:[106.520250,29.585500], title:'这是第一个mark',content:'内容3',img:banner1},
        {id:'2', position:[106.494059,29.59269], title:'这是第二个mark',content:'内容-12',img:banner2},
        { id:'3' ,position:[106.552396,29.613392], title:'这是第三个mark',content:'内-------容',img: banner3},
        // 其他标记点
    ];
    const getInfoWindow = (marker: any) => {
        const opts = {
            width: 340,     // 信息窗口宽度
            height: 210,    // 信息窗口高度
            title: marker.title  // 信息窗口标题
        }
        const map = mapRef.current?.map
        const content =`<div style="position: relative;cursor: pointer">
                                           <img src=${marker.img} alt=${marker.title} height="200px" width="300px" />
                               </div>`;
      /*  <div style="width: 100%;position: absolute;background: rgba(0,0,0,0.5);bottom: 0;
                                           left: 0;display: inline-block;text-indent: 1rem;color: #ffffff;line-height: 34px;height: 34px;
                                           font-size: 12px;text-align: center;
                                           ">${marker.title}</div>*/
        const infoWindow = new BMapGL.InfoWindow(content, opts);  // 创建信息窗口对象
        map.openInfoWindow(infoWindow, new BMapGL.Point(marker.position[0],marker.position[1]));        // 打开信息窗口
    }
    const getMarkIcon = () => {
        return new BMapGL.Icon(redMapIcon, new BMapGL.Size(40, 40))
    }
    const changeMapType = (styleId:string) => {
        const map = mapRef.current?.map
         // 地图类型常量
        //BMAP_NORMAL_MAP BMAP_EARTH_MAP BMAP_SATELLITE_MAP
 /*       if(window){
            // @ts-ignore
            map.setMapType(BMAP_EARTH_MAP);
        }*/
        // 眼眸-样式 id f42b5e908ca8f238e6fdf2faf6779899 #54A6A5
        // 茶田-样式 id 15ad7c1ac87c46576b6ad9e7ff3a3286 #E9F0E2
        map.setMapStyleV2({
            styleId: styleId
        });
    }
    useEffect(() => {
        // 动态导入地图相关组件
        import("react-bmapgl").then((mapList: any) => {
            const {Map, MapApiLoaderHOC, Marker} = mapList
            // 定义一个临时组件并应用高阶组件
            const TempComponent = (props) => {
                return (
                    <>
                        <div className={styles.drawingPanel}>
                            <input onClick={()=>changeMapType('')} type="button" className={styles.drawBtn}  value="原始主题"/>
                            <input onClick={()=>changeMapType('f42b5e908ca8f238e6fdf2faf6779899')} type="button" className={styles.drawBtn} value="眼眸主题" />
                            <input onClick={()=>changeMapType('15ad7c1ac87c46576b6ad9e7ff3a3286')} type="button" className={styles.drawBtn} value="茶田主题" />
                        </div>
                        <Map
                            className={styles.contentContent}
                            ref={mapRef}
                            center={new BMapGL.Point(106.513538,  29.583036 )}
                            enableScrollWheelZoom={true}
                            zoom={15}
                            style={{height:'57rem'}}
                            displayOptions={{
                                skyColors: ['rgba(186, 0, 255, 0)', 'rgba(186, 0, 255, 0.2)'] //天空颜色
                            }}
                            {...props}
                        >
                            {
                                markers.map((marker, index) => (
                                    <Marker
                                        key={index}
                                        position={new BMapGL.Point(marker.position[0],marker.position[1])}
                                        icon={getMarkIcon()}
                                        map={''}
                                        onClick={() => getInfoWindow(marker)}
                                    />
                                ))}
                        </Map>
                    </>
                )
            }
            const MapWithAPI = MapApiLoaderHOC({ak: customFields.BaiDuMapKey})(TempComponent);
            setMapComponent(() => MapWithAPI);  // 将函数而不是组件实例设置为状态
        });
    }, []);

    return (
        <BrowserOnly fallback={<div>Loading map...</div>}>
            {() => MapComponent ? <MapComponent {...props} /> : <div>Loading map...</div>}
        </BrowserOnly>
    );
};

export default BaiDuMap;