import { useEffect, useMemo, useState } from "react"

import { Suspense } from "react";
import SearchCountry from "./SearchCountry";
import RegionFilter from "./RegionFilter";

import FilteredCountry from "./Filtered-Country";

import CountryList from "./CountryList";

const CountryAPI = () => {



const [countryItems,setCountryItems] = useState([]);


const countryNames = countryItems?.name  ? Array.isArray(countryItems.name) ? countryItems.name : Object.values(countryItems.name) : [] ;
 

const [text,setText]=useState("");
const [selectedRegion,setSelectedRegion]=useState("")

const [isSearched,setIsSearched]=useState(false)

const [showFiltered,setShowFiltered]=useState(false)


const handleInputChange = (e) => {
setText(e.target.value)
}
// const handleSearchCountry = (name) => {

// const queryCountry = name.toLowerCase()

// const findCountry = countryItems.filter(item => item.name.toLowerCase().includes(queryCountry))
// setSearchedCountry(findCountry)
// setNewList(true)
// }

const handleSearchCountry = () => {
setIsSearched(true)
setShowFiltered(true)
}



// const handleFilteredRegion =(region) => {

// const filterRegions = countryItems.filter((country) => country.region === region)
// setFilteredRegion(filterRegions)

// }

// we make it as one because old to much flag and renders
// we tried to use useMemo for just optimzing so it wil not recalculate if the data is same
const filteredList  = useMemo ( () => {
  return countryItems.filter((country) => {
const regionFiltered = selectedRegion === "" || country.region === selectedRegion
  if (!isSearched) return regionFiltered;

  const query =text.toLowerCase();

const countrySearched = country.name.toLowerCase().includes(query)

return countrySearched && regionFiltered
})


},[countryItems, text, selectedRegion ,isSearched ])


// const filteredList = countryItems.filter((country) => {
// const regionFiltered = selectedRegion === "" || country.region === selectedRegion
//   if (!isSearched) return regionFiltered;

//   const query =text.toLowerCase();

// const countrySearched = country.name.toLowerCase().includes(query)

// return countrySearched && regionFiltered
// })


useEffect(() => {
const fetchCountryData = async () => {
try {
  const response = await fetch('/data.json')
  if (!response.ok){
  throw new Error (`Response status : ${response.status}`)
  }
  const result = await response.json();
  setCountryItems(result)

// console.log("data successfully fetched",data)
}catch (error){
  console.error("Error fetching data:", error)
}}



fetchCountryData();

},[])



useEffect(() => {

if(countryNames.length > 0){

console.table(countryNames)
}



},[countryNames])



return(
<section className="h-screen p-3 flex gap-2 flex-col ">

<div className="flex flex-row justify-between border w-full border-pink-600 place-self-center">


<SearchCountry text={text}  onSearch={handleSearchCountry}  onInput={handleInputChange}/>

<RegionFilter selectedRegion={selectedRegion} onFilter={(region) => {setSelectedRegion(region);  setShowFiltered(true)}}/>

</div>
  

{showFiltered ? (

<FilteredCountry filteredList ={filteredList} />
):(

<CountryList  country={countryItems}/>
)

}





</section>


)
}
export default CountryAPI;


const Loading = () => {
return <h2>LOADING DATA ....</h2>

}











