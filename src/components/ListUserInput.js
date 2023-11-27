import {React, useState} from 'react'


function ListUserInput () {


   const [text, setText] = useState("Input Text");


   const change = event => {
       setText(event.target.value)
   }


   return (
    //    <input onChange={change} value={text}/>
        <div>
            <p>Enter Items to Add:</p>
            <input onChange={change} value={text}/>
        </div>
   );
}


export default ListUserInput;