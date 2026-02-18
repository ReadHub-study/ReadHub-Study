import React from 'react'
import { ReadHubImages } from '../../assets/asset'
import { useNavigate } from 'react-router-dom'

const Statistics = () => {

    const navigate = useNavigate();

  return (
    <>
    <div  className='p-5 bg-gray-100 min-h-screen'>
        <div className='flex flex-row gap-2 items-center justify-start mt-5'>
            <span onClick={() => navigate("/profile")}><img src={ReadHubImages.BackwardArrow} alt="" /></span>
             <span className='text-2xl font-medium'>Statistics</span>
        </div>

        <div className="cards grid grid-cols-2 gap-4 mt-10">
            <div className='flex flex-col gap-3 bg-white p-5 rounded-lg'>
                <span><img src={ReadHubImages.bookIcon} alt="" className='w-6 h-6' /></span>
                <span className='font-semibold text-xl'>0</span>
                <span className='font-light'>Books Read</span>
            </div>
            <div className='flex flex-col gap-3 bg-white p-5 rounded-lg'>
                <span><img src={ReadHubImages.timeIcon} alt=""  className='w-6 h-6'/></span>
                <span className='font-semibold text-xl'>0h</span>
                <span className='font-light'>Total Hours</span>
            </div>
            <div className='flex flex-col gap-3 bg-white p-5 rounded-lg'>
                <span><img src={ReadHubImages.fireIcon} alt="" className='w-6 h-8' /></span>
                <span className='font-semibold text-xl'>0</span>
                <span className='font-light'>Day Streak</span>
            </div>
            <div className='flex flex-col gap-3 bg-white p-5 rounded-lg'>
                <span><img src={ReadHubImages.highlightIcon} alt="" className='w-8 h-8' /></span>
                <span className='font-semibold text-xl'>0</span>
                <span className='font-light'>Highlights</span>
            </div>
        </div>


        <div className="card mt-10 bg-blue-500 flex flex-col gap-5 p-5 rounded-2xl justify-start items-start">
            <div className='flex flex-row justify-between w-full items-center'>
                <div className='flex flex-row items-center justify-center gap-2'>
                    <span><img src={ReadHubImages.circlesIcon} alt="" /></span>
                    <span className='text-white text-lg'>Daily Reading Goal</span>
                </div>
                <div><span><img src={ReadHubImages.ForwardArrow} alt="" /></span></div>
            </div>
            <div className='flex flex-col gap-1'>
                <div className='flex flex-row justify-between items-center gap-46'>
                    <div><span className='text-white text-sm'>Today's Progress</span></div>
                    <div><span className='text-white text-sm'>0/30min</span></div>
                </div>
                <div className="card bg-blue-200 p-2 mt-5 rounded-lg"><span></span></div>
            </div>
        </div>

        <div className="card flex flex-col gap-8 px-4 py-8 bg-white rounded-2xl mt-10">
            <div className='flex flex-row gap-2 items-center justify-start'>
                <span><img src={ReadHubImages.calendarIcon} alt="" /></span>
                <span className='text-xl font-medium'>This week</span>
            </div>
            <div className='flex flex-row gap-1 w-full items-end justify-between'>
                <div className='flex flex-col items-center justify-center gap-1'>
                    <div className='px-5 py-8 bg-blue-300 rounded-t-3xl'><span></span></div>
                    <span>Mon</span>
                </div>
                <div className='flex flex-col items-center justify-center gap-1'>
                    <div className='px-5 py-16 bg-blue-500 rounded-t-3xl'><span></span></div>
                    <span>Tue</span>
                </div>
                <div className='flex flex-col items-center justify-center gap-1'>
                    <div className='px-5 py-20 bg-blue-500 rounded-t-3xl'><span></span></div>
                    <span>Wed</span>
                </div>
                <div className='flex flex-col items-center justify-center gap-1'>
                    <div className='px-5 py-10 bg-blue-300 rounded-t-3xl'><span></span></div>
                    <span>Thur</span>
                </div>
                <div className='flex flex-col items-center justify-center gap-1'>
                    <div className='px-5 py-22 bg-blue-300 rounded-t-3xl'><span></span></div>
                    <span>Fri</span>
                </div>
                <div className='flex flex-col items-center justify-center gap-1'>
                    <div className='px-5 py-14 bg-blue-500 rounded-t-3xl'><span></span></div>
                    <span>Sat</span>
                </div>
                <div className='flex flex-col items-center justify-center gap-1'>
                    <div className='px-5 py-16 bg-blue-500 rounded-t-3xl'><span></span></div>
                    <span>Sun</span>
                </div>
            </div>
            <div className='flex flex-row gap-4 items-center justify-center'>
                <div className='flex flex-row gap-2 justify-center items-center'>
                    <div className='p-2 w-2 h-2 rounded bg-blue-500'><span></span></div>
                    <span className='text-sm'>Goal met</span>
                </div>
                <div className='flex flex-row gap-2 justify-center items-center'>
                    <div className='p-2 w-2 h-2 rounded bg-blue-300'><span></span></div>
                    <span className='text-gray-700 text-sm'>Under goal</span>
                </div>
            </div>
        </div>

        <div className="card mt-10 bg-white px-6 py-8 rounded-lg flex flex-col justify-start items-start gap-4">
            <div className='flex flex-row gap-4 justify-start items-center'>
                <span><img src={ReadHubImages.progressIcon} alt="" className='w-6 h-4' /></span>
                <span className='text-xl font-semibold text-gray-800'>Reading Progress</span>
            </div>
            <div className='flex flex-col gap-3 justify-start items-start w-full mt-3'>
                <div className='flex flex-row w-full justify-between items-center'>
                    <span className='text-gray-600'>Completed books</span>
                    <span className='text-gray-600'>0</span>
                </div>
                <div className='p-1 rounded-xl bg-gray-200 w-full'><span></span></div>
            </div>
            <div className='flex flex-col gap-3 justify-start items-start w-full'>
                <div className='flex flex-row w-full justify-between items-center'>
                    <span className='text-gray-600'>Currently Reading</span>
                    <span className='text-gray-600'>2</span>
                </div>
                <div className='p-1 rounded-xl bg-gray-200 w-full'><span></span></div>
            </div>
            <div className='flex flex-col gap-3 justify-start items-start w-full'>
                <div className='flex flex-row w-full justify-between items-center'>
                    <span className='text-gray-600'>Best Streak</span>
                    <span className='text-gray-600'>0 days</span>
                </div>
                <div className='p-1 rounded-xl bg-gray-200 w-full'><span></span></div>
            </div>
        </div>

        <div className="card bg-white rounded-2xl mt-10 mb-20 px-3 py-5 flex flex-col gap-10">
            <div className='flex flex-row gap-4 justify-start items-center'>
                <span><img src={ReadHubImages.achievementIcon} alt="" className='w-4 h-6' /></span>
                <span className='text-xl font-semibold'>Achievements</span>
            </div>

            <div className="cards  grid grid-cols-3 gap-2">
                <div className='flex flex-col justify-center items-center gap-4 bg-blue-50 rounded-xl py-5 px-1'>
                    <span><img src={ReadHubImages.bookAchievementIcon} alt="" /></span>
                    <span>First Book</span>
                </div>
                <div className='flex flex-col justify-center items-center gap-4 bg-blue-50 rounded-xl py-5 px-1'>
                    <span><img src={ReadHubImages.fireStreakIcon} alt="" /></span>
                    <span>7 Day Streak</span>
                </div>
                <div className='flex flex-col justify-center items-center gap-4 bg-blue-50 rounded-xl py-5 px-1'>
                    <span><img src={ReadHubImages.starHighlightIcon} alt="" /></span>
                    <span>100 Highlights</span>
                </div>
                <div className='flex flex-col justify-center items-center gap-4 bg-blue-50 rounded-xl py-5 px-1'>
                    <span><img src={ReadHubImages.booksIcon} alt="" /></span>
                    <span>10 Books</span>
                </div>
                <div className='flex flex-col justify-center items-center gap-4 bg-blue-50 rounded-xl py-5 px-1'>
                    <span><img src={ReadHubImages.streakTrophyIcon} alt="" /></span>
                    <span>30 Day Streak</span>
                </div>
                <div className='flex flex-col justify-center items-center gap-4 bg-blue-50 rounded-xl py-5 px-1'>
                    <span><img src={ReadHubImages.diamondIcon} alt="" /></span>
                    <span>1000 Hours</span>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Statistics