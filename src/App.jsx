import { useContext} from 'react'
import './App.css'
import PixabayContext from './context/PixabayContext';
import FetchdataBycategory from './components/FetchdataBycategory';
function App() {
const {images} = useContext(PixabayContext);
console.log(images)
  return (
    <>
      <div className="hm-wel-cover mt-3">
        <div className="container">

          <div className="row g-4 justify-content-center">

            <FetchdataBycategory />

          {images.map((item)=>(
            <div className="col-md-4" key={item.id}>
            <div className="hm-wel-wrap">
              <img src={item.largeImageURL} alt="" className="img-fluid" />
            </div>
          </div>
          ))}
            

          </div>
        </div>
      </div>
    </>
  )
}

export default App
