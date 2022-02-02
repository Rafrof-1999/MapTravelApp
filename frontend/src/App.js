import { useState } from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import "./app.css"
function App() {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 46,
    longitude: 17,
    zoom: 3
  });

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapStyle= "mapbox://styles/abderraouf99/ckz4okl89001t14s5dvvwypeu"
      >  
     <Marker latitude={32.551445} longitude={35.851479} offsetLeft={-20} offsetTop={-10}>
      <FaMapMarkerAlt style={{fontSize:viewport.zoom *7, color:'slateblue'}}/>
      </Marker>
      <Popup
          latitude={32.551445}
          longitude={35.851479}
          closeButton={true}
          closeOnClick={false}
          anchor="left" >
          <div className='card'>
            <label>Place</label>
            <h4 className='place'>Irbid</h4>
            <label className='desc'>Review</label>
            <p>I like it</p>
            <label>Rating</label>
            <div className='stars'>
            <FaStar className='star'/>
            <FaStar className='star'/>
            <FaStar className='star'/>
            <FaStar className='star'/>
            </div>
            <label>Information</label>
            <span className='username'>
              Created by <b>Firo</b>
            </span>
            <span className='date'>
              1 hour ago
            </span>
          </div>
        </Popup>
    </ReactMapGL>
  );
}

export default App;
