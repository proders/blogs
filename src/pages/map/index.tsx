import React from "react";
import Layout from "@theme/Layout";
import BaiDuMap from "@site/src/pages/map/BaiDuMap";
import styles from "@site/src/pages/map/BaiDuMap/index.module.scss";



export default function MapContainer() {
    return (
        <Layout>
            <BaiDuMap tilt={70}/>
        </Layout>
    );
}