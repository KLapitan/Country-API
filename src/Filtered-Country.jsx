const FilteredCountry = ({filteredList}) => {

return(

<ul className="border border-white w-full h-screen overflow-auto flex flex-row flex-wrap gap-15 items-center justify-center p-4">
  {filteredList.map((item, index) => (
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

)

}


export default FilteredCountry