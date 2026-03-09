COUNTRY REST API

using REST API IN FETCHING COUNTRY FOR THIS CHALLANGE

<!-- feb 23 -->

done creating search input and connecting input and the list

done creating a search country logic that filter list to the searched items

todos :

create a drop ui
asia
america
europe

filer items dropdown

filter asian country
filter europe country

filter american countrty like that

and ui form mid to large and small

asian country filter

drop

Asia event handler =

const handleAsia =() => {
const asianCOuntryfilter = countryItems.filter(country => country.region === "Asia")
setAsianList(true)

}

europe

const handleEurope = () => {
const eruopeCountryFilter = countryItemsfilter(country => country.region === "Europe")

}

americas

const handleAmericas = () => {
const americasCountryFilter =countryItemsfilter(country => country.region === "Americas")

}

instead of that we created a one

const filteredCOuntry = (region) => {
const filteredREgion = countryItems.region((country) => country.region === region)

}

so we have a problem a while ago in redenring the list

so we tried using by flags which if the conditon true it will show newlist and if not it will show old

at first it okay we only rendirng based on search

but when created a filtered option it hard to rednder the list it flag by flag and list by list ,so if the filtered list is this will show this list and set the stae true for that list to show and and if not show old and if iwas searched this list and back to

so we created a filteredlist where in it will be the outpufor both filter and search and it is a single list

const filteredlist = countryitems.filter((country) => {

if(!isCLiked) return false
const query =text.toLowerCase()

const searchedCountry = country.name.includes(query)

const filterREgion = selectedREgion === "" || country.region === seleactedRegion

return searchedCountry && filteredREgion
}
)

problem we encounter is when we first load the region is not working not until weve put a text on the search it will worked

so

because is clicked is based on the flag state isclicked meansing it will only works if the user type n input and click search button then the region will work

if(!iscliked) return true

<!-- march 2  -->

rrevise the components of serach filter, and filteredlsit for the theme to easy to understand

added a onclick on a searched country to show the full details

we added a logic for the borders

wherein we check the borders information int the fetch data and then check the borders array , find the correspoding countries that was inside the borders array for th current picked country by using its alpha3code property

if borders is like this

current clicked country was belguim

in the data
belguim
{
"borders": ["FRA", "DEU", "LUX", "NLD"],

}

we check the codes using alpha3code inside the orignal array to match what countries is that have name and

why orginal because it is not filtred list so we can check to all data

<!-- march 3 -->

done creating when we clicked on the searched country it will show its full description and created a back button that will back to the list

todo the ui improve

try to put a logic on the border countries so when user tries to click a coutnry there it will redirect to the coutnry /its country details
