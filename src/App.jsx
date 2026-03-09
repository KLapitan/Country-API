
// import CountriesAPI from "./Countries-API";

import Layout from "./Layout";


import ContextProvider from "./hooks/Country-Context";
const App = () => {

return (
<ContextProvider>
<Layout/>
</ContextProvider>

)
}
export default App;