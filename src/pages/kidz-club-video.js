// pages/modal-example.js

import React from "react"
import { Link } from "gatsby"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"

const KidzClubVideo = () => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      <div>
        {modal ? (
          <Link to={closeTo}>Close</Link>
        ) : (
          <header>
            <h1>Kidz Club Video</h1>
          </header>
        )}
        <div className="mx-auto">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5mwK3ejHHog"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <Link to="/kidz-club">Go back Kidz Club</Link>
      </div>
    )}
  </ModalRoutingContext.Consumer>
)

export default KidzClubVideo
