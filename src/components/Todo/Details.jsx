import React from 'react'
export default function Details({ value, setAddValue }) {
    const completeItems = () => {
        setAddValue(value.filter(item => item.completeValue))
    }

    const allItems = () => {
        setAddValue(value)
    }

    const nonCompletedItems = () => {
        setAddValue(value.filter(item => !item.completeValue))
    }

    return (
        <div className='details'>
            <h4>Filter Todos</h4>
            <button type='submit' className='all-button' onClick={allItems}>All</button>
            <button type='submit' className='complete-button' onClick={completeItems}>Completed</button>
            <button type='submit' className='non-complete-button' onClick={nonCompletedItems}>Not Completed</button>
        </div>
    )
}