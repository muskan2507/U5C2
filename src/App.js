import { Input } from "./Components/Input";
import { Image } from "./Components/Image";
import { Pagination } from "./Components/Pagination";
import { useState } from "react";
import eye from "./Components/eye.svg"

function App() {
  const [text,setText]=useState("text")
  const [show,setShow]=useState(false)
  const onChange=(e)=>{
    setText(e.target.value)
    console.log(text)
  }
  const rightLogoOnClick=()=>{
    setShow(!show)
    console.log(show)
   if(show){
     setText("password")
   }
  }
  return (
    <div className="container">
      <Input type={text} size={"medium"} onChange={onChange} rightLogoOnClick={rightLogoOnClick} rightLogo={eye} variant={"outline"} />

      <Image src={"https://avatars.githubusercontent.com/u/98902869?v=4"} alt={"error"} fit={"cover"} height={"100px"} width={"100px"} borderRadius={"100"} />

      <Pagination onPageChange={onChange} selected={1} total={20} />
    </div>
  );
}

export default App;
