import React, {useState} from "react";

const App=()=>{
    const [tap, setTap] = useState("")



    return(
        <div>
            <div className=" tabs">
            <button className=" tab" id="#Home-Tab" onClick={()=>setTap("Home")}>Home</button>
            <button  className=" tab" id="#About-Tab" onClick={()=>setTap("About")}>About</button>
            <button className="tab" id="#Features-Tab" onClick={()=>setTap("Features")}>Features</button>
            </div>

            <div className="viewport">
         {tap == "Home" && <p>Home, Pages Go Here .</p>}
         {tap == "About" && <p>About, Pages Go Here .</p>}
         {tap == "Features" && <p>Features, Pages Go Here .</p>}
            </div>
        </div>
    )
}

export default App;
