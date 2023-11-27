import React from "react";
import Layout from "@theme/Layout";
import BaiDuMap from "@site/src/components/BaiDuMap";


export default function MapContainer() {
    return (
        <Layout>
            <BaiDuMap tilt={45}/>
        </Layout>
    );
}