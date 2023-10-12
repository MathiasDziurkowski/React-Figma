function cardProduto(props) {
    return (
        <>
            <div className="bg-black opacity-50">
            <section className="bg-gray-500 flex flex-col">
            <img src={props.imagem} alt="" />
            <p className="font-poppins font-semibold">{props.nomeProduto}</p>
            <p className="font-poppins">{props.descricao}</p>
            <p className="font-poppins">{props.preco}</p>
            </section>
            </div>
        </>
    )
}

export default cardProduto