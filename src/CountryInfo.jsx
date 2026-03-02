const CountryInformation = ({countryInfo,countryItems}) => {

// const  countryLanguage = countryInfo?.languages ? Array.isArray(countryInfo?.languages) : Object.values(countryInfo.languages);

// console.table(countryLanguage)

if(!countryInfo) return null;



const borderCountries = countryInfo.borders?.map((code) => {
const borderCountry = countryItems.find((country) => country.alpha3Code === code );

return borderCountry ? borderCountry.name :code
})


return(

<section className="flex flex-row mt-10">
    <div>
        <img src={countryInfo.flags.svg} alt={`${countryInfo.name} flag`} 
        className="w-sm"
        />
    </div>
    <div>
        <h2>{countryInfo.name}</h2>

        <div>
            <p>{countryInfo.nativeName}</p>
            <p>{countryInfo.Region}</p>
            <p>{countryInfo.subregion}</p>
            <p>{countryInfo.capital}</p>
        </div>

        <div>
          <p>{countryInfo.topLevelDomain}</p>
          <p>{countryInfo.currencies?.map((currency) => currency.name).join("")}</p>
           
           <p>{countryInfo.languages?.map((language) => language.name).join(" , ")}</p>
        
        </div>

        <div>
          <h2>Border Countries</h2>
        <p>{borderCountries?.length > 0 ? borderCountries.join("") : "NONE"}</p>
        </div>
    </div>
</section>



)

}
export default CountryInformation