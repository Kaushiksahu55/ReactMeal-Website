import React , {useContext} from 'react'
import classes from "./MealsItems.module.css"
import MealsItemForm from './MealsItemForm'
import CartContext from '../../../Store/CartContext'

function MealsItems(props) {
  const cartCtx = useContext(CartContext)
  const mealPrice = `$${props.price.toFixed(2)}`

  const AddToCartHandler = amount =>{
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  }
  return (
    <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{mealPrice}</div>
        </div>
        <div>
            <MealsItemForm id = {props.id} onAddToCart={AddToCartHandler}/>
        </div>
    </li>
  )
}

export default MealsItems