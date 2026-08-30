import { useState } from "react"

export default function CCGraphEditor() {
  const [name, setName] = useState('Untitled Graph');

  return (
    <>
      <input type='text' id='ccgraph-name' className='ccgraph-name' value={name} onChange={(event)=>{
        setName(event.target.value)
      }} />
      <p>AAA</p>
    </>
  )
}