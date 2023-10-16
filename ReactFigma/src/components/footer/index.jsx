function Footer() {
    return(<>
    <section className="flex justify-around">
        <div className="flex flex-col p-6 gap-20">
            <h1 className="font-poppins font-bold text-2xl">Furniro.</h1>
            <p className="w-16" style={{color:"#9F9F9F"}}>400 University Drive Suite 200 Coral<br />Gables,<br />
                FL 33134 USA</p>
        </div>
        <div className="flex flex-col p-6 gap-20">
            <p className="font-poppins" style={{color:"#9F9F9F"}}>Links</p>
            <div className="flex flex-col gap-10">
            <p className="font-poppins">Home</p>
            <p className="font-poppins">Shop</p>
            <p className="font-poppins">About</p>
            <p className="font-poppins">Contact</p>
            </div>
        </div>
        <div className="flex flex-col p-6 gap-20">
            <p className="font-poppins" style={{color:"#9F9F9F"}}>Help</p>
            <div className="flex flex-col gap-10">
            <p className="font-poppins">Payment Options</p>
            <p className="font-poppins">Returns</p>
            <p className="font-poppins">Privacy Policies</p>
            </div>
        </div>
        <div className="flex flex-col p-6 gap-20">
            <p className="font-poppins" style={{color:"#9F9F9F"}}>Newsletter</p>
            <div className="flex gap-10">
            <input type="text" className="font-poppins border-b" placeholder="Enter your email address" />
            <button className="font-poppins border-b">SUBSCRIBE</button>
            </div>
        </div>
    </section>
    </>)
}

export default Footer