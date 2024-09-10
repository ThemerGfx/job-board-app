/* eslint-disable @next/next/no-img-element */
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const JobRow = () => {
  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow-sm relative">
        <div className="absolute cursor-pointer top-4 right-4">
          <FontAwesomeIcon className="size-4 text-gray-300" icon={faHeart} />
        </div>
        <div className="flex gap-4">
          <div className="content-center">
            <img
              className="size-12"
              src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png"
              alt=""
            />
          </div>
          <div className="grow sm:flex">
            <div className="grow">
              <div className="text-gray-500 text-sm">Spotify</div>
              <div className="font-bold text-lg mb-1">Product designer</div>
              <div className="text-gray-400 text-sm">
                Remote &middot; New York, US &middot; Full time
              </div>
            </div>
            <div className="content-end text-gray-600 text-sm">2 weeks ago</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobRow;
