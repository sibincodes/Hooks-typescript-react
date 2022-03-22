type arrayOfObjectsProps = {
    stocks: {
        name: string
        category:string
    } [];
}
const arrayOfObjects = (props:arrayOfObjectsProps) => {
  return (
    <div>
     {props.stocks.map((stock) => {
        return (
        <div>
           <li>{stock.name}</li> 
       </div>
        )
     })}
    </div>
  );
}
export default arrayOfObjects;