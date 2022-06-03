import React, { useState } from 'react'

export default function Textform() {
  const onchange=(event)=>{
    console.log("onchanged")
    setText(event.target.value)
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "));
  };
  
  
  const [text,setText]=useState("")
  return (
      
    <>
<input type="text" name="name" id="name"  onChange={onchange}  value={text} minLength={5}required  placeholder='enter text here'/ >  
  <div className="class"></div>
<button disabled={text.length<5}  >submit me</button>
<button disabled={text.length===0} onClick={handleExtraSpaces}>remove extra spaces</button>
<p>{text.length} characters</p>

</>
  )
}
