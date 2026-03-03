import CountryNav from "./CountryNav"
import CountriesAPI from "./Countries-API";

import { useCountryContext } from "./hooks/Country-Context";

const LayoutPage = () => {

const {modeOn,}=useCountryContext();
return (
<>
<nav className={`${modeOn ? "bg-DMBlue-950" : "bg-LDMWhite"} h-20 border border-green-500 z-10 w-full shadow-xl`}>
<CountryNav/>
</nav>
<main className={`${modeOn ? "bg-DMBlue-950" : "bg-LMGrey-50  "} h-auto w-full  border border-pink-800`}>

<CountriesAPI/>

</main>

</>
)}


export default LayoutPage;