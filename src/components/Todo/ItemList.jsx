import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import { Todo } from './Todo'
import { DELETE_ITEM, GET_ITEMS, TOGGLE_COMPLETE } from '../graphql/graphqlOperations';
import { useMutation, useQuery } from '@apollo/client';
import { toast } from 'react-toastify';
import Details from './Filter';

export default function ItemList(
    {
        setValue,
        toggleAddEdit,
        setEditId
    }) {
    const { loading, error, data } = useQuery(GET_ITEMS);
    const [deletedItem] = useMutation(DELETE_ITEM)
    const [competedItem] = useMutation(TOGGLE_COMPLETE)
    const [pageNumber, setPageNumber] = useState(0);
    const itemPerPage = 5
    // const pageCount = Math.ceil(data.todos.length / itemPerPage)
    const currentVisitedItems = pageNumber * itemPerPage

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const deleteItem = (id) => {
        deletedItem({
            variables: { id: id },
            update: (cache) => {
                const existingItems = cache.readQuery({
                    query: GET_ITEMS
                })
                const newItem = existingItems.todos.filter(item => item.id !== id)
                cache.writeQuery({
                    query: GET_ITEMS,
                    data: { todos: newItem }
                })
            }
        })
        toast.success("Item deleted successfully", {
            icon: '😄'
        });
    }

    const editItem = (id) => {
        const findItem = data.todos.find((item) => item.id === id)
        setValue(findItem.items)
        toggleAddEdit(false)
        setEditId(id)
    }

    const checkItem = (id, completed) => {
        competedItem({
            variables: { id: id, completed: !completed },
            update: (cache) => {
                const existingItem = cache.readQuery({
                    query: GET_ITEMS
                })
                const newItem = existingItem.todos.map(item =>
                    item.id === id ? { ...item, completed: !completed } : item
                )
                cache.writeQuery({
                    query: GET_ITEMS,
                    data: { todos: newItem }
                })
            }
        })
    }

    const handleChange = (e) => {
        setPageNumber(e.selected)
    }

    const displayItem = data.todos.slice(currentVisitedItems, currentVisitedItems + itemPerPage).map((item, index) => (
        <Todo key={index}
            items={item.items}
            id={item.id}
            completed={item.completed}
            checkItem={checkItem}
            editItem={editItem}
            deleteItem={deleteItem} />
    ))

    return (
        <>
            {data.todos.length === 0 ?
                <div style={{ textAlign: 'center', paddingTop: '10px' }}> No todos yet!!</div> :
                displayItem
            }
            <Details item={data.todos} />
            <ReactPaginate
                // pageCount={pageCount}
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