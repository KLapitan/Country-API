import { useCountryContext } from "./hooks/Country-Context"

const SearchCountry = () => {


const {text , handleInputChange,handleSearch} =useCountryContext()

return (
<div className="w-auto h-20 border border-yellow-500">

<input type="text"   placeholder="Search for a  country..." className=" h-15  w-full lg:w-md placeholder:text-LMGrey-400 placeholder:font-Nunito placeholder:text-2xl  shadow-lg px-20 l g:ml-25"
onChange={handleInputChange} value={text}/>


<button onClick={() => handleSearch(text)}>Search</button>
</div>


)
}
export default SearchCountry