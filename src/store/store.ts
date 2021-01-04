import { writable } from 'svelte/store'

export let user: any = writable(
    {
        signedIn: false
    }
)

export let route: any = writable('signin')
