import React from 'react'

export default function Details({ setFilter }) {
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