import React, { useEffect, useState } from 'react'

export const Todo = ({ item, id, checkItem, editItem, deleteItem }) => {
    const [checkTodo, setCheckTodo] = useState(false)
    useEffect(() => {
        setCheckTodo(item.completeValue)
    }, [item])

    return (
        <div className='items'>
            <input type='checkbox' checked={checkTodo} onChange={() => { checkItem(id) }} />
            <div className='item-data'>{item.completeValue ?
                <span className='items-item marked'>{item.items}</span> :
                <span className='items-item'>{item.items}</span>}</div>

            <div className="edit" >
                <i className='fa fa-edit' onClick={() => { editItem(id) }} style={{ cursor: 'pointer' }} />
            </div>

            <div className="delete">
                <i className='fa fa-trash' onClick={() => { deleteItem(id) }} style={{ cursor: 'pointer' }} />
            </div>
        </div>
    )
}
