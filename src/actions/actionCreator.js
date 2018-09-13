import { SELECTED_ENTRY, ADD_ENTRY, DELETE_ENTRY, MODIFY_ENTRY } from './actionCreator'

/* TODO - define a new Id for an entry */
let newId = ''

export const addEntry = object => ({
    type: ADD_ENTRY,
    id: newId,
    text: object.text,
    replies: object.replies,
    payloads: object.payloads,
    routes: object.routes,
    tag: object.start,
    lesson: "allornothing"
})

export const selectEntry = (id) => ({
    type: SELECTED_ENTRY,
    id: id
})

export const deleteEntry = (id) => ({
    type: DELETE_ENTRY,
    id: id
})

export const modifyEntry = (id) => ({
    type: MODIFY_ENTRY,
    id: id
})