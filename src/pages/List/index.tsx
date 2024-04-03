import React, { useState } from 'react';
import './styles.css';

const ImageLayout = () => {
    // 图片列表
    const [images, setImages] = useState([
        'https://via.placeholder.com/300X200',
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/250',
        'https://via.placeholder.com/300X500',
        'https://via.placeholder.com/350',
        'https://via.placeholder.com/300X200',
        'https://via.placeholder.com/700',
        'https://via.placeholder.com/400X300',
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/400',
    ]);

    return (
        <div className="container">
            <h1>瀑布流布局</h1>
            <div className="waterfall-layout">
                {images.map((image, index) => (
                    <div key={index} className="waterfall-item">
                        <img style={{height:'100%',width:'100%'}} src={image} alt={`Image ${index}`} />
                    </div>
                ))}
            </div>
            <h1>Flex 布局</h1>
            <div className="flex-layout">
                {images.map((image, index) => (
                    <div key={index} className="flex-item">
                        <img src={image} alt={`Image ${index}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageLayout;
