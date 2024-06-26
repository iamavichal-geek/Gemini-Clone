import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();
const ContextProvider =  (props)=>{

    const[input,setInput]=useState("");
    const[recentPrompt, setRecentPrompt]=useState("");
    const[prevPrompts,setPrevPrompts]=useState([]);
    const[showResult, setShowResult]=useState(false);
    const[loading,setLoading]=useState(false);
    const[resultData, setResultData]=useState("");
    const[isDark, setIsDark]=useState(false);

    const delayPara = (index, nextWord)=>{
setTimeout(function (){
setResultData(prev=>prev+nextWord);
},75*index)
    }


    const onSent = async (prompt)=>{
        setResultData("");
        setLoading(true);
        setShowResult(true);
        setRecentPrompt(input); 
        setPrevPrompts(prev=>[...prev,input])
        const response = await run(input);
        let responseArray = response.split("**");
        let newResponse="";
        for(let i=0;i<responseArray.length; i++){
            if(i===0||i%2!==1){
                newResponse+=responseArray[i];
            }
            else{
                newResponse+="<b>"+responseArray[i]+"</b>";
            }
        }
        let newResponse2= newResponse.split("*").join("</br>");
        let newResponseArray = newResponse2.split(" ");
        for(let i = 0;i<newResponseArray.length;i++){
            const nextWord = newResponseArray[i];
            delayPara(i,nextWord+" ");
        }
        setResultData(newResponse2);
        setLoading(false);
        setInput("");
    }

    // onSent("What are IITs?")

const contextValue = {
//any varibale or function, we can use anywhere in our project component
prevPrompts,
setPrevPrompts,
onSent,
setRecentPrompt,
recentPrompt,
showResult,
loading,
resultData,
input,
setInput,
isDark,
setIsDark,




}

return (
    <Context.Provider value={contextValue}>
        {props.children}
    </Context.Provider>
)


}

export default ContextProvider;