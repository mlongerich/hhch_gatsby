import React, { useState } from "react"
import ModalVideo from "react-modal-video"
import { StaticImage } from "gatsby-plugin-image"

const KidzClubVideo = () => {
  const [videoIsOpen, setVideoIsOpen] = useState(false)

  return (
    <div className="grid grid-cols-2 md:pt-12 md:pl-0">
      <div className="relative flex items-center justify-center">
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={videoIsOpen}
          videoId="5mwK3ejHHog"
          onClose={() => setVideoIsOpen(false)}
        />
        <button className="btn-primary" onClick={() => setVideoIsOpen(true)}>
          <StaticImage src="../images/kkvid-wide.png" />
        </button>
      </div>
      <div className="flex flex-col items-center justify-center p-4 text-center bg-gray-200">
        <h1 className="text-lg font-bold text-red-500 font-display">
          What is the KidzKlub?
        </h1>
        <p className="py-4 text-xs">Find out more about the KidzClub</p>
        <div className="">
          <button
            className="inline-block p-2 px-8 py-4 text-sm tracking-widest text-white uppercase bg-blue-500 font-heading"
            onClick={() => setVideoIsOpen(true)}
          >
            Watch Video...
          </button>
        </div>
      </div>
    </div>
  )
}

export default KidzClubVideo
