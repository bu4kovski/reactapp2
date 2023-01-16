import LifecycleFuncComponent from "./components/LifecycleFuncComponent";
import LifecycleClassComponent from "./components/LifecycleClassComponent";
import { LogIn } from "./components/LogIn"

import { Input } from "./components/Input"
import { useState } from "react";
import {DispayDropdown} from "./components/DisplayDropdowns"

const App = () => {


 const [username, setUsername] = useState("")
 const [password, setPassword] = useState("")
 const [comment, setComment] = useState("")

 const [btnText, setBtnText] = useState("Show")

 const [fieldType, setFieldType] = useState("password")

 

  return (<>
    
   <Input 
   type="text"
   placeholder="Username"
   value={username}
   onChange={e => setUsername(e.target.value)}
   />

   <Input 
   type={fieldType}
   placeholder="Password"
   value={password}
   name="password"
   btnText={btnText}
   onChange={e => {
    
    
    setPassword(e.target.value)
   }}
   onMouseDown={() => {
    console.log("onMouseDown")
    setFieldType("text")
    setBtnText("Hide")
  }}
   onMouseUp={() => {
   console.log("onMouseUp")
   setFieldType("text")
   setBtnText("Show")
   }}

   />

   <Input
    type="text"
    placeholder="Comment"
    value={comment}
    onChange={e => setComment(e.target.value)}
    name="comment"
     />

    </> );

  }


  // {/* <LifecycleFuncComponent />
  // <LifecycleClassComponent /> */}

  //test//

  // </>);
// }
export default App;