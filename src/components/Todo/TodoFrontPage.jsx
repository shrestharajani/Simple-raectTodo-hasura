import React from 'react'
import Form from './Form'

export const TodoFrontPage = () => {
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Todo Lists</h1>
            <div className='card'>
                <div className='card-body'>
                    <Form />
                </div>
            </div>
        </>
    )
}
