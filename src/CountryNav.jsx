import { useCountryContext } from "./hooks/Country-Context";

const CountryNav = () => {
const {modeOn,handleModeOn}=useCountryContext()

return(
<section  className="flex  flex-row justify-between h-full items-center  p-2 lg:ml-18 lg:mr-30 ">
<div>
<h2 className={`${modeOn ?"text-LDMWhite" :"text-LMGrey-950"}  text-2xl font-Nunito font-bold`}>Where in the world?</h2>
</div>

<div >


<button  className={`flex flex-row gap-2 ${modeOn ? "text-LMGrey-50" : "text-DMBlue-900"} items-center`} onClick={handleModeOn}> 
<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-9">
<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor"></path> </g></svg>
Dark Mode
</button>

</div>
</section>

)
}
export default CountryNav;