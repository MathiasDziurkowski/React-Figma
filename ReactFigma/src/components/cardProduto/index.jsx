function cardProduto(props) {
    return (

        <>  <div className="hover: bg-black">
            <section className="hover:opacity-50 ease-in-out duration-300">
            <img src={props.imagem} alt="" />
            <section className="flex flex-col p-6 gap-2 h-Card w-Card" style={{backgroundColor:'#F4F5F7'}}>
            <p className="font-poppins font-semibold text-2xl">{props.nomeProduto}</p>
            <p className="font-poppins text-cinzaDescricao">{props.descricao}</p>
            <div className="flex gap-2 ">
            <p className="font-poppins font-semibold text-xl">{props.preco}</p>
            <p className="font-poppins text-decoration-line: line-through text-cinzaDesconto ">{props.desconto}</p>
            </div>
            </section>
            </section>
            </div>
        </>
    )
}

export default cardProduto