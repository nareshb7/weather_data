import React, {useEffect, useState} from 'react'


const Api = () => {
     const [city, setCity]= useState([]);
     const [search, setSearch] = useState("Hyderabad");
     //https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

    useEffect(()=>{
      
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=c30b4142205bfbfd27a2fcc400ba3a01&units=metric`).then(
            response =>response.json()
        ).then(json => {
          if (json.main !== undefined) {setCity(json.main) } })
        .catch(error => console.log(error))
},[search])
    const myStyle= {
      margin:"0",
      padding: "0",
      backgroundColor: "lightgreen" ,
      display:'flex',
      flexDirection: 'coloumn',
      height:'100vh',
      justifyContent: 'center',
      alignItems: 'center'
    }
  
  return (
    <div style={myStyle}>
      <div style={{background: "pink", padding: '20px', borderRadius:'7px', textAlign: 'center'}}>
        <div>
          <input type="search"  onChange={ (e) =>{ setSearch(e.target.value)}} />
          <div>
            <h2 className="location">{search}</h2>
            <h3 >{city.temp}</h3>
          </div>
          <div>
            <span>Min {city.temp_min}</span>&emsp;
            <span>Max: {city.temp_max}</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Api