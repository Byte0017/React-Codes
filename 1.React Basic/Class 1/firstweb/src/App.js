import './App.css';
import Item from './component/Item';
import Mod from './component/Mod'; 
import card from './component/card';




function App() {
  const response=[
    {
      itemName:"Nirma1",
      itemDate:"20",
      itemMonth:"May",
      itemYear:"2000"
    },
    {
      itemName:"Nirma2",
      itemDate:"22",
      itemMonth:"June",
      itemYear:"2005"
    },
    {
      itemName:"Nirma3",
      itemDate:"28",
      itemMonth:"December",
      itemYear:"2020"
    }
  ];


  return (
    //using this we can hide something to show use props.children in card.js
    <card> 
      <div>
      <Item name={response[0].itemName}>Hello Jee</Item>
      <Mod day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></Mod>

      <Item name={response[1].itemName}>Nirma chahiye kya</Item>
      <Mod day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></Mod>

      <Item name={response[2].itemName}>Ya shampoo lene ka mood h</Item>
      <Mod day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></Mod>

    </div>
    </card>
    
  );
}

export default App;