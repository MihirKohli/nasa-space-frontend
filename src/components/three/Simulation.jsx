import { useEffect, useState } from 'react';
import React from 'react'
import Level2 from './Level2'
import { CurveModifier } from '@react-three/drei';

export default function Simulation() {
  let [msg, setMsg] = useState("");
  let [curIdx, setCurIdx] = useState(0);
  useEffect(()=>{
    if(curIdx==0){
      setMsg("Full lunar eclipse: Earth's shadow turns Moon red.      ")
    }
    else if((curIdx>=1&&curIdx<=7)||(curIdx>=22&&curIdx<=29)){
      setMsg("Partial Lunar :  Moon partially covers the Sun")
    }
    else if(curIdx==14){
      setMsg("Full solar eclipse: Moon fully covers Sun, causing darkness.      ")
    }
    else if((curIdx>=9&&curIdx<=13)||(curIdx>=15&&curIdx<=20)){
      setMsg("Partial solar eclipse: Moon partially covers Sun.      ")
    }
   else{
    setMsg("‎");
   }
    
  
    
  },[curIdx])
  return (
    <>
    <div style={{backgroundColor:"black",color:"white",fontSize:""}}><h1 style={{fontSize:"30px",textAlign:"center"}} color='white'>{msg}</h1></div>
    <Level2 curIdx={curIdx} setCurIdx={setCurIdx} />
    </>
  )
}