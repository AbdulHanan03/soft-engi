import React from "react"

const Grid = () => {
  return (
    <section className="grid grid-cols-2">
    <img className=" h-64 sm:h-72 md:h-80  flex-row justify-self-center " src="src/images/grid.png"/>
   
    <div className=" pl-14 self-center ">
        <h1 className="font-bold 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl ">Online Experience</h1>
        <p className="xl:text-lg lg:text-base md:text-sm sm:text-sm pl-1 pt-2 text-gray-600">Join unique interactive activities led by<br/>
        one-of-a-kind hosts-all without leaving home.</p>
    </div>
    </section>
  )
}

export default Grid