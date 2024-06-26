import React, { useContext } from 'react'
import "./Main.css";
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';


const Main = () => {



    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          onSent();
        }
      };
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user2_icon} alt="" />
        </div>
        <div className="main-container">
            {!showResult?<><div className="greet">
                <p><span>Hello, Avi.</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest me good places for date night with girlfriend</p>
                    <img style={{width:"45px"}}src={assets.heart_icon} alt="" />
                </div>
                <div className="card">
                    <p>Briefly summarirze this concept : urban planning</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>What do you think is the greatest invention?</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Write a code to swap two numbers without a third variable</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div></>:<div className='result'>
                <div className="result-title">
                    <img src={assets.user2_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {loading?<>
                    <div className='loader'>
                    <hr className='loader-bar'/>
                    <hr className='loader-bar'/>
                    <hr className='loader-bar'/>
                    </div></>:<p>{resultData}</p>}
                    
                </div>
                </div>}
            
            <div className="main-bottom">
                <div className="search-box">
                    <input onKeyDown={handleKeyPress} onChange={(e)=>setInput(e.target.value)} value={input} type="text" name="" placeholder='Enter a prompt here' id="" />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className="bottom-info">
                    Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
                </p>
            </div>
        </div>

    </div>
  )
}

export default Main;