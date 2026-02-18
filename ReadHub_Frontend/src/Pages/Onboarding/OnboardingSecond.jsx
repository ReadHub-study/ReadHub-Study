import React from 'react'
import "../Onboarding/OnboardingSecond.css"
import { ReadHubImages } from '../../assets/asset'
import { useNavigate } from 'react-router-dom'

const OnboardingSecond = () => {

    const navigate = useNavigate();

  return (
    <div className='screen'>
        <div className="screenContent">
            <div className="skip"
            onClick={()=> navigate('/onboarding3')}
            ><span>Skip</span></div>
        <div className="content">
            <div className="image"><img src={ReadHubImages.SecondOnboardingImage} alt="ReadHub" /></div>
            <div className="texts">
                <span className="title">Read with intention</span>
                <span className="subtitle">Don't just read more. Read what truly matters <br /> to you</span>
            </div>
            <div className="button w-full flex items-center justify-center mt-20"
            onClick={()=> navigate('/onboarding3')}
            >
                <span className='items-center bg-blue-400 text-white p-3 rounded-lg'>Next</span>
            </div>
        </div>
        </div>
    </div>
  )
}

export default OnboardingSecond