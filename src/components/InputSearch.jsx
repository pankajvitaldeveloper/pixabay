import React, { useContext } from 'react'
import Pixabay from '../context/PixabayContext'

const InputSearch = () => {
    const {setSearchInput} = useContext(Pixabay)
  return (
    <div className="offset-md-3 col-md-6 mt-4">
              <div className="input-wrap">
                <input type="text" className='form-control' onChange={(e)=>setSearchInput(e.target.value)} />
              </div>
            </div>
  )
}

export default InputSearch