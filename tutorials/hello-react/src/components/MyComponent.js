import React from 'react'

export default function MyComponent({name,children}) {
    // defaultProps:{
    //     name:'기본이름'
    // }
    return (
        <div>
            제이름은 {name}입니다
        </div>
    )

}

