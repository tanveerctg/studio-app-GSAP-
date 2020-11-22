import React,{useEffect,useState} from 'react'
import { ReactComponent as CloseBtn } from '../assets/up-arrow-circle.svg'
import gsap from 'gsap'
import { useHistory } from "react-router-dom";

export default function Header({dimensions}) {

    console.log(dimensions)
    const [openNav,setOpenNav]=useState(false)
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    let history = useHistory();


    useEffect(()=>{

        history.listen(()=>{
          console.log('ok')
          setOpenNav(false)
        })

        if(openNav){
        
          gsap.to("body",{
           css:{
             overflowY:"hidden"
           },
           delay:0
          })
          gsap.to(".MainContent",{
            y:dimensions.width <=500 ? (dimensions.width<=380?'90%':'80%'): '66%',
            ease: "power4.out"
          })

          tl.to(".hamburger span", {
            delay: -0.1,
            duration:.2,
            scaleX: 0,
            ease: "expo.inOut",
            transformOrigin:"left",
            stagger:.2
           
          })
          .to(".hamburger",{
            zIndex:-1
          })
          .to("#Path_1", 0.4, {
            delay: -.7,
            css: {
              strokeDashoffset: 0
            }
          })
          .to("#Path_2", 0.4, {
            delay: -.7,
            css: {
              strokeDashoffset:0
            }
          })
          .to("#Line_1", .4, {
            delay: -.4,
            css: {
              strokeDashoffset:0
            }
          })
          .to("#circle", .4, {
            delay: -.4,
            css: {
              strokeDashoffset: 0
            },
            ease: "expo.inOut"
          })
          .to('.closeNavBtn',{
            delay: -3,
            css: { display: "block" }})
          .to('.closeNavBtn svg',{
            delay:-3,
            css: { display: "block" }})
    
        }else{
          console.log('falsy')
        if(dimensions.width <1025){
          gsap.to("body",{
            css:{
              overflowY:"visible"
            },
            delay:0
          })
        }

        gsap.to(".MainContent",{
          y:'0%',
          ease: "power4.out"
        }) 

        tl
        .to('.hamburger span',{
            delay: -0.1,
            duration:.2,
            scaleX: 1,
            ease: "expo.inOut",
            transformOrigin:"left",
            stagger:.2
        })
        .to(".hamburger",{
            zIndex:1,
            delay: -0.3,
        })
        .to("#Path_1", {
            delay:-1,
            css: {
              strokeDashoffset: 6.46,
              strokeDasharray:6.46
            }
          })
          .to("#Path_2", {
            delay:-1,
            css: {
                strokeDashoffset: 6.46,
                strokeDasharray:6.46
            }
          })
          .to("#Line_1", {
            delay:-1,
            css: {
                strokeDashoffset: 14.9,
                strokeDasharray:14.9
            }
          })
          .to("#circle",0.6, {
            delay:-1,
            css: {
                strokeDashoffset: 200.73,
                strokeDasharray:200.73
            }
          })
        .to('.closeNavBtn',{
            delay:-3,
            css: { display: "none" }})
        .to('.closeNavBtn svg',{
          delay:-3,
          css: { display: "none" }})

        }  
      },[openNav])
    return (
        <div className="header">
            <div className="container row">
                <h1 className="logo">Studioify</h1>
                <div className="navBtnContainer">
                    <div className="hamburger" onClick={()=>setOpenNav(true)}>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="closeNavBtn">
                        <CloseBtn onClick={()=>setOpenNav(false)}/>
                    </div>
                </div>
            </div>
        </div>

    )
}
