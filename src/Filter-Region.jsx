import { useCountryContext } from "./hooks/Country-Context"

const FilterCountry = ({onFilter}) => {

const {selectRegion ,modeOn}=useCountryContext()


return(
<div className="w-full  items-center  lg:flex  justify-end hidden">

<select name="Region"  className={`mr-29 py-5 px-8 appearance-auto p-4  shadow ${modeOn ? "bg-DMBlue-900 text-LMGrey-50" : "bg-LMGrey-50 text-LMGrey-950"}  rounded-lg`}  onChange={(e) => onFilter(e.target.value) }  value={selectRegion}>
 <option value="" disabled hidden className={`${modeOn ? "bg-DMBlue-900" :"bg-LDMWhite"} shadow-lg text-DMBlue-900" `}>Filter by Region</option>
  <option value="Africa">Africa</option>
  <option value="Americas">Americas</option>
  <option value="Asia">Asia</option>
  <option value="Oceania">Oceania</option>
  <option value="Europe">Europe</option>

</select>
</div>
)
}
export default FilterCountry