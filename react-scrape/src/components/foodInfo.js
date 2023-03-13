const FoodInfoModal = (props) => {

    const { showModal, closeModal, item, model } = props;
    // console.log(item.description)
    // console.log(model)

    return (
        <div id="myModal" className={"modal modal-text" }style={{ display: showModal ? 'block' : 'none' }}>
            <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <p className="modal-text">{item.description} ({model.nutrition.energy} KCAL)</p>
                <p>Basic: {model.nutrition.basic.map((n, i)=>{
                    return <span key={i}>{n} </span>
                })}</p>
                <p>Vitamins: {model.nutrition.vitamins.map((v, i)=> {return <span key={i}>{v} </span>})}</p>
                <p>Minerals: {model.nutrition.minerals.map((m, i)=> {return <span key={i}>{m} </span>})}</p>
            </div>
        </div>
    )
}

export default FoodInfoModal