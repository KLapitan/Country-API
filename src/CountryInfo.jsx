import { useCountryContext } from "./hooks/Country-Context";

const CountryInformation = () => {

// const  countryLanguage = countryInfo?.languages ? Array.isArray(countryInfo?.languages) : Object.values(countryInfo.languages);

// console.table(countryLanguage)
const {currentCountryInfo,countryItems,handleBack} =useCountryContext()



if(!currentCountryInfo) return null;



const borderCountries = currentCountryInfo.borders?.map((code) => {
const borderCountry = countryItems.find((country) => country.alpha3Code === code );

return borderCountry ? borderCountry.name :code
})


return(

<section className="flex flex-col  gap-9 w-full p-4 h-auto border border-orange-400">

        <div className="border h-25 place-content-center ">
            <button onClick={handleBack} className="shadow px-5 ml-13"><img/>
            Back
            </button>
        </div>

{/* holding the image and description */}
<div className="flex flex-col lg:flex-row border gap-20  justify-center">

    <div className="w-auto border  h-56 sm:w-100 sm:h-64 md:w-120 md:shrink-0 md:h-72  lg:w-140 lg:h-100 ">
        <img src={currentCountryInfo.flags.svg} alt={`${currentCountryInfo.name} flag`} 
        className="w-full h-full  shadow"
        />
    </div>

    {/* descriptiom */}
    <div className="flex flex-col  gap-8 font-Nunito p-2 border place-content-center md:shrink-2 ">
    {/* to description 2 box in  row in large view */}
<div className="flex flex-col md:flex-row lg:flex-row gap-8 ">
        <div className="border text-md flex flex-col  gap-2 lg:w-sm">
        <h2 className="text-LMGrey-950 font-bold text-xl">{currentCountryInfo.name}</h2>

            <p ><span className="text-LMGrey-950 font-bold">Native Name: </span>{currentCountryInfo.nativeName}</p>

            <p><span className="text-LMGrey-950 font-bold">Population: </span>{currentCountryInfo.population}</p>

            <p><span className="text-LMGrey-950 font-bold">Region: </span>{currentCountryInfo.region}</p>

            <p><span className="text-LMGrey-950 font-bold">Sub Region: </span>
            {currentCountryInfo.subregion}</p>
            
            <p><span className="text-LMGrey-950 font-bold">Capital:  </span>
            {currentCountryInfo.capital}</p>
        </div>

        <div className="border flex flex-col gap-2 lg:w-xs justify-center lg:-mt-10">
          <p><span className="text-LMGrey-950 font-bold">Top Level Domain:  </span>
          
          {currentCountryInfo.topLevelDomain}</p>


         <p><span className="text-LMGrey-950 font-bold">Currencies:  </span>{currentCountryInfo.currencies?.map((currency) => currency.name).join("")}</p>
           
        
         <p><span className="text-LMGrey-950 font-bold">Language:  </span>{currentCountryInfo.languages?.map((language) => language.name).join(" , ")}</p>
        
        </div>

</div>
        <div className="flex flex-col  md:flex-row  md:flex-wrap lg:flex-row lg:flex-wrap border lg:w-2xl">
          <h2 className="text-LMGrey-950 font-bold">Border Countries: </h2>
      
        <p className="flex flex-row flex-wrap gap-2">
            {borderCountries?.length ? (
            borderCountries.map((country,index) => (
            <span className="ml-2 text-center text-sm border border-LDMWhite px-6 py-1 shadow" key={index}>
            {country}
             
            
            </span>
            ))
            
            ):(
            "N/A"
            )}
        </p>

        </div>
    </div>
</div>
</section>



)

}
export default CountryInformation