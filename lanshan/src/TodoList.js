import { useState, useEffect } from "react";

export default function TodoList() {
  const [value, setValue] = useState("");
  const [todoList,setTodoList] = useState(['吃饭','睡觉','写代码']);
  const addList = (e)=> {   
        const newTodoList = todoList.concat(e)
        setTodoList(newTodoList)
  }
  const delList = (e)=>{    
    const newTodoList = todoList.filter(item => item !== e)
    setTodoList(newTodoList)
  }
  const searchList = (e) => {   
        let newTodoList = todoList.filter(item => item ==e)
        if(e){  
          setTodoList(newTodoList)
        }else { 
          setTodoList(todoList)
        }
  }
  const modifyList = (e)=>{ 
    let res = prompt('请输入修改的任务')
    const newMModifyList = todoList.map(item =>{  
      if(item == e){  
        item =res
        return item
      }else { 
        return item
      }
    })
    setTodoList(newMModifyList)
    }
    
  return (
    <>
      <div>
        <input
          placeholder="请输入内容"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button onClick={()=>addList(value)}>增加</button>
        <button onClick={()=>searchList(value)}>搜索</button>

      </div>
      <ul>  
          { 
            todoList.map(item => 
                <li>    
                    {item}
                    <button onClick={() => modifyList(item)}>修改</button>
                    <button onClick={()=>delList(item)}>删除</button>
                </li>
            )
        }
      </ul>
    </>
  );
}
