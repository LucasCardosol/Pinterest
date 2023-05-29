import { useState , useRef, useEffect} from 'react';
import { Link } from 'react-router-dom';
import * as HoverCard from '@radix-ui/react-hover-card';

import { baseURL } from '../../constants/baseURL';
import { PhotoContainer } from './style';
import share from '../../assets/icons/share.svg'
import points from '../../assets/icons/3points.svg'

function PhotoItem({image, id}){
  
  /*<Link to={`/pin/${id}`}>
            <img src={baseURL+image}></img>
          </Link>*/
  return(
    <PhotoContainer> 
      <img src={baseURL+image}></img>
      <Link className='link' to={`/pin/${id}`} onClick={() => window.scrollTo(0, 0)}></Link>
      <button className='normalButton salvar'><p>Salvar</p></button>
      <div className='bottomButtons'>
        <button>
          <img src={share}></img>
        </button>
        <button className='normalButton'>
          <img src={points}></img>
        </button>
      </div>
    </PhotoContainer>
  )
}
export default PhotoItem