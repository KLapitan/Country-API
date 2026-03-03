import { useCountryContext } from "./hooks/Country-Context"

const FilterCountry = ({onFilter}) => {

const {selectRegion}=useCountryContext()


return(
<div className="w-full  items-center  lg:flex  justify-end hidden">

<select name="Region"  className="mr-32 p-4  shadow-lg  rounded-lg"  onChange={(e) => onFilter(e.target.value) }  value={selectRegion}>
 <option value="" disabled hidden className="shadow-lg text-DMBlue-900">Filter by Region</option>
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