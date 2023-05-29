import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getImages } from '../../redux/actions/imageActions'

import PhotoAlbum from '../../components/PhotoAlbum'


function Home() {
  const dispatch = useDispatch()
  const imageList = useSelector(state => state.imageList)
  const {error, loading, data} = imageList
  
  useEffect(()=>{
    dispatch(getImages())
  },[dispatch])

  return (
    <main style={{width:"100%"}}>
      <PhotoAlbum arrayImages={data}/>
    </main>
  )
}

export default Home