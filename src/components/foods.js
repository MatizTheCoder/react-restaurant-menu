import React from "react";

function CreateFood(food) {
    return (
        <div className="menu-items col-lg-6 col-sm-12">
            {/* <img src="${food.img}" alt="${food.title}" class="photo"> */}
                <div class="menu-info">
                    <div class="menu-title">
                    <h4>${food.title}</h4>
                    <h4 class="price">${food.price}</h4>
                    </div>
                    <div class="menu-text">${food.desc}</div>
                </div>
        </div>
    )

}



export default CreateFood
