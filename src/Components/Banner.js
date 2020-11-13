import React from 'react'
import { ReactComponent as ArrowRight } from '../assets/arrow-right.svg'

export default function Banner() {
    return (
        <div className="banner">
           <div className="container">
                <div className="slogan">
                    <h1><span>Creating unique brands is</span></h1>
                    <h1><span>what we do</span></h1>
                </div>
                <div className="moreAboutUs">
                    <a className="row v-center">
                        <h2>More about us</h2> 
                        <ArrowRight/>
                    </a>

                </div>
           </div>
        </div>
    )
}
