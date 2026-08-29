function ObjectComponent() {
let employee = {
    name:'Harvik',
    id: 1234
}

    return (
        <>
        <h3> This is Object Component, Emploee name = {employee.name} and id = {employee.id}</h3>
        </>
    )
}

export default ObjectComponent