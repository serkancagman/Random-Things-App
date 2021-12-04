import axios from "axios";
import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
  FaRegCopy,
  FaLinkedinIn,
} from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";
import {isWebpSupported} from 'react-image-webp/dist/utils';
import unsplashWEB from '../images/unsplash.webp';
import unsplashJPG from '../images/unsplash.jpg'

const RandomImage = () => {
  const [copy, setCopy] = useState(false);
  const [image, setImage] = useState("");
  const [newPic, setNewPic] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const apiURL = "https://api.unsplash.com/";
      const apiKEY = "YmIHnJNmMsj3eQyhGHT41BG_tgdUyzaPCNymrTl42GU";
      const result = await axios.get(`${apiURL}photos/random?client_id=${apiKEY}`);
      setImage(result.data.urls.regular);
    };
    fetchData();
  }, [newPic]);

  const copyEffect = ()=>{
      setCopy(copy)
  }
  const removeCopy = () => {
    setCopy(!copy);
    setTimeout(copyEffect,1000)
  };

  return (
    <>
      <section className="py-3">
        <div className="container">
          <div className="row ">
            <div className="col-md-12">
              <div className="show-area d-flex align-items-center justify-content-center">
                <div className="show-img d-flex p-2 bg-light">
                  <div className="main-poster">
                    <img className="poster-img" src={image} alt="Loading.." />
                  </div>

                  <button
                    onClick={() => setNewPic(!newPic)}
                    className="mt-2 py-3 btn generate-btn"
                  >
                    Get Random Dog Images
                  </button>
                  <div className="share-area d-flex align-items-center justify-content-center">
                    <div className="icon mx-1">
                      <div className="share-tooltip-linkedin px-1">
                        Share via Linkedin
                      </div>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`https://www.linkedin.com/shareArticle?mini=true&url=${image}`}
                        className="share-icon linkedin"
                      >
                        <FaLinkedinIn />
                      </a>
                    </div>
                    <div className="icon mx-1">
                      <div className="share-tooltip-twitter px-1">
                        Share via Twitter
                      </div>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`https://twitter.com/intent/tweet?url=${image}`}
                        className="share-icon twitter"
                      >
                        <FaTwitter />
                      </a>
                    </div>
                    <div className="icon mx-1">
                      <div className="share-tooltip-pinterest px-1">
                        Share via Pinterest
                      </div>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`https://pinterest.com/pin/create/button/?url=${image}`}
                        className="share-icon pinterest"
                      >
                        <FaPinterestP />
                      </a>
                    </div>
                    <div className="icon mx-1">
                      <div className="share-tooltip-facebook px-1">
                        Share via Facebook
                      </div>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`https://www.facebook.com/sharer/sharer.php?u=${image} `}
                        className="share-icon facebook"
                      >
                        <FaFacebookF />
                      </a>
                    </div>

                    <div className="icon mx-1">
                      <div className="share-tooltip-copy px-1">Copy URL</div>
                      <CopyToClipboard text={image}>
                        <div
                          onClick={() => removeCopy()}
                          className="share-icon copy-url"
                        >
                          <FaRegCopy />
                        </div>
                      </CopyToClipboard>
                    </div>
                    <div
                      className={
                        copy ? "copy-status copy-status-copied" : "copy-status "
                      }
                    >
                      <p className="px-1 m-0">Copied</p>
                      <BsCheckCircleFill className="checked-icon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-100 h-100 unsplash-bg">
          {isWebpSupported()
            ? <img alt="" className="img-fluid" src={unsplashWEB} />
            : <img alt="" className="img-fluid" src={unsplashJPG} />
          }
        </div>
      </section>
    </>
  );
};

export default RandomImage;
