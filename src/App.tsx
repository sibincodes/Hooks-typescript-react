import ArrayOfObjects from './components/props/arrayOfObjects/arrayOfObjects';
import ObjectUseState from './components/props/object/objectUseState';
import ArrayUseState from './components/props/array/arrayUseState';
import EventProps from './components/props/eventprops/eventprops';
  function App() {
    const list = ["Keyboards","Mouse","Fan"]
    const item = {
      name : "RedBull",
      category : "Beverages"
    };

    const stock = [{
      name : "Apple",
      category : "Fruits"
    }, 
    {
      name : "Carrot",
      category:"Vegetables"
    },
    {
      name : "Ginger",
      category:"Vegetables"
    }
    ]
    return (
    <>
    <ObjectUseState item = {item}/>
    <ArrayOfObjects stocks = {stock}/>
    <ArrayUseState lists = {list}/>
    <EventProps handleClick = {(event,id)=> {
      console.log('Button Clicked',event,id);
    }}/>
    </>
    );
  }
export default App;
