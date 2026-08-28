function ArrayValues(){
    let name = ["himanshu","rahul","rohan","ram"]
    return (
       
        <>
        <h1>************Array Component Start**************</h1>
        {name.map(value => <h3>i am here = {value}</h3>)}
        </>
    )
}
export default ArrayValues