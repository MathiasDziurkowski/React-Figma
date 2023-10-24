import CardProduto from "../cardProduto";

function mainProdutos() {
    return(
        <>  
        <section className="flex gap-6 justify-center p-6">
        <CardProduto nomeProduto="Slytherine" descricao="Stylish cafe chair" preco="Rp 2500.000" imagem="./images/product.png" desconto="Rp 3500.000"></CardProduto>
        <CardProduto nomeProduto="Leviosa" descricao="Stylish cafe chair" preco="Rp 2500.000" imagem="./images/product2.png"></CardProduto>
        <CardProduto nomeProduto="Lolito" descricao="Luxury big sofa" preco="Rp 2500.000" imagem="./images/product3.png" desconto ="Rp 3000.000"></CardProduto>
        <CardProduto nomeProduto="Respira" descricao="Outdoor bar table and stool" preco="Rp 2500.000" imagem="./images/product4.png"></CardProduto>
        </section>
        </>
    )
    
}

export default mainProdutos