function Carousel() {
    return(
    <>
    <div className="flex justify-center p-6">
    <button style={{borderColor: '#B88E2F', color: '#B88E2F'}} className="font-poppins border-orange-500 border px-32 p-2 border-2 hover:scale-110 ease-in-out duration-300 ">Show More</button>
    </div>

    <section className="flex gap-20 justify-center bg-marromCarousel h-carousel">
    <section className="flex flex-col  gap-4 align-middle mt-64">
    <h1 className="font-poppins text-4xl font-bold ">50+ Beautiful rooms<br />inspiration</h1>
    <p className="font-poppins">Our designer already made a lot of beautiful<br />prototipe of rooms that inspire you</p>
    <button className="border p-6 font-poppins font-semibold text-white bg-marromBotao">Explore more</button>
    </section>
    <div className="flex p-6 items-center gap-10">
        <div className="bg-carousel w-imagemCarousel h-imagemCarousel flex justify-end flex-col p-6">
        <div className=" h-cardCarousel w-cardCarousel bg-white/50 p-6 backdrop-blur-sm">
            <div className="flex gap-2 font-poppins">
                <p className="font-semibold">01 -</p>
                <p className="font-semibold">Bed Room</p>
            </div>
            <h1 className="text-3xl  font-bold">Inner Peace</h1>
        </div>
        <button className="bg-marromBotao p-2 w-16 "> <i className="fa-solid fa-arrow-right"></i> </button>
        </div>
        <div className="flex flex-col justify-center">
        <img src="./images/carousel-2.png" alt="" />
        <div className="flex p-6 justify-center gap-2">
        <button className="rounded-lg bg-marromBotao p-2 w-2"></button>
        <button className="rounded-lg bg-marromBotao p-2 w-2"></button>
        <button className="rounded-lg bg-marromBotao p-2 w-2"></button>
        </div>
        </div>
        <img src="./images/carousel-3.png" alt="" className="hidden" />
        <div className="flex gap-20">
        </div>
    </div>  
    </section>  
    </>
    
    )
}

export default Carousel