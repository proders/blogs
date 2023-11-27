import React, { useState, useEffect } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import {CityListControl,  MapTypeControl , NavigationControl, ZoomControl} from "react-bmapgl";

const BaiDuMap = (props: any) => {
    const [MapComponent, setMapComponent] = useState(null);

    useEffect(() => {
        // 动态导入地图相关组件
        import("react-bmapgl").then(({ Map, MapApiLoaderHOC }) => {
            // 定义一个临时组件并应用高阶组件
            const TempComponent = (props) => (
                <Map
                    // @ts-ignore
                    center={new BMapGL.Point(116.404449, 39.914889)}
                    enableScrollWheelZoom={true}
                     zoom={12}
                     style={{ height: 450 }}
                     displayOptions={{
                         skyColors: ['rgba(186, 0, 255, 0)','rgba(186, 0, 255, 0.2)'] //天空颜色
                     }}
                     {...props}
                >
                   {/* <Marker
                        // @ts-ignore
                        position={new BMapGL.Point(116.404449, 39.914889)}
                        map={Map}
                        icon={''}
                        // onClick={()=>Map.openInfoWindow(infoWindow, point);}
                    />*/}
                    {/* 3D控件*/}
                    <NavigationControl map={Map}/>
                    {/* 城市选择控件*/}
                    <CityListControl  map={Map}/>
                    {/*地图类型控件*/}
                    <MapTypeControl  map={Map}/>
                    {/*缩放控件*/}
                    <ZoomControl  map={Map} />
                </Map>
            );
            const MapWithAPI = MapApiLoaderHOC({ ak: '5hvFnIXmHKgIOCF7F4rRNVNfFDyllgvR' })(TempComponent);
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