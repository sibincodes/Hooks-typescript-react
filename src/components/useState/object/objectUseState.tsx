type objectUseStateProps = {
    item: {
        name: string
        category:string
    }
}
const objectUseState = (props:objectUseStateProps) => {
  return (
    <div>
    <div>
       <h3>
       Selected Item is {props.item.name}
       </h3>
       </div>
    </div>
  );
}
export default objectUseState;