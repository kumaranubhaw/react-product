
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch('/product').then(res => res.json()).then(data => {
      setData(data)
    }) 
  }, [])

  return (
    <>
    <div className='title'>
      Product Details
    </div>
    <table className='datatable'>
      <thead>
        <tr>
        <th>Product Id</th>
        <th>Product Name</th>
        <th>Description</th>
        <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {data?.map(element => (
          <tr>
            <td>{element.id}</td>
            <td>{element.title}</td>
            <td>{element.description}</td>
            <td><img src={element.thumbnail} alt='image' className='image'></img></td>
          </tr>  
        ))}
      </tbody>
    </table>
    </>
  );
}

export default App;
