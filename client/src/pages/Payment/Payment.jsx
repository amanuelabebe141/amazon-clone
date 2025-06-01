import React, { useState, useContext } from 'react'
import Header from '../../components/Header/Header'
import classes from './Payment.module.css'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { Data } from '../../DataProvider'
import ProductCard from '../../components/Body/Products/ProductCard'
import axios from 'axios'
import { db } from '../../../utils/firebase'
import { doc, setDoc } from 'firebase/firestore'
import { Type } from '../../../utils/action.type'
import { useNavigate } from 'react-router-dom'

function Payment() {
  const [{ user, basket }, dispatch] = useContext(Data)
  const stripe = useStripe()
  const elements = useElements()
  const navigate = useNavigate()

  const [error, setError] = useState(null) // ❗ error state added

  async function handlePayment(e) {
    e.preventDefault()
    const subTotal = basket?.reduce((acc, item) => acc + item.price, 0)
    setError(null) // clear previous error

    try {
      const response = await axios.post(`https://amazon-clone-oq0m.onrender.com/payment/create?total=${subTotal}`)
      const clientSecret = response.data.clientSecret

      if (!clientSecret) {
        throw new Error("Failed to get payment secret from server.")
      }

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            email: user?.email,
          },
        },
      })

      if (result?.error) {
        console.log(result.error.message)
        setError(result.error.message)
      } else if (result?.paymentIntent?.status === 'succeeded') {
        if (user?.uid && result?.paymentIntent?.id) {
          await setDoc(
            doc(db, "users", user.uid, "orders", result.paymentIntent.id),
            {
              basket: basket,
              amount: result.paymentIntent.amount,
              created: result.paymentIntent.created,
            }
          )

          dispatch({ type: Type.EMPTY_BASKET })
          navigate('/return')
        } else {
          setError("Something went wrong saving the order.")
          console.error("user.uid or paymentIntent.id is undefined")
        }
      }
    } catch (err) {
      console.error("Payment error:", err)
      setError(err.message || "Payment failed. Please try again.")
    }
  }

  return (
    <>
      <Header />
      <h1 className={classes.header}>Checkout items</h1>
      <div className={classes.payment}>
        <div className={classes.address}>
          <h3>Shipping address</h3>
          <div className={classes.place}>
            <p>Minessota</p>
            <p>United State</p>
          </div>
        </div>

        <div className={classes.detail}>
          <h3>Personal detail</h3>
          <div className={classes.place}>
            <p>{user?.email?.split('@')[0]}</p>
            <p>{user?.email}</p>
          </div>
        </div>

        <div className={classes.list_of_product}>
          <h3>Review your cart</h3>
          <div className={classes.items}>
            {basket?.map(item => <ProductCard key={item.id} {...item} />)}
          </div>
        </div>

        <form className={classes.pay} onSubmit={handlePayment}>
          <CardElement className={classes.visa} />
          <button className={classes.submit} type="submit">Pay</button>
          {error && <p className={classes.error}>{error}</p>}
        </form>
      </div>
    </>
  )
}

export default Payment
