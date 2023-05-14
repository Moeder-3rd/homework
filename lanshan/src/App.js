import "./App.css";
import { useContext, useState, useEffect, createContext,useRef } from "react";
import TodoList from './TodoList'
const Context = createContext();
function ComA() {
  const count = useContext(Context);
  return <div>the number is {count}</div>;
}
function Submit() { 
  const [count, setCount] = useState(0);
return(
  <div>
    <Context.Provider value={count}>
      <ComA></ComA>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        点我发布+1
      </button>
    </Context.Provider>
  </div>
)
}

function App() {  
  return( 
    <>  
    <Submit/>
    <span>------------------------------------------------</span>
    <div> 
    <TodoList></TodoList>
    </div>
    </>
  )
}

export default App;
