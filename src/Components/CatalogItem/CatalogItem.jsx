import React, {forwardRef} from "react";
import { Card, 
  CardBody, 
  CardTitle, 
  CardText,
  Button} from "reactstrap";

import "./catalogItem.sass"

function CatalogItem(props) {
  
  
  // eslint-disable-next-line react/prop-types
  const typeItem = props.goods.filter((item) => {
    if(item.type === props.selectedType) {
      return item;
    }
  })


  function renderItems(arr) {
    const items =  arr.map((item, i) => {
        
        return (
            <li 
                tabIndex={0}
                key={i}
               >
                    <Card
                      style={{
                        width: '18rem',
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
                        <Button onClick={() => props.addItem(item, 1)}>
                          В корзину
                        </Button>
                      </CardBody>
                    </Card>
            </li>
        )
    });
    
    return (
        <ul className="items">
            {items}
        </ul>
    )
}

  const items = renderItems(typeItem)

  return (
    <div className="center" ref={props.refScroll}>
      {items}
    </div>
  );
}

export default forwardRef(CatalogItem);