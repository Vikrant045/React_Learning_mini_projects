import { useState,useCallback,useEffect, useRef } from 'react'


function App() {
   
  //usestate hook
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [symbolAllowed, setSymbolAllowed] = useState(false);
    const [password,setPassword] = useState("");

    //useRef hook
    const passwordRef = useRef(null);

    //useCallBack hook
   const passwordGenerated = useCallback(()=>{

        let pass ="";
        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if(numberAllowed){
          str+="0123456789";
        }
        if(symbolAllowed){
          str+="[]{}()?/_+=~`<*&$@#^!";
        }
        for(let i=0;i<length;i++){
          let index = Math.floor(Math.random() * str.length);

          pass+= str.charAt(index);
        }
        setPassword(pass);
   },[length,numberAllowed,symbolAllowed,setPassword])

   //useEffect Hook
   useEffect(()=>{ passwordGenerated()},
   [length,numberAllowed,symbolAllowed,passwordGenerated]);

   const copyPassword =useCallback(
    ()=>{
      passwordRef.current?.select();
      window.navigator.clipboard.writeText(password);
    },[password]
   );

  return (
         <div className='box'>

              <input  className='in'
              type="text" 
              value={password}
              placeholder="password"
              readOnly
              ref={passwordRef}
              />
              <button 
              onClick={copyPassword}
              className='in'>copy</button>
              <br />

              <input  className='in'type="range" 
               max={80}
               min={8}
               value={length}
               onChange={(e)=> {setLength(e.target.value)}}
              /> <br />
              <label htmlFor="box" className='in'>  length:{length} </label>


              <input  
              className='in' 
              type='checkbox'
              defaultChecked={numberAllowed}
                onChange={()=>{
                  setNumberAllowed((prev)=> !prev)
                }}
              />
              <label  className='in'htmlFor="box"> Numbers</label>


              <input 
              type='checkbox'
              defaultChecked={symbolAllowed}
              onChange={()=>{
                setSymbolAllowed((prev)=> !prev)
              }}
                 className='in'
                />
                <label  className='in' htmlFor="box"> Symbols</label>
         </div>
       )
}

export default App
