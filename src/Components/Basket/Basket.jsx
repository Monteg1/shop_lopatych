import React, {useState, useEffect} from "react";
import {
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  Row,
  Col,
  Card,
  CardTitle,
  Button,
 } from "reactstrap";

import basket from "../../icon/basket.svg"
import "./basket.sass"



function Basket({basketItem = [], addItem = () => {}}) {  

  const toggle = () => setIsOpen(!isOpen);

  const [isOpen, setIsOpen] = useState(false);

  const checkout = () => {
    alert('Ваш заказ был успешно оформлен, ожидайте доставку! Мы знаем где вы живёте ;)')
  }

  const countTotal = () => basketItem.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);


  function renderItems(arr) {
    
    const items =  arr.map((item, i) => {

      if(item.quantity === 0) {
        arr.slice(i, 1);
      } else {
        return ( 
          <div 
              key={i}>
                  <Row>
                    <Col sm="12">
                      <Card body
                      className="inline">
                        <CardTitle tag="h5"
                        className="lh">
                          {item.name} | Количество: {item.quantity} <br />
                          Цена: {item.price}
                        </CardTitle>
                        <Button color="success"
                        size="sm"
                        className="size"
                        onClick={() => addItem(item, 1)}
                        >
                          +1
                        </Button>
                        <Button color="danger"
                        size="sm"
                        className="size"
                        onClick={() => addItem(item, -1)}
                        >
                          -1
                        </Button>
                      </Card>
                    </Col>
                  </Row>
          </div>
      )
      }
        
        
    });
    
    return (
        <>
            {items}
        </>
    )
}

  const itemsDone = renderItems(basketItem)
  
  

  return (
    <>
        <div>
          <img src={basket} className="basket" onClick={toggle} />
          <div></div>
        </div>
        <Offcanvas toggle={toggle} 
        isOpen={isOpen}
        direction="end"
        scrollable>
          <OffcanvasHeader toggle={toggle}>
            Корзина
          </OffcanvasHeader>
          <OffcanvasBody>
            {itemsDone}
          </OffcanvasBody>
          <h5>Сумма товаров в корзине: {countTotal()}</h5>
          <Button className="checkout"
            color="primary"
            onClick={checkout}>
            Оформить заказ
            </Button>
        </Offcanvas>
    </>
  );
}

export default Basket;