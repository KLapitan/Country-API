import { useEffect, useState } from "react"

import { Suspense } from "react";
import SearchCountry from "./SearchCountry";

const CountryAPI = () => {

const [countryItems,setCountryItems] = useState([]);


const countryNames = countryItems?.name  ? Array.isArray(countryItems.name) ? countryItems.name : Object.values(countryItems.name) : [] ;
 

const [text,setText]=useState("");

const [filteredCountry,setFilteredCountry]=useState([])

const [newList,setNewList]=useState(false)


const handleInputChange = (e) => {
setText(e.target.value)
}
const handleSearchCountry = (name) => {

const queryCountry = name.toLowerCase()
const findCountry = countryItems.filter(item => item.name.toLowerCase().includes(queryCountry))
setFilteredCountry(findCountry)
setNewList(true)
}


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



<SearchCountry text={text}  onSearch={handleSearchCountry}  onInput={handleInputChange}/>


  {/* list of countries */}

  {newList ? (
<ul className="border border-white w-full h-screen overflow-auto flex flex-row flex-wrap gap-15 items-center justify-center p-4">
  {filteredCountry.map((item, index) => (
    <li key={index} className="text-LDMWhite  shadow-lg h-80 w-72 font-Nunito ">

            <img src={item.flags.png } className="h-40 w-full" alt={`flag of ${item.name}`} />


            <div className=" bg-DMBlue-900 h-40 flex flex-col gap-5 p-4">
              <h2 className="text-md font-bold">{item.name}</h2>
              
              <div>
              <h3>Population: <span>{item.population ??"NA"}</span> </h3>
              <h3>Region: <span>{item.region ??"NA"}</span></h3> 
              <h3>Capital: <span>{item.capital ??"NA"}</span></h3> 
              </div>
            
            </div>
          
              
          

          </li>
  ))}

</ul>




  ) :(
  
  
  

  <ul className="border border-white w-full h-screen overflow-auto flex flex-row flex-wrap gap-15 items-center justify-center p-4 ">
        {countryItems.map((country, index) => (
          <li key={index} className="text-LDMWhite  shadow-lg h-80 w-72 font-Nunito ">

            <img src={country.flags.png } className="h-40 w-full" alt={`flag of ${country.name}`} />


            <div className=" bg-DMBlue-900 h-40 flex flex-col gap-5 p-4">
              <h2 className="text-md font-bold">{country.name}</h2>
              
              <div>
              <h3>Population: <span>{country.population ??"NA"}</span> </h3>
              <h3>Region: <span>{country.region ??"NA"}</span></h3> 
              <h3>Capital: <span>{country.capital ??"NA"}</span></h3> 
              </div>
            
            </div>
          
              
          

          </li>
        ))}
      </ul>
    



  ) }



</section>


)
}
export default CountryAPI;


const Loading = () => {
return <h2>LOADING DATA ....</h2>

}