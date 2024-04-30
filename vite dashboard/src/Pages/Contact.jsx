import React, { useState } from "react";
import img from "../assets/contact.png";
import Button from "../Components/Button";

const Contact = ({ props }) => {
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <>
      <div
       sx={{display:'flex', flexDirection:'column'}} style={{ display: "flex", flexDirection: "row", width: "100%" }}
       >
        <span
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: "1 1 50%" }}>
            <img src={img} alt="" style={{ maxWidth: "100%" }} />
          </div>
          <div style={{ flex: "1 1 50%", padding: "0 15px" }}>
            <form
              style={{
                maxWidth: "100%",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <h2>Contact us</h2>
              <label>Name:</label>
              <input
                type="text"
                style={{
                  width: "100%",
                  padding: "20px",
                  height: "30px",
                  marginBottom: "10px",
                }}
              />
              <label>Message:</label>
              <textarea
                type="text"
                style={{ width: "100%", padding: "65px" }}
              />
              <Button type="submit" style={{ padding: "50px" }}>
                Submit
              </Button>
            </form>
          </div>
        </span>
      </div>
      <div style={{ width: "100%", margin: "0%", padding: "0%" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217897.6204680448!2d72.92449151908008!3d31.42375903917971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392242a895a55ca9%3A0xdec58f88932671c6!2sFaisalabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1714248500314!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: 0, margin: 0 , bottom:'0%'}} // Set margin to 0
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
