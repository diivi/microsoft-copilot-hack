import React, { useState } from 'react'
import { BiCopy } from 'react-icons/bi'

const Url = () => {

  const [shortenedUrl, setShortenedUrl] = useState('http://20.198.105.30:4567/')
  const [url, setUrl] = useState('')

  const shortenUrl = (url) => {
    // http://20.198.105.30:4567/short_url?long_url=https://www.google.com/
    const apiUrl = 'http://20.198.105.30:4567/short_url?long_url='
    fetch(apiUrl + url)
      .then(response => response.text())
      .then(data =>
        setShortenedUrl('http://20.198.105.30:4567/' + data)
      )
      .catch(error => console.log(error))
  }

  return (
    <div className='bg-boxGreen rounded-2xl mt-6 p-4'>
      <h2 className='text-boxHead text-xl text-center mb-4 font-mono'>URL Shortener</h2>
      {/*  
          a white input box for the user to enter a url, full width
          a blue colored button to submit the url below it, full width
          text saying "Here's the shortened url:" above the shortened url
          a shortened url, larger font size, next to a copy button
        */}

      <div className="flex flex-col justify-center items-center">
        <input className="bg-white text-xl text-boxHead rounded-lg p-2 w-11/12 focus:outline-none mb-2" placeholder="Enter URL here"
          onChange={(e) => setUrl(e.target.value)}
        ></input>
        <button className="bg-boxHead text-xl text-white rounded-lg p-2 w-11/12 focus:outline-none mb-4"
          onClick={() => shortenUrl(url)}
        >Shorten</button>

        <p className="text-boxHead text-sm text-left font-mono w-11/12">Here&apos;s the shortened url:</p>
        {/* copy icon inside a blue square button next to the url, both aligned left */}
        <div className="flex flex-row gap-2 items-center justify-start w-11/12 flex-wrap">
          <p className="text-boxHead text-xs md:text-sm lg:text-xl  text-left font-mono"><b>{shortenedUrl}</b></p>
          <button className="text-xl text-boxHead rounded-lg p-2 focus:outline-none"
            onClick={() => {
              navigator.clipboard.writeText(shortenedUrl)
              alert('Copied to clipboard!')
            }}
          ><BiCopy /></button>
        </div>
      </div>
    </div>
  )
}

export default Url