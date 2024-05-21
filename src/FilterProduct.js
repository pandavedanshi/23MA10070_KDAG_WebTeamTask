let FilterProduct = (props) => {
    function onFilterValueChanged(event){
        console.log(event.target.value);
        props.filterValueSelected(event.target.value);
    }


    return (
        <div className="filter-area">
            <h6>Catagories:</h6>
        <select name="frequency" onChange={onFilterValueChanged}>
            <option value="all">ALL</option>
            <option value="weekly">WEEKLY</option>
            <option value="monthly">MONTHLY</option>
        </select>
    </div>
    )
}

export default FilterProduct;