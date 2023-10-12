/* eslint-disable react/prop-types */
function Card(props) {


    return(
        <>
        <section className="flex flex-col text-center">
        <section className="bg-card p-48 pb-64 rounded-lg">
        </section>
        <p className="mt-6 font-poppins text-2xl font-semibold">{props.nome}</p>
        </section> 

        </>
    )
}
export default Card