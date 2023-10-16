function cardProduto(props) {
    return (
        <>
            <section className="hover:opacity-50 ease-in-out duration-300" style={{backgroundColor: "black"}}>
            <section className="flex flex-col" style={{backgroundColor:'#F4F5F7'}}>
            <img src={props.imagem} alt="" />
            <p className="font-poppins font-semibold">{props.nomeProduto}</p>
            <p className="font-poppins">{props.descricao}</p>
            <p className="font-poppins">{props.preco}</p>
            </section>
            </section>
        </>
    )
}

export default cardProduto