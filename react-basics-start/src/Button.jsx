


function Button(){

    let count = 0;

    const sayHello = (e) => {

        e.target.textContent = 'OUCH 🤔'
    }

    return(<>
        <button onDoubleClick={(e) => sayHello(e)}>Click me 😂</button>
    </>)

}

export default Button