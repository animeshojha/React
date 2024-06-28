import { useState } from "react"

function App() {

  const [color, setcolor] = useState("olive");

  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}>

      <div className="fixed flex flex-wrap
       justify-center bottom-12 inset-x-0 px-2">

        <div className="flex flex-wrap justify-center
      gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

          <button
          onClick={()=>setcolor("Green")}
            className="outline-none px-4 py-1 rounded-full text-white
         shadow-lg"
            style={{ backgroundColor: "Green" }}>Green</button>
          <button
          onClick={()=>setcolor("Blue")}
            className="outline-none px-4 py-1 rounded-full text-white
         shadow-lg"
            style={{ backgroundColor: "Blue" }}>Blue</button>
          <button
          onClick={()=>setcolor("Red")}
            className="outline-none px-4 py-1 rounded-full text-white
         shadow-lg"
            style={{ backgroundColor: "red" }}>Red</button>
          <button
          onClick={()=>setcolor("Black")}
            className="outline-none px-4 py-1 rounded-full text-white
         shadow-lg"
            style={{ backgroundColor: "Black" }}>Black</button>
          <button
          onClick={()=>setcolor("Gray")}
            className="outline-none px-4 py-1 rounded-full text-white
         shadow-lg"
            style={{ backgroundColor: "Gray" }}>Gray</button>
          <button
          onClick={()=>setcolor("purple")}
            className="outline-none px-4 py-1 rounded-full text-white
         shadow-lg"
            style={{ backgroundColor: "purple" }}>purple</button>
          <button
          onClick={()=>setcolor("pink")}
            className="outline-none px-4 py-1 rounded-full text-white
         shadow-lg"
            style={{ backgroundColor: "pink" }}>pink</button>
        </div>
      </div>
    </div>
  )
}

export default App
