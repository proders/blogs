/**
 * 高亮文字
 * @Author: pgd
 * @Date: 2023-9-8
 */
import React from "react";

interface  HighlightProps{
    color: string,
    children?: any
}

const Highlight = ({children, color}:HighlightProps) => (
    <span
        style={{
            backgroundColor: color,
            borderRadius: '2px',
            color: '#fff',
            padding: '0.2rem',
        }}>
    {children}
  </span>
);
export  default  Highlight
