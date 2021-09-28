import React from "react"
import Layout from "../components/layout"

export default ({ pageContext }) => {
  return (
    <Layout>
      {pageContext.featured_media?.source_url && (
        <div className="relative w-full p-12 mb-12">
          <div className="relative z-10 py-24 md:py-48"></div>
          <img
            src={pageContext.featured_media.source_url}
            className="absolute inset-0 object-cover h-full min-w-full min-h-full"
          />
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
        <div>
          <div>
            <h1>Kidz Club Sign Up</h1>
          </div>
          <div>
            <p>Person Paying for Club</p>
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
                Your Name
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
                Email where you want the Hope House Pen Pal sent if different
                from above
              </label>
              <input
                name="email2"
                type="email"
                placeholder="other@email.com"
                class="mt-2 w-full border-none text-sm p-4 bg-gray-100 text-gray-700"
              />
            </div>
            <button className="inline-block px-8 py-4 mt-6 text-sm tracking-widest text-white uppercase bg-blue-500 font-heading">
              Proceed to Payment
            </button>
          </form>
        </div>
      </div>
    </Layout>
  )
}
