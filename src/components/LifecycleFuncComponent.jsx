import { useState } from "react"


const LifecycleFuncComponent = () => {

    const [counter, setCounter] = useState(7)

    // let counter = 10

    const [color, setColor] = useState("brown")
    
    const increment = () => {

        setCounter(counter + 10)
        // counter += 10
    }

    console.log("render")
    console.log("counter", counter)

     return <div>
        counter : {counter}

        <br />

        <button onClick={increment}>Increment</button>
        <button onClick={() => setCounter(counter + 10)}
        >Increment v2</button>

        <hr />

        <div style={{
         color : color
        }}>Text with color</div>

        <button
            onClick={() => setColor("green")}
            >change to green</button>

        <button
        onClick={() => setColor("red")}
         >change to red</button>

    </div>

}

export default LifecycleFuncComponent