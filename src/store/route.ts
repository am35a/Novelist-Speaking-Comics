// simple route simulation

import { writable } from "svelte/store"

// import { user } from './store'

function f() {
    let data = {
        history: ['signin'],
        current: 'signin' as string, //signin as default
        // isHistory: false as boolean
    }
    
    const { subscribe, set } = writable(data)

    return {
        subscribe,
        goto: (route: string) => {
            if(data.history[data.history.length - 1] !== route) {
                data.history.push(route)
                data.current = route
                set(data)
            }
            console.log(data.current)
        },
        back: () => {
            if(data.history.length > 1) {
                data.history.pop()
                data.current = data.history[data.history.length - 1]
                if(data.current === 'about' || data.current === 'help')
                    route.back()
                else
                    set(data)
                // data.isHistory = true
            }
            // else
            //     data.isHistory = false
            // set(data)
        }
    }
}

export const route = f()