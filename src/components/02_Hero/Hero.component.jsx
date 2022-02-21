import React from "react";
import "./Hero.styles.css";
import hero from "../../images/hero.png";
import customer_1 from "../../images/customers/customer-1.jpg";
import customer_2 from "../../images/customers/customer-2.jpg";
import customer_3 from "../../images/customers/customer-3.jpg";
import customer_4 from "../../images/customers/customer-4.jpg";
import customer_5 from "../../images/customers/customer-5.jpg";
import customer_6 from "../../images/customers/customer-6.jpg";
import omnifood_logo from "../../images/omnifood-logo.png";
import app_screen_1 from "../../images/app/app-screen-1.png";
import app_screen_2 from "../../images/app/app-screen-2.png";
import app_screen_3 from "../../images/app/app-screen-3.png";

const Hero = () => {
  return (
    <div>
      <header className="header">
        <img className="logo" src={omnifood_logo} alt="Omnifood logo" />

        <nav className="main-nav">
          <ul className="main-nav-list">
            <li>
              <a className="main-nav-link" href="#">
                Section 1
              </a>
            </li>
            <li>
              <a className="main-nav-link" href="#">
                Section 2
              </a>
            </li>
            <li>
              <a className="main-nav-link" href="#">
                Section 3
              </a>
            </li>
            <li>
              <a className="main-nav-link" href="#">
                Section 4
              </a>
            </li>
            <li>
              <a className="main-nav-link nav-cta" href="#">
                Section 5
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="section-hero">
          <div className="hero">
            <div className="hero-text-box">
              <h1 className="heading-primary">
                A healthy meal delivered to your door, every single day
              </h1>
              <p className="hero-description">
                The smart 365-days-per-year food subscription that will make you
                eat healthy again. Tailored to your personal tastes and
                nutritional needs. We have delivered 250,000+ meals last year!
              </p>
              <a href="#" className="btn btn--full margin-right-sm">
                Start eating well
              </a>
              <a href="#" className="btn btn--outline">
                Learn more &darr;
              </a>

              <div className="delivered-meals">
                <div className="delivered-imgs">
                  <img src={customer_1} alt="Customer 1" />
                  <img src={customer_2} alt="Customer 2" />
                  <img src={customer_3} alt="Customer 3" />
                  <img src={customer_4} alt="Customer 4" />
                  <img src={customer_5} alt="Customer 5" />
                  <img src={customer_6} alt="Customer 6" />
                </div>
                <p className="delivered-text">
                  <span>250.000+</span> meals delivered last year
                </p>
              </div>
            </div>
            <div className="hero-img-box">
              <img
                className="hero-img"
                src={hero}
                alt="Woman enjoying foor, meals in storage container, and food bowls on a table"
              />
            </div>
          </div>
        </section>

        <section className="section-featured"></section>

        <section className="section-how">
          <div className="container">
            <span className="subheading">How it works</span>
            <h2 className="heading-secondary">
              Your daily dose of health in 3 simple steps
            </h2>
          </div>

          <div className="container grid grid--center-v grid--2-cols">
            {/* Step 01 */}
            <div className="step-text-box">
              <p className="step-number">01</p>
              <h3 className="heading-tertiary">
                Tell us what you like (and what not):
              </h3>
              <p className="step-description">
                Never again waste time thinking about what to eat! Omnifood AI
                will create a 100% personalized weekly meal plan just for you.
                It makes sure you get all the nutrients and vitamins you need,
                no matter what diet you follow!
              </p>
            </div>
            <div className="step-img-box">
              <img
                className="step-img"
                src={app_screen_1}
                alt="iphone app preferences selection screen"
              />
            </div>

            {/* Step 02 */}
            <div className="step-img-box">
              <img
                className="step-img"
                src={app_screen_2}
                alt="iPhone meal approving plan screen"
              />
            </div>

            <div className="step-text-box">
              <p className="step-number">02</p>
              <h3 className="heading-tertiary">
                Approve your weekly meal plan:
              </h3>
              <p className="step-description">
                Once per week, approve the meal plan generated for you by
                Omnifood AI. You can change ingredients, swap entire meals, or
                even add your own recipes.
              </p>
            </div>

            {/* Step 03 */}
            <div className="step-text-box">
              <p className="step-number">03</p>
              <h3 className="heading-tertiary">
                Receive meals at convenient time:
              </h3>
              <p className="step-description">
                Receive meals at convenient time: Best chefs in town will cook
                your selected meal every day, and we will deliver it to your
                door whenever works best for you. You can change delivery
                schedule and address daily!
              </p>
            </div>

            <div className="step-img-box">
              <img
                className="step-img"
                src={app_screen_3}
                alt="iPhone app delivery screen"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Hero;
