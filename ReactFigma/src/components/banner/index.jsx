function Banner(){
    return(
        <>
        <section className="bg-banner w-full h-720 flex justify-end items-center p-14">
            <div className="bg-marromCard h-card w-card rounded-lg p-10">
                <h1 className=" font-poppins font-semibold">New Arrival</h1>
                <h1 className=" font-montserrat text-marromTexto text-6xl font-bold w-96 leading-tight h-32">Discover our<br />new Collection</h1>
                <p className=" text-lg font-medium font-poppins">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                <button className="p-6 mt-11 font-bold font-poppins text-white pr-20 pl-20 align-middle bg-marromTexto">BUY NOW</button>
            </div>    
        </section> 
         <section className="mt-12 text-center">
                <h1 className="text-3xl font-poppins font-bold">Browse the Range</h1>
                <p className="font-poppins text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
         </section>
        </>
    )
}

export default Banner