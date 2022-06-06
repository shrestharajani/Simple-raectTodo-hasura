import { useMutation } from '@apollo/client';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { ADD_ITEMS, GET_ITEMS, UPDATE_ITEM } from '../graphql/graphqlOperations';
import ItemList from './ItemList';

export default function Form() {
    const [itemToAdd, { loading, error }] = useMutation(ADD_ITEMS)
    const [itemToEdit] = useMutation(UPDATE_ITEM)
    const [value, setValue] = useState('');
    const [toggleAddEdit, setToggleAddEdit] = useState(true)
    const [editId, setEditId] = useState(null)

    if (loading) return <p>Inserting Items....</p>;
    if (error) return <p>Error :(</p>;

    const addItem = (e) => {
        e.preventDefault()
        if (value && !toggleAddEdit) {
            itemToEdit({
                variables: { id: editId, item: value },
                update: (cache, { data }) => {
                    const existingItem = cache.readQuery({
                        query: GET_ITEMS
                    })
                    const newItem = existingItem.todos.map((item) =>
                        item.id === editId ? data.update_todos.returning[0] : item
                    )
                    cache.writeQuery({
                        query: GET_ITEMS,
                        data: { todos: newItem }
                    })
                },
                onCompleted: () => {
                    setValue('')
                    setToggleAddEdit(true)
                    setEditId(null)
                }
            })
            toast.success("Item successfully edited !", {
                icon: '😄'
            });
        }
        else {
            itemToAdd({
                variables: { item: value },
                update: (cache, { data }) => {
                    const existingItems = cache.readQuery({
                        query: GET_ITEMS
                    })
                    const newItem = data.insert_todos.returning[0];
                    cache.writeQuery({
                        query: GET_ITEMS,
                        data: { todos: [...existingItems.todos, newItem] }
                    })
                },
                onCompleted: () => {
                    setValue('')
                    setToggleAddEdit(true)
                }
            })
            toast.success("Item successfully added !", {
                icon: '😄'
            });
        }
    }

    return (
        <>
            <form className='form'>
                <input
                    type='text'
                    value={value}
                    onChange={(e) => { setValue(e.target.value) }}
                    placeholder='Enter the item'
                />
                <button
                    disabled={!value}
                    className='add-button'
                    onClick={addItem}
                >
                    {toggleAddEdit ? "Add Items" : "Edit Items"}
                </button>
            </form>
            <ItemList
                setValue={setValue}
                toggleAddEdit={setToggleAddEdit}
                setEditId={setEditId}
            />
        </>
    )
}