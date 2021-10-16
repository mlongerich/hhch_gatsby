import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const Cancel = () => {
  return (
    <Layout>
      <div className="container relative pb-12 mx-auto text-center">
        <div className="relative z-20">
          <h1 className="py-4 pt-40 text-2xl font-bold text-red-500 font-display">
            Oops!
          </h1>
          <div className="mx-auto">
            <p className="py-2">
              Your payment was unsuccessful <br />
              and you were not charged.
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
          <Link
            to="/kidz-club"
            className="inline-block p-2 px-8 py-4 mb-20 text-sm tracking-widest text-white uppercase bg-blue-500 font-heading"
          >
            Go back to Kidz Club
          </Link>
        </div>
        <div className="absolute inset-0 z-10 object-cover w-full h-full">
          <StaticImage src="../images/box.png" />
        </div>
      </div>
    </Layout>
  )
}

export default Cancel
