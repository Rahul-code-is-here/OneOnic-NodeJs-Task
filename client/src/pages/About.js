import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us- vegitable App  "}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Welcome to Fresh Harvest, your number one online marketplace for
            fresh fruits and vegetables. We are dedicated to providing you with
            the very best produce, sourced directly from farms to ensure the
            highest quality. Founded in 2024, Fresh Harvest has come a long way
            from its beginnings. Our passion for fresh, healthy, and locally
            sourced produce drove us to start our own business. We believe in
            the importance of eating fresh and eating local, and we want to make
            it easy for everyone to access high-quality fruits and vegetables.
            At Fresh Harvest, we understand that you lead a busy life, and
            grocery shopping can be time-consuming. That’s why we deliver
            straight to your doorstep, so you can enjoy fresh produce without
            the hassle. Our team works tirelessly to meet your needs. We’re
            proud to serve customers all over the country, and we’re excited to
            continue growing and bringing fresh produce to more people. Thank
            you for choosing Fresh Harvest. We look forward to serving you!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
