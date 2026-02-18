import React from 'react'
import { ReadHubImages } from '../../assets/asset'
import "../Onboarding/OnboardingSecond.css"
import { useNavigate } from 'react-router-dom'

const OnboardingFourth = () => {

    const navigate = useNavigate();

  return (
    <div className='screen'>
            <div className="screenContent">
            <div className="content">
                <div className="image"><img src={ReadHubImages.FourthOnboardingImage} alt="ReadHub" /></div>
                <div className="texts">
                    <span className="title">Turn reading into growth</span>
                    <span className="subtitle">Build a personal knowledge library that grows <br /> with you</span>
                </div>
                <div className="button  w-full flex items-center justify-center mt-20"
                onClick={()=> navigate('/signup')}
                >
                    <span className='items-center bg-blue-400 text-white p-3 rounded-lg'>Next</span>
                </div>
            </div>
            </div>
        </div>
  )
}

export default OnboardingFourth