export default function Counter(props){
    return (
        <>
        <h1>Counter: {props.val}</h1>
        <button onClick={addValue}>Add</button>
        </>
    );
}

function addValue(){
    alert("Added");}