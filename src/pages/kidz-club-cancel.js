import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const Cancel = () => {
  return (
    <Layout>
      <div className="container mx-auto">
        <h1>Your payment did not succeed</h1>
        <div className="mx-auto">
          <p>
            Your payment was unsuccessful and you were not charged anything.{" "}
          </p>
          <Link to="/kidz-club">Go back to Kidz Club to try again</Link>
          <p> Please email kidzclubhh@gmail.com if you have any questions. </p>
        </div>
      </div>
    </Layout>
  )
}

export default Cancel
