import React, { useState } from "react";

const ContolledFormWithDynamic = () => {

    let [employee,setEmployee] = useState({
        name:'',
        email:'',
        password:'',
        dob:'',
        gender:'',
        skills:''
    })

    let {name,email,password,dob,gender,skills} = employee
    

    let handleChange = e=>{
        setEmployee({...employee,[e.target.name]:e.target.value})
    }

    let handleSubmit = e=>{
        e.preventDefault()
        console.log(employee)
    }

    // 2. Separate handler for multi-select checkboxes
  let handleSkills = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      // Add skill if checked
      setEmployee({ ...employee, skills: [...skills, value] });
    } else {
      // Remove skill if unchecked
      setEmployee({
        ...employee,
        skills: skills.filter((skill) => skill !== value),
      });
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input type="text" name="name" value={name} onChange={handleChange} />

        <label htmlFor="">Email</label>
        <input type="text" name="email" value={email} onChange={handleChange} />

        <label htmlFor="">Password</label>
        <input type="password" name="password" value={password} onChange={handleChange} />

        <label htmlFor="">DOB</label>
        <input type="date" name="dob" value={dob} onChange={handleChange} />

        <aside onChange={handleChange} name="gender" value={gender}>
          <label htmlFor="">Gender</label>
          <input type="radio" name="gender" value="Male" />
          Male
          <input type="radio" name="gender" value="Female" />
          Female
          <input type="radio" name="gender" value="Others" />
          Others
        </aside>

        <aside >
          <label htmlFor="">Skills</label>
          <input type="checkbox" name="skills" checked={skills.includes("html")} onChange={handleSkills} value="html" />
          HTML
          <input type="checkbox" name="skills" checked={skills.includes("css")} onChange={handleSkills} value="css" />
          CSS
          <input type="checkbox" name="skills" checked={skills.includes("js")} onChange={handleSkills}  value="js" />
          JS
        </aside>

        <button>Submit</button>
      </form>
      {JSON.stringify(employee, null, 2)}
    </div>
  );
};

export default ContolledFormWithDynamic;
