// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// import React from "react";
// import ReactDom from "react-dom/client";

// console.log(React);
// console.log(ReactDom);

// let h1 = document.createElement("h1")
// h1.innerHTML = "i am himanshu"
// console.log(h1)



// let react1 = React.createElement("h1", null, "I am h1 tag");
// console.log(react1);

// let p = React.createElement("p", null, "I am paratag");

// let article = React.createElement("article", null, react1, p);

// let username = "ram"

// let details = {
//   productName : "Mobile",
//   price : 5000
// }

// let demo = () => 'I am a demo function'

// let name = ['Ram','Ravi','Kumari','Raghu']

// let name2 = ["himu",'rohan','rakesh','Raghu']

// ReactDom.createRoot(document.getElementById("root")).render(
//   <React.Fragment>
//     <article>
//       <h1>I am h1 tag</h1>
//       <p>I am para tag hello</p>
//     </article>
//     <article>
//       <h1>I am h1 tag</h1>
//       <p>I am para tag hello</p>
//     </article>

//     <h1>{3 + 5}</h1>
//     <h1>Hello {username}</h1>

//     <h2>{details.productName}</h2>
//     <h2>{details.price}</h2>

//     <h2>{demo()}</h2>

//     {name.map(value => <h2 className="h1" >Hello {value}</h2>)}

//     { name2.map(value => {
//      return  <h1 className="h1" >hi {value}</h1>
//     } )}

//   </React.Fragment>

  
// );


import React from 'react'
import ReactDom from "react-dom/client"
import App from './App'

ReactDom.createRoot(document.getElementById("root")).render(<App></App>)