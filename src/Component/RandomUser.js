import axios from "axios";
import { useState, useEffect } from "react";
import {isWebpSupported} from 'react-image-webp/dist/utils';
import userWEB from '../images/user.webp';
import userJPG from '../images/user.jpg'

const GetUser = () => {
  const [newUser, setNewUser] = useState(false);
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
  const [mail, setMail] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [stateis, setStateis] = useState("");
  const [street, setStreet] = useState("");
  const [zipcode, setZipcode] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const apiURL = "https://random-data-api.com/api/users/random_user";
      const response = await axios.get(apiURL);
      setAvatar(response.data.avatar);
      setName(response.data.first_name);
      setSurname(response.data.last_name);
      setGender(response.data.gender);
      setBirthday(response.data.date_of_birth);
      setMail(response.data.email);
      setCountry(response.data.address.country);
      setCity(response.data.address.city);
      setStateis(response.data.address.state);
      setStreet(response.data.address.street_name);
      setZipcode(response.data.address.zip_code)
      console.log(response.data);
    };

    fetchData();
  }, [newUser]);

  return (
    <>
      <section className="py-3">
        <div className="container">
          <div className="col-lg-12">
            <div className="info-wrapper row align-items-center justify-content-center ">
              <div className="info-inner bg-light p-2">
                <div className="user-avatar my-2 text-center">
                  <img className="avatar" src={avatar} alt="" />
                </div>
                <div className="two-menu my-3 d-flex justify-content-center  ">
                  <div className="col-md-6">
                    <div className="left-menu">
                      <h2 className="info-headers">
                        Name : <span className="result">{name}</span>
                      </h2>
                      <h2 className="info-headers">
                        Surname : <span className="result">{surname}</span>
                      </h2>
                      <h2 className="info-headers">
                        Gender : <span className="result">{gender}</span>
                      </h2>
                      <h2 className="info-headers">
                        Birthday : <span className="result">{birthday}</span>
                      </h2>
                      <h2 className="info-headers">
                        Email : <span className="result">{mail}</span>
                      </h2>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="right-menu">
                      <h2 className="info-headers">
                        Country : <span className="result">{country}</span>
                      </h2>
                      <h2 className="info-headers">
                        City : <span className="result">{city}</span>
                      </h2>
                      <h2 className="info-headers">
                        State : <span className="result">{stateis}</span>
                      </h2>
                      <h2 className="info-headers">
                        Street : <span className="result">{street}</span>
                      </h2>
                      <h2 className="info-headers">
                      Zip Code : <span className="result">{zipcode}</span>
                    </h2>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setNewUser(!newUser)}
                  className="w-100 mt-2 py-3 btn generate-btn"
                >
                  Get Random User
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-100 h-100 user-bg">
        {isWebpSupported()
          ? <img className="img-fluid" src={userWEB} />
          : <img className="img-fluid" src={userJPG} />
        }
      </div>
      </section>
    </>
  );
};

export default GetUser;
