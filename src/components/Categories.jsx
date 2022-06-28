import React from "react";

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const onClickCategory = (index) => {
    setActiveIndex(index);
  }

  return (
    <div className="categories">
      <ul>
        {
          categories.map((value, index) => (
            <li key={index} onClick={() => onClickCategory(index)} className={activeIndex === index ? 'active' : ''}> {value} </li>
          ))
        }
      </ul>
    </div>

  )
}

export default Categories;