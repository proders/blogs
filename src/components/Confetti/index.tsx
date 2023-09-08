/**
 * 五彩纸屑
 * @Author: pgd
 * @Date: 2023-9-8
 */

import React from "react"
import JSConfetti from 'js-confetti'

const Confetti = () => {
    const showCon = () => {
        const jsConfetti = new JSConfetti()
       const ConfettiConfig = {
            emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
            // emojis: ['🦄'],
            // emojis: ['🎉','✨'],
            emojiSize: 20,
            confettiColors: ['#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7'],
            confettiRadius: 6,
            confettiNumber: 100,
        }
        jsConfetti.addConfetti(ConfettiConfig).then(r => {
            console.log('成功')
        })
    }
    return (
        <div onClick={showCon}> 🎉 Congratulations!</div>
    )
}
export  default Confetti