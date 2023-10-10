function Header(){
    return(
        <>
        <header className='flex place-items-center gap-20 justify-evenly mt-8 font-montserrat mb-9'>
        <div className='flex flex-row place-items-center'>
        <img src="./images/logo.png" alt="" className='w-12 h-8'/>
        <h1 className="text-4xl font-bold">Furniro</h1>
        </div>
        <nav>
            <ul className='flex gap-20 font-medium'>
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
        <ul className='flex gap-11'>
                <li><img src="./images/ac-alert.png" alt="" className='w-7'/></li>
                <li><img src="./images/search.png" alt="" className='w-7'/></li>
                <li><img src="./images/heart.png" alt="" className='w-7'/></li>
                <li><img src="./images/sp-cart.png" alt="" className='w-7'/></li>
            </ul>
        </header>
        </>
    )
}

export default Header