import React, { useEffect, useState } from "react"
import { gsap, Power2 } from "gsap"
import duration from "./duration"
import TransitionLink from "gatsby-plugin-transition-link"
// Force CSSPlugin to not get dropped during build
import { CSSPlugin } from 'gsap/CSSPlugin'
gsap.registerPlugin(CSSPlugin)
const C = CSSPlugin;


const ChangeView = props => {
    let animate
    const [option, updateOption] = useState(null)
    const [onClick, updateOnClick] = useState("null")

    useEffect(() => {
        if (props.viewing != "carousel") {
            let tl = gsap.timeline()
            tl.to(animate, duration / 2, {
                x: 30,
                opacity: 0,
                filter: "blur(4px)",
                ease: Power2.easeIn
            })
            tl.to(animate, 0.003, {
                x: -30
            })
            tl.call(() => updateOption("Back"))
            tl.call(() => updateOnClick("carousel"))
            tl.to(animate, duration / 2, {
                x: 0,
                opacity: 1,
                filter: "blur(0px)",
                ease: Power2.easeOut
            })
        } else if (props.viewing === "carousel") {
            let tl = gsap.timeline()
            tl.to(animate, duration / 4, {
                x: -30,
                opacity: 0,
                filter: "blur(4px)",
                ease: Power2.easeIn
            })
            tl.to(animate, 0.003, {
                x: 30
            })
            tl.call(() =>
                updateOption(
                    <TransitionLink
                        to="/contact"
                        exit={{
                            trigger: () => props.pullTrig(true),
                            length: 2
                        }}
                        entry={{
                            delay: 0.5
                        }}
                    >
                        Contact
                    </TransitionLink>
                )
            )
            tl.call(() => updateOnClick("null"))
            tl.to(animate, duration / 4, {
                x: 0,
                opacity: 1,
                filter: "blur(0px)",
                ease: Power2.easeOut
            })
        }
    }, props.viewing)
    return (
        <div ref={div => (animate = div)} className={props.className}>
            {props.viewing != "carousel" ? (
                <div onClick={() => props.updateViewing(onClick)}>{option}</div>
            ) : (
                <div>{option}</div>
            )}
        </div>
    )
}

export default ChangeView
