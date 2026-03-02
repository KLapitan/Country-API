const CountryList = ({country}) => {


return (

<ul className="border border-white w-full h-screen overflow-auto flex flex-row flex-wrap gap-15 items-center justify-center p-4">
  {country.map((item, index) => (
    <li key={index} className="text-LDMWhite  shadow-lg h-80 w-72 scale-0 font-Nunito hover:shadow-2xl hover:scale-20 ">

            <img src={item.flags.png } className="h-40 w-full" alt={`flag of ${item.name}`} />


            <div className=" bg-LDMWhite h-40 flex flex-col gap-5 p-4">
              <h2 className="text-md font-bold text-LMGrey-950">{item.name}</h2>
              
              <div>
              <h3 className="text-LMGrey-950">Population: <span className="text-LMGrey-400">{item.population ??"NA"}</span> </h3>
              <h3 className="text-LMGrey-950">Region: <span className="text-LMGrey-400">{item.region ??"NA"}</span></h3> 
              <h3 className="text-LMGrey-950">Capital: <span className="text-LMGrey-400">{item.capital ??"NA"}</span></h3> 
              </div>
            
            </div>
          
              
          

          </li>
  ))}

</ul>


)

}

export default CountryList