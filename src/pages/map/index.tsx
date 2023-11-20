import React from "react";
import {useEffect} from "react";
import Layout from "@theme/Layout";


const Map = () => {

    const baseUrl = "https://webapi.amap.com/maps?v=2.0&key=a7d73805ca421c6d2ab04fb4327e4f77"
    const initMap =()=>{
        return new Promise((resolve,reject)=>{
            const head= document.getElementsByTagName('head')[0];
            const script= document.createElement('script');
            script.type= 'text/javascript';
            script.src= baseUrl
            head.appendChild(script);
            resolve(true)
        })
    }

    useEffect(() => {
        initMap().then(()=>{
            // @ts-ignore
            const  map = new window.AMap.Map(document.getElementById("container"), {
                zoom: 13,
                center: [116.39, 39.92],
                resizeEnable: true
            });
        })
    }, []);

    return(
        <Layout>
            <div id="container">
            </div>
        </Layout>
    )
}
export default Map