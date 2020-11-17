
import React,{useEffect} from 'react'
import Banner from '../Components/Banner.js'
import Cases from '../Components/Cases.js'
import IntroOverlay from '../Components/IntroOverlay.js'
import gsap from 'gsap'

export default function Home() {
    console.log(gsap)
    useEffect(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
  
      tl.from(".slogan span", { y: "150%", duration: 2, stagger:.5,skewY:-2})
      .to(".top .topOverlay",1.6, { height:0,  stagger: {
        amount: 0.4
      }})
      .to(".bottom .bottomOverlay", { width:0,ease: "expo.in", delay: -0.8,
        stagger: {
          amount: 0.4
        }})
      .to(".introOverlay",{display:'none'})
      .to(".moreAboutUs", { opacity:1})
    }, [])

    return (
        <>
         <Banner/>
         <Cases/>
         <IntroOverlay/>           
        </>
    )
}
