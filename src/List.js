import React from 'react';
import Card from './Card';

const List = ({ name, items, cardClick }) => (
  <div>
    <h2>{name}</h2>
    <ul>
      { items.map( item => 
          <Card 
            key={item.id} 
            {...item} 
            cardClick={cardClick}
          />
        )
      }
    </ul>
  </div>
)

export default List;
