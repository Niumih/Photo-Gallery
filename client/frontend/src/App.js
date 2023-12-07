import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import Button from './components/Button';
import Grid from './components/Grid';
import axios from "axios";


function App() {
  const [photos, setPhotos] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8000/api/get")
      .then((res) => {
        setPhotos(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <NavBar type="list" user={user} />
      <Grid photos={photos} />
      <Button />
    </div>
  );
}

export default App;



