import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";

export default function CartItem({item, onIncrease, onDecrease}){
    const {name, quantity, price} = item;
    return (
        <li className="cart-item">
            <p>{name} - {quantity} X {currencyFormatter.format(price)}</p>
            <p className="cart-item-actions">
                <button onClick={onIncrease}>+</button>
                <span>{quantity}</span>
                <button onClick={onDecrease}>-</button>
            </p>
        </li>
    )
}