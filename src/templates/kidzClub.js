import React, { useState } from "react"
import Layout from "../components/layout"
import KidzClubInfographic from "../components/KidzClubInfographic"
import KidzClubRules from "../components/KidzClubRules"
import Modal from "react-modal"
import KidzClubVideo from "../components/KidzClubVideo"
import { StaticImage } from "gatsby-plugin-image"

export default ({ pageContext }) => {
  const [rulesIsOpen, setRulesIsOpen] = useState(false)
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  }

  return (
    <Layout>
      {pageContext.featured_media?.source_url && (
        <div className="relative w-full p-12">
          <div className="relative z-10 py-24 md:py-48"></div>
          <img
            src={pageContext.featured_media.source_url}
            className="absolute inset-0 object-cover h-full min-w-full min-h-full"
          />
        </div>
      )}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="w-full py-12 md:pr-12">
            <div className="flex justify-center bg-gray-200">
              <div className="relative z-10 py-4 text-center text-gray-50"></div>
              <a href="/">
                <KidzClubInfographic />
              </a>
            </div>
            <div className="visible hidden -mr-12 text-right md:block xl:hidden">
              <StaticImage
                src="../images/register.png"
                className="rounded-r-sm"
              />
            </div>
          </div>
          <div>
            <KidzClubVideo />
            <div className="py-12 xl:pb-0">
              <div className="container p-4 mx-auto bg-gray-200 rounded-sm">
                <div>
                  <div>
                    <h1 className="pb-4 text-2xl font-bold text-center text-red-500 font-display">
                      REGISTER YOUR CHILD
                    </h1>
                  </div>
                  <form
                    method="POST"
                    name="kidz-club"
                    netlify-honeypot="bot-field"
                    data-netlify="true"
                    action="/kidz-club-payment"
                  >
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="kidz-club" />
                    <div>
                      <label class="block text-base tracking-tight text-gray-600">
                        Person Paying for Club Name
                      </label>
                      <input
                        name="name"
                        type="text"
                        placeholder="Name"
                        required
                        class="mt-2 w-full border-none text-sm p-4 bg-gray-100 text-gray-700"
                      />
                    </div>
                    <div class="mt-6">
                      <label class="block text-base tracking-tight text-gray-600">
                        Address
                      </label>
                      <textarea
                        name="Address"
                        placeholder="Your address"
                        required
                        class="mt-2 w-full border-none text-sm p-4 bg-gray-100 text-gray-700"
                      ></textarea>
                    </div>
                    <div class="mt-6">
                      <label class="block text-base tracking-tight text-gray-600">
                        Email address
                      </label>
                      <input
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        class="mt-2 w-full border-none text-sm p-4 bg-gray-100 text-gray-700"
                      />
                    </div>
                    <div class="mt-6">
                      <label class="block text-base tracking-tight text-gray-600">
                        Recepient Child's Name
                      </label>
                      <input
                        name="childsName"
                        type="text"
                        placeholder=""
                        required
                        class="mt-2 w-full border-none text-sm p-4 bg-gray-100 text-gray-700"
                      />
                    </div>
                    <div class="mt-6">
                      <label class="block text-base tracking-tight text-gray-600">
                        Age
                      </label>
                      <input
                        name="age"
                        type="text"
                        placeholder=""
                        required
                        class="mt-2 w-full border-none text-sm p-4 bg-gray-100 text-gray-700"
                      />
                    </div>
                    <div class="mt-6">
                      <label class="block text-base tracking-tight text-gray-600">
                        Your relationship to recipient.
                      </label>
                      <input
                        name="relationship"
                        type="text"
                        placeholder=""
                        required
                        class="mt-2 w-full border-none text-sm p-4 bg-gray-100 text-gray-700"
                      />
                    </div>
                    <div class="mt-6">
                      <label class="block text-base tracking-tight text-gray-600">
                        Email where you want the Hope House Pen Pal sent if
                        different from above
                      </label>
                      <input
                        name="email2"
                        type="email"
                        placeholder="other@email.com"
                        class="mt-2 w-full border-none text-sm p-4 bg-gray-100 text-gray-700"
                      />
                    </div>
                    <button className="inline-block px-8 py-4 mt-6 text-sm tracking-widest text-white uppercase bg-blue-500 rounded font-heading">
                      Proceed to Payment
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="hidden -ml-12 xl:block xl:visible">
              <StaticImage
                src="../images/register.png"
                className="rounded-r-sm"
              />
            </div>
            <div className="grid grid-cols-2 pb-12 md:pl-0">
              <div className="flex flex-col items-center p-4 text-center bg-gray-200 rounded-r-sm justify-evenly">
                {/* <div className="relative p-4 text-center bg-gray-200 rounded-l-sm"> */}
                <h1 className="text-2xl font-bold text-red-500 font-display">
                  KIDZ CLUB RULES
                </h1>
                <p className="py-4">
                  Terms and Conditions of Kidz Club can be found here
                </p>
                <div className="">
                  <button
                    className="inline-block p-2 px-8 py-4 text-sm tracking-widest text-white uppercase bg-blue-500 rounded font-heading"
                    onClick={() => setRulesIsOpen(true)}
                  >
                    Read more...
                  </button>
                </div>
              </div>
              <div className="relative flex items-center justify-center rounded-r-sm">
                <Modal
                  isOpen={rulesIsOpen}
                  onRequestClose={() => setRulesIsOpen(false)}
                  style={customStyles}
                >
                  <button
                    className="inline-block p-2 px-8 py-4 text-sm tracking-widest text-white uppercase rounded font-heading"
                    onClick={() => setRulesIsOpen(false)}
                  >
                    <KidzClubRules />
                  </button>
                </Modal>
                <button
                  className="rounded btn-primary"
                  onClick={() => setRulesIsOpen(true)}
                >
                  <StaticImage
                    src="../images/kc-rules.png"
                    className="top-0 left-0 object-cover h-full min-w-full min-h-full rounded-r-sm"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
