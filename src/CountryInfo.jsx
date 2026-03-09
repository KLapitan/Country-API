import { useCountryContext } from "./hooks/Country-Context";
import { FaArrowLeftLong } from "react-icons/fa6";
const CountryInformation = () => {

// const  countryLanguage = countryInfo?.languages ? Array.isArray(countryInfo?.languages) : Object.values(countryInfo.languages);

// console.table(countryLanguage)
const {currentCountryInfo,countryItems,handleBack,modeOn} =useCountryContext()



if(!currentCountryInfo) return null;



const borderCountries = currentCountryInfo.borders?.map((code) => {
const borderCountry = countryItems.find((country) => country.alpha3Code === code );

return borderCountry ? borderCountry.name :code
})


return(

<section className="flex flex-col  gap-9 w-full p-4 h-auto ">

        <div className=" h-25 place-content-center font-Nunito">
            <button onClick={handleBack} className={` shadow rounded-md text-sm px-6 p-1  flex flex-row gap-2 items-center lg:ml-19 ${modeOn ? "text-LMGrey-50 shadow-DMBlue-950 bg-DMBlue-900  " : "text-LMGrey-950 shadow-LMGrey-400 bg-LMGrey-50"}`}><FaArrowLeftLong/>
            Back
            </button>
        </div>

{/* holding the image and description */}
<div className="flex flex-col lg:flex-row gap-20  justify-center shrink">

    <div className="w-auto   h-56 sm:w-100 sm:h-64 md:w-120 md:shrink-0 md:h-72  lg:w-140 lg:h-100 ">
        <img src={currentCountryInfo.flags.svg} alt={`${currentCountryInfo.name} flag`} 
        className="w-full h-fit  shadow-lg"
        />
    </div>

    {/* descriptiom */}
    <div className="flex flex-col gap-7 font-Nunito p-2  place-content-center md:shrink-2   ">
    {/* to description 2 box in  row in large view */}
<div className="flex flex-col md:flex-row md:flex-wrap lg:flex-row lg:gap-12 md:gap-7 gap-4  ">
        <div className=" text-lg shrink-0 flex flex-col  gap-2 lg:w-auto font-Nunito">
        {/* current country name */}
        <h2 className={`${modeOn ?"text-LMGrey-50" : "text-LMGrey-950"} font-bold text-xl`}>{currentCountryInfo.name}</h2>

            <p className={`${modeOn ? "text-LMGrey-50" : "text-LMGrey-950"}`} ><span className={`${modeOn ?"text-LMGrey-50" :"text-LMGrey-950"} font-bold text-sm`}>Native Name: </span>{currentCountryInfo.nativeName}</p>

            <p className={`${modeOn ? "text-LMGrey-50" : "text-LMGrey-950"}`} ><span className={`${modeOn ?"text-LMGrey-50" :"text-LMGrey-950"} font-bold text-sm`}>Population: </span>{currentCountryInfo.population}</p>

            <p className={`${modeOn ? "text-LMGrey-50" : "text-LMGrey-950"}`} ><span className={`${modeOn ?"text-LMGrey-50" :"text-LMGrey-950"} font-bold text-sm`}>Region: </span>{currentCountryInfo.region}</p>

            <p className={`${modeOn ? "text-LMGrey-50" : "text-LMGrey-950"}`} ><span className={`${modeOn ?"text-LMGrey-50" :"text-LMGrey-950"} font-bold text-sm`}>Sub Region: </span>
            {currentCountryInfo.subregion}</p>
            
            <p className={`${modeOn ? "text-LMGrey-50" : "text-LMGrey-950"}`} ><span className={`${modeOn ?"text-LMGrey-50" :"text-LMGrey-950"} font-bold text-sm`}>Capital:  </span>
            {currentCountryInfo.capital}</p>
        </div>

        <div className=" flex flex-col gap-2 lg:w-auto justify-center lg:-mt-10 ">
          <p className={`${modeOn ? "text-LMGrey-50" : "text-LMGrey-950"}`} ><span className={`${modeOn ?"text-LMGrey-50" :"text-LMGrey-950"} font-bold text-sm`}>Top Level Domain:  </span>
          
          {currentCountryInfo.topLevelDomain}</p>


         <p className={`${modeOn ? "text-LMGrey-50" : "text-LMGrey-950"}`} ><span className={`${modeOn ?"text-LMGrey-50" :"text-LMGrey-950"} font-bold text-sm`}>Currencies:  </span>{currentCountryInfo.currencies?.map((currency) => currency.name).join("")}</p>
           
        
         <p className={`${modeOn ? "text-LMGrey-50" : "text-LMGrey-950"}`} ><span className={`${modeOn ?"text-LMGrey-50" :"text-LMGrey-950"} font-bold text-sm`}>Language:  </span>{currentCountryInfo.languages?.map((language) => language.name).join(" , ")}</p>
        
        </div>

</div>
        <div className="flex flex-col  md:flex-row  md:flex-wrap lg:flex-row lg:flex-wrap  lg:w-auto shrink">
          <h2 className={`${modeOn ? "text-LMGrey-50": "text-LMGrey-950"} font-bold `}>Border Countries: </h2>
      
        <p className={`flex flex-row flex-wrap gap-2 ${modeOn ? "text-LMGrey-50" : "text-LMGrey-950"}`}>
            {borderCountries?.length ? (
            borderCountries.map((country,index) => (
            <span className={`ml-2 text-center text-sm px-3 py-1 shadow tracking-wide   ${modeOn ? "bg-DMBlue-900": "bg-LMGrey-50"  } `} key={index}>
            {country}
             
            
            </span>
            ))
            
            ):(


            <span  className={`${modeOn ? "text-LMGrey-50 bg-DMBlue-900 " :"text-LMGrey-950 " }font-Nunito ml-2 shadow  rounded-lg  p-1 px-8 text-sm`}>
             N / A
            </span>
            )}
        </p>

        </div>
    </div>
</div>
</section>



)

}
export default CountryInformation