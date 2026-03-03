import { Children, createContext, useContext ,useMemo, useEffect,useState} from "react";

 const  CountryContext =  createContext()






const ContextProvider = ({children}) => {

 const [modeOn ,setModeOn] =useState(false)

const handleModeOn = () => {
setModeOn(prev => !prev)

}


// will be list of the countries we fetched
const [countryItems,setCountryItems]=useState([])


const [currentCountryInfo ,setCurrentCountryInfo]=useState(null)

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
setCurrentCountryInfo(itemName)
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

const handleBack = () => {
setShowInfo(false)
}



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
<CountryContext.Provider value={{modeOn,handleModeOn,countryItems,selectRegion,text,isSearch,showInfo,handleInputChange,handleSearch,handleDisplayInfo,filteredItemList,currentCountryInfo ,setSelectRegion,handleBack }}>
{children}

</CountryContext.Provider>

)

}
export default ContextProvider


export const useCountryContext = () => {
  return useContext(CountryContext);
  
}