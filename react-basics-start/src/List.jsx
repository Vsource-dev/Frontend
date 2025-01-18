import PropTypes from 'prop-types'

function List(props){

    const itemList = props.items;
    const category = props.category;

    const listItems = itemList.map(item => <li key={item.name}>{item.name}: &nbsp; {item.cal}cal</li>);

    return(
        <>
          <h3 className="list-category">{category}</h3>
          <ol className="list-items">{listItems}</ol>
        </>
    );

}

List.defaultProps = {

    category: "Category",
    items:[]

}

List.propTypes = {

    category: PropTypes.bool,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number},
                                             {name: PropTypes.string},
                                             {cal: PropTypes.number}
    ))

}
export default List


    // fruits.sort((a, b) => a.name.localeCompare(b.name)); ASC
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); DSC
    // fruits.sort((a,b) => a.cal - b.cal); LOW TO HIGH
    // fruits.sort((a,b) => b.cal - a.cal); HIGH TO LOW
    // const lowCal = fruits.filter(fruit => fruit.cal <= 100);
    // const highCal = fruits.filter(fruit => fruit.cal > 100);