const ItemListContainer = props => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{props.titulo}</h2>
                    <p>{props.greeting}</p>
                </div>
            </div>
        </div>
    )
}
export default ItemListContainer

