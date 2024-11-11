// Carrossel.jsx
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './carrossel.module.css';

const Carrossel = () => {
  const [livrosCarrossel, setLivrosCarrossel] = useState([]);

  // Função para buscar os livros para o carrossel
  const fetchCarrosselLivros = async () => {
    try {
      const response = await fetch('http://localhost:5000/carrossel');
      const data = await response.json();
      setLivrosCarrossel(data);
    } catch (error) {
      console.error("Erro ao buscar livros do carrossel:", error);
    }
  };

  useEffect(() => {
    fetchCarrosselLivros();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className={styles.div_carrossel}>
      <Slider {...settings}>
        {livrosCarrossel.map((carrossel) => (
          <div key={carrossel.id}>
            <img 
              src={`${process.env.PUBLIC_URL}/images/${carrossel.capaUrl}`} 
              alt={`Banner ${carrossel.id}`} // Usando um nome genérico para o alt
              className={styles.carrosselImage} 
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carrossel;
