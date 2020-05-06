import React,{useState, useEffect,useCallback} from 'react';
import {gsap, Power2,Power4} from 'gsap'

import duration from './duration.js'

import { CSSPlugin } from 'gsap/CSSPlugin'

// Force CSSPlugin to not get dropped during build
gsap.registerPlugin(CSSPlugin)

 
const ColorPalette = props =>{
    let main
    const [previous, updatePrevious] = useState(props.current)
    const [previousHover, updatePreviousHover] = useState(props.hovering)
    
    const animateUp= (container, direction, percent, time)=>{
        gsap.registerPlugin(CSSPlugin)
        let tl = gsap.timeline();
        let colors = container.childNodes
        tl.staggerTo(colors, time,{
            height: percent,
            ease: Power2.easeIn,
        }, .05 * direction)

    }    
    const animateDown = (container, direction, percent, time)=>{
        gsap.registerPlugin(CSSPlugin)
        let tl = gsap.timeline();
        let colors = container.childNodes
        tl.staggerTo(colors, time,{
            height: percent,
            ease: Power2.easeIn,
        }, .05 * direction)    
    }

    useEffect(()=>{
        let containers = main.getElementsByClassName("colorContainer");
                for(let each of containers){ 
                    let canAnimate = true
                        if(parseInt(each.getAttribute("index")) != props.current.index){ //affects all except the one at 100% height
                            if(parseInt(each.getAttribute('index')) === props.hovering.index){
                                   if(parseInt(each.getAttribute("index")) > previousHover.index){
                                       animateUp(each, 1, "50%", duration * .25) //moving up with hover
                                   } else if(props.hovering != props.current){
                                       animateUp(each, -1, "50%", duration * .25) //moving down with hover
                                   }
                                updatePreviousHover(props.hovering)
                               } else if (parseInt(each.getAttribute("index")) === previousHover.index){
                                   setTimeout(()=>{     
                                           if(parseInt(each.getAttribute("index")) < props.hovering.index){
                                               animateDown(each, 1, "0%", duration * .25) //moving up hover
                                           } else{
                                               animateDown(each, -1, "0%", duration * .25) //moving down hover
                                           }
                                       }, 140)
                               }
                        }
    }
    }, [props.hovering])
    
    useEffect(()=>{
        let colorContainers = main.getElementsByClassName("colorContainer");
        for(let each of colorContainers){
            if(each.getAttribute("index") === props.current.index.toString()){
                if(previous.index < props.current.index){
                    animateUp(each, 1, "100%", duration / 2); //so that the flow is the same not matter the durection. 1 means moving up, -1 means moving down.
                }else{
                    animateUp(each, -1, "100%", duration / 2); //moving down
                }
            }else{
                if(previous.index < props.current.index){
                    animateDown(each,1, "0%", duration / 2); //moving up
                }else{
                    animateDown(each, -1, "0%", duration / 2) //moving down
                     }
            }
        }
        updatePrevious(props.current) //so that we can compare order next time
    }, [props.current])
    
    useEffect(()=>{
        if(props.viewing != "carousel"){
            gsap.to(main, duration / 2, {
                y: 30,
                opacity: 0,
                filter: "blur(4px)",
                ease: Power2.easeIn
            })
        } else if(props.viewing === "carousel"){
            gsap.to(main, duration / 2, {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
                ease: Power2.easeOut
            })
        }
    }, [props.viewing])
    return(            
        <div ref={div=>main=div} className={props.className}>
                <div className = "container">
                    <div className = "border"></div>
                {props.content.map(item => (
                    <div key = {item.index} 
                           index = {item.index} 
                           className = "colorContainer"
                           onClick = {()=>props.onClick(item)}
                            onMouseEnter = {()=>props.onHover(item)}
                            onMouseLeave = {()=>props.onHover(props.current)}
                           >
                            {item.colors.map(color =>(
                                <div
                                  key = {color}
                                   className = "color"
                                    style = {{
                                        backgroundColor: color,
                                    }}>
                                </div>
                            ))}
                    </div>
                ))}
                </div>
        </div>
    )
}

export default ColorPalette;
