import React from "react"

class PropsWithClass extends React.Component {
    render(){
        return (
            <>
            <h2>props with class</h2>
            <h3>my name =  {this.props.name}, age = {this.props.age}</h3>
            </>
        )
    }
}

export default PropsWithClass