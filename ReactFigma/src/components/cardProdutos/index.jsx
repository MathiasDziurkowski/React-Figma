import Card from "../card"
function cardProdutos() {
    return(
        <>
        <div className="flex justify-center gap-6 p-12">
        <Card nome="Dining"></Card>
        <Card nome="Living"></Card>
        <Card nome="Bedroom"></Card>
        </div>
        </>
    )
}

export default cardProdutos