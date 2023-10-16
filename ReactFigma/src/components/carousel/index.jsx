function Carousel(props) {
    return(
    <>
    <div className="flex justify-center p-6">
    <button style={{borderColor: '#B88E2F', color: '#B88E2F'}} className="font-poppins border-orange-500 border text-orange px-32 p-2 border-2 hover:scale-110 ease-in-out duration-300 ">Show More</button>
    </div>

    <section className="flex bg-marromCarousel h-carousel">
    <section className="flex flex-col w-32 align-middle p-32">
    <h1 className="font-poppins text-4xl font-bold ">50+ Beautiful rooms<br />inspiration</h1>
    <p className="font-poppins">Our designer already made a lot of beautiful<br />prototipe of rooms that inspire you</p>
    </section>
    <div className="flex">
        <img src="./images/carousel-1.png" alt="" className=""/>
    </div>
    </section>
    </>
    
    )
}

export default Carousel