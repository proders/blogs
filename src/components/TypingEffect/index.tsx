/**
 * 打字效果
 * @Author: pgd
 * @Date: 2023-9-8
 */
import React, {useEffect} from "react";
import styles from './index.module.css'
const TypingEffect = () => {
    const createWriter = (text :any = 'Lorem ipsum dolor sit amet.') => {
        const typeWriter = document.getElementById('typewriter-text');
        typeWriter.innerHTML = text;
        typeWriter.style.setProperty('--characters--', text.length);
    };
    useEffect(()=>{
        createWriter();
    },[])
    return     (
        <div className={styles.typewriterEffect}>
            <div className={styles.text} id="typewriter-text"></div>
        </div>
    );
}
export  default  TypingEffect
