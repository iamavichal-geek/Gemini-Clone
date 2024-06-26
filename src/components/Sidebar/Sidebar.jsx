import React, {useContext, useState} from 'react';
import "./Sidebar.css";
import "./DarkSidebar.css";
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

export const Sidebar = () => {

    const[extended, setExtended] = useState(false);
    const {isDark,onSent,prevPrompts,setRecentPrompt} =useContext(Context);



    const loadPrompt = async (prompt)=>{
setRecentPrompt(prompt)
await onSent(prompt)
    }
  return (
    <div className={isDark?'dsidebar':'sidebar'}>
         <div className={isDark?"dtop":"top"}>
         <img onClick={()=>{setExtended(!extended)}}className={isDark?"dmenu":"menu"} src={isDark? assets.dmenu_icon:assets.menu_icon} alt="" />
         <div className={isDark?"dnew-chat":"new-chat"}>
            <img src={assets.plus_icon} alt="" />
            {extended?<p>New Chat</p>:null}
         </div>
        {  extended?  <div className={isDark?"drecent":"recent"}>
            <p className={isDark?'drecent-title':'recent-title'}>Recent</p>
            {prevPrompts.map((item,index)=>{
                 return (
                    <div onClick={()=>loadPrompt(item)} className={isDark?"drecent-entry":"recent-entry"}>
                    <img src={assets.message_icon} alt="" />
                    <p>{item.slice(0,18)}...</p>
                </div>
                 )
            })}
               
            </div>:null}
         </div>
         <div className={isDark?"dbottom":"bottom"}>
            <div className={isDark?"dbottom-item drecent-entry":"bottom-item recent-entry"}>
                <img src={assets.question_icon} alt="" />
                {extended?<p>Help</p>:null}
            </div>
            <div className={isDark?"dbottom-item drecent-entry":"bottom-item recent-entry"}>
                <img src={assets.history_icon} alt="" />
                {extended?<p>Activity</p>:null}
            </div>
            <div className={isDark?"dbottom-item drecent-entry":"bottom-item recent-entry"}>
                <img src={assets.setting_icon} alt="" />
                {extended?<p>Settings</p>:null}
            </div>
         </div>
    </div>
  )
}
