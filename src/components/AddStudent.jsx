import axios from "axios";
import { useState } from "react";

export const AddStudent = () => {

  const [user,setUser]=useState({preferred_branch:"law"})


   const handleChange=(e)=>{
     const {className,value}=e.target;
     if(className==="male"||className==="female")setUser({...user,gender:value})
     else setUser({...user,[className]:value})
   }
const handleForm=(e)=>{
  e.preventDefault()
axios.post("http://localhost:8080/students",user)
}
  return (
    <form className="addstudent" onSubmit={(event)=>handleForm(event)}>
      <div>
        Firstname:{" "}
        <input onChange={handleChange}
          type="text"
          name="first_name"
          className="first_name"
          placeholder="enter first name"
          required
        />
      </div>
      <div>
        {" "}
        Last Name:
        <input onChange={handleChange} required
          type="text"
          name="last_name"
          className="last_name"
          placeholder="enter last name"
        />
      </div>
      <div>
        {" "}
        Email:
        <input onChange={handleChange}
          type="email" required
          name="email"
          className="email"
          placeholder="enter email"
        />
      </div>

      <div>
        Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
        <div>
          Male
          <input onChange={handleChange} required
            name="gender"
            className="male"
            type="radio"
            value="male"
          />{" "}
          Female{" "}
          <input onChange={handleChange} required
            name="gender"
            className="female"
            type="radio"
            value="female"
          />
        </div>
      </div>
      <div>
        Age{" "}
        <input onChange={handleChange} required
          type="number"
          name="age"
          className="age"
          max={50}
          placeholder="enter age"
        />
      </div>
      <div>
        Tenth Score:{" "}
        <input onChange={handleChange} required
          type="number"
          name="tenth_score"
          className="tenth_score"
          placeholder="enter 10th score"
          max={100}
        />{" "}
      </div>
      <div>
        Twelth Score:{" "}
        <input onChange={handleChange} required
          type="number"
          max={100}
          name="twelth_score"
          className="twelth_score"
          placeholder="enter 12th score"
        />{" "}
      </div>
      <div>
        <select onChange={handleChange}
         required
          // select dropdown needs both value and onChange attributes
          name="preferred_branch"
          className="preferred_branch"
        >
          <option value="law">law</option>
          <option value="commerce">commerce</option>
          <option value="science">science</option>
          <option value="sports">sports</option>
          <option value="arts">arts</option>
          <option value="acting">acting</option>
        </select>
      </div>

      <input className="submit" type="submit" value="Submit" />
      {
       <div className="error">
         <p>{user.age!==undefined&&user.age>50?"user age should be below 50":""}</p>
         <p>{(user.tenth_score!==undefined&&user.tenth_score>100)||(user.twelth_score!==undefined&&user.twelth_score>100)?"10th and 12th score should not be greater than 100":""}</p>
       </div>
        // show this div with proper error before submitting form, if there's anything not provided
        // eg: first name missing, age cannot be greater than 100 etc
      }
    </form>
  );
};
