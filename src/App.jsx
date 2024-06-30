
import CarouselDiscont from './Components/CarouselDiscont/CarouselDiscont'
import Advantages from './Components/Advantages/Advantages';
import Header from './Components/Header/Header'
import Hits from './Components/Hits/Hits';
import CatalogMenu from './Components/CatalogMenu/CatalogMenu';
import Footer from './Components/Footer/Footer';
import React, {useRef, useState} from 'react';

import './App.sass'
import CatalogItem from './Components/CatalogItem/CatalogItem';

import b1 from './img/B1.jpg';
import b2 from './img/B2.jpg';
import b3 from './img/B3.jpg';
import b4 from './img/B4.jpg';
import b5 from './img/B5.jpg';
import b6 from './img/B6.jpg';
import s1 from './img/S1.jpg';
import s2 from './img/S2.jpg';
import s3 from './img/S3.jpg';
import f1 from './img/F1.jpg';
import f2 from './img/F2.jpg';
import f3 from './img/F3.jpg';



function App() {
  
  const goods = [
    {
      name: "shovel1",
      top: 1,
      img: b1,
      type: "Bayonet",
      price: 300

    },
    {
      name: "shovel2",
      top: 0,
      img: b2,
      type: "Bayonet",
      price: 500

    },
    {
      name: "shovel3",
      top: 0,
      img: b3,
      type: "Bayonet",
      price: 250
    },
    {
      name: "shovel4",
      top: 1,
      img: s3,
      type: "Scoop",
      price: 250
    },
    {
      name: "shovel5",
      top: 1,
      img: b4,
      type: "Bayonet",
      price: 400
    },
    {
      name: "shovel6",
      top: 0,
      img: f1,
      type: "For snow",
      price: 350
    },
    {
      name: "shovel7",
      top: 0,
      img: f2,
      type: "For snow",
      price: 150
    },
    {
      name: "shovel8",
      top: 0,
      img: f3,
      type: "For snow",
      price: 350
    },
    {
      name: "shovel9",
      top: 0,
      img: s1,
      type: "Scoop",
      price: 250
    },
    {
      name: "shovel10",
      top: 0,
      img: b5,
      type: "Bayonet",
      price: 150
    },
    {
      name: "shovel11",
      top: 0,
      img: b6,
      type: "Bayonet",
      price: 200
    },
    {
      name: "shovel12",
      top: 0,
      img: s2,
      type: "Scoop",
      price: 200
    }
  ];


  const [selectedType, setType] = useState("Bayonet");
  const [basketItem, setBasketItem] = useState([]);


  const onTypeSelected = (type) => {
    setType(type);
  };


  const addItem = (item, e) => {
    const elem = basketItem.find(i => i.name === item.name);
    if (elem) {
      elem.quantity += e;
    } else {
      basketItem.push({ ...item, quantity: 1 });
    }
    setBasketItem([ ...basketItem ]);
  }

  const refScroll = useRef(null);

  const scrollToMyRef = () => {
    refScroll.current?.scrollIntoView({ behavior: 'smooth'})
  };

  

  return (
    <div className='app'>
      <Header {...{
        expand: 'md',
        fixed: 'top',
        color: 'light'
      }}
      basketItem={basketItem}
      addItem={addItem}
      onTypeSelected={onTypeSelected}
      scrollToMyRef={scrollToMyRef}
      />
      <main>
        <CarouselDiscont/>
        <Advantages/>
        <Hits goods={goods}
        addItem={addItem}/>
        <CatalogMenu onTypeSelected={onTypeSelected}/>
        <CatalogItem goods={goods} 
          selectedType={selectedType} 
          addItem={addItem} 
          refScroll={refScroll}/>
      </main>
      <Footer/>
    </div>
      
  )
}

export default App
