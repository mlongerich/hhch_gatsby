import React, { useState, useEffect } from "react"
import { loadStripe } from "@stripe/stripe-js"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const buttonStyles = {
  // fontSize: "13px",
  // textAlign: "center",
  // color: "#000",
  // padding: "12px 60px",
  // boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  // backgroundColor: "rgb(255, 178, 56)",
  // borderRadius: "6px",
  // letterSpacing: "1.5px",
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
      lineItems: [
        { price: `${process.env.GATSBY_STRIPE_KIDZ_CLUB_ITEM}`, quantity: 1 },
      ],
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
      lineItems: [
        { price: `${process.env.GATSBY_STRIPE_KIDZ_CLUB_ITEM}`, quantity: 1 },
      ],
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
      <div className="container relative pb-12 mx-auto text-center">
        <div className="relative z-20">
          <h1 className="py-4 mt-2 text-2xl font-bold text-red-500 pt-36 font-display">
            Please wait.
          </h1>
          <div className="mx-auto">
            <p className="py-2">
              We are redirecting you to the
              <br /> payment page.
            </p>
            <p className="py-2">
              If the payment page does not
              <br />
              load in 10 seconds. <br />
              Please click the link below.
            </p>
            <p className="pt-2 pb-4">
              Please email{" "}
              <a
                className="text-blue-400 underline"
                href="mailto:kidzclubhh@gmail.com"
              >
                kidzclubhh@gmail.com
              </a>{" "}
              <br />
              if you have any questions.
            </p>
          </div>

          <button
            disabled={loading}
            style={
              loading
                ? { ...buttonStyles, ...buttonDisabledStyles }
                : buttonStyles
            }
            onClick={redirectToCheckout}
            className="inline-block p-2 px-8 py-4 text-sm tracking-widest text-white uppercase bg-blue-500 font-heading"
          >
            To payment page
          </button>
        </div>
        <div className="absolute inset-0 z-10 object-cover w-full h-full">
          <StaticImage src="../images/box.png" />
        </div>
      </div>
    </Layout>
  )
}
export default Checkout
