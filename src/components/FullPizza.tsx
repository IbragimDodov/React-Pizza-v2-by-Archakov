import React from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'


const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<{
    imageUrl: string,
    title: string,
    price: number,
  }>();
  const {id} = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const {data} = await axios.get('https://62bb4e267bdbe01d529bb9bf.mockapi.io/items/' + id);
        setPizza(data);
      } catch (error) {
        alert('Error fetch');
        navigate('/');
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return <>loading...</>
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="" />
      <h2>{pizza.title}</h2>
      <h4> {pizza.price} </h4>
    </div>
  )
}

export default FullPizza