import { writable } from 'svelte/store'

const menu = writable(false)
const more = writable(false)
const sendEmail = writable(false)

export { menu, more, sendEmail }