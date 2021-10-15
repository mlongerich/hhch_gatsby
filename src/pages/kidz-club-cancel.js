import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const Cancel = () => {
  return (
    <Layout>
      <div className="container mx-auto">
        <h1 className="py-4 text-2xl font-bold text-red-500 font-display">
          Your payment did not succeed
        </h1>
        <div className="mx-auto">
          <p className="py-2">
            Your payment was unsuccessful and you were not charged anything.
          </p>
          <p className="pt-2 pb-4">
            Please email{" "}
            <a
              className="text-blue-400 underline"
              href="mailto:kidzclubhh@gmail.com"
            >
              kidzclubhh@gmail.com
            </a>{" "}
            if you have any questions.
          </p>
          <Link
            to="/kidz-club"
            className="inline-block p-2 px-8 py-4 text-sm tracking-widest text-white uppercase bg-blue-500 font-heading"
          >
            Go back to Kidz Club to try again
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Cancel
