import React from 'react'
import "../Onboarding/OnboardingSecond.css"
import { ReadHubImages } from '../../assets/asset'
import { useNavigate } from 'react-router-dom'

const OnboardingThird = () => {

    const navigate = useNavigate();

  return (
    <div className='screen'>
            <div className="screenContent">
                <div className="skip"
                onClick={()=> navigate('/onboarding4')}
                ><span>Skip</span></div>
            <div className="content">
                <div className="image"><img src={ReadHubImages.ThirdOnboardingImage} alt="ReadHub" /></div>
                <div className="texts">
                    <span className="title">Capture what matters</span>
                    <span className="subtitle">Save highlights, ideas, and thoughts you don't <br /> want to forget</span>
                </div>
                <div className="button  w-full flex items-center justify-center mt-20"
                onClick={()=> navigate('/onboarding4')}
                >
                    <span className='items-center bg-blue-400 text-white p-3 rounded-lg'>Next</span>
                </div>
            </div>
            </div>
        </div>
  )
}

export default OnboardingThird