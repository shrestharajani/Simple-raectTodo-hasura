import { gql } from "@apollo/client";

export const GET_ITEMS = gql`
    query getItems {
    todos {
        id
        items
        completed
    }
}
`
export const ADD_ITEMS = gql`
    mutation addItems($item: String!) {
        insert_todos(objects: {items:$item}) {
            affected_rows
            returning {
                id
                items
                completed
            }
        }
    }
`

export const DELETE_ITEM = gql`
    mutation deleteItem($id: uuid!){
        delete_todos(where: {id: {_eq: $id}}) {
            affected_rows,
            returning {
                id
                items
                completed
            }
        }
    }
`

export const UPDATE_ITEM = gql`
    mutation updateItem($id:uuid!,$item:String!) {
        update_todos(where: {id: {_eq: $id}}, _set: {items: $item}) {
            returning {
                id,
                items,
                completed
            }
        }
    }
`

export const TOGGLE_COMPLETE = gql`
    mutation updateItem($id:uuid!,$completed:Boolean!) {
        update_todos(where: {id: {_eq: $id}}, _set: {completed: $completed}) {
            returning {
                id,
                items,
                completed
            }
        }
    }
`

// export const DISPLAY_COMPLETED = gql`
//     query getCompleted($completed:Boolean!) {
//         todos(where: {completed: {_eq: true}}) {
//             id
//             items
//             completed
//         }
//     }
// `

