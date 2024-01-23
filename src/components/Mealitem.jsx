import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import { useContext } from "react";

export default function MealItem({meal}){
    const { name, price, description, image} = meal;
    const cartCtx = useContext(CartContext);

    function handleAddMealToCart(){
        cartCtx.addItem(meal);
    }
    return <li className="meal-item">
        <article>
            <img src={`http://localhost:3000/${image}`} alt="Meal"/>
            <div>
                <h3>{name}</h3>
                <p className="meal-item-price">{currencyFormatter.format(price)}</p>
                <p className="meal-item-description">{description}</p>
            </div>
            <p className="meal-item-actions">
                <Button onClick={handleAddMealToCart}>Add To Cart</Button>
            </p>
        </article>
    </li>
}