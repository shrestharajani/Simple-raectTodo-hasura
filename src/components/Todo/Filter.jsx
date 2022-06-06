import React, { useState } from 'react'

export default function Details({ item }) {
    const [filter, setFilter] = useState('all')

    if (filter === 'completed') {
        console.log("todo", item.filter(item => item.completed))
        return item.filter(item => item.completed)
    }

    if (filter === 'not-completed') {
        console.log("todo not", item.filter(item => !item.completed))
        return item.filter(item => !item.completed)
    }

    const todoList = [];
    item.forEach((todo, index) => {
        console.log("fdkj", todo)
        // todoList.push(<TodoItem key={index} index={index} todo={todo} />);
    });

    return (
        <div className='details'>
            <h4>Filter Todos</h4>
            <button type='submit' className='all-button' onClick={() => {
                setFilter('all')
            }}>All</button>
            <button type='submit' className='complete-button' onClick={() => {
                setFilter('completed')
            }}>Completed</button>
            <button type='submit' className='non-complete-button' onClick={() => {
                setFilter('not-completed')
            }}>Not Completed</button>
        </div>
    )
}