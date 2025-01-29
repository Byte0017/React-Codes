import './card.css';
function card(props){
    return(
        <div>
            {props.children};
        </div>
    )
}
export default card;