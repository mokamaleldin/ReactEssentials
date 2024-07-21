export default function TabButton({ children }) {
    function handleClick() {
        console.log("hello World!!!")
    }
    return (
        <li>
            <button onClick={ handleClick }>{ children }</button>
        </li>
    )
}