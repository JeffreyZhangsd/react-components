// TODO
const { useState } = React;

//setting styles and states of individual items
const GroceryListItem = (props) => {
  //state of strike-through and bold
  const [isDone, setIsDone] = useState(false);
  const [isBold, setIsBold] = useState(false);
  //setting style of the text
  const style = {
    textDecoration: isDone ? 'line-through' : 'none',
    fontWeight: isBold ? '900' : 'normal'
  };
  //returning the listed item, props.item with the included styles and states
  return (
    <li style = {style}
    onClick = {() => setIsDone(!isDone)}
    //no onHover, using MouseEnter and MouseLeave
    onMouseEnter = {() => setIsBold(true)}
    onMouseLeave = {() => setIsBold(false)}>
      {props.item}
    </li>
  );
};
//using map to list out the items inside of the unordered list
const GroceryList = (props) => (
  <ul>
    {props.items.map((item) => (
      <GroceryListItem item = {item} />
    ))}
  </ul>
)
//app formats the elements onto the DOM and calls the grocery list component for the items inside
const App = () => (
  <div>
    <h1>Groceries</h1>
    <GroceryList items={['potato', 'tomato', 'cheese']}/>
  </div>
)

ReactDOM.render(<App />, document.getElementById("app"));