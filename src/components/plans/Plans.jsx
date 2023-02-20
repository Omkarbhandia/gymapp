import React from 'react'
import './Plans.css'
import whiteTick from '../../assets/whiteTick.png'
import {plansData} from '../../data/plansData'
const Plans = () => {
  return (
   <div className="plans-container">
      <div className="blur blur-p-1"></div>
      <div className="blur blur-p-2"></div>

        <div className="programs-header">
            <span className='stroke-text'>Ready to Start</span>
            <span>Your Journey</span>
            <span className='stroke-text'>Now With Us</span>
        </div>

    {/* Cards */}

    <div className="plans">
        {plansData.map((plan,i)=>(
            <div className="plan">
                {plan.icon}
                <span>{plan.name}</span>
                <span>Rs {plan.price}</span>

                <div className="features">
                    {plan.features.map((feature, i)=>(
                        <div className="feature">
                            <img src={whiteTick} alt="" />
                            <span key={i}>{feature}</span>
                        </div>
                    )
                    )}

                </div>
                <div >
                    <span>See more Benfits -> </span>
                </div>
                <button className="btn" >Join Now</button>

            </div>
        )
        )}
    </div>

   </div>
  )
}

export default Plans
