import { title } from 'process';
import React from 'react'

export const ShimmerButton = ({
    title, icon, position, handleClick, otherClasses
}:{ 
    title: string; 
    icon: React.ReactNode; 
    position: string;
    handleClick?: () => void; 
    otherClasses?: string;
  
}) => {
return (            
        <button className={`inline-flex h-12 w-full animate-shimmer items-center justify-center rounded-full border
         border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] 
         px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 
         focus:ring-offset-2 focus:ring-offset-slate-50 md:w-60 md:mt-10 gap-2 ${otherClasses}`}>
          {position === 'left' && icon}
          {title}
          {position === 'right' && icon}
        </button>                
  )
}
