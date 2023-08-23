import React from 'react';
// import './styles.module.css'
export default function (props) {
    return (
        <div className='outer'>
            <div className='gradient'></div>
            <div className='content'>
                {props.children}
            </div>
        </div>
    )
}