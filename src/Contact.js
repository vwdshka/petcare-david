import "./Contact.css";
import WorkingHoursTable from "./WorkingHoursTable";
import ContactBanner from "./ContactBanner";
import { useState } from "react";
import "./Contact.css";
import { doc, setDoc } from "firebase/firestore";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "./firebase-config";

function Contact() {
  const [firstName, setName] = useState("");
  const [lastName, setlastName] = useState("");
  const [emailAddress, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [messageInput, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add a new document in collection "cities"

    setDoc(doc(db, "FormInput", "form-input-contact"), {
      firstName: firstName,
      lastName: lastName,
      emailAddress: emailAddress,
      phoneNumber: phoneNumber,
      messageInput: messageInput,
    })
      .then(() => {
        alert("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });

    // db.setDoc("FormInput")
    //   .doc("form-input-contact")
    //   .add({
    //     firstName: firstName,
    //     lastName: lastName,
    //     emailAddress: emailAddress,
    //     phoneNumber: phoneNumber,
    //     messageInput: messageInput,
    //   })
    //   .then(() => {
    //     console.log("Document successfully written!");
    //   })
    //   .catch((error) => {
    //     console.error("Error writing document: ", error);
    //   });

    // setDoc(doc(db, "cities", "LA"), {
    //   name: "Los Angeles",
    //   state: "CA",
    //   country: "USA",
    // });
  };

  return (
    <>
      <ContactBanner></ContactBanner>
      <div
        className="contact2"
        style={{
          backgroundImage:
            "url(https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/map.jpg)",
        }}
        id="contact"
      >
        <div className="container">
          <div clasNames="row contact-container">
            <div className="col-lg-12">
              <div className="card card-shadow border-0 mb-4">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="contact-box p-4">
                      <h4 className="title">Let's Talk!</h4>
                      {/* {/* Form submission here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! onSubmit={}/* /} */}
                      <form onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="form-group mt-3">
                              {/* First Name Input */}
                              <input
                                className="form-control"
                                type="text"
                                placeholder="First Name"
                                onChange={(e) => setName(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group mt-3">
                              {/* Last Name Input */}
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Last Name"
                                onChange={(e) => setlastName(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group mt-3">
                              {/* Email Input */}
                              <input
                                className="form-control"
                                type="text"
                                placeholder="E-mail Address"
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group mt-3">
                              {/* Phone Number Input*/}
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Phone Number"
                                onChange={(e) => setPhoneNumber(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group mt-3">
                              {/* Message Input*/}
                              <input
                                className="form-control"
                                id="input-field"
                                type="text"
                                placeholder="Message"
                                onChange={(e) => setMessage(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            {/* Submit Button */}
                            <button
                              type="submit"
                              class="btn btn-danger-gradiant mt-3 mb-3 text-white border-0 py-2 px-3"
                            >
                              <span>
                                {" "}
                                SUBMIT NOW <i className="ti-arrow-right"></i>
                              </span>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 bg-image text-center"
                    id="contact-card-side-img"
                    style={{
                      backgroundImage:
                        "url(https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/1.jpg)",
                    }}
                  >
                    <div className="detail-box p-4" text-center>
                      <h5
                        className="text-white font-weight-light mb-3"
                        text-center
                      >
                        Address
                      </h5>
                      <p className="text-white op-7" text-center>
                        Leof. El. Venizelou 28 <br /> Athina, 106 79
                      </p>
                      <h5
                        className="text-white font-weight-light mb-3 mt-4"
                        text-center
                      >
                        Email Us @
                      </h5>
                      <p className="text-white op-7" text-center>
                        petcare@support.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="google-maps-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3141.7776492731705!2d23.8604798!3d38.052267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a19c025bbf6c09%3A0xae7716ed2d5b8bf8!2sLeof.%20El.%20Venizelou%2028%2C%20Penteli%20152%2036!5e0!3m2!1sen!2sgr!4v1705698119071!5m2!1sen!2sgr"
          width="100%"
          height="600"
          title="Google Maps"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div>
        <WorkingHoursTable></WorkingHoursTable>
      </div>
    </>
  );
}

export default Contact;
