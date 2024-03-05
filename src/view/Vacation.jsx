
// 1. Create a `<Vacation>` component that has a boolean prop named **`available`**
// 2. The component should render an \<h1>    
//    with either the text *"Going on vacation"* or *"Too busy for Vacations"*
//    depending on the prop value being it true or false.
// 3. create an instance of the <Vacation> component in the main <App> component.


export default function Vacation({available}){
    console.log(available)
    return(
        
<h1>{available ? 'Going on vacation' : "Too busy for Vacations"} </h1>
    )
}