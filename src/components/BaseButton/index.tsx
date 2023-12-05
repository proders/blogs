import React, {CSSProperties} from 'react';

interface baseButtonProps {
    name: string,
    color?: string,
    loading?: boolean
}

const BaseButton = (props: baseButtonProps) => {
    const baseButtonStyle: any = {
        LineHeight: '1.5715',
        position: 'relative',
        display: 'inline-block',
        fontWeight: '400',
        whiteSpace: 'nowrap',
        textAlign: 'center',
        backgroundImage: 'none',
        border: '1px solid transparent',
        cursor: 'pointer',
        transition: 'all .3s cubic-bezier(.645,.045,.355,1)',
        userSelect: 'none',
        touchAction: 'manipulation',
        height: '32px',
        padding: '4px 15px',
        fontSize: '14px',
        borderRadius: '2px',
        // color:'#000000d9',
        color: '#fff',
        borderColor: '#1890ff',
        background: '#1890ff',
        textShadow: '0 -1px 0 rgb(0 0 0 / 12%)',
        boxShadow: '0 2px #0000000b',
    }

    return <div style={{...baseButtonStyle}}>
        <span>{props.name}</span>
    </div>
}
export default BaseButton