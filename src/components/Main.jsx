import React, { useState, useEffect, useCallback } from "react"
import "../style/main.scss"
import "../style/carousel.scss"
import {gsap, Power2, Power4} from 'gsap'

import data from "../datas/data.js"
import arrow from '../images/arrow.svg'
import Carousel from './Carousel.jsx';
import ChangeView from './ChangeView.jsx'
import ColorPalette from './Palette.jsx';
import Cursor from './Cursor.jsx';
//import Count from './Count.jsx';
import ProjectName from './ProjectName.jsx';
import Viewing from './Viewing.jsx';
import TransitionLink from 'gatsby-plugin-transition-link'

import duration from './duration.js';

import { CSSPlugin } from 'gsap/CSSPlugin'

// Force CSSPlugin to not get dropped during build
gsap.registerPlugin(CSSPlugin)


//not using these for now
const Arrows = props =>{
    const handleClick = useCallback((direction)=>{
        if(direction === "down"){
            if(props.current.index > 0){
                let next = props.content[props.current.index - 1]
                props.onClick(next)
            }else{
                console.log('no room down')
            } 
        }else if(direction === "up"){
            if(props.current.index < props.content.length - 1){
                let next = props.content[props.current.index + 1]
                props.onClick(next)
            }else{
                console.log('no room up')
            }
        }
    })
    return(            
        <div className = {props.className}>
            <div>
                <img onClick = {()=>handleClick("down")} className = "left" src={arrow} alt="left"/>    
                <img onClick = {()=>handleClick("up")}  src={arrow} alt="right"/>     
            </div>
        </div>)
}

const BSR = props => {
    let animate;
    useEffect(()=>{
        if(props.viewing != "carousel"){
            gsap.to(animate, duration / 2,{
                x: -40,
                y: -30,
                opacity: 0,
                filter: "blur(4px)",
                scale: 1,
                ease: Power2.easeIn,
            })
        }else if (props.viewing === "carousel"){
            gsap.to(animate, duration / 2,{
                x: 0,
                y: 0, 
                opacity: 1,
                filter: "blur(0px)",
                scale: 1,
                ease: Power2.easeOut,
            })
        }
    }, props.viewing)
    return(
        <div ref = {div=>animate=div} className="BSR">
            <div><TransitionLink to = "/">BSSR</TransitionLink></div>
        </div>)
}
const Main = props => {
    const [content, updateData] = useState(data)
    const [current, updateCurrent] = useState(content[0]);
    const[currentHover, updateHovering] = useState(current);
    const [viewing, updateViewing] = useState("carousel");
    return (
        <div className={props.className}>
            <BSR
            viewing = {viewing} 
            />
            <ChangeView 
            viewing = {viewing}
            updateViewing = {(newViewing)=>updateViewing(newViewing)}
            className = "gridView"
            pullTrig = {props.pullTrig}
              />
            <Carousel
            viewing = {viewing} 
            updateViewing = {(newViewing) =>updateViewing(newViewing)}
            hovering = {currentHover}
            onHover = {(item)=>updateHovering(item)}
            updateCurrent = {(item)=>updateCurrent(item)} 
            current = {current} 
            content={content} 
            className="carousel" />
            {viewing != "carousel" ? <Viewing viewing = {viewing} /> : ""}
            <ProjectName 
            viewing = {viewing}
            className = "projectName" 
            current = {current} />
            <ColorPalette
            viewing = {viewing}  
            hovering = {currentHover}
            onHover = {(item)=>updateHovering(item)}
            onClick = {(item)=>updateCurrent(item)} 
            content = {content} 
            current = {current} 
            className = "colorPalette" />

        </div>
    )
}

export default Main
