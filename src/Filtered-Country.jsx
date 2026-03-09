import CountryInformation from "./CountryInfo"
import { useCountryContext } from "./hooks/Country-Context"


const FilteredCountryList = () => {

const {modeOn,filteredItemList,handleDisplayInfo,showInfo}=useCountryContext();

return(
<section className="flex items-center justify-center z-10 ">
{showInfo ? (
  <CountryInformation  />
) :(
<ul className=" w-full h-auto overflow-auto flex flex-row flex-wrap gap-15 items-center justify-center p-4">
  {filteredItemList.map((item) => (
    <li key={item.name} className="text-LDMWhite  shadow-lg h-80 w-72 font-Nunito scale-100 hover:shadow-2xl active:scale-104 cursor-pointer " onClick={() => handleDisplayInfo(item)}>

            <img src={item.flags.png } className="h-40 w-full" alt={`flag of ${item.name}`} />


            <div className={` ${modeOn ? "bg-DMBlue-900": "bg-LDMWhite"} h-40 flex flex-col gap-5 p-4`}>
              <h2 className={`text-md font-bold ${modeOn ? "text-LMGrey-50": "text-LMGrey-950"} hover:underline`}>{item.name}</h2>
              
                  <div>
                  <h3 className={`${modeOn ? "text-LMGrey-50" : "text-LMGrey-950"} `}>Population: <span className={`${modeOn ? "text-LMGrey-50" :"text-LMGrey-400"}`}>{item.population ??"NA"}</span> </h3>
              <h3 className={`${modeOn ? "text-LMGrey-50" : "text-LMGrey-950"}`}>Region: <span className={`${modeOn ? "text-LMGrey-50" :"text-LMGrey-400"}`}>{item.region ??"NA"}</span></h3> 
              <h3 className={`${modeOn ? "text-LMGrey-50" : "text-LMGrey-950"} `}>Capital: <span className={`${modeOn ? "text-LMGrey-50" :"text-LMGrey-400"}`}>{item.capital ??"NA"}</span></h3> 
              </div>
            
            </div>
          
              
          

          </li>
  ))}


</ul>
)}

</section>
)

}


export default FilteredCountryList