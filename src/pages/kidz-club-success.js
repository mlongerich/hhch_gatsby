import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const Success = () => {
  return (
    <Layout>
      <div className="container pb-12 mx-auto">
        <h1 className="py-4 text-2xl font-bold text-red-500 font-display">
          Thank you
        </h1>
        <div className="mx-auto">
          <p className="py-2">
            Thank you for signing up for our Kidz Club Program.
          </p>
          <p className="py-2">Your payment was successfully recieved.</p>
          <p className="py-2">You will recieve your first package soon.</p>
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
        </div>

        <Link
          to="/kidz-club"
          className="inline-block p-2 px-8 py-4 text-sm tracking-widest text-white uppercase bg-blue-500 font-heading"
        >
          Go back to the Kidz Club
        </Link>
      </div>
    </Layout>
  )
}

export default Success
