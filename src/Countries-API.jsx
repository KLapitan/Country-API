import SearchCountry from "./Search-Country"
import FilterCountry from "./Filter-Region"
import FilteredCountryList from "./Filtered-Country"

import { useCountryContext } from "./hooks/Country-Context"


const CountriesAPI = () => {


const {setSelectRegion,showInfo} =useCountryContext()




return (
<section className="w-auto h-screen ">


<div className={`${showInfo ? "hidden" : "flex" } flex-row justify-between items-center`}> 
<SearchCountry />
<FilterCountry  onFilter={(region) => setSelectRegion(region)}/>

</div>

<FilteredCountryList />
</section>

)
}
export default CountriesAPI