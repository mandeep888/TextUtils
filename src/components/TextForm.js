import React ,{useState} from 'react'



export default function TextForm(props) {
  const [text,setText] = useState("");
  let handleUpClick = ()=>{
    console.log("Uppercase was called");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercaase" , "success");
  }
  let handleLowClick = ()=>{
    console.log("lowercase was called");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercaase" , "success");
  }
  let handleOnChange = (event)=>{
    console.log("Onchange was called");
    setText(event.target.value);
  }
  let handleClearClick = ()=>{
    let newText = '';
    setText(newText);
    props.showAlert("Cleared the text" , "success");
  }

  let handleCopy = ()=>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied" , "success");
  }
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra spaces" , "success");
  }

  return (
    <>
<div className="container mb-3 my-3" style={{color:props.mode==='dark'?'white':'black'}}>
  <h1>{props.heading}</h1>
  <textarea className="form-control" id="myBox" rows="8" value={text} style={{backgroundColor : props.mode==='dark'?'#4e4e4e':'white' , color:props.mode==='dark'?'white':'black' }} onChange={handleOnChange}></textarea>
  <button disabled={text.length===0} className="btn btn-primary mt-3 mx-1 my-1" onClick={handleUpClick} >Convert to uppercase</button>
  <button disabled={text.length===0} className="btn btn-primary mt-3 mx-1 my-1" onClick={handleLowClick} >Convert to lowercase</button>
  <button disabled={text.length===0} className="btn btn-primary mt-3 mx-1 my-1" onClick={handleClearClick} >Clear Text</button>
  <button disabled={text.length===0} className="btn btn-primary mt-3 mx-1 my-1" onClick={handleCopy} >Copy text</button>
  <button disabled={text.length===0} className="btn btn-primary mt-3 mx-1 my-1" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
</div>
<div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
  <h1>Your text Summary</h1>
  <p>{text.split(" ").filter((element)=>element.length!==0).length } words , {text.length} characters</p>
  <p>{0.08*text.split(" ").filter((element)=>element.length!==0).length} Minutes required to read this text</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Nothing to preview"}</p>
</div>
    </>
  )
}
