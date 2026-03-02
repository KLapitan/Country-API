const SearchCountry = ({text, onInput,onSearch}) => {

return (
<div className="w-auto h-20 border border-yellow-500">

<input type="text"   placeholder="Search for a  country..." className=" h-15  w-full lg:w-md placeholder:text-LMGrey-400 placeholder:font-Nunito placeholder:text-2xl  shadow-lg px-20 l g:ml-25"
onChange={onInput} value={text}/>


<button onClick={() => onSearch(text)}>Search</button>
</div>


)
}
export default SearchCountry