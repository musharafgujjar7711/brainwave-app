import { Children } from "react"
import ButtonSvg from "../assets/assets/svg/ButtonSvg"

const Button=({className,href,children,onClick,px,white,})=> {
    const clasess=`button relative infline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${px || 'px-7'} ${white ? 'text-n-8' :'text-n-1'} ${className || ''}`
    const spans='relative z-10'
   const renderButton=()=>(
    <button className={clasess} onClick={onClick}>
        <span className={spans}>{children}</span>
        {ButtonSvg(white)}
    </button>
   )
   return renderButton();
}

export default Button