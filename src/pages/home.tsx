import React from 'react'
import { data } from '../data'
import Card from '../components/Card'
import { useState } from 'react'
import Icons from '../components/Icons'

const HomePage = () => {
    const [dataList, setDataList] = useState(data);

    const manipulateData = (id) =>
    {
        const myNextList = [...dataList];
        const house:any = myNextList.find(
          item => item.id === id
        );
        house.status = 'unavailable';
        setDataList(myNextList)
    
    }

    const iconHandling = (type) =>
    {
        var newList = data.filter(
          item => item.type === type
        )
        setDataList(newList)
    
    }

    const cards = dataList.map(item => {
        return(
          <Card
          id = {item.id}
          img = {item.img}
          rating = {item.rating}
          reviews = {item.reviews}
          location = {item.location}
          desc = {item.desc}
          price = {item.price}
          status = {item.status}
          onClick = {() => {manipulateData(item.id)}}
          />
        )
      })

  return (
    <>
     <Icons 
          onIconChange ={iconHandling}
        />
    <div className=' gap-6 ml-6 relative top-8 left-2 grid 
    2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1' >
       {cards}
    </div>
    </>
   
  )
}

export default HomePage