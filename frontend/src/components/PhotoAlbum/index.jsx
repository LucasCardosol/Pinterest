import React , { useState, useEffect }from 'react'

import { PhotoAlbumContainer } from './style';
import PhotoItem  from '../PhotoItem';


function PhotoAlbum({arrayImages}) {
  const data = arrayImages
  const [screenSize, getDimension] = useState(window.innerWidth);
  const numberOfColumns = parseInt(screenSize/252)
  const arrayColumn = Array(numberOfColumns).fill(0).map((_, index) => index + 1);
    
  const setDimension = () => {
    getDimension(window.innerWidth)
  }
  
  useEffect(() => {
    window.addEventListener('resize', setDimension);
    return(() => {
        window.removeEventListener('resize', setDimension);
    })
  }, [screenSize])

  const jumpIndexOfArrayColumn = (column) => {
    let numbers = []
    for(var i = column;i<data.length;i += numberOfColumns){
      numbers.push(data[i])
    }
    return numbers
  }

  return (
    <PhotoAlbumContainer>
      {
        arrayColumn.map(column =>
          <div key={column} className='flex-collumn'>
          {jumpIndexOfArrayColumn(column-1).map((item)=>
            <PhotoItem key={item.image} image={item.image} id={item._id}/>
          )}
          </div>
        )
      }
    </PhotoAlbumContainer>
  )
}

export default PhotoAlbum