import { ISAUTH_SET } from './isAuthTypes'

export const isAuthSet = (bool=false) => {
    return {
        type: ISAUTH_SET,
        payload:bool
    }
}