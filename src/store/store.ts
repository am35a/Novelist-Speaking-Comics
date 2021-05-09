import { writable } from 'svelte/store'

export let user: any = writable(
    {
        signedIn: true as boolean, // false as default
        email: 'info@mobitoon.ru' as string,
        password: '123456' as string,
        settings: {
            autoSignIn: true as boolean, // use onMount to auto Sign In
            isDarkTheme: true as boolean
        } as any
    }
)

export let message: any = writable(
    {
        status: 'info' as string,
        text: '' as string,
        routeout: '' as string
    }
)