import React, {useEffect} from 'react'
import { baseURL } from '../../constants/baseURL'
import { useDispatch, useSelector } from 'react-redux'
import { getImage , getImages} from '../../redux/actions/imageActions'
import { useParams } from 'react-router-dom'
import PhotoFrame from '../../components/PhotoFrame'
import PhotoAlbum from '../../components/PhotoAlbum'
import { useLocation } from 'react-router-dom'

function PhotoUnique() {
  const dispatch = useDispatch()
  const location = useLocation()
  const image = useSelector(state => state.image)
  const imageList = useSelector(state => state.imageList)
  const {error, loading, data} = imageList

  const { id } = useParams();
  

  useEffect(()=>{
    dispatch(getImage(id))
    dispatch(getImages())
  },[dispatch, location])

 
  return (
    <main>
      <PhotoFrame image={baseURL+image.data.image}/>
      <h2 style={{textAlign:'center', padding:'12px 32px'}}>Mais como este</h2>
      <PhotoAlbum arrayImages={data}/>
    </main>
    
  )
}

export default PhotoUnique