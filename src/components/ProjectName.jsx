import React,{useState, useEffect,useCallback} from 'react';
import {gsap, Power4, Power2} from 'gsap';
import duration from './duration.js'
// Force CSSPlugin to not get dropped during build
import { CSSPlugin } from 'gsap/CSSPlugin'
gsap.registerPlugin(CSSPlugin)
const C = CSSPlugin;


const ProjectName = props =>{
    let animate;
    const [current, updateCurrent] = useState(props.current)
    const handleChange = useCallback((next, direction)=>{
        let tl = gsap.timeline({delay: 0});
        if(direction === "up"){
            tl.to(animate, duration * .5, {
                x: -30,
                opacity: 0,
                filter: "blur(4px)",
                ease: Power2.easeIn,
            })
            tl.to(animate, .001, {
                x: 30,
            })
            tl.call(()=>updateCurrent(next))
            tl.to(animate, duration * .5, {
                x: 0,
                opacity: 1,
                filter: "blur(0px)",
                ease: Power2.easeOut,
            })
        }        
        else if(direction === "down"){
            tl.to(animate, duration * .5, {
                x: 30,
                opacity: 0,
                filter: "blur(4px)",
                ease: Power2.easeIn,
            })
            tl.to(animate, .001, {
                x: -30,
            })
            tl.call(()=>updateCurrent(next))
            tl.to(animate, duration * .5, {
                x: 0,
                opacity: 1,
                filter: "blur(0px)",
                ease: Power2.easeOut,
            })
        }
    })
    
    useEffect(()=>{
        if(props.current.index>current.index){
            handleChange(props.current, "up")
        }else if(props.current.index < current.index){
            handleChange(props.current, "down")
        }
    }, props.current)
    useEffect(()=>{
        if(props.viewing!="carousel"){
            gsap.to(animate, duration / 2,{
                x: -60,
                y: 90,
                opacity: 0,
                filter: "blur(4px)",
                ease: Power2.easeIn,
            })
        }else if (props.viewing === "carousel"){
            gsap.to(animate, duration / 2, {
                x: 0,
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
                ease: Power2.easeOut,
            })
        }
    }, props.viewing)
    return(<div ref = {div=>animate=div} className={props.className}>
        <h1>{current.name}</h1>
    </div>)
}

export default ProjectName;