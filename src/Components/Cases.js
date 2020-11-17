import React from 'react'
import pic1 from "../assets/pic-1.png";
import pic2 from "../assets/pic-2.png";
import pic3 from "../assets/pic-2.png";

export default function Cases() {
    return (
        <div className="cases">
            <div>
              <div className="overlay"></div>
              <div className="textContainer">
                <p>Curology</p>
                <h1>A custom formula for your skin’s unique needs</h1>
              </div>
              <img src={pic2} style={{height:'50vh',background:'black'}}/>
            </div>

            <div>
              <div className="overlay"></div>
              <div className="textContainer">
                <p>Curology</p>
                <h1>A custom formula for your skin’s unique needs</h1>
              </div>
              <img src={pic1} style={{height:'50vh',background:'black'}}/>
            </div>

            <div>
              <div className="overlay"></div>
              <div className="textContainer">
                <p>Curology</p>
                <h1>A custom formula for your skin’s unique needs</h1>
              </div>
              <img src={pic3} style={{height:'50vh',background:'black'}}/>
            </div>         
        </div>
    )
}
