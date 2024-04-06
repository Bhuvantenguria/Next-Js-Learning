"use client"

import { useRouter } from "next/navigation"

export default function ProductButton({id}) {
    const router = useRouter();
    function handleClick(){
        // console.log(id)
        return router.push(`/products/${id}`)
    }
  return (
    <div>
      <button onClick={() => handleClick()}>Details</button>
    </div>
  )
}
