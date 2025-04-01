import {Gallery} from "react-grid-gallery";
import React, {useState} from "react";
import {ThreeImgList, TwoImgList} from "@site/src/pages/exclude/_ImgList";
import Layout from "@theme/Layout";
import {PhotoSlider} from "react-photo-view";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import './style.css'

type TagsProps = {
    value: string;
    title: string;
}

interface CustomImage {
    src: string;
    width: number;
    height: number;
    tags?: TagsProps[];
    caption?: string
}

const PhotoAlbum = () => {
    const [index, setIndex] = useState(-1);
    const [visible, setVisible] = useState(false);
    const [currentChooseItem, setCurrentChooseItem] = useState([])
    const [activeYear, setActiveYear] = useState(2022);
    const years = [2022, 2023, 2024, 2025];
    const handleClick = (index: number, item: CustomImage) => {
        setVisible(true)
        setIndex(index);
    }

    const dealImageTags = (imgList: any) => {
        return imgList.map((image) => ({
            ...image,
            customOverlay: (
                <div className='custom-overlay__caption'>
                    <div>{image.caption}</div>
                    {image.tags &&
                        image.tags.map((t, index) => (
                            <div key={index} className='custom-overlay__tag'>
                                {t.title}
                            </div>
                        ))}
                </div>
            ),
        }))
    }
    const tabList = [
        {id: 2022, label: '2022', value: dealImageTags(TwoImgList)},
        {id: 2023, label: '2023', value: dealImageTags(ThreeImgList)},
        {id: 2024, label: '2024', value: []},
        {id: 2025, label: '2025', value: []},
    ]
    const getPreviewList = () => {
        return [...TwoImgList, ...ThreeImgList]
    }
    const Tab = ({year, active, onClick}) => {
        return (
            <div
                className={`tab ${active ? 'active' : ''}`}
                onClick={() => onClick(year)}
            >
                {year}
            </div>
        );
    };
    const changeItem = (year) => {
        setActiveYear(year)
        const imageInfo = tabList.find((item) => item.id === year)
        if (imageInfo) {
            setCurrentChooseItem(imageInfo?.value)
        }
    }

    return <>
        <Layout>
            <div style={{width: "100%", height: 'calc(100vh-138px)'}}>
                <div className="tab-container">
                    {years.map(year => (
                        <Tab
                            key={year}
                            year={year}
                            active={activeYear === year}
                            onClick={()=>changeItem(year)}
                        />
                    ))}
                </div>
                <Gallery
                    images={[...dealImageTags(TwoImgList),...dealImageTags(ThreeImgList)]}
                    enableImageSelection={false}
                    onClick={handleClick}
                />
            </div>
        </Layout>
        <PhotoSlider
            images={getPreviewList().map((item: CustomImage) => ({src: item.src, key: item.src}))}
            visible={visible}
            onClose={() => setVisible(false)}
            index={index}
            onIndexChange={setIndex}
        />
    </>
}

export default PhotoAlbum