import React, {useState, useEffect, useRef} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
// @ts-ignore
import banner1 from "@site/static/img/banner/img_4.jpg";
// @ts-ignore
import banner2 from "@site/static/img/banner/img_1.jpg";
// @ts-ignore
import banner3 from "@site/static/img/banner/img_3.jpg";

import styles from './index.module.scss'
const BaiDuMap = (props: any) => {
    const [MapComponent, setMapComponent] = useState(null);
    const mapRef = useRef(null);

    const markers = [
        { id:'1', position:[106.520250,29.585500], title:'这是第一个mark',content:'内容3',img:banner1},
        {id:'2', position:[106.494059,29.59269], title:'这是第二个mark',content:'内容-12',img:banner2},
        { id:'3' ,position:[106.552396,29.613392], title:'这是第三个mark',content:'内-------容',img: banner3},
        // 其他标记点
    ];
    const getInfoWindow = (marker: any) => {
        const opts = {
            width: 310,     // 信息窗口宽度
            height: 210,    // 信息窗口高度
            title: marker.title  // 信息窗口标题
        }
        const map = mapRef.current?.map
        const content =`<div style="position: relative;cursor: pointer">
                                           <img src=${marker.img} alt=${marker.title} height="200px" width="300px" />
                                           <div style="width: 100%;position: absolute;background: rgba(0,0,0,0.5);bottom: 0;
                                           left: 0;display: inline-block;text-indent: 1rem;color: #ffffff;line-height: 34px;height: 34px;
                                           font-size: 12px;text-align: center;
                                           ">${marker.title}</div>
                                         </div>`;
        // @ts-ignore
        const infoWindow = new BMapGL.InfoWindow(content, opts);  // 创建信息窗口对象
        // @ts-ignore
        map.openInfoWindow(infoWindow, new BMapGL.Point(marker.position[0],marker.position[1]));        // 打开信息窗口
    }
    useEffect(() => {
        // 动态导入地图相关组件
        import("react-bmapgl").then((mapList: any) => {
            const {Map, MapApiLoaderHOC, Marker} = mapList
            // 定义一个临时组件并应用高阶组件
            const TempComponent = (props) => {
                return (
                    <>
                        <Map
                            className={styles.contentContent}
                            ref={mapRef}
                            // @ts-ignore
                            center={new BMapGL.Point(106.513538,  29.583036 )}
                            enableScrollWheelZoom={true}
                            zoom={12}
                            style={{height: 450}}
                            displayOptions={{
                                skyColors: ['rgba(186, 0, 255, 0)', 'rgba(186, 0, 255, 0.2)'] //天空颜色
                            }}
                            {...props}
                        >
                            {
                                markers.map((marker, index) => (
                                    <Marker
                                        key={index}
                                        // @ts-ignore
                                        position={new BMapGL.Point(marker.position[0],marker.position[1])}
                                        icon={''}
                                        map={''}
                                        onClick={() => getInfoWindow(marker)}
                                    />
                                ))}
                        </Map>
                    </>
                )
            }
            const MapWithAPI = MapApiLoaderHOC({ak: '5hvFnIXmHKgIOCF7F4rRNVNfFDyllgvR'})(TempComponent);
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