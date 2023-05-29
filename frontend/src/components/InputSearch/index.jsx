import React , {useEffect, useState, useRef} from 'react'
import { InputSearchStyle } from './style'
import { XCircle } from 'phosphor-react'

function InputSearch() {
    const [focus, setFocus] = useState(false)
    const [subFocus, setSubFocus] = useState(false)
    const [text, setText] = useState('')
    const textLength = text.length>0 ? true : false
    const refPopHover = useRef(null)

    useEffect(() =>{
        document.addEventListener("click",handleClickOutside, true)
    }, [focus])

    const handleClickOutside = (e) => {
        try{
            if(!refPopHover.current.contains(e.target) && !focus){
                setSubFocus(false)
            } else {
                setSubFocus(true)
            }
        }catch{
            {}
        }
        
    }

  return (
    <InputSearchStyle>
        <div className={`inputContainer ${(focus||subFocus) && 'inputFocus'}`}>
            <svg className={`searchIcon ${focus && 'none'}`}>
                <path d="M10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6m13.12 2.88-4.26-4.26A9.842 9.842 0 0 0 20 10c0-5.52-4.48-10-10-10S0 4.48 0 10s4.48 10 10 10c1.67 0 3.24-.41 4.62-1.14l4.26 4.26a3 3 0 0 0 4.24 0 3 3 0 0 0 0-4.24"></path>
            </svg>
            <input 
            id='searchInput'
            type='text'
            value={focus?text:''}
            placeholder='Search'
            onChange={(e) => setText(e.target.value)}
            onFocus={() => {setFocus(true);setSubFocus(true)}}
            onBlur={() => {setFocus(false);setText('')}}
            />
            {
                textLength&&focus&&<button className='iconButton' onClick={() => {setText('');setFocus(false)}}>
                    <XCircle size={24} weight="fill"/>
                </button>
            }
        </div>
        {
            (subFocus || focus )
            &&
            <div  className='popHoverContentInput' ref={refPopHover} onClick={()=>setSubFocus(true)}>
                {
                    textLength
                    ?''
                    :
                    <div>
                        <p>Pesquisas recentes</p>
                        <div>
                            <div className='tag'>Portfolio</div>
                        </div>
                        <p>Destaque de compras para você</p>
                        <div>
                            <div><img src='' alt='destaque'></img></div>
                            <div><img src='' alt='destaque'></img></div>
                            <div><img src='' alt='destaque'></img></div>
                            <div><img src='' alt='destaque'></img></div>
                        </div>
                    </div>
                }
                
            </div>
        }
    </InputSearchStyle>
  )
}

export default InputSearch