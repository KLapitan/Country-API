import CountryNav from "./CountryNav";
import CountriesAPI from "./Countries-API";
import { useCountryContext } from "./hooks/Country-Context"


const Layout = () => {
const {modeOn}=useCountryContext();
return (
<div className={`relative ${modeOn ? "bg-DMBlue-950" : "bg-LDMWhite"}`}>

<nav className=" h-20  w-full   shadow-xl  ">
<CountryNav/>
</nav>

<main className="h-auto pb-10">
<CountriesAPI/>

</main>
<footer className="fixed bottom-0 left-150 w-full z-5 ">
<div className="w-[290px] h-8 z-100 flex flex-row">
   <p className={`${modeOn? "text-LDMWhite" :"text-DMBlue-900"} text-xs  w-auto`}> Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className="text-Red500">Frontend Mentor</a>. </p> 
   <p className={`${modeOn? "text-LDMWhite" :"text-DMBlue-900"} text-xs  w-auto`}>Coded by <a href="https://github.com/KLapitan" className={`${modeOn? "text-LDMWhite" :"text-DMBlue-900"} text-xs  w-auto`}>Karl Lapitan</a>.
</p>   </div>


</footer>


</div>




)







}
export default Layout
