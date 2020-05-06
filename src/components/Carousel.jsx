import React,{useState, useEffect,useCallback} from 'react';
import {gsap, Power2, Power4} from 'gsap'
import duration from './duration.js'
import nextArrow from '../images/next.png';

import { CSSPlugin } from 'gsap/CSSPlugin'

// Force CSSPlugin to not get dropped during build
gsap.registerPlugin(CSSPlugin)


const Carousel = props => {
    let slider;
    const [isClient, updateClient] = useState(false);
    useEffect(()=>{
        updateClient(true);
        let moveX = `${(-50 * (props.current.index) + 25)}vw`;
        gsap.to(slider, duration,{
            x: moveX,
            ease: Power4.easeInOut,
        })
    }, props.current)
    useEffect(()=>{
        gsap.registerPlugin(CSSPlugin)
        if(props.viewing != "carousel"){
            gsap.to(slider, .003,{
                pointerEvents: "none",
    
            })
            for(let each of slider.getElementsByClassName("eachSlide")){
                if(parseInt(each.getAttribute("index")) < props.current.index){
                    gsap.to(each, duration / 2,{
                        x: -200,
                        opacity: 0,
                        filter: "blur(4px)",
                        ease: Power2.easeIn
                    })
                } else if(parseInt(each.getAttribute("index")) > props.current.index){
                    gsap.to(each, duration / 2, {
                        x: 200,
                        opacity: 0,
                        filter: "blur(4px)",
                        ease: Power2.easeIn,
                    })
                } else{
                    let tl = gsap.timeline();
                    tl.to(each, duration / 2,{
                        scale: 1.1,
                        ease: Power2.easeIn
                    })
                    tl.to(each, duration / 2,{
                        opacity: 0,
                        filter: "blur(4px)",
                        ease: Power2.easeOut,
                    })
                }
            }
        } else if(props.viewing === "carousel"){
            gsap.to(slider, .003,{
                pointerEvents: "auto",
            })
            for(let each of slider.getElementsByClassName("eachSlide")){
                gsap.to(each, duration / 2,{
                    x: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    ease: Power2.easeOut,
                    scale: 1,
                })
            }
        }
    }, props.viewing)
    const updateClasses = () =>{
        if(props.hovering.index > props.current.index){
            slider.classList.add("next");
            slider.classList.remove("back");
            slider.classList.remove("current");
        } else if(props.hovering.index < props.current.index){
            slider.classList.add("back");
            slider.classList.remove("next");
            slider.classList.remove("current");
        }else{
            slider.classList.add("current");
            slider.classList.remove("back");
            slider.classList.remove("next");
        }
    }
    const handleClick = item =>{
        if(item === props.current){
            props.updateViewing(item)
        } else {
            props.updateCurrent(item)
        }
    }
    return (
        <div key = {isClient} className={props.className}>
            <div ref={div=>slider=div} className="slider"
                onMouseMove = {()=>updateClasses()}
               >
                {props.content.map(item => (
                    <div key = {item.index} index = {item.index} className = "eachSlide" >
                        <img
                        onMouseEnter = {()=>props.onHover(item)}
                        onMouseLeave = {()=>props.onHover(props.current)}
                        onClick = {()=>handleClick(item)}  
                        src={item.image} alt={item.name} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Carousel 