type arrayProps = {
    lists: string [];
}
const arrayUseState = (props:arrayProps) => {
  return (
    <div>
         <h3> COMPUTER Accessories </h3> 
     {props.lists.map((list) => {
        return (
        <div>
           <li>{list}</li> 
       </div>
        )
     })}
    </div>
  );
}
export default arrayUseState;