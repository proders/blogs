import {Gallery} from "react-grid-gallery";
import React, {useState} from "react";
import {imgList} from "@site/src/pages/photoAlbum/2023";
import Layout from "@theme/Layout";
import {PhotoSlider} from "react-photo-view";
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
    const handleClick = (index: number, item: CustomImage) => {
        setVisible(true)
        setIndex(index);
    }

    const images = imgList.map((image) => ({
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
    }));
    return <>
        <Layout>
            <div style={{width: "100%", height: "900px"}}>
                <Gallery
                    images={images}
                    enableImageSelection={false}
                    onClick={handleClick}
                />
            </div>
        </Layout>
        <PhotoSlider
            images={imgList.map((item:CustomImage) => ({src: item.src, key: item.src}))}
            visible={visible}
            onClose={() => setVisible(false)}
            index={index}
            onIndexChange={setIndex}
        />
    </>
}

export default PhotoAlbum