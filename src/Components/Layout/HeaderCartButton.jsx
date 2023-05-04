import React , {useContext , useEffect , useState} from 'react'
import classes from "./HeaderCartButton.module.css"
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../Store/CartContext'

function HeaderCartButton(props) {
    const [buttonIsHighlighted , setButtonIsHighlighted] = useState(false);

    const cartCtx = useContext(CartContext);

    const {items} = cartCtx;


    const noOfCartItems = items.reduce((currentNo , item) => {
        return currentNo + item.amount;
    } , 0 );

    

    const buttonClasses = `${classes.button} ${buttonIsHighlighted ? classes.bump : ''}`

    useEffect(() => {
        if(items.length === 0){
            return;
        }
        setButtonIsHighlighted(true);

        const timer = setTimeout(() => {
            setButtonIsHighlighted(false)
        } , 300);

        return () => {
            clearTimeout(timer);
        }

    } , [items]);

  return (
    <button className={buttonClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            {noOfCartItems}
        </span>
    </button>
  )
}

export default HeaderCartButton