import React, { useState } from "react"
import Modal from "react-modal"

const KidzClubVideo = () => {
  const [videoIsOpen, setVideoIsOpen] = useState(false)
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
    <div className="grid grid-cols-2 md:pt-12 md:pl-0">
      <div className="relative flex items-center justify-center">
        <Modal
          isOpen={videoIsOpen}
          onRequestClose={() => setVideoIsOpen(false)}
          style={customStyles}
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5mwK3ejHHog"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Modal>
        <button className="btn-primary" onClick={() => setVideoIsOpen(true)}>
          <img src="https://via.placeholder.com/800x600" />
        </button>
      </div>
      <div className="relative p-4 text-center bg-gray-200">
        <h1 className="text-lg font-bold text-red-500 font-display">
          Kidz Club Video
        </h1>
        <p className="py-4 text-xs">Text about video</p>
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
