import SearchCountry from "./Search-Country"
import FilterCountry from "./Filter-Region"
import FilteredCountryList from "./Filtered-Country"

import { useCountryContext } from "./hooks/Country-Context"


const CountriesAPI = () => {


const {setSelectRegion,showInfo} =useCountryContext()




return (
<section className="w-auto h-full lg:h-screen inset-0 z-20">


<div className={`${showInfo ? "hidden" : "flex" } flex-row h-24 justify-center lg:justify-between items-center`}> 
<SearchCountry />
<FilterCountry  onFilter={(region) => setSelectRegion(region)}/>

</div>

<FilteredCountryList />
</section>

)
}
export default CountriesAPI