import { useCountryContext } from "./hooks/Country-Context"

import { IoSearchSharp } from "react-icons/io5";

const SearchCountry = () => {


const {text , handleInputChange,handleSearch,modeOn} =useCountryContext()

return (
<div className="w-auto h-20  lg:ml-27">

<div className={`${modeOn ?  "bg-DMBlue-900": "bg-LDMWhite"} w-auto relative`} >

<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" 
stroke="currentColor" className={`absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 ${modeOn ? "stroke-LDMWhite" : "stroke-gray-700"} `}
 onClick={() => handleSearch(text)} >
<g id="SVGRepo_bgCarrier" stroke-width="0"></g>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
<g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g>

</svg>



<input type="text"   placeholder="Search for a country..." className=" h-15  w-full lg:w-md placeholder:text-LMGrey-400 placeholder:font-Nunito placeholder:text-md   shadow-lg px-20 l g:ml-25"
onChange={handleInputChange} value={text}/>

</div>

</div>


)
}
export default SearchCountry