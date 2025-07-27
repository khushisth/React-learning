import {useState, useEffect} from "react";
function About(){
   const [online,isOnline]= useState(false);
   const [value,setValue]= useState(0);

   useEffect(()=>{
  
    setTimeout(()=> {
     isOnline (true)
    },3000)
   })
   return(
    <>
    <div className="w-[100%] p-10 flex flex-col gap-y-5 items-center justify-center">
    <span className="text-black text-bold">{value}</span>
  
    <button onClick={()=> setValue (value + 1)} className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 transition w-fit">Click me(+)</button>
    <button onClick={()=> setValue (value - 1)} className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 transition w-fit">Click me(-)</button>
    <button onClick={()=> setValue (value * 2)} className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 transition w-fit">Click me(*)</button>
    <button onClick={()=> setValue (value /5)} className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 transition w-fit">Click me(/)</button>
    <button onClick={()=> setValue (value /2)} className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 transition w-fit">Click me(/)</button>
    </div>
    
    <span className="text-black text-bold">{online?"User is online":"connecting..."}</span>
    
    </>
   )
}
export default About;
