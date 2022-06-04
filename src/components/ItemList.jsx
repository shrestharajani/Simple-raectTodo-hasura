import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import { Todo } from './Todo'

export default function ItemList({ value,
    setAddValue,
    setValue,
    toggleAddEdit,
    setEditId
}) {
    const [pageNumber, setPageNumber] = useState(0);
    const itemPerPage = 5
    const pageCount = Math.ceil(value.length / itemPerPage)
    const currentVisitedItems = pageNumber * itemPerPage

    const deleteItem = (id) => {
        const deletedItem = value.filter((item) => item.id !== id)
        setAddValue(deletedItem)
    }

    const editItem = (id) => {
        const findItem = value.find((item) => item.id === id)
        setValue(findItem.items)
        toggleAddEdit(false)
        setEditId(id)
    }

    const checkItem = (id) => {
        setAddValue(
            value.map(val => {
                if (val.id === id) {
                    return { ...val, completeValue: !val.completeValue }
                }
                return val
            })
        )
    }

    const handleChange = (e) => {
        setPageNumber(e.selected)
    }

    const displayItem = value.slice(currentVisitedItems, currentVisitedItems + itemPerPage).map((item, index) => (
        <Todo key={index}
            item={item}
            id={item.id}
            checkItem={checkItem}
            editItem={editItem}
            deleteItem={deleteItem} />
    ))

    return (
        <>
            {value.length === 0 ?
                <div style={{ textAlign: 'center', paddingTop: '10px' }}> No todos yet!!</div> :
                displayItem
            }
            <ReactPaginate
                pageCount={pageCount}
                onPageChange={handleChange}
                containerClassName='pagination-div'
                previousClassName='previous-button'
                nextClassName='next-button'
                disabledClassName='disabled-button'
                breakClassName='break-label'
                activeClassName='active-button' />
        </>

    )
}