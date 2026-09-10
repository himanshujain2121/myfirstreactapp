import React, { useState } from 'react'

const UnControlledForm = () => {

    let [name,setName] = useState("")
    let [email,setEmail] = useState("")
    let [password,setPassword] = useState("")
    let [dob,setDob] = useState("")
    let [gender,setGender] = useState("")
    let [skills,setSkills] = useState([])

    let handleName = (e)=> {
        setName(e.target.value)
    }

    let handleEmail = (e)=> {
        setEmail(e.target.value)
    }

    let handlePassword = (e)=>{
        setPassword(e.target.value)
    }

    let handleDob = (e)=>{
        setDob(e.target.value)
    }

    let handleGender = (e)=> {
        setGender(e.target.value)
    }

    let handleSkills = (e)=>{
        if(e.target.checked === true){
            setSkills([...skills,e.target.value])
        }
        else{
            let filterData = skills.filter(skill => skill != e.target.value)
            setSkills(filterData)
        }
    }


    let handleSubmit = (e)=> {
        e.preventDefault();
        console.log(name)
        console.log(email)
        console.log(password)
        console.log(dob)
        console.log(gender)
        console.log(skills)
    }

   

  return (
    <div>
      
      <form action="" onSubmit={handleSubmit}>

        <label htmlFor="">Name</label>
        <input type="text" onChange={handleName}/>

        <label htmlFor="">Email</label>
        <input type="text" onChange={handleEmail}/>

        <label htmlFor="">Password</label>
        <input type="password" onChange={handlePassword}/>

        <label htmlFor="">DOB</label>
        <input type="date" onChange={handleDob}/>

        <aside onChange={handleGender}>
            <label htmlFor="">Gender</label>
            <input type="radio" name='gender' value="Male" />Male
            <input type="radio" name='gender' value="Female" />Female
            <input type="radio" name='gender' value="Others" />Others
        </aside>

        <aside onChange={handleSkills}>
            <label htmlFor="">Skills</label>
            <input type="checkbox" name='skills' value="html" />HTML
            <input type="checkbox" name='skills' value="css" />CSS
            <input type="checkbox"name='skills' value="js" />JS
        </aside>

        <button>Submit</button>
      </form>
    </div>
  )
}

export default UnControlledForm
