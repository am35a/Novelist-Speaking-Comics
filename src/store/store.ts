import { writable } from 'svelte/store'

export let user: any = writable(
    {
        autoSignIn: true as boolean, // use onMount to auto Sign In
        signedIn: false as boolean,
        email: 'info@mobitoon.ru' as string,
        password: '123456' as string,
    }
)

export let route: any = writable('forgottenpass')

// export function changeRoute(newRoute: string) {
//     route = (newRoute !== 'signin' && newRoute !== 'signup' && newRoute !== 'forgottenpass') ? newRoute : 'signin'
// }

export let message: any = writable(
    {
        status: 'info' as string,
        text: '' as string,
        routeout: '' as string
    }
)