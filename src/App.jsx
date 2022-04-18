import { useState } from "react";
import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";
import "./App.css"

function App() {
  const [form,setForm]=useState(false)
  return (
    <div className="App">
      <button className="togglebtn" onClick={()=>setForm(!form)}>{form?"go to students list":"Add a new student"}</button>
       {form?<AddStudent/>:<ShowStudents/>}
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
    </div>
  );
}

export default App;
