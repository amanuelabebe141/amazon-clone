import React, { useContext, useEffect, useState } from 'react'
import classes from './Order.module.css'
import { collection, getDocs } from "firebase/firestore"
import { Link } from 'react-router-dom'
import { Data } from '../../DataProvider'
import { db } from '../../../utils/firebase'
import Header from '../../components/Header/Header'
import ProductCard from '../../components/Body/Products/ProductCard'

function Return() {
  const [{ user }] = useContext(Data)
  const [orders, setOrders] = useState(null)

  useEffect(() => {
    if (!user || !user.uid) return;

    (async () => {
      try {
        const data = await getDocs(collection(db, "users", user.uid, "orders"));
        const orderList = data.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOrders(orderList)
      } catch (error) {
        console.error("Error fetching orders:", error)
      }
    })();
  }, [user]);

  if (orders?.length === 0) {
    return (
      <>
        <Header />
        <div className={classes.order}>
          <h1>Return and Order</h1>
          <p className={classes.missing}>
            You have no orders yet. Browse our products and start <Link to="/">shopping </Link>!
          </p>
        </div>
      </>
    )
  }

  return (
    <>
      <Header />
      <div className={classes.order}>
        <h1 className={classes.main_container}>Return and Order</h1>
        <br />
        <br />
        <div className={classes.orderList_container}>
          {orders?.map((order) => {

            return (
              <div className={classes.single_order} key={order.id}>
                <div className={classes.title}>
                  <div><strong>Order ID:</strong> {order?.id}</div>
                </div>
                <div className={classes.single_products_container}>
                  {order?.basket.map((item, index) => (
                    <ProductCard key={index} {...item} />
                  ))}
                </div>
                <hr className={classes.line} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Return
