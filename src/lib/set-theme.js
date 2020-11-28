
import { isBrowser } from './is-browser'
import { light, dark } from '../theming/theme'

export const setTheme = (theme) => {
    let matchColorScheme = false
    /** Check localStorage */
    if(localStorage.getItem('theme'))
        matchColorScheme = localStorage.getItem('theme')
    /** Check browser environment */
    if(isBrowser) 
        matchColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        localStorage.setItem('theme', 'dark')
    return theme = matchColorScheme ? dark : light
}
