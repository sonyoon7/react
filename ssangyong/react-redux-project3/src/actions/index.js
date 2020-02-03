export const SMOVIE = 'SMOVIE';
export const RMOVIE = 'RMOVIE';
export const BOXOFFICE = 'BOXOFFICE';

/* 
    rmovie(1)

    export function rmovie(page,fd)

    

*/

export function rmovie() {
    return { type: RMOVIE }
}
export function smovie() {
    return { type: SMOVIE }
}
export function boxoffice() {
    return { type: BOXOFFICE }
}