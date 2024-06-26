import React, { useContext } from 'react'
import "./Main.css";
import "./DarkMain.css";
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';
import Switch from '@mui/material/Switch';



const Main = () => {


    const {isDark,setIsDark,onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context);

    const handleTheme = ()=>{
    setIsDark(!isDark);
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          onSent();
        }
      };
  return (
    <div className={isDark?"dmain":"main"}>
        <div className={isDark?"dnav":"nav"}>
            <p>Gemini</p>
            <div>
                <img style={{width:"35px"}}src={assets.night_icon} alt="" />
            <Switch onChange={handleTheme}className={isDark?"dtoggle-switch":"toggle-switch"}/>
            <img src={assets.user2_icon} alt="" />
            </div>
        </div>
        <div className={isDark?"dmain-container":"main-container"}>
            {!showResult?<><div className={isDark?"dgreet":"greet"}>
                <p><span>Hello, Avi.</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className={isDark?"dcards":"cards"}>
                <div className={isDark?"dcard":"card"}>
                    <p>Suggest me good places for date night with girlfriend</p>
                    <img style={{width:"45px"}}src={assets.heart_icon} alt="" />
                </div>
                <div className={isDark?"dcard":"card"}>
                    <p>Briefly summarirze this concept : urban planning</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className={isDark?"dcard":"card"}>
                    <p>What do you think is the greatest invention?</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className={isDark?"dcard":"card"}>
                    <p>Write a code to swap two numbers without a third variable</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div></>:<div className={isDark?'dresult':'result'}>
                <div className={isDark?"dresult-title":"result-title"}>
                    <img src={assets.user2_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className={isDark?"dresult-data":"result-data"}>
                    <img src={assets.gemini_icon} alt="" />
                    {loading?<>
                    <div className={isDark?'dloader':'loader'}>
                    <hr className={isDark?'dloader-bar':'loader-bar'}/>
                    <hr className={isDark?'dloader-bar':'loader-bar'}/>
                    <hr className={isDark?'dloader-bar':'loader-bar'}/>
                    </div></>:<p>{resultData}</p>}
                    
                </div>
                </div>}
            
            <div className={isDark?"dmain-bottom":"main-bottom"}>
                <div className={isDark?"dsearch-box":"search-box"}>
                    <input onKeyDown={handleKeyPress} onChange={(e)=>setInput(e.target.value)} value={input} type="text" name="" placeholder='Enter a prompt here' id="" />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className={isDark?"dbottom-info":"bottom-info"}>
                    Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
                </p>
            </div>
        </div>

    </div>
  )
}

export default Main;