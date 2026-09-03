import React from 'react'

const ConditionalRendering = () => {

    let [isLogin,setIsLogin] = React.useState(false)

    let greeting = () => {
       if(isLogin){
        return  <h1>Welcome Back</h1>
       }
       else{
        return <h1>Please Log In </h1>
       }
      };
  return (
   <>
    <div>
    {greeting()}
    <button onClick={()=> setIsLogin(true)}>Login</button>
    <button onClick={() => setIsLogin(false)}>Logout</button>
    <button onClick={() => setIsLogin(!isLogin)}> {isLogin ? 'Logout' : 'Login'}</button>
    </div>
    

   </>
  )
}

export default ConditionalRendering
