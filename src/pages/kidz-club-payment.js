import React, { useState, useEffect } from "react"
import { loadStripe } from "@stripe/stripe-js"
import Layout from "../components/layout"
const buttonStyles = {
  fontSize: "13px",
  textAlign: "center",
  color: "#000",
  padding: "12px 60px",
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  backgroundColor: "rgb(255, 178, 56)",
  borderRadius: "6px",
  letterSpacing: "1.5px",
}
const buttonDisabledStyles = {
  opacity: "0.5",
  cursor: "not-allowed",
}
let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(`${process.env.GATSBY_STRIPE_PUBLISHABLE_KEY}`)
  }
  return stripePromise
}
const Checkout = () => {
  const [loading, setLoading] = useState(false)
  const directToCheckout = async event => {
    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [{ price: "price_1JeiPBBgn05wH70kaeppHior", quantity: 1 }],
      successUrl: `http://hopehousechildrenshome.com/kidz-club-success/`,
      cancelUrl: `http://hopehousechildrenshome.com/kidz-club-cancel`,
    })
  }
  const redirectToCheckout = async event => {
    event.preventDefault()
    setLoading(true)
    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [{ price: "price_1JeiPBBgn05wH70kaeppHior", quantity: 1 }],
      successUrl: `http://hopehousechildrenshome.com/kidz-club-success/`,
      cancelUrl: `http://hopehousechildrenshome.com/kidz-club-cancel`,
    })
    if (error) {
      console.warn("Error:", error)
      setLoading(false)
    }
  }
  useEffect(() => {
    directToCheckout()
  }, [])
  return (
    <Layout>
      <div className="container mx-auto">
        <button
          disabled={loading}
          style={
            loading
              ? { ...buttonStyles, ...buttonDisabledStyles }
              : buttonStyles
          }
          onClick={redirectToCheckout}
        >
          If payment page doesn't load please click to pay for KidzClub
        </button>
      </div>
    </Layout>
  )
}
export default Checkout
