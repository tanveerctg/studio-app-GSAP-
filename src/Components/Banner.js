import React from 'react'
import { ReactComponent as ArrowRight } from '../assets/arrow-right.svg'

export default function Banner() {
    return (
        <div className="banner">
           <div className="container">
                <div className="slogan">
                    <h1>
                        <div>
                            <span>Nothing comes between </span>
                        </div>
                        <div>
                            <span>me and my studio.</span>
                        </div>                       
         
                    </h1>
     
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
