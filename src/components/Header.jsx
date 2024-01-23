import Logo from '../assets/logo.jpg'
import Button from './UI/Button'
import CartContext from '../store/CartContext'
import UserProgressContext from '../store/UserProgressContext'
import { useContext } from 'react'
export default function Header(){

    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);
    const totalCartItems = cartCtx.items.reduce((total, item) => {
        return total + item.quantity
    }, 0);

    function handleShowCart(){
        userProgressCtx.showCart()
    }
    return <header id="main-header">
        <div id="title">
            <img src={Logo} alt="Logo" />
            <h1>Reactfood</h1>
        </div>
       <nav>
            <Button textOnly onClick={handleShowCart} >Cart ({totalCartItems})</Button>
       </nav>
    </header>
}