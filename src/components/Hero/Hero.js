import React from 'react'
import Header from '../header/Header'
import './Hero.css'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import NumberCounter from 'number-counter'
import {motion} from 'framer-motion'

const  Hero = () => {

    const transition = {type:'spring',duration: 3}
    const mobile = window.innerWidth<=768 ? true: false;
  return (
    <div className="hero " id='home'>

        <div className="blur blur-h"></div>

       <div className="left-h">
       <Header/>
            {/* The Best Ad Part */}
            <div className="the-best-ad">
                <motion.div
                initial={{left: mobile? '160px' : '230px'}}
                whileInView={{left:'8px'}}
                transition={{...transition,type:'tween'}}
                >
                </motion.div>
                <span>The Best Fitness Club in the Town</span>
            </div>
            {/* The Heading */}
            <div className="hero-text">
                <div>
                    <span className='stroke-text'>Shape</span>
                    <span> Your</span>
                </div>
                <div>
                    <span>
                    Ideal Body
                    </span>
                </div>
                <div>
                <span>In Here We Will Help You To Shape and Build Your Ideal Body &
                 Live Up Your Life To Fullest.
                 </span>
                </div>
            </div>
            {/* Figures*/}
            <div className="figures">
                <div>
                    <span>
                    <NumberCounter end={140} start={100} delay='2' preFix="+"/></span>
                    
                    <span>Expert Trainers</span>
                </div>
                <div>
                    <span><NumberCounter end={925} start={800} delay='2' preFix='+'/>
                    </span>
                    <span>Members Joined</span>
                </div>
                <div>
                    <span><NumberCounter end={50} start={20} delay='2' preFix='+'/></span>
                    <span>Fitness Programs</span>
                </div>
            </div>

            {/* buttons */}
            <div className="hero-buttons">
                <button className="btn">Get Started</button>
                <button className="btn">Show More</button>
            </div>
       </div> 



       <div className="right-h">
        <button className="btn">Join Now</button>


        <motion.div className="heart-rate"
        initial={{right:'-1rem'}}
                whileInView={{right:'4rem'}}
                transition={transition}
        >
            <img src={Heart} alt="heart" />
            <span>Heart Rate</span><span>98 bpm</span>
        </motion.div>

        {/* Hero Images */}

        <img src={hero_image} alt="img" className='hero_image'/>
        <motion.img
            initial={{right:'11rem'}}
            whileInView={{right:'20rem'}}
            transition={{...transition}}
        src={hero_image_back} alt="image2" srcset="" className='hero_image_back'/>
       
       {/* Calories */}

        <motion.div className="calories"
        initial={{right:'37rem'}}
                whileInView={{right:'28rem'}}
                transition={{...transition}}
        
        
        >
            <img src={Calories} alt="" /> 
            <div>
                <span>Calories Burned</span>
                <span>220 kcal</span>
            </div>
        </motion.div>
       
       </div>   

    </div>
  )
}

export default Hero
