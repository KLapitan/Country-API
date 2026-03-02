import CountryNav from "./CountryNav"
import CountriesAPI from "./Countries-API";
import { useState } from "react";

const LayoutPage = () => {

const [modeOn ,setModeOn] =useState(false)

const handleModeOn = () => {
setModeOn(prev => !prev)

}
return (
<>
<nav className={`${modeOn ? "bg-DMBlue-950" : "bg-LDMWhite"} h-20 border border-green-500 z-10 w-full shadow-xl`}>
<CountryNav onMode={handleModeOn}/>
</nav>
<main className={`${modeOn ? "bg-DMBlue-950" : "bg-LMGrey-50  "} h-auto w-full  border border-pink-800`}>

<CountriesAPI/>

</main>

</>
)}


export default LayoutPage;