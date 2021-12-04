import axios from "axios";
import React from "react";
import { FaTwitter, FaFacebookF, FaPinterestP, FaRegCopy,FaLinkedinIn } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {isWebpSupported} from 'react-image-webp/dist/utils';
import gifWEB from '../images/gif.webp';
import gifJPG from '../images/gif.jpg'

class Giphy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      giphy: [],
      loading: false,
      copy: false
    };
  }
  getGiphy = () => {
    const apiURL = "https://api.giphy.com/v1/gifs/random";
    const apiKEY = "bi3FFnNepwMz5HlDYwCfvyhXQLGrvVtL";
    axios(`${apiURL}?api_key=${apiKEY}`).then((response) =>
      this.setState({
        giphy: response.data.data.images.fixed_height.url,
        loading:true,
      }),
    );
  };

  changeGiphy = () => {
    this.setState({
      loading: true,
    });
    this.getGiphy();
  };

  componentDidMount() {
    this.changeGiphy();
  }

  copiedRemove = ()=>{
    this.setState({copy:false})
  }

  copiedEffect = ()=>{
    this.setState({copy:true})
    setTimeout(this.copiedRemove,1000)
  }



  render() {
    return (
      <>
        <section className="py-3">
          <div className="container">
            <div className="row ">
              <div className="col-md-12">
                <div className="show-area d-flex align-items-center justify-content-center">
                  <div className="show-img d-flex p-2 bg-light">
                    <div className="main-poster">
                      <img
                        className="poster-img"
                        src={this.state.giphy}
                        alt="Loading.."
                      />
                    </div>

                    <button
                      onClick={this.changeGiphy}
                      className="mt-2 py-3 btn generate-btn"
                    >
                      Get Random Gif
                    </button>
                    <div className="share-area d-flex align-items-center justify-content-center">
                    <div className="icon mx-1">
                    <div className="share-tooltip-linkedin px-1">
                      Share via Linkedin
                    </div>
                    <a target="_blank" rel="noopener noreferrer" href={`https://www.linkedin.com/shareArticle?mini=true&url=${this.state.giphy}`} className="share-icon linkedin">
                      <FaLinkedinIn />
                    </a>
                  </div>
                      <div className="icon mx-1">
                        <div className="share-tooltip-twitter px-1">
                          Share via Twitter
                        </div>
                        <a target="_blank" rel="noopener noreferrer" href={`https://twitter.com/intent/tweet?url=${this.state.giphy}`} className="share-icon twitter">
                          <FaTwitter />
                        </a>
                      </div>
                      <div className="icon mx-1">
                        <div className="share-tooltip-pinterest px-1">
                          Share via Pinterest
                        </div>
                        <a target="_blank" rel="noopener noreferrer" href={`https://pinterest.com/pin/create/button/?url=${this.state.giphy}`} className="share-icon pinterest">
                          <FaPinterestP />
                        </a>
                      </div>
                      <div className="icon mx-1">
                        <div className="share-tooltip-facebook px-1">
                          Share via Facebook
                        </div>
                        <a target="_blank" rel="noopener noreferrer" href={`https://www.facebook.com/sharer/sharer.php?u=${this.state.giphy} `} className="share-icon facebook">
                          <FaFacebookF />
                        </a>
                      </div>

                      <div className="icon mx-1">
                        <div className="share-tooltip-copy px-1">Copy URL</div>
                        <CopyToClipboard text={this.state.giphy}>
                          <div
                            onClick={this.copiedEffect}
                            className="share-icon copy-url"
                          >
                            <FaRegCopy />
                          </div>
                        </CopyToClipboard>
                      </div>
                      <div
                        className={
                          this.state.copy
                            ? "copy-status copy-status-copied"
                            : "copy-status "
                        }
                      >
                        <p className="px-1 m-0">Copied</p>{" "}
                        <BsCheckCircleFill className="checked-icon" />
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-100 h-100 gif-bg">
          {isWebpSupported()
            ? <img className="img-fluid" src={gifWEB} />
            : <img className="img-fluid" src={gifJPG} />
          }
        </div>
        </section>
      </>
    );
  }
}
export default Giphy;
