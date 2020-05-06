import React,{useEffect, useCallback} from 'react';
import {gsap, Power3, CSSPlugin} from 'gsap/dist/gsap'
import { TransitionPortal } from "gatsby-plugin-transition-link";
import "../style/pageTransition.scss";
// Force CSSPlugin to not get dropped during build
const C = CSSPlugin;


const PageTransition = (props) =>{
    let animate
    const transition = useCallback(()=>{
        let top = animate.getElementsByClassName("top")
        let bottom = animate.getElementsByClassName("bottom")
        let left = animate.getElementsByClassName("left")
        let right = animate.getElementsByClassName("right")
        let tl = gsap.timeline();
        let duration = .4   
        tl.set(animate,{
            pointerEvents: "all",
        })
        tl.to(top, duration, {
            top: "-50vh",
            ease: Power3.easeIn,
        })        
        tl.to(bottom, duration, {
            bottom: "-50vh",
            ease: Power3.easeIn,
        }, 0)        
        
        tl.set(animate.getElementsByClassName("container"), {
            opacity: 0,
        })
        
        tl.to(top, duration, {
            top: "-100vh",
            ease: Power3.easeIn,
        }, `+=.6`)
        tl.to(bottom, duration, {
            bottom: "-100vh",
            ease: Power3.easeIn,
        }, `-=${duration}`)
        tl.set(animate,{
            pointerEvents: "none",
        })
        
    })
    
    useEffect(()=>{
        if(props.trig === true){
            transition();
        }
    }, [props.trig])
    return(
        <TransitionPortal>
            <div ref = {div=>animate=div} className = "pageTransition">
               <div className = 'top'></div>
               <div className = 'left'></div>
               <div className = 'right'></div>
               <div className = 'bottom'></div>
            </div>
        </TransitionPortal>
)
}

export default PageTransition;