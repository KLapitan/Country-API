import SearchCountry from "./Search-Country"
import FilterCountry from "./Filter-Region"
import FilteredCountryList from "./Filtered-Country"
import { useEffect, useMemo, useState } from "react"


const CountriesAPI = () => {



// will be list of the countries we fetched
const [countryItems,setCountryItems]=useState([])
const [countryInfo ,setCountryInfo]=useState(null)

const [selectRegion,setSelectRegion]=useState("")

const [text,setText]=useState("")

const [isSearch,setIsSearch]=useState(false)

const [showInfo,setShowInfo]=useState(false)

const handleInputChange =(e) => {
setText(e.target.value);
}

const handleSearch = () => {
setIsSearch(true)

}
const handleDisplayInfo = (itemName) => {
// const selectedCountry = countryItems.find((country) => country.name.toLowerCase() === itemName.toLowerCase())
setCountryInfo(itemName)
setShowInfo(true)
}

// filtered via search and filter  
const filteredItemList =useMemo( () => {
return countryItems.filter((country) => {
const filterByRegion = selectRegion === "" || country.region === selectRegion;

const query = text.toLowerCase();
const searchByCountryName = text === "" || country.name.toLowerCase().includes(query)

// const countryFullInfo = country.name.toLowerCase().find(itemName);

return filterByRegion && searchByCountryName 
}) 

},[text,selectRegion ,countryItems]) 




useEffect(() => {
const fetchCountry = async () => {

const api = import.meta.env.VITE_COUNTRY_API;
  const response = await fetch(api)
  if(!response.ok) {
  throw Error (`Error in fetching ${response.status}`)
  }

  const result =await response.json()

  setCountryItems(result)

}
fetchCountry();
},[])






return (
<section className="w-auto h-screen ">


<div className="flex flex-row justify-between items-center"> 
<SearchCountry  onInput={handleInputChange} onSearch={handleSearch} text={text}/>
<FilterCountry  selectRegion={selectRegion} onFilter={(region) => setSelectRegion(region)}/>

</div>

<FilteredCountryList filteredItem={filteredItemList} onCheck={handleDisplayInfo} showInfo={showInfo} countryInfo={countryInfo} countryItems={countryItems}/>
</section>

)
}
export default CountriesAPI