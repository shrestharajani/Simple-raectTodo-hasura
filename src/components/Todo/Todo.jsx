import React, { useEffect, useState } from 'react'

export const Todo = ({ items, id, checkItem, editItem, deleteItem, completed }) => {
    const [checkTodo, setCheckTodo] = useState(false)
    useEffect(() => {
        setCheckTodo(completed)
    }, [completed])

    return (
        <div className='items'>
            <input type='checkbox' checked={checkTodo} onChange={() => { checkItem(id, completed) }} />
            <div className='item-data'>{completed ?
                <span className='items-item marked'>{items}</span> :
                <span className='items-item'>{items}</span>}</div>

            <div className="edit">
                <button disabled={completed} style={{ border: 'inherit', background: 'transparent' }}><i className='fa fa-edit'
                    onClick={() => { editItem(id) }}
                    style={{ cursor: 'pointer' }} /></button>
            </div>

            <div className="delete">
                <i className='fa fa-trash' onClick={() => { deleteItem(id) }} style={{ cursor: 'pointer' }} />
            </div>
        </div>
    )
}
