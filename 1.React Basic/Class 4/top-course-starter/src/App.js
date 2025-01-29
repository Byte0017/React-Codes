import React from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import {apiUrl,filterData} from "./data"; 
import { useEffect } from "react";
import { toast } from "react-toastify";

const App = () => {
  const[courses,setCourses] = React.useState(null);

  useEffect(()=>
  {
    const fetchData = async () => {
      try{
        const response = await fetch(apiUrl);
        const output = await response.json();
        //save data into a variable
        setCourses(output.data);
      }
      catch(error){
        toast.error("An error occurred");
      }
    }
    fetchData();
  },[]);

  return(
    <div>
      <Navbar />
      
      <Filter 
         filterData={filterData}
      />

      <Cards courses={courses}/>

    </div>
  );
};

export default App;
