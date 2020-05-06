import React, {useState} from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"

import Background from '../components/Background.jsx'
import TransitionLink from 'gatsby-plugin-transition-link'
import PageTransition from "../components/pageTransition.jsx"

import "../style/contact.scss";

const Contact = props =>{
    const [trig, pullTrig] = useState(false) 
    return(
  <Layout>
    <SEO title="Contact" />
    <div className = "containContact">
    <Background />
        <div className = "header">
            <div><TransitionLink to = "/"
            exit = {{
                        trigger: ()=>pullTrig(true),
                        length: 2,
                    }}
            entry ={{
                        delay: .5,
                    }}
            >BSR</TransitionLink></div>
            <div><TransitionLink to = "/"
            exit = {{
                        trigger: ()=>pullTrig(true),
                        length: 2,
                    }}
            entry ={{
                        delay: .5,
                    }}
            >Portfolio</TransitionLink></div>
        </div>
        <div className = "info">
            <div>Email: ben@ben.com</div>
            <div>social?: ben@insagram</div>
            <div>social media icons maybe</div>
        </div>
    <PageTransition trig = {trig} />
    </div>
  </Layout>
    )
}
export default Contact;