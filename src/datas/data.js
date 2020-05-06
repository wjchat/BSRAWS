import React from 'react';

import cartier from '../images/cartier.jpg'
import coach from '../images/coach.jpg'
import laMer from '../images/laMer.jpg'
import prada from '../images/prada.jpg'
import reel from '../images/reel.jpg'

let content  = [];

content.push({
    image: cartier,
    name: "Cartier",
    video: "https://player.vimeo.com/video/315271973?title=0&byline=0&portrait=0",
    index: 1,
    colors: ["red", "#b9a195", "#dad2c5", "#d5a069"],
    role: "Editor, Audio Production",
})
content.push({
    image: coach,
    name: "Coach",
    video: "https://player.vimeo.com/video/315271973?title=0&byline=0&portrait=0",
    index: 4,
    colors: ["blue", "#b9a195", "#dad2c5", "#d5a069"],
    role: "Editor, Audio Production",
})
content.push({
    image: coach,
    name: "Coach",
    video: "https://player.vimeo.com/video/315271973?title=0&byline=0&portrait=0",
    index: 8,
    colors: ["blue", "#b9a195", "#dad2c5", "#d5a069"],
    role: "Editor, Audio Production",
})
content.push({
    image: laMer,
    name: "La Mer",
    video: "https://player.vimeo.com/video/315271973?title=0&byline=0&portrait=0",
    index: 2,
    colors: ["green", "#b9a195", "#dad2c5", "#d5a069"],
    role: "Editor, Audio Production",
})
content.push({
    image: laMer,
    name: "La Mer",
    video: "https://player.vimeo.com/video/315271973?title=0&byline=0&portrait=0",
    index: 7,
    colors: ["green", "#b9a195", "#dad2c5", "#d5a069"],
    role: "Editor, Audio Production",
})
content.push({
    image: prada,
    name: "Prada",
    video: "https://player.vimeo.com/video/315271973?title=0&byline=0&portrait=0",
    index: 3,
    colors: ["yellow", "#b9a195", "#dad2c5", "#d5a069"],
    role: "Editor, Audio Production",
})
content.push({
    image: prada,
    name: "Prada",
    video: "https://player.vimeo.com/video/315271973?title=0&byline=0&portrait=0",
    index: 6,
    colors: ["yellow", "#b9a195", "#dad2c5", "#d5a069"],
    role: "Editor, Audio Production",
})
content.push({
    image: reel,
    name: "2017 Reel",
    video: "https://player.vimeo.com/video/315271973?title=0&byline=0&portrait=0",
    index: 0,
    colors: ["purple", "#b9a195", "#dad2c5", "#d5a069"],
    role: "Editor, Audio Production",
})
content.push({
    image: reel,
    name: "2017 Reel",
    video:"https://player.vimeo.com/video/315271973?title=0&byline=0&portrait=0",
    index: 5,
    colors: ["purple", "#b9a195", "#dad2c5", "#d5a069"],
    role: "Editor, Audio Production",
})

content.sort(function(a, b){return a.index - b.index});
console.log(content)
export default content;