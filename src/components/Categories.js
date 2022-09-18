
const Categories = ({ categories, filterItems, activeCategory }) => {
    return (
      <div className="btn-container">
        {categories.map((category, index) => {
          return (
            <button
              type="button"
              className={`${
                activeCategory === category ? "btn btn-outline-warning m-1" : "btn btn-outline-secondary m-1"
              }`}
              key={index}
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    );
  };
  
  export default Categories;