import React from 'react'

const ToDoList = (props) =>  {

   function handleCheckboxChange(todo) {
        console.log('toggle checkbox')
        props.toggleCheckBox(todo)
    }

    function handleItemClick(item) {
        console.log(item, 'ITEM')
    }

   function renderList() {
        return props.list.map((todo) => 
            <li key={ todo.id } onClick={handleItemClick.bind(this, todo)}>
                <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={(e) => handleCheckboxChange(todo)}
                ></input>
                {todo.name}
            </li>
        )
    }

    return(
        <ul>
            {renderList()}
        </ul>
    )
}

export default ToDoList