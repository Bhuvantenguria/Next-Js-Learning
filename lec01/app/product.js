"use client"

export default function ProductButton(props){
    console.log(props)
    return (
        <div>
            <button onClick={() => {
                console.log(props.price)
            }}>Price</button>
        </div>
    )
}