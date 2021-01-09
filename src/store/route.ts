// simple route simulation

import { writable } from "svelte/store"

function f() {
    let data = {
        history: ['signin'],
        current: 'signin' as string,
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
        },
        back: () => {
            if(data.history.length > 1) {
                data.history.pop()
                data.current = data.history[data.history.length - 1]
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