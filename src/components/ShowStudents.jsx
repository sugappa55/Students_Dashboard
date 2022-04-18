
import {useEffect, useState} from "react"
import axios from "axios"
export const ShowStudents = () => {
  var [sort,setSort]=useState({
    sortby:"first_name",
    sortorder:"asc"
  });


  const handleChange=(e)=>{
    const {className,value}=e.target
    setSort({...sort,[className]:value})
  }

  const [Data,setData]=useState([])
  useEffect(()=>{
    getData()
  },[])

  const getData=()=>{
    axios.get("http://localhost:8080/students").then(({data})=>{
    setData([...data.sort((a,b)=>a.first_name>b.first_name?1:-1)])})
  }

  const handleSort=({sortby,sortorder})=>{
   
   if(sortby==="gender"){
     if(sortorder==="asc")setData([...Data.sort((a,b)=>a.gender>b.gender?1:-1)])
      else setData([...Data.sort((a,b)=>a.gender<b.gender?1:-1)])
   }
   else if(sortby==="first_name"){
    if(sortorder==="asc")setData([...Data.sort((a,b)=>a.first_name>b.first_name?1:-1)])
    else setData([...Data.sort((a,b)=>a.first_name<b.first_name?1:-1)])
   }
   else if(sortby==="age"){
    if(sortorder==="asc")setData([...Data.sort((a,b)=>a.age-b.age)])
    else setData([...Data.sort((a,b)=>b.age-a.age)])
   }
   else if(sortby==="tenth_score"){
    if(sortorder==="asc")setData([...Data.sort((a,b)=>a.tenth_score-b.tenth_score)])
    else setData([...Data.sort((a,b)=>b.tenth_score-a.tenth_score)])
   }
   else if(sortby==="twelth_score"){
    if(sortorder==="asc")setData([...Data.sort((a,b)=>a.twelth_score-b.twelth_score)])
    else setData([...Data.sort((a,b)=>b.twelth_score-a.twelth_score)])
   }

   
   
  }
  return (
    <div>
      <div className="controls">
        <div>
          Sort By:{" "}
          <select
            // select dropdown needs both value and onChange
            className="sortby"
            onChange={handleChange}
          >
            <option value="first_name">First Name</option>
            <option value="gender">Gender</option>
            <option value="age">Age</option>
            <option value="tenth_score">10th Score</option>
            <option value="twelth_score">12th Score</option>
          </select>
        </div>
        <div>
          Order:
          <select
            // select dropdown needs both value and onChange
            className="sortorder"
            onChange={handleChange}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <button className="sort" onClick={()=>{handleSort(sort)
        
        }}>sort</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>10th Score</th>
            <th>12th Score</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {/* populate all rows like below: */}
         {Data.map(elem=> <tr className="row" key={elem.id}>
            <td className="first_name">{elem.first_name}</td>
            <td className="last_name">{elem.last_name}</td>
            <td className="email">{elem.email}</td>
            <td className="gender">{elem.gender}</td>
            <td className="age">{elem.age}</td>
            <td className="tenth_score">{elem.tenth_score}</td>
            <td className="twelth_score">{elem.twelth_score}</td>
            <td className="preferred_branch">{elem.preferred_branch}</td>
          </tr>)}
        </tbody>
      </table>
    </div>
  );
};
