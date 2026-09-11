import React, { useState } from 'react'

const NewForm = () => {

    let [details,setDetails] = useState({
        name:"",
        email:"",
        password:""
    })

    let {name,email,password} = details

    let handleChange = (e)=>{
        setDetails({...details,[e.target.name]:e.target.value})
    }

    let handleSubmit = (e)=>{
        e.preventDefault()
        console.log(details)
        setDetails({name:'', email:'', password:''})
    }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>

        <aside>
            <label htmlFor="">Name</label>
            <input type="text" value={name} name="name"  onChange={handleChange} />

            <label htmlFor="">Email</label>
            <input type="text" value={email} name="email"  onChange={handleChange} />

            <label htmlFor="">Password</label>
            <input type="text" value={password} name="password"  onChange={handleChange} />

            <button>Submit</button>
        </aside>

      </form>
    </div>
  )
}

export default NewForm
