import React,{useEffect, useState} from 'react';
import gsap from 'gsap';
import "../style/cursor.scss"
// Force CSSPlugin to not get dropped during build
import { CSSPlugin } from 'gsap/CSSPlugin'
gsap.registerPlugin(CSSPlugin)

const Cursor = props => {
    let animate;
    const moveMouse = mousePos =>{
        gsap.to(animate, .1,{
            x: mousePos.x - 5, //mouse position minus half the width
            y: mousePos.y - 5, //mouse position minus half the height
        })
    }
    useEffect(()=>{
        window.addEventListener("mousemove", event=>{
            props.updateMousePos({x: event.x, y: event.y})
        }, {passive: true})    
    }, [])
    useEffect(()=>{
        if(props.mousePos.x != null){
            moveMouse(props.mousePos);
        }
    }, props.mousePos)
    return(
    <div ref = {div=>animate=div} className = "cursor">
        
    </div>
    )
}

const CursContainer = props =>{
    let [mousePos, updateMousePos] = useState({x: null, y: null})
    return(<div>
        <Cursor mousePos = {mousePos}
        updateMousePos = {updateMousePos}
          />
    </div>)
}

export default CursContainer