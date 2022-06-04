import React, { useEffect, useState } from 'react'
import Details from './Details';
import ItemList from './ItemList';

const getLocalStorage = () => {
    let items = localStorage.getItem("items")

    if (items) {
        return JSON.parse(items)
    } else {
        return []
    }
}
export default function Form() {
    const [addValue, setAddValue] = useState(getLocalStorage())
    const [value, setValue] = useState('');
    const [toggleAddEdit, setToggleAddEdit] = useState(true)
    const [editId, setEditId] = useState(null)

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const addItem = (e) => {
        e.preventDefault()
        if (!value) {
            alert("Cannot be empty");
        }
        else if (value && !toggleAddEdit) {
            setAddValue(
                addValue.map(item => {
                    if (item.id === editId) {
                        return { ...item, items: value }
                    }
                    return item
                })
            )
            setValue('')
            setToggleAddEdit(true)
            setEditId(null)
        }
        else {
            const itemWithId = { id: Date.now(), items: value, completeValue: false }
            setAddValue([...addValue, itemWithId])
            setValue('')
            setToggleAddEdit(true)
            console.log(addValue)
        }
    }

    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(addValue))
    }, [addValue])

    return (
        <>
            <form className='form'>
                <input
                    type='text'
                    value={value}
                    onChange={handleChange}
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
            <ItemList value={addValue}
                setAddValue={setAddValue}
                setValue={setValue}
                toggleAddEdit={setToggleAddEdit}
                setEditId={setEditId}
            />
            <Details value={addValue}
                setAddValue={setAddValue} />
        </>
    )
}