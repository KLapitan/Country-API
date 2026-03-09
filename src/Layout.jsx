import CountryNav from "./CountryNav";
import CountriesAPI from "./Countries-API";
import { useCountryContext } from "./hooks/Country-Context"


const Layout = () => {
const {modeOn}=useCountryContext();
return (
<div className={`relative ${modeOn ? "bg-DMBlue-950" : "bg-LDMWhite"}`}>

<nav className=" h-20  w-full   shadow-xl sticky ">
<CountryNav/>
</nav>

<main className="h-auto ">
<CountriesAPI/>

</main>

</div>




)







}
export default Layout
