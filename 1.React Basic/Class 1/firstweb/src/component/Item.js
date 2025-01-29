//Importing css file from same folder
import './Item.css';

function Item(props){
    const itemName=props.name;
    return(
        <div>
             <p className='intro'> {itemName} </p>
             {props.children}
        </div>
       
    );
}
//export method
export default Item;