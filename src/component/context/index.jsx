import { createContext } from 'react';

export const listContext = createContext({
    list: [
        { id: 0, desc: 'dawoon1' },
        { id: 1, desc: 'dawoon-2' },
        { id: 2, desc: 'dawoon-3' },
    ]
})

const ListProvider = ({children}) =>{
    return
}