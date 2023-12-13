import React from "react";

import TodoComponent from "./Components/todoComponent";
import TodoContextProvider from "./Contexts/TodoContext";

const App = () =>{
    return(
       <div className="ui raised very padded text container segment">
        < TodoContextProvider>
            <TodoComponent />
        </TodoContextProvider>
       </div>
    )
}

export default App;