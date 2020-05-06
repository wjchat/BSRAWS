import React,{useEffect} from 'react';
import {gsap, Power2} from 'gsap'
import duration from './duration'
import "../style/viewing.scss"
// Force CSSPlugin to not get dropped during build
import { CSSPlugin } from 'gsap/CSSPlugin'
gsap.registerPlugin(CSSPlugin)
const C = CSSPlugin;


const Viewing = props =>{
    let animate
    useEffect(()=>{
        if(props.viewing != "carousel"){
            let tl = gsap.timeline({delay: duration * .55});
            tl.to(animate, duration,{
                opacity: 1,
                filter: "blur(0px)",
                scale: 1.1,
                ease: Power2.easeOut,
            })
            tl.to(animate.getElementsByClassName("dscr"), duration / 4,{
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
                ease: Power2.easeIn,
            }, duration / 4)
        } 
    }, props.viewing)
return(<div ref ={div=>animate=div} className = "viewing">
   <div className = "vid1">
    <iframe src={props.viewing.video} frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
    <div className = "dscr">
    <h2>Editor / Producer / Cinemetography</h2>
    </div>
</div>)
}

export default Viewing;