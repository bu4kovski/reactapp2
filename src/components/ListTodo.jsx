import { useState } from "react";

const ListTodo = (props) => {
  const { todos, } = props;

  const style = {
    border: "1px solid black",
    borderCollapse: "collapse"
    padding : "5px",
    
  };
  return (
    <div>
      <table style={style}>
        <thead>
        <tr>
            <td>userID</td>
            <td>ID</td>
            <td>Title</td>
            <td>Comleted</td>
            <td>Delete</td>
            <td>Complete</td>
        </tr>
        </thead>
        <tbody>
            {todos.map(
                (todo) => 
            (!todo.completed ||
            displayCompleted) &&
            (
               <tr>
                 <td>{todo.userId}</td>
                 <td>{todo.id}</td>
                 <td className={todo.completed ? "mark-as-done" : ""}>
                 {todo.title}</td>
                 <td><input type="checkbox" checked={todo.completed} />
                 </td>
                 <td>
                    <button onClick={() => markAsCompleted(todo.id)}>XX</button>
                    </td>
                    <td>
                    <button onClick={() => deleteTodo(todo.id)}>X</button>
                 </td>
                 <td>
                  <button>[x]</button>
                </td>
               </tr> 
           ) )}
        </tbody>
        </table>
     
      <div>
        <label><Display></Display></label>
      </div>

    </div>
  );
};

export default ListTodo;
