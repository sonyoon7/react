// 상수값 등록
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const SET_DIFF = 'SET_DIFF'

/* 
    action => type
    스프링으로 치면 @RequestMapping("/board/list")
*/

//request mappting 개념과 동일
export function increment() {
    return {
        type: INCREMENT
    }
}

export function decrement() {
    return {
        type: DECREMENT
    }
}
export function setDiff(value) {
    return {
        type: SET_DIFF,
        diff: value
    }
}