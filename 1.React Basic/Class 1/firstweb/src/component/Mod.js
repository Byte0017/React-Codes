import './Mod.css';

function Mod(props){
    const date=props.day;
    const month=props.month;
    const year=props.year;
    return(
        <div className="Mod">
            <span>{date}</span> <br></br>   
            <span>{month}</span> <br></br>
            <span>{year}</span> <br></br>
        </div>
    )
}
export default Mod;