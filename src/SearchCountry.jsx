import { useEffect } from "react"


const SearchCountry = ({text, onSearch ,onInput}) => {


useEffect(() => {
const handleEnter = (event) => {
  if(event.key === "Enter"){
  
  onSearch(text)
  }

}
window.addEventListener("keydown" , handleEnter)

return () => {
window.removeEventListener("keydown" , handleEnter)
}

},[onSearch,text])

return (
<div className=" border border-cyan-400 p-4 place-content-center w-full"> 
<input type="text" placeholder="Search for a  country..." className="bg-DMBlue-900 h-10 w-xl placeholder:text-LDMWhite  placeholder:font-Nunito placeholder:text-2xl   px-20 ml-25"

value={text}
onChange={onInput}
/>

<button onClick={() => onSearch(text)} className="rounded-lg w-20 border">Search</button>

</div>



)


}
export default SearchCountry