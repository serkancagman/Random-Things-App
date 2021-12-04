import axios from "axios";
import { useEffect, useState } from "react";
import cannaWeb from '../images/cannabis.webp'
import cannaJPG from '../images/cannabis.jpg'
import {isWebpSupported} from 'react-image-webp/dist/utils';

const RandomCannabis = () => {
  const [strain, setStrain] = useState("");
  const [medical, setMedical] = useState("");
  const [cannaid, setCannaid] = useState("");
  const [type, SetType] = useState("");
  const [category, SetCategory] = useState("");
  const [terpene, SetTerpene] = useState("");
  const [brand, SetBrand] = useState("");
  const [buzz, setBuzz] = useState("");
  const [effect, setEffect] = useState("");
  const [canna, setCanna] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const apiURL = "https://random-data-api.com/api/cannabis/random_cannabis";
      const response = await axios(apiURL);
      setStrain(response.data.strain);
      SetType(response.data.type);
      SetBrand(response.data.brand);
      SetCategory(response.data.category);
      setBuzz(response.data.buzzword);
      setMedical(response.data.medical_use);
      setEffect(response.data.health_benefit);
      setCannaid(response.data.cannabinoid_abbreviation);
      SetTerpene(response.data.terpene);
    };
    getData();
  }, [canna]);

  return (
    <>
      <section className="py-5 cannabis">
        <div className="container">
          <div className="col-md-12">
            <div className="cannabis-info justify-content-center align-items-center row">
              <div className="cannabis-inner bg-light p-2">
                <div className="canna-area">
                  <h2>
                    Strain Name : <span>{strain}</span>
                  </h2>
                  <h2>
                    Strain Type : <span>{type}</span>
                  </h2>
                  <h2>
                    Brand : <span>{brand}</span>
                  </h2>
                  <h2>
                    Category : <span>{category}</span>
                  </h2>
                  <h2>
                    Buzz Word : <span>{buzz}</span>
                  </h2>
                  <h2>
                    Medical Use : <span>{medical}</span>
                  </h2>
                  <h2>
                    Health Benefit : <span>{effect}</span>
                  </h2>
                  <h2>
                    Cannabioid : <span>{cannaid}</span>
                  </h2>
                  <h2>
                    Terpene : <span>{terpene}</span>
                  </h2>
                </div>

                <button
                  onClick={() => setCanna(!canna)}
                  className="w-100 my-2 py-3 btn generate-btn"
                >
                  Get Random Cannabis
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-100 h-100 cannabis-bg">
          {isWebpSupported()
            ? <img alt="" className="img-fluid" src={cannaWeb} />
            : <img alt="" className="img-fluid" src={cannaJPG} />
          }
        </div>
      </section>
    </>
  );
};

export default RandomCannabis;
