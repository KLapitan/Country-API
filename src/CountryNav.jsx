const CountryNav = ({onMode}) => {
return(
<section  className="flex  flex-row justify-between h-full items-center border border-green p-4">
<div>
<h2 className="text-LMGrey-950  text-2xl font-Nunito font-bold">Where in the world?</h2>
</div>

<div >


<button  className="flex flex-row gap-2 bg-DMBlue-900" onClick={onMode}> 
<img src="/dark-mode1.svg" className="w-5 h-5"/>
Dark Mode
</button>

</div>
</section>

)
}
export default CountryNav;