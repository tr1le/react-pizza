import React from 'react';

function Categories({ items, onClick }) {
  const [activeItem, setActiveItem] = React.useState(null);

  return (
    <div className="categories">
      <ul>
        <li className={activeItem === null ? 'active' : ''} onClick={() => setActiveItem(null)}>
          Все
        </li>
        {items &&
          items.map((text, index) => (
            <li
              className={activeItem === index ? 'active' : ''}
              onClick={() => setActiveItem(index)}
              key={`${text}_${index}`}>
              {text}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Categories;
