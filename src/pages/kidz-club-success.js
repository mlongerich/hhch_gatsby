import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const Success = () => {
  return (
    <Layout>
      <div className="container mx-auto">
        <h1>Thank you</h1>
        <div className="mx-auto">
          <p>Thank you for signing up for our Kidz Club Program.</p>
          <p> Your payment was successfully recieved. </p>
          <p>You will recieve your first package soon.</p>
          <p> Please email kidzclubhh@gmail.com if you have any questions. </p>
        </div>

        <Link to="/">Go back to the homepage</Link>
      </div>
    </Layout>
  )
}

export default Success
