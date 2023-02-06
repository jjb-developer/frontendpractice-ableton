import { writable } from 'svelte/store'

const menu = writable(false)
const more = writable(false)

export { menu, more }