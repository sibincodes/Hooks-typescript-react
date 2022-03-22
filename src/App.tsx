import ArrayOfObjects from './components/useState/arrayOfObjects/arrayOfObjects';
import ObjectUseState from './components/useState/object/objectUseState';
import ArrayUseState from './components/useState/array/arrayUseState';
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
    </>
    );
  }
export default App;
