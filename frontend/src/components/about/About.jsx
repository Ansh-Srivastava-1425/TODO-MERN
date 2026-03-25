import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="d-flex">
          <h1>About Us</h1>
        </div>
        <p>
          Our Todo application is designed to help users stay organized,
          focused, and productive in their daily lives. Built using the MERN
          stack, it provides a seamless experience for creating, managing, and
          tracking tasks in real time. With a clean and intuitive interface,
          users can easily add, update, and delete tasks while keeping their
          priorities in check. The application ensures efficient performance and
          reliable data storage, making it a dependable tool for both personal
          and professional use.<br /> <br />This project reflects a strong foundation in
          full-stack development, combining a responsive frontend with a
          powerful backend system. It demonstrates the ability to build scalable
          web applications using modern technologies and best practices. By
          focusing on simplicity and usability, the Todo app aims to enhance
          productivity while showcasing practical implementation of real-world
          development concepts.
        </p>
      </div>
    </div>
  );
};

export default About;
