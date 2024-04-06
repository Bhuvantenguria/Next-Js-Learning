

export default function ProductShow(props) {
    console.log(props)
  return (
    <div style={{border:'2px solid white' , margin:'10px' , padding:'20px'}}>
        <h2>{props.title}</h2>
        <h2>{props.price}</h2>
      
    </div>
  )
}
