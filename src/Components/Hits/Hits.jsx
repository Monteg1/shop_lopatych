import React from "react";
import { Card, 
  CardBody, 
  CardTitle, 
  CardText,
  Button} from "reactstrap";

import "./hits.sass"

function Hits(props) {
  
  
  // eslint-disable-next-line react/prop-types
  const topHits = props.goods.filter((item) => {
    if(item.top === 1) {
      return item;
    }
  })

  function renderItems(arr) {
    const items =  arr.map((item, i) => {
        
        return (
            <li 
                tabIndex={0}
                key={i}>
                    <Card
                      style={{
                        width: '18rem'
                      }}
                    >
                      <img
                        alt="Sample"
                        src={item.img}
                      />
                      <CardBody>
                        <CardTitle tag="h5" className="name">
                          {item.name}
                        </CardTitle>
                        <CardText className="price">
                          Цена: {item.price}
                        </CardText>
                        <Button
                        onClick={() => props.addItem(item, 1)}>
                          Тоже хочу хит продаж!
                        </Button>
                      </CardBody>
                    </Card>
            </li>
        )
    });
    
    return (
        <ul className="hits">
            {items}
        </ul>
    )
}

  const items = renderItems(topHits)

  return (
    <div className="center">
      <h2>Хиты продаж:</h2>
      {items}
    </div>
  );
}

export default Hits