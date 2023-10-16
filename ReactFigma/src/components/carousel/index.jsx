function Carousel() {
    return(
    <>
    <div className="flex justify-center p-6">
    <button style={{borderColor: '#B88E2F', color: '#B88E2F'}} className="font-poppins border-orange-500 border text-orange px-32 p-2 border-2 hover:scale-110 ease-in-out duration-300 ">Show More</button>
    </div>

    <section className="flex gap-20 justify-center bg-marromCarousel h-carousel">
    <section className="flex flex-col w-32 align-middle mt-64">
    <h1 className="font-poppins text-4xl font-bold ">50+ Beautiful rooms<br />inspiration</h1>
    <p className="font-poppins">Our designer already made a lot of beautiful<br />prototipe of rooms that inspire you</p>
    <button className="border p-6 font-poppins font-semibold" style={
        {
            backgroundColor: "#B88E2F",
            color: "white"
            }}>Explore more</button>
    </section>
    <div className="flex flex-col p-6 items-center gap-10">
        <img src="./images/carousel-1.png" alt="" className=""/>
        <img src="./images/carousel-2.png" alt="" className="hidden" />
        <img src="./images/carousel-3.png" alt="" className="hidden"/>
        <div className="flex gap-20">
        <i className="fa-solid fa-arrow-left"></i>
        <div className="flex justify-center gap-10">
            <button className="border rounded-lg p-2" style={{backgroundColor: "#B88E2F"}}></button>
            <button className="border rounded-lg p-2"></button>
            <button className="border rounded-lg p-2"></button>
        </div>
        <i className="fa-solid fa-arrow-right"></i>
        </div>
    </div>  
    </section>
    </>
    
    )
}

export default Carousel