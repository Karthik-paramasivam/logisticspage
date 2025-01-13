import React, { useState, useRef, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BackgroundImage from "./Images/Port.jpg";
import { Button, Form, Input, Select, message, Space } from "antd";
import { motion } from "framer-motion"; // Import framer-motion for animations
import "./App.css";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CharteredImage from "./Images/CharteredImage.png";
import CILT2Image from "./Images/CILT2Image.jpg";
import CILT3Image from "./Images/CILT3Image.jpg";
import CILT5Image from "./Images/CILT5Image.jpg";
import CILT6Image from "./Images/CILT6Image.jpg";

import Welcome from "./Images/Welcome.jpg";
import Footerlogo from "./Images/Footerlogo.png";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import {
  faCheck,
  faCircleCheck,
  faPlaneUp,
} from "@fortawesome/free-solid-svg-icons";
import WingsBanner from "./Images/WingsWayBanner.jpg";

export default function Home() {
  const [form] = Form.useForm(); // useForm hook for handling form operations
  const [formData, setFormData] = useState(null); // State to store submitted data
  const [phoneNumber, setPhoneNumber] = useState(""); // State for phone number input
  const [countryCode, setCountryCode] = useState("+971"); // Default country code
  const { Option } = Select;

  const [hasViewed, setHasViewed] = useState(false); // Track if the element is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when the element is in view
    onChange: (inView) => {
      if (inView) setHasViewed(true); // Set to true when the element enters the viewport
    },
  });

  const [hasViewedSlide, setHasViewedSlide] = useState({
    zeroElement: false,
    myElement: false,
    secondElement: false,
    thirdElement: false,
    fourthElement: false,
    fifthElement: false,
    sixthElement: false,
    seventhElement: false,
    eighthElement: false,
  });

  const { ref: myRef0, inView: zeroElementIsVisible } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.zeroElement) {
        setHasViewedSlide((prev) => ({ ...prev, zeroElement: true }));
      }
    },
  });

  const { ref: myRef1, inView: myElementIsVisible } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.myElement) {
        setHasViewedSlide((prev) => ({ ...prev, myElement: true }));
      }
    },
  });

  const { ref: myRef2, inView: secondElementIsVisible } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.secondElement) {
        setHasViewedSlide((prev) => ({ ...prev, secondElement: true }));
      }
    },
  });

  const { ref: myRef3, inView: thirdElementIsVisible } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.thirdElement) {
        setHasViewedSlide((prev) => ({ ...prev, thirdElement: true }));
      }
    },
  });

  const { ref: myRef4, inView: fourthElementIsVisible } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.fourthElement) {
        setHasViewedSlide((prev) => ({ ...prev, fourthElement: true }));
      }
    },
  });

  const { ref: myRef5, inView: fifthElementIsVisible } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.fifthElement) {
        setHasViewedSlide((prev) => ({ ...prev, fifthElement: true }));
      }
    },
  });
  const { ref: myRef6, inView: sixthElement } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.sixthElement) {
        setHasViewedSlide((prev) => ({ ...prev, sixthElement: true }));
      }
    },
  });
  const { ref: myRef7, inView: seventhElement } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.seventhElement) {
        setHasViewedSlide((prev) => ({ ...prev, seventhElement: true }));
      }
    },
  });
  const { ref: myRef8, inView: eighthElement } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.eighthElement) {
        setHasViewedSlide((prev) => ({ ...prev, eighthElement: true }));
      }
    },
  });

  useEffect(() => {
    // Effect when the element enters the viewport
    if (inView) {
      setHasViewed(true); // Set animation to true
    }
  }, [inView]);

  // Handle form submission
  const handleSubmit = (values) => {
    // Log the values during the first submission, formData will be null initially
    // console.log(values);
    setFormData(values); // Set form data after submission
    message.success("Form submitted successfully!");
    setPhoneNumber(""); // Reset phone number field
    form.resetFields(); // Reset all fields
  };

  // Handle phone number change
  // const handlePhoneNumberChange = (e) => {
  //   setPhoneNumber(e.target.value); // Update the phone number state
  // };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;

    // Remove any non-numeric characters
    const filteredValue = value.replace(/\D/g, ""); // Remove non-digit characters
    setPhoneNumber(filteredValue); // Update the phone number state with filtered value
  };

  const validatePhoneNumber = (_, value) => {
    const selectedCountry = countryCodes.find(
      (country) => country.code === countryCode
    );
    const expectedLength = selectedCountry ? selectedCountry.phoneLength : 10; // Default to 10 if no country selected
    const fullPhoneNumber = value;
    if (!value) {
      return Promise.reject(new Error(""));
    }
    // Validate phone number length based on the selected country
    if (fullPhoneNumber.length !== expectedLength) {
      return Promise.reject(
        new Error(
          `Please enter a valid phone number with ${expectedLength} digits!`
        )
      );
    }

    return Promise.resolve();
  };

  // Define country codes
  const countryCodes = [
    { code: "+971", label: "UAE (+971)", phoneLength: 7 },
    { code: "+1", label: "USA (+1)", phoneLength: 10 },
    { code: "+44", label: "UK (+44)", phoneLength: 10 },
    { code: "+91", label: "India (+91)", phoneLength: 10 },
    { code: "+61", label: "Australia (+61)", phoneLength: 9 },
    { code: "+81", label: "Japan (+81)", phoneLength: 10 },
    { code: "+33", label: "France (+33)", phoneLength: 10 },
  ];

  // Handle country code change
  const handleCountryChange = (value) => {
    setCountryCode(value); // Update the selected country code
  };
  const validateEmail = (_, value) => {
    if (!value) {
      return Promise.reject(new Error(""));
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // Basic email regex
    if (!emailRegex.test(value)) {
      return Promise.reject(new Error("Please enter a valid email address!"));
    }
    return Promise.resolve();
  };
  const styl = `
  .ant-form-vertical .ant-form-item:not(.ant-form-item-horizontal) .ant-form-item-label >label, 
  .ant-form-vertical .ant-form-item:not(.ant-form-item-horizontal) .ant-col-24.ant-form-item-label >label, 
  .ant-form-vertical .ant-form-item:not(.ant-form-item-horizontal) .ant-col-xl-24.ant-form-item-label >label {
    margin: 0;
    color: white;
  }
    .slick-dots {
    position: absolute;
    bottom: -30px;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
}
    .slick-prev, .slick-next {
    font-size: 0;
    line-height: 0;
    position: absolute;
    top: 40%;
    display: block;
    width: 20px;
    height: 20px;
    padding: 0;
    transform: translate(0, -50%);
    cursor: pointer;
    color: white;
    border: none;
    outline: none;
    background: white;
}
    .slick-prev:before, .slick-next:before {
    font-family: 'slick';
    font-size: 20px;
    line-height: 1;
    opacity: .75;
    color: #1677ff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
    .slick-dots li button:before {
    font-family: 'slick';
    font-size: 15px;
    line-height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    content: '•';
    text-align: center;
    opacity: .25;
    color: #0d278e;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
    .slick-dots li.slick-active button:before {
    opacity: .75;
    color: #1677ff;
}
`;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    autoplaySpeed: 4000,
    // initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          speed: 300,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          speed: 300,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 300,
        },
      },
    ],
  };

  return (
    <>
      <style>{styl}</style>

      <div className="container-fluid">
        <div className="container-fluid m-0 p-0">
          <div className="row">
            <div
              className="col-12 dynamic-height"
              style={{
                position: "relative",
                height: "700px",
                // minHeight:"900px",
                backgroundColor: "rgba(0, 0, 0, 0.3)", // Semi-transparent background color
              }}
            >
              {/* Pseudo-element for blurred background */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: `url(${BackgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  zIndex: -1, // Keep the background behind the content
                }}
              ></div>
              <div
                className="row mt-5 rounded-5 m-auto p-2 terminalresponsive-container"
                // style={{
                //   backdropFilter: "0px",
                //   background: "rgba(87, 87, 87, 0.4)",
                //   width: "80%",
                // }}
              >
                {/* First Column with Animation */}
                <motion.div
                  className="col-12 col-lg-6 col-xl-6 col-xxl-6 mt-5 m-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5 }}
                >
                  <h1
                    className="text-white mt-xl-5 mt-xxl-5"
                    style={{ fontSize: "60px", fontWeight: "700" }}
                  >
                    Discover Your
                    <br />
                    Potential in{" "}
                    <span style={{ color: "#007dc0" }}>Logistics</span>
                  </h1>
                  <h3 className="text-white fw-light">
                    Uncover new career opportunities with logistics and
                    transport training courses.
                  </h3>
                </motion.div>

                {/* Second Column with Animation */}
                <motion.div
                  className="col-12 col-lg-6 col-xl-6 col-xxl-5 rounded-4 mt-3 m-auto mt-lg-1 mb-lg-1 "
                  style={{
                    // backgroundColor: "rgb(243, 188, 68)",
                    backgroundColor: "#0721a4",
                    padding: "20px",
                  }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2 }}
                >
                  <h1 className="text-white mt-2 text-center mt-md-3 mt-lg-2">
                    Enquire Now
                  </h1>
                  <Form form={form} layout="vertical" onFinish={handleSubmit}>
                    {/* First Name Field */}
                    <Form.Item
                      label="First Name"
                      name="firstName"
                      className="form-item text-white"
                      rules={[
                        {
                          required: true,
                          message: "Please input your first name!",
                        },
                      ]}
                    >
                      <Input placeholder="Enter your first name" />
                    </Form.Item>

                    {/* Last Name Field */}
                    <Form.Item
                      label="Last Name"
                      name="lastName"
                      className="form-item text-white"
                      rules={[
                        {
                          required: true,
                          message: "Please input your last name!",
                        },
                      ]}
                    >
                      <Input placeholder="Enter your last name" />
                    </Form.Item>

                    {/* Email Field */}
                    <Form.Item
                      label="Email"
                      name="email"
                      className="form-item "
                      rules={[
                        {
                          required: true,
                          message: "Please input your Email!",
                        },
                        { validator: validateEmail },
                      ]}
                    >
                      <Input placeholder="Enter your Email" />
                    </Form.Item>

                    {/* Phone Number Field with Country Code */}
                    <Form.Item
                      label="Phone Number"
                      name="phone"
                      className="form-item text-white"
                      rules={[
                        {
                          required: true,
                          message: "Please input your phone number!",
                        },
                        { validator: validatePhoneNumber },
                      ]}
                    >
                      <Space.Compact style={{ width: "100%" }}>
                        <Select
                          defaultValue={countryCodes[0].code}
                          // style={{ width: "150px" }}
                          onChange={handleCountryChange}
                          style={{ width: "30%" }} // Adjust the width as needed
                        >
                          {countryCodes.map((country, index) => (
                            <Select.Option key={index} value={country.code}>
                              {country.label}
                            </Select.Option>
                          ))}
                        </Select>
                        <Input
                          value={phoneNumber}
                          onChange={handlePhoneNumberChange}
                          // style={{
                          //   width: "calc(100% - 0px)",
                          // }}
                          style={{ width: "70%" }} // Adjust the width as needed
                          placeholder="Enter your phone number"
                          // maxLength={10}
                        />
                      </Space.Compact>
                    </Form.Item>

                    <Form.Item
                      label="CILT Courses"
                      name="courses"
                      className="form-item text-white"
                      rules={[
                        {
                          required: true,
                          message: "Please select your course!",
                        },
                      ]}
                    >
                      <Select placeholder="Select your course">
                        {/* <Option value="cilt_level_1">CILT Level 1</Option> */}
                        <Option value="cilt_level_2">CILT Level 2</Option>
                        <Option value="cilt_level_3">CILT Level 3</Option>
                        {/* <Option value="cilt_level_4">CILT Level 4</Option> */}
                        <Option value="cilt_level_5">CILT Level 5</Option>
                        <Option value="cilt_level_6">CILT Level 6</Option>
                      </Select>
                    </Form.Item>

                    <Form.Item>
                      <div className="d-flex justify-content-end">
                        <Button
                          type="default"
                          htmlType="submit"
                          style={{
                            backgroundColor:
                              "#faad14" /* Ant Design warning color */,
                            color: "white",
                            borderColor: "#faad14",
                          }}
                          className="Submitbutton"
                        >
                          Submit
                        </Button>
                      </div>
                    </Form.Item>
                  </Form>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5" id="Aboutcilt">
          <div className="row border border-white m-auto">
            <div className="col-12">
              <div className="row">
                <motion.div
                  ref={ref}
                  className="col-12 col-lg-6 "
                  initial={{ opacity: 0, x: -50 }}
                  animate={{
                    opacity: hasViewed ? 1 : 0,
                    x: hasViewed ? 0 : -50,
                  }}
                  transition={{ duration: 1 }}
                >
                  {/* Course Description */}
                  <div className="course-text">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hasViewed ? 1 : 0 }}
                      transition={{ delay: 0.5, duration: 1 }}
                      className="course-title fs-3 fw-bold"
                    >
                      <h1 className="text-start">
                        <span className="fw-bold  ">About </span>
                        <span className="fw-bold text-primary" >
                          CILT
                        </span>
                      </h1>{" "}
                    </motion.p>
                    {/* <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hasViewed ? 1 : 0 }}
                      transition={{ delay: 0.7, duration: 1 }}
                      style={{ textAlign: "justify" }}
                    >
                      The Chartered Institute of Logistics and Transport (CILT,
                      UK) stands as the global leader in advocating for supply
                      chain, logistics, and transport. CILT is dedicated to
                      crafting effective programs and setting ambitious
                      objectives that form the cornerstone of its growth
                      strategy, rooted in regional development.
                    </motion.p> */}
                    <motion.ul
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hasViewed ? 1 : 0 }}
                      transition={{ delay: 0.7, duration: 1 }}
                      className="course-list text-start"
                      style={{ listStyleType: "none", paddingLeft: 0 }}
                    >
                      <motion.li
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hasViewed ? 1 : 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="d-flex align-items-start "
                      >
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          className="text-primary me-2 flex-shrink-0 mt-1"
                        />
                        <span>
                        The Chartered Institute of Logistics and Transport (CILT, UK) stands as the global leader in advocating for supply chain, logistics, and transport and setting global standards. CILT is dedicated to crafting effective programmes and setting ambitious objectives for supply chain logistics, and transport that form the cornerstone of its growth strategy.
                        </span>{" "}
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hasViewed ? 1 : 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="d-flex align-items-start mt-1"
                      >
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          className="text-primary me-2 flex-shrink-0 mt-1"
                        />
                        <span>
                        The institute’s unwavering commitment lies in the constant enhancement of its members’ expertise by fostering the exchange of best practices and knowledge-sharing.
                        </span>{" "}
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hasViewed ? 1 : 0 }}
                        transition={{ delay: 1.0, duration: 0.5 }}
                        className="d-flex align-items-start mt-1"
                      >
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          className="text-primary me-2 flex-shrink-0 mt-1"
                        />
                  Moreover, it actively promotes participation and professional advancement across all tiers of its membership.
                      </motion.li>
                    </motion.ul>
                  </div>
                </motion.div>

                <div className="col-12 col-lg-6 ">
                  <motion.div
                    className={`col-12 col-lg-6 m-auto border border-white  text-center`}
                    ref={myRef0}
                    initial={{ scale: 0 }}
                    animate={{ scale: hasViewedSlide.zeroElement ? 1 : 0 }}
                    transition={{
                      duration: 0.8,
                      type: "spring",
                      stiffness: 100,
                    }}
                  >
                    <img
                      src={CharteredImage}
                      alt="CharteredImage"
                      className="img-fluid rounded-3 mt-0 mt-lg-0 hover-scale"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-mt-5" id="ourcourses">
          <div className="row">
            <div className="col-12 ">
              <h1 className="text-center mt-lg-5">
                <span className="fw-bold "> Our </span>
                <span className="fw-bold text-primary" >
                  {" "}
                  Courses
                </span>
              </h1>
            </div>
          </div>
        </div>

        <div className="container mt-3">
          <div
            className={`row shadow rounded-4   slide-in-left  ${
              hasViewedSlide.myElement ? "animate-slide-in" : ""
            }`}
            ref={myRef1}
          >
            <div className="col-12 col-lg-6 col-xl-6 hover-scale2 text-center mt-3 mb-3 mt-lg-5  mt-xl-5 mt-xxl-3 ">
              <img
                src={CILT2Image}
                alt="CILT-Level 2"
                className="img-fluid rounded-3 mt-lg-0 mt-xl-0 mt-xxl-0 m-auto"
              />
            </div>

            <div className="col-12 col-lg-6 col-xl-6 col-xxl-5 mt-2 mt-lg-4 mt-xl-4 mt-xxl-5  ms-xxl-2 border border-white mb-3">
              <h2 className="text-center mt-lg-2 mt-xl-5 mt-xxl-5">
                <span className="fw-bold  ">CILT </span>
                <span className="fw-bold  text-primary">Level 2</span>
              </h2>
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                <li className="mt-1 d-flex align-items-start ">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 flex-shrink-0 mt-1"
                  />
                 The CILT Level 2 Introductory Certificate course is the ideal choice for anyone looking to start their career in the Logistics industry, catering to both frontline and supervisory staff. CILT enjoys global recognition as an authority in Logistics and Transport.
                </li>
                {/* <li className="mt-1 d-flex align-items-start ">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 flex-shrink-0 mt-1"
                  />
                  The course covers essential topics, including logistics, transport operations, and industry principles.
                </li> */}
                <li className="d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 flex-shrink-0 mt-1"
                  />
                  While it is open to all, prior familiarity with logistics and
                  transport operations and industry fundamentals is beneficial.
                </li>
                <li className="d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 flex-shrink-0 mt-1"
                  />
                  The course covers essential topics, including logistics,
                  transport operations, and industry principles.
                </li>
                
                <li className="d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2  flex-shrink-0 mt-1"
                  />
                  <div>
                    <span style={{ fontWeight: "bold" }}>
                    Course Duration -
                    </span>{" "}
                    <span >
                    160 hours
                    </span>
                  </div>
                </li>
              </ul>
              <div className="text-center ">
                <Button
                  className="mt-2 text-center text-white Enquirebutton mb-2 mb-lg-0"
                  style={{ background: "#0d278e" }}
                  onClick={() => {
                    window.location.href = "#"; // Simulate href="#" behavior
                  }}
                >
                  Enquire Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div
            className={`row shadow rounded-4  slide-in-left  ${
              hasViewedSlide.secondElement ? "animate-enquire" : ""
            }`}
            ref={myRef2}
          >
            <div className="col-12 col-lg-6 col-xl-5 col-xxl-5 mt-2  mb-3 ms-lg-3 ms-xl-3 ms-xxl-5 mt-lg-4 mt-xl-4 mt-xxl-5 ps-xxl-4">
              <h2 className="text-center mt-lg-2 mt-xl-5 mt-xxl-5">
                <span className="fw-bold  ">CILT </span>
                <span className="fw-bold  text-primary">Level 3</span>
              </h2>
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                <li className="mt-1 d-flex align-items-start ">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 flex-shrink-0 mt-1"
                  />
                  This entry-level course has been thoughtfully tailored by our expert trainers to align with local market demands while developing crucial logistics and supply chain skills.
                </li>
                <li className="mt-1 d-flex align-items-start ">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 flex-shrink-0 mt-1"
                  />
                Our curriculum encompasses a global perspective, exploration of shipping routes, and relevant topics, all aimed at preparing you for international job opportunities.
                </li>
                <li className="d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 flex-shrink-0 mt-1"
                  />
                  At WingsWay, we go the extra mile, offering comprehensive exam preparation, scholarships, interest-free EMI options, internships, end-to-end support, and more.
                </li>
                <li className="d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2  flex-shrink-0 mt-1"
                  />
                  <div>
                    <span style={{ fontWeight: "bold" }}>
                    Course Duration -
                    </span>{" "}
                    <span >
                    40 hours
                    </span>
                  </div>
                </li>
              </ul>
              <div className="text-center">
                <Button
                  className="mt-2 text-center text-white Enquirebutton mb-2 mb-lg-0"
                  style={{ background: "#0d278e" }}
                  onClick={() => {
                    window.location.href = "#"; // Simulate href="#" behavior
                  }}
                >
                  Enquire Now
                </Button>
              </div>
            </div>
            <div className="col-12 col-lg-5 col-xl-6 col-xxl-6 hover-scale2 text-center mt-3 mb-3 mt-lg-3  mt-xl-3 mt-xxl-3 ">
              <img
                src={CILT3Image}
                alt="CILT-Level 3"
                className="img-fluid rounded-3 mt-lg-0 mt-xl-0 mt-xxl-0 m-auto"
              />
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div
            className={`row shadow rounded-4   slide-in-left  ${
              hasViewedSlide.thirdElement ? "animate-slide-in" : ""
            }`}
            ref={myRef3}
          >
            <div className="col-12 col-lg-6 col-xl-6 hover-scale2 text-center mt-3 mb-3 mt-lg-3 mt-xl-3 mt-xxl-3 ">
              <img
                src={CILT5Image}
                alt="CILT-Level 5"
                className="img-fluid rounded-3 mt-lg-0 mt-xl-0 mt-xxl-0 m-auto"
              />
            </div>

            <div className="col-12 col-lg-6 col-xl-6 col-xxl-5 mt-2 mt-lg-5 mt-xl-3 mt-xxl-5 ms-xxl-2 border border-white mb-3">
              <h2 className="text-center mt-lg-4 mt-xl-5 mt-xxl-5 ">
                <span className="fw-bold  mt-lg-1 ">CILT </span>
                <span className="fw-bold  text-primary">Level 5</span>
              </h2>
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                <li className="mt-1 d-flex align-items-start ">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 flex-shrink-0 mt-1"
                  />
                  The CILT Level 5 - International Diploma in Logistics and Transport at WingsWay Training Institute is an advanced entry-level program ideal for logistic professionals seeking career growth and higher income.
                </li>
                <li className="mt-1 d-flex align-items-start ">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 flex-shrink-0 mt-1"
                  />
                  This course covers everything from sea, air, road, and rail transport planning, warehousing, international business, strategies, and much more.
                </li>
                <li className="d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 flex-shrink-0 mt-1"
                  />
                  The Level 5 qualification is equivalent to two years of a degree program.
                </li>
                <li className="d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2  flex-shrink-0 mt-1"
                  />
                  <div>
                    <span style={{ fontWeight: "bold" }}>
                    Course Duration -
                    </span>{" "}
                    <span>
                    70 hours
                    </span>
                  </div>
                </li>
              </ul>
              <div className="text-center">
                <Button
                  className="mt-2 text-center text-white Enquirebutton mb-2 mb-lg-0"
                  style={{ background: "#0d278e" }}
                  onClick={() => {
                    window.location.href = "#"; // Simulate href="#" behavior
                  }}
                >
                  Enquire Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div
            className={`row shadow rounded-4  slide-in-left  ${
              hasViewedSlide.fourthElement ? "animate-enquire" : ""
            }`}
            ref={myRef4}
          >
            <div className="col-12 col-lg-6 col-xl-5 col-xxl-5 mt-2  mb-3 ms-lg-3 ms-xl-3 ms-xxl-5 mt-lg-4 mt-xl-4 mt-xxl-5 ps-xxl-4">
              <h2 className="text-center mt-lg-2 mt-xl-5 mt-xxl-5">
                <span className="fw-bold  ">CILT </span>
                <span className="fw-bold  text-primary">Level 6</span>
              </h2>
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                <li className="mt-1 d-flex align-items-start ">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 flex-shrink-0 mt-1"
                  />
                  The CILT - Level 6 International Advance Diploma in Logistics and Transport helps logistics and transport professionals bridge the gap between a Level 5 Professional Diploma and a master’s degree.
                </li>
                <li className="mt-1 d-flex align-items-start ">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 flex-shrink-0 mt-1"
                  />
                  This course equips you with the strategic management skills and tactical insights crucial for professional and business development.
                </li>
                <li className="d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 flex-shrink-0 mt-1"
                  />
                With WingsWay, benefit from intensive exam preparation, scholarships, interest-free EMI options, internships, and unwavering support throughout your journey.
                </li>
                <li className="d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2  flex-shrink-0 mt-1"
                  />
                  <div>
                    <span style={{ fontWeight: "bold" }}>
                    Course Duration -
                    </span>{" "}
                    <span >
                    90 hours
                    </span>
                  </div>
                </li>
              </ul>
              <div className="text-center">
                <Button
                  className="mt-2 text-center text-white Enquirebutton mb-2 mb-lg-0"
                  style={{ background: "#0d278e" }}
                  onClick={() => {
                    window.location.href = "#"; // Simulate href="#" behavior
                  }}
                >
                  Enquire Now
                </Button>
              </div>
            </div>
            <div className="col-12 col-lg-5 col-xl-6 col-xxl-6 hover-scale2 text-center mt-3 mb-3 mt-lg-3  mt-xl-3 mt-xxl-3 ">
              <img
                src={CILT6Image}
                alt="CILT-Level 6"
                className="img-fluid rounded-3 mt-lg-0 mt-xl-0 mt-xxl-0 m-auto"
              />
            </div>
          </div>
        </div>

        <div
          className={` container mt-5 border border-white  rounded-4 slide-in-left   ${
            hasViewedSlide.fifthElement ? "animate-slide-in" : ""
          }`}
          ref={myRef5}
          id="Testimonials"
        >
          <div className="row border-primary ">
            <div className="col-12 text-center mb-4">
              <h1 className="fw-bold">
                <span className="fw-bold  ">Testimonials</span>
              </h1>
            </div>
          </div>

          <Slider
            {...settings}
            className="m-0 p-0 col-12 col-md-8 col-lg-8 m-auto"
          >
            <div>
              <div className=" p-3 shadow-sm border border-2 border-light rounded-3 ms-lg-3 ms-xl-4 ms-xxl-4 mt-2 ms-2 testimonialresponsive-div">
                <h3 className="text-center mt-5">Touqeer ul-haq</h3>
                <p className=" mt-3 text-center">
                Attending this institute has been an incredible experience. The environment is both welcoming and motivating, which makes learning enjoyable. Mr. Naveen stands out as an exceptional teacher. His ability to clarify complex concepts and his passion for the subject truly inspire me. He is always approachable and goes the extra mile to ensure we understand the material. Thanks to his guidance, I feel much more confident in my abilities. I am grateful to be part of this learning community!.
                </p>
              </div>
            </div>
            <div>
              <div className=" p-3 shadow-sm border border-light rounded-3 ms-md-2 ms-lg-3 ms-xl-4 ms-xxl-4 mt-2 ms-2 testimonialresponsive-div">
                <h3 className="text-center mt-5">Manish Poojary</h3>
                <p className="text-center">
                It was such an amazing training! The trainer, Mr. Naveen was so professional, and his teaching helped me a lot to know about much more things technically. I highly recommend joining WingsWay Training Institute.
                </p>
              </div>
            </div>
            <div>
              <div className="p-3 shadow-sm border border-light rounded-3 ms-lg-3 ms-xl-4 ms-xxl-4 mt-2 ms-2 testimonialresponsive-div ">
                <h3 className="text-center mt-5">Hanadi Ghannam</h3>
                <p className="text-center">
                I highly recommend learning through this institute to update your knowledge. From day one up till now Mr. Junaid and the team were very responsive. Least but not last, I can't miss Dr. Manish's way of teaching.
                </p>
              </div>
            </div>
            <div>
              <div className="p-3 shadow-sm border border-light rounded-3 ms-md-2 ms-lg-3 ms-xl-4 ms-xxl-4 ms-2 mt-2 testimonialresponsive-div">
                <h3 className="text-center mt-5">Sameer</h3>
                <p className="text-center">
                I recently completed a course at WingsWay Training Institute, and I am thoroughly impressed with the entire experience. From start to finish, the institute has demonstrated a high level of professionalism and dedication to providing quality education.
                </p>
              </div>
            </div>
            <div>
              <div className="p-3 shadow-sm border border-light rounded-3 ms-lg-3 ms-xl-4 ms-xxl-4 mb-1 ms-2 mt-2 testimonialresponsive-div">
                <h3 className="text-center mt-md-5 mt-5">Juliet D </h3>
                <p className="text-center">
                  {" "}
                  I have completed my CILT diploma with Wingsway Dubai. I must say it’s the best decision I took as this gave lot of opportunity to learn & explore more and Mr. Naveen sir has been so helping, and he ensured that we understood well.
                </p>
              </div>
            </div>

            <div>
              <div className="p-3 shadow-sm border border-light rounded-3 ms-lg-3 ms-xl-4 ms-xxl-4 mb-1 ms-2 mt-2 testimonialresponsive-div">
                <h3 className="text-center mt-md-5 mt-5">Sidonie la Fleur</h3>

                <p className="text-center">
                  {" "}
                  Learning experience was good. Specially the trainer Mr. Naveen teaching methods are excellent. I recommend WingsWay Training Institute for procurement professional courses. Thank you.
                </p>
              </div>
            </div>
          </Slider>
        </div>

        <div className="container-fluid ">
          <div className="row">
            <div className="col-12">
              <p className="text-end">
                <a
                  href="https://wa.me/+971509062236"
                  className="fixed-icon"
                  target="_blank" // Opens in a new tab
                  rel="noopener noreferrer" // Security best practice when using target="_blank"
                >
                  <FontAwesomeIcon icon={faWhatsapp} bounce size="2x" />
                </a>
              </p>
            </div>
          </div>
        </div>

        <div
          className="container-fluid text-center m-0 p-0"
          style={{ backgroundColor: "#0a142f", color: "white" }}
        >
          <div
            className="row d-flex justify-content-center align-items-center mt-5 "
            style={{ backgroundColor: "#0a142f", color: "white" }}
          >
            <div className="col-12 col-md-12 col-lg-2 d-flex flex-column align-items-center text-center ms-lg-5">
              <img
                src={Footerlogo}
                alt="logo"
                className="img-fluid mt-3 responsive-logofooter text-center"
              />
            </div>

            <div className="col-12 col-md-12 col-lg-2 text-center mt-lg-2 text-lg-center ">
              <a href="#Aboutcilt" className="footer-link">
                <span>About CILT</span>
              </a>
            </div>

            <div className="col-12 col-md-12 col-lg-2 mt-3 mt-md-3 text-center mt-lg-2 text-lg-center ">
              <a href="#Aboutcilt" className="footer-link">
                <span>Contact Us</span>
              </a>
            </div>

            <div className="col-12 col-md-12 col-lg-2 mt-3 mt-md-3 text-center mt-lg-2 text-lg-center">
              <a href="#Testimonials" className="footer-link">
                <span>Testimonials</span>
              </a>
            </div>

            <div className="col-12 col-md-12 col-lg-2 mt-3 mt-md-3 text-center mt-lg-2 text-lg-center">
              <a href="#ourcourses" className="footer-link">
                <span>Our Courses</span>
              </a>
            </div>

            <div
              className="row "
              style={{ backgroundColor: "#0a142f", color: "white" }}
            >
              <div className="col-12 text-center mt-3 mt-lg-0 mb-3">
                <p>© 2023 WingsWay All rights reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
