import React from 'react'

type PropsType = {
    type: "button" | "submit" | "reset" | undefined
    title: string
}

export const Button = (props: PropsType) => {
    return (
        <button type={props.type} className='button'>
            {props.title}
        </button>
    )
}