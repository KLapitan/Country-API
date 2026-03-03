import LayoutPage from "./LayoutPage";
// import CountriesAPI from "./Countries-API";


import ContextProvider from "./hooks/Country-Context";
const App = () => {

return (
<ContextProvider>
<LayoutPage />
</ContextProvider>

)
}
export default App;