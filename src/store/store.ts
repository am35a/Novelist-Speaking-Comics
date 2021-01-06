import { writable } from 'svelte/store'

export let user: any = writable(
    {
        autoSignIn: true as boolean, // use onMount to auto Sign In
        signedIn: false as boolean,
        email: 'info@mobitoon.ru' as string,
        password: '123456' as string,
    }
)

export let route: any = writable('signin')

export let router: any = writable(
    {
        goto: function (route: string) {
            if(this.current() !== route)
                this.history.push(route)
            console.log(this.history)
        },
        back: function () {
            this.history.pop()
            console.log(this.history)
        },
        current: function() {
            return this.history.length ? this.history[this.history.length - 1] : false
        },
        history: []
    }
)
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