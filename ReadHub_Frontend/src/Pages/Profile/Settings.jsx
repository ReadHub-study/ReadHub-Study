import React from 'react'
import { ReadHubImages } from '../../assets/asset'
import { useNavigate } from 'react-router-dom'

const Settings = () => {

    const navigate = useNavigate();

  return (
    <>
    <div className='p-5 bg-gray-100 min-h-screen'>
        <div className='flex flex-row gap-2 items-center justify-start mt-5'>
            <span onClick={() => navigate("/profile")}><img src={ReadHubImages.BackwardArrow} alt="" /></span>
            <span className='text-2xl font-medium'>Settings</span>
        </div>

        <div className="card bg-white px-4 py-8 mt-5 rounded-xl flex justify-start items-start gap-7 flex-col">
            <div className='flex flex-row gap-3 justify-start items-center'>
                <span><img src={ReadHubImages.profileIcon} alt="" className='w-5 h-5' /></span>
                <span className='text-xl font-semibold text-black'>Profile</span>
            </div>
            <div className='userDetails flex flex-col gap-4 w-full'>
                <div className='flex flex-col gap-1 justify-start items-start'>
                    <span className='text-lg font-normal'>Display name</span>
                    <span className='border border-gray-300 px-4 py-3 w-full rounded-xl'>Olawale</span>
                </div>
                <div className='flex flex-col gap-1 justify-start items-start'>
                    <span className='text-lg font-normal'>Email</span>
                    <span className='border border-gray-300 px-4 py-3 w-full rounded-xl'>JohnDoe@gmail.com</span>
                </div>
            </div>
        </div>

        <div className="card bg-white px-8 py-6 flex flex-col justify-start items-start gap-7 mt-10 rounded-xl">
            <div className='flex flex-row gap-2.5 justify-start items-center'>
                <span><img src={ReadHubImages.notificationIcon} alt="" /></span>
                <span className='text-lg'>Notifications</span>
            </div>
            <div className='flex flex-row w-full justify-between items-center'>
                <div className='flex flex-row gap-2.5 justify-start items-center pl-1'>
                    <span><img src={ReadHubImages.pushNotificationIcon} alt="" /></span>
                    <span className='text-md pl-1'>Push Notifications</span>
                </div>
                <div><img src={ReadHubImages.toggleOnIcon} alt="" /></div>
            </div>
            <div className='flex flex-row w-full justify-between items-center'>
                <div className='flex flex-row gap-2.5 justify-start items-center'>
                    <span><img src={ReadHubImages.soundIcon} alt="" /></span>
                    <span className='text-md'>Sound</span>
                </div>
                <div><img src={ReadHubImages.toggleOnIcon} alt="" /></div>
            </div>
            <div className='flex flex-row w-full justify-between items-center'>
                <div className='flex flex-row gap-2.5 justify-start items-center'>
                    <span><img src={ReadHubImages.vibrationIcon} alt="" className='w-6 h-4' /></span>
                    <span className='text-md'>Vibration</span>
                </div>
                <div><img src={ReadHubImages.toggleOnIcon} alt="" /></div>
            </div>
        </div>

        <div className="cards mt-10 flex flex-col gap-0.5 justify-center items-center">
                    <div className="card bg-white flex rounded-t-xl flex-row justify-between w-full items-center p-5">
                        <div className='flex flex-row gap-2 items-center justify-start'>
                            <span><img src={ReadHubImages.exportIcon} alt="" className='filter invert-50'/></span>
                            <span className='text-black'>Export Data</span>
                        </div>
                        <div><img src={ReadHubImages.ForwardArrow} alt="" className='filter invert-75'/></div>
                    </div>
                    <div className="card bg-white flex flex-row justify-between w-full items-center p-5">
                        <div className='flex flex-row gap-2 items-center justify-start'>
                            <span><img src={ReadHubImages.privacyPolicyIcon} alt=""/></span>
                            <span className='text-black'>Privacy Policy</span>
                        </div>
                        <div><img src={ReadHubImages.ForwardArrow} alt="" className='filter invert-75'/></div>
                    </div>
                    <div className="card bg-white flex flex-row justify-between w-full items-center p-5">
                        <div className='flex flex-row gap-2 items-center justify-start'>
                            <span><img src={ReadHubImages.termsOfServiceIcon} alt="" /></span>
                            <span className='text-black'>Terms of Service</span>
                        </div>
                        <div><img src={ReadHubImages.ForwardArrow} alt="" className='filter invert-75'/></div>
                    </div>
                    <div className="card bg-white flex rounded-b-xl flex-row justify-between w-full items-center p-5" onClick={()=> navigate("/profile/settings")}>
                        <div className='flex flex-row gap-2 items-center justify-start'>
                            <span><img src={ReadHubImages.helpAndSupportIcon} alt=""/></span>
                            <span className='text-black'>Help & Support</span>
                        </div>
                        <div><img src={ReadHubImages.ForwardArrow} alt="" className='filter invert-75'/></div>
                    </div>
         </div>

         <div className="card mt-10 justify-center items-center border border-gray-300 rounded-lg p-3 flex flex-row gap-3">
             <span><img src={ReadHubImages.deleteIcon} alt="" /></span>
             <span className='text-red-600'>Delete Account</span>
        </div>

        <div className="card w-full items-center bg-blue-500 rounded-xl p-3 justify-center flex mt-7 mb-30">
            <span className='font-normal text-white'>Save Settings</span>
        </div>
    </div>
    </>
  )
}

export default Settings