import { writable } from 'svelte/store'

export let user: any = writable(
    {
        autoSignIn: true as boolean, // use onMount to auto Sign In
        signedIn: false as boolean,
        email: 'info@mobitoon.ru' as string,
        password: '123456' as string,
    }
)

export let message: any = writable(
    {
        status: 'info' as string,
        text: '' as string,
        routeout: '' as string
    }
)