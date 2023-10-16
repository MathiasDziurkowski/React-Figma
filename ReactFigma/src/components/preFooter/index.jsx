function PreFooter() {
    return(
    <>
    <section className="flex justify-center p-36" style={{backgroundColor: "#FAF3EA"}}>
    <div className="flex p-6 gap-2">
        <img src="./images/trophy1.png" alt="" />
        <div className="flex flex-col">
        <h1 className="font-poppins font-semibold">High quality</h1>
        <p className="font-poppins" style={{color: "#898989"}}>crafted from top materials</p>
        </div>
    </div>
    <div className="flex p-6 gap-2">
        <img src="./images/guarantee.png" alt="" />
        <div className="flex flex-col">
        <h1 className="font-poppins font-semibold">Warranty protection</h1>
        <p className="font-poppins" style={{color: "#898989"}}>Over 2 years</p>
        </div>
    </div>
    <div className="flex p-6 gap-2">
        <img src="./images/shipping.png" alt="" />
        <div className="flex flex-col">
        <h1 className="font-poppins font-semibold">Free shipping</h1>
        <p className="font-poppins" style={{color: "#898989"}}>Order over 150 $</p>
        </div>
    </div>
    <div className="flex p-6 gap-2">
        <img src="./images/customer-support.png" alt="" />
        <div className="flex flex-col">
        <h1 className="font-poppins font-semibold">24 / 7 support</h1>
        <p className="font-poppins" style={{color: "#898989"}}>Dedicated support</p>
        </div>
    </div>
    </section>
    </>
    )
}

export default PreFooter