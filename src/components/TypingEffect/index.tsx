/**
 * 打字效果
 * @Author: pgd
 * @Date: 2023-9-8
 */
import React, {useEffect} from "react";
import Typed from 'typed.js';

const TypingEffect = (props: {text:string}) => {
    const el = React.useRef(null);

  useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [props.text],
            typeSpeed: 110,
            loop: true,
            loopCount: Infinity,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);
    return  (
        <div className="App">
            <span ref={el} />
        </div>
    );
}
export  default  TypingEffect
