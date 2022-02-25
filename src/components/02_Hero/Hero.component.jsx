import React from "react";
import "./Hero.styles.css";
import "./queries.css";
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
import business_insider from "../../images/logos/business-insider.png";
import forbes from "../../images/logos/forbes.png";
import techcrunch from "../../images/logos/techcrunch.png";
import new_york_times from "../../images/logos/the-new-york-times.png";
import usa_today from "../../images/logos/usa-today.png";
import meal_1 from "../../images/meals/meal-1.jpg";
import meal_2 from "../../images/meals/meal-2.jpg";
import dave from "../../images/customers/dave.jpg";
import hannah from "../../images/customers/hannah.jpg";
import steve from "../../images/customers/steve.jpg";
import ben from "../../images/customers/ben.jpg";
import gallery_1 from "../../images/gallery/gallery-1.jpg";
import gallery_2 from "../../images/gallery/gallery-2.jpg";
import gallery_3 from "../../images/gallery/gallery-3.jpg";
import gallery_4 from "../../images/gallery/gallery-4.jpg";
import gallery_5 from "../../images/gallery/gallery-5.jpg";
import gallery_6 from "../../images/gallery/gallery-6.jpg";
import gallery_7 from "../../images/gallery/gallery-7.jpg";
import gallery_8 from "../../images/gallery/gallery-8.jpg";
import gallery_9 from "../../images/gallery/gallery-9.jpg";
import gallery_10 from "../../images/gallery/gallery-10.jpg";
import gallery_11 from "../../images/gallery/gallery-11.jpg";
import gallery_12 from "../../images/gallery/gallery-12.jpg";

const Hero = () => {
  return (
    <div>
      <header className="header">
        <a href="#">
          <img className="logo" src={omnifood_logo} alt="Omnifood logo" />
        </a>
        <nav className="main-nav">
          <ul className="main-nav-list">
            <li>
              <a className="main-nav-link" href="#">
                How it works
              </a>
            </li>
            <li>
              <a className="main-nav-link" href="#">
                Meals
              </a>
            </li>
            <li>
              <a className="main-nav-link" href="#">
                Testimonials
              </a>
            </li>
            <li>
              <a className="main-nav-link" href="#">
                Pricing
              </a>
            </li>
            <li>
              <a className="main-nav-link nav-cta" href="#">
                Try for free
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

        <section className="section-featured">
          <div className="container">
            <h2 className="heading-featured-in">As featured in</h2>
            <div className="logos">
              <img
                className="feat-img"
                src={techcrunch}
                alt="Techcrunch Logo"
              />
              <img
                className="feat-img"
                src={business_insider}
                alt="Business Insider Logo"
              />
              <img
                className="feat-img"
                src={new_york_times}
                alt="New York Times Logo"
              />
              <img className="feat-img" src={forbes} alt="Forbes Logo" />
              <img className="feat-img" src={usa_today} alt="USA Today Logo" />
            </div>
          </div>
        </section>

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

        <section className="section-meals">
          <div className="container center-text">
            <span className="subheading">Meals</span>
            <h2 className="heading-secondary">
              Omnifood AI chooses from 5,000+ recipes
            </h2>
          </div>

          <div className="container grid grid--3-cols margin-bottom-md">
            <div className="meal">
              <img src={meal_1} className="meal-img" alt="Meal 1" />
              <div className="meal-content">
                <div className="meal-tags">
                  <span className="tag tag--vegetarian">Vegetarian</span>
                </div>
                <p className="meal-title">Japanese Gyozas</p>
                <ul className="meal-attributes">
                  <li className="meal-attribute">
                    <span className="meal-icon">
                      <ion-icon name="flame-outline"></ion-icon>{" "}
                    </span>
                    <span>
                      <strong>650</strong> Calories
                    </span>
                  </li>
                  <li className="meal-attribute">
                    <span className="meal-icon">
                      <ion-icon name="restaurant-outline"></ion-icon>{" "}
                    </span>
                    <span>
                      NutriScore &reg; <strong>74</strong>
                    </span>
                  </li>
                  <li className="meal-attribute">
                    <span className="meal-icon">
                      <ion-icon name="star-outline"></ion-icon>{" "}
                    </span>
                    <span>
                      <strong>4.9</strong> rating (537)
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="meal">
              <img src={meal_2} className="meal-img" alt="Meal 1" />
              <div className="meal-content">
                <div className="meal-tags">
                  <span className="tag tag--vegan">Vegan</span>{" "}
                  <span className="tag tag--paleo">Paleo</span>
                </div>
                <p className="meal-title">Avocado Salad</p>
                <ul className="meal-attributes">
                  <li className="meal-attribute">
                    <span className="meal-icon">
                      <ion-icon name="flame-outline"></ion-icon>{" "}
                    </span>
                    <span>
                      <strong>400</strong> Calories
                    </span>
                  </li>
                  <li className="meal-attribute">
                    <span className="meal-icon">
                      <ion-icon name="restaurant-outline"></ion-icon>{" "}
                    </span>
                    <span>
                      NutriScore &reg; <strong>92</strong>
                    </span>
                  </li>
                  <li className="meal-attribute">
                    <span className="meal-icon">
                      <ion-icon name="star-outline"></ion-icon>{" "}
                    </span>
                    <span>
                      <strong>4.8</strong> rating (441)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="diets">
              <h3 className="heading-tertiary">Works with any diet</h3>
              <ul className="list">
                <li className="list-item">
                  <span className="list-icon">
                    <ion-icon name="checkmark-outline"></ion-icon>
                  </span>
                  <span>Vegetarian</span>
                </li>
                <li className="list-item">
                  <span className="list-icon">
                    <ion-icon name="checkmark-outline"></ion-icon>
                  </span>
                  <span>Vegan</span>
                </li>
                <li className="list-item">
                  <span className="list-icon">
                    <ion-icon name="checkmark-outline"></ion-icon>
                  </span>
                  <span>Pescatarian</span>
                </li>
                <li className="list-item">
                  <span className="list-icon">
                    <ion-icon name="checkmark-outline"></ion-icon>
                  </span>
                  <span>Gluten-free</span>
                </li>
                <li className="list-item">
                  <span className="list-icon">
                    <ion-icon name="checkmark-outline"></ion-icon>
                  </span>
                  <span>Lactose-free</span>
                </li>
                <li className="list-item">
                  <span className="list-icon">
                    <ion-icon name="checkmark-outline"></ion-icon>
                  </span>
                  <span>Keto</span>
                </li>
                <li className="list-item">
                  <span className="list-icon">
                    <ion-icon name="checkmark-outline"></ion-icon>
                  </span>
                  <span>Paleo</span>
                </li>
                <li className="list-item">
                  <span className="list-icon">
                    <ion-icon name="checkmark-outline"></ion-icon>
                  </span>
                  <span>Low FODMAP</span>
                </li>
                <li className="list-item">
                  <span className="list-icon">
                    <ion-icon name="checkmark-outline"></ion-icon>
                  </span>
                  <span>Kid-friendly</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="container all-recipes">
            <a href="#" className="link">
              See all recipes &rarr;
            </a>
          </div>
        </section>

        <section className="section-testimonials">
          <div className="testimonials-container">
            <span className="subheading">Testimonials</span>
            <h2 className="heading-secondary">
              Once you try it you cannot go back
            </h2>

            <div className="testimonials">
              <figure className="testimonial">
                <img
                  src={dave}
                  alt="Customer Dave"
                  className="testimonial-img"
                />
                <blockquote class="testimonial-text">
                  Inexpensive, healthy and great-tasting meals, without even
                  having to order manually! It feels truly magical.
                </blockquote>
                <p className="testimonial-name">&mdash; Dave Bryson</p>
              </figure>

              <figure className="testimonial">
                <img
                  src={ben}
                  alt="Customer Dave"
                  className="testimonial-img"
                />
                <blockquote class="testimonial-text">
                  The AI algorithm is crazy good, it chooses the right meals for
                  me every time. It's amazing not to worry about food anymore!
                </blockquote>
                <p className="testimonial-name">&mdash; Ben Hadley</p>
              </figure>

              <figure className="testimonial">
                <img
                  src={steve}
                  alt="Customer Dave"
                  className="testimonial-img"
                />
                <blockquote class="testimonial-text">
                  Omnifood is a life saver! I just started a company, so there's
                  no time for cooking. I couldn't live without my daily meals
                  now!
                </blockquote>
                <p className="testimonial-name">&mdash; Steve Miller</p>
              </figure>

              <figure className="testimonial">
                <img
                  src={hannah}
                  alt="Customer Dave"
                  className="testimonial-img"
                />
                <blockquote class="testimonial-text">
                  I got Omnifood for the whole family, and it frees up so much
                  time! Plus, everything is organic and vegan and without
                  plastic.
                </blockquote>
                <p className="testimonial-name">&mdash; Hannah Smith</p>
              </figure>
            </div>
          </div>
          <div className="gallery">
            <figure className="gallery-item">
              <img src={gallery_1} alt="Photo of arranged food" />
            </figure>
            <figure className="gallery-item">
              <img src={gallery_2} alt="Photo of arranged food" />
            </figure>
            <figure className="gallery-item">
              <img src={gallery_3} alt="Photo of arranged food" />
            </figure>
            <figure className="gallery-item">
              <img src={gallery_4} alt="Photo of arranged food" />
            </figure>
            <figure className="gallery-item">
              <img src={gallery_5} alt="Photo of arranged food" />
            </figure>
            <figure className="gallery-item">
              <img src={gallery_6} alt="Photo of arranged food" />
            </figure>
            <figure className="gallery-item">
              <img src={gallery_7} alt="Photo of arranged food" />
            </figure>
            <figure className="gallery-item">
              <img src={gallery_8} alt="Photo of arranged food" />
            </figure>
            <figure className="gallery-item">
              <img src={gallery_9} alt="Photo of arranged food" />
            </figure>
            <figure className="gallery-item">
              <img src={gallery_10} alt="Photo of arranged food" />
            </figure>
            <figure className="gallery-item">
              <img src={gallery_11} alt="Photo of arranged food" />
            </figure>
            <figure className="gallery-item">
              <img src={gallery_12} alt="Photo of arranged food" />
            </figure>
          </div>
        </section>

        <section className="section-pricing">
          <div className="container">
            <span className="subheading">Pricing</span>
            <h2 className="heading-secondary">
              Eating well without breaking the bank
            </h2>
          </div>

          <div className="container grid grid--2-cols margin-bottom-md">
            <div className="pricing-plan pricing-plan--starter">
              <header className="plan-header">
                <p className="plan-name">Starter</p>
                <p className="plan-price">
                  <span>$</span>399
                </p>
                <p className="plan-text">per month. That's just $13 per meal</p>
              </header>
              <ul className="list">
                <li className="list-item">
                  <span className="list-icon">
                    <ion-icon name="checkmark-outline"></ion-icon>
                  </span>
                  <span>1 meal per day</span>
                </li>
                <li className="list-item">
                  <span className="list-icon">
                    <ion-icon name="checkmark-outline"></ion-icon>
                  </span>
                  <span>Order from 11am to 9pm</span>
                </li>
                <li className="list-item">
                  <span className="list-icon">
                    <ion-icon name="checkmark-outline"></ion-icon>
                  </span>
                  <span>Delivery is free</span>
                </li>
                <li className="list-item">
                  <span className="list-icon">
                    <ion-icon name="close-outline"></ion-icon>
                  </span>
                  <span></span>
                </li>
              </ul>
              <div className="plan-sign-up">
                <a href="#" className="btn btn--full">
                  Start eating well
                </a>
              </div>
            </div>

            <div className="pricing-plan pricing-plan--complete">
              <header className="plan-header">
                <p className="plan-name">Complete</p>
                <p className="plan-price">
                  <span>$</span>649
                </p>
                <p className="plan-text">per month. That's just $11 per meal</p>
              </header>
              <ul className="list">
                <li className="list-item">
                  <span className="list-icon">
                    <ion-icon name="checkmark-outline"></ion-icon>
                  </span>
                  <span>
                    <strong>2 meals</strong> per day
                  </span>
                </li>
                <li className="list-item">
                  <span className="list-icon">
                    <ion-icon name="checkmark-outline"></ion-icon>
                  </span>
                  <span>
                    Order <strong>24/7</strong>
                  </span>
                </li>
                <li className="list-item">
                  <span className="list-icon">
                    <ion-icon name="checkmark-outline"></ion-icon>
                  </span>
                  <span>Delivery is free</span>
                </li>

                <li className="list-item">
                  <span className="list-icon">
                    <ion-icon name="checkmark-outline"></ion-icon>
                  </span>
                  <span>Get access to latest recipes</span>
                </li>
              </ul>
              <div className="plan-sign-up">
                <a href="#" className="btn btn--full">
                  Start eating well
                </a>
              </div>
            </div>
          </div>

          <div className="container grid">
            <aside className="plan-details">
              Prices include all applicable taxes. You can cancel at any time.
              Both plans include the following:
            </aside>
          </div>

          <div className="container grid grid--4-cols">
            <div className="feature">
              <div className="feature-icon">
                <ion-icon name="infinite-outline"></ion-icon>
              </div>
              <p className="feature-title">Never cook again!</p>
              <p className="feature-text">
                Our subscriptions cover 365 days per year, even including major
                holidays.
              </p>
            </div>

            <div className="feature">
              <div className="feature-icon">
                <ion-icon name="leaf-outline"></ion-icon>
              </div>
              <p className="feature-title">Local and organic</p>
              <p className="feature-text">
                Local and organic: Our cooks only use local, fresh, and organic
                products to prepare your meals.
              </p>
            </div>

            <div className="feature">
              <div className="feature-icon">
                <ion-icon name="trash-bin-outline"></ion-icon>
              </div>
              <p className="feature-title">No waste</p>
              <p className="feature-text">
                No waste: All our partners only use reusable containers to
                package all your meals.
              </p>
            </div>

            <div className="feature">
              <div className="feature-icon">
                <ion-icon name="pause-outline"></ion-icon>
              </div>
              <p className="feature-title">Pause anytime</p>
              <p className="feature-text">
                Pause anytime: Going on vacation? Just pause your subscription,
                and we refund unused days.
              </p>
            </div>
          </div>
        </section>

        <section className="section-cta">
          <div className="container">
            <div className="cta">
              <div className="cta-text-box">
                <h2 className="heading-secondary">
                  Get your first meal for free!
                </h2>
                <p className="cta-text">
                  Healthy, tasty and hassle-free meals are waiting for you.
                  Start eating well today. You can cancel or pause anytime. And
                  the first meal is on us!
                </p>

                <form className="cta-form" action="#">
                  <div>
                    <label for="full-name">Full Name</label>
                    <input
                      id="full-name"
                      type="text"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label for="email">Email Address</label>
                    <input id="email" type="email" placeholder="me@email.com" />
                  </div>

                  <div>
                    <label>Where did you hear from us?</label>
                    <select id="select-where" required>
                      <option value="">Please choose one option</option>
                      <option value="friends">Friends and Family</option>
                      <option value="youtube">Youtube</option>
                      <option value="podcast">Podcast</option>
                      <option value="ad">Facebook</option>
                      <option value="others">Others</option>
                    </select>
                  </div>
                  <button className="btn btn--form">Sign up now</button>
                </form>
              </div>
              <div
                className="cta-image-box"
                role="img"
                aria-label="Woman enjoying food"
              ></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container grid grid--footer">
          <div className="logo-col">
            <a href="#">
              <img
                className="logo footer-logo"
                src={omnifood_logo}
                alt="Omnifood logo"
              />
            </a>

            <ul className="social-links">
              <li>
                <a href="#" className="footer-link">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>
            </ul>

            <p className="copyright">
              Copyright &copy; 2027 by Omnifood, Inc. all rights reserved
            </p>
          </div>

          <div className="address-col">
            <p className="footer-heading">Contact us</p>
            <address className="contacts">
              <p className="address">
                623 Harrison St., 2nd Floor, San Francisco, CA 94107
              </p>
              <p>
                <a className="footer-link" href="tel:415-201-6370">
                  415-201-6370
                </a>
                <br></br>
                <a className="footer-link" href="mailto:hello@omnifood.com">
                  hello@omnifood.com
                </a>
              </p>
            </address>
          </div>
          <div className="nav-col">
            <p className="footer-heading">Account</p>
            <ul className="footer-navigation">
              <li>
                <a className="footer-link" href="#">
                  Create Acount
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  iOS App
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Android App
                </a>
              </li>
            </ul>
          </div>
          <div className="nav-col">
            <p className="footer-heading">Company</p>
            <ul className="footer-navigation">
              <li>
                <a className="footer-link" href="#">
                  About Omnifood
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  For Business
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Cooking Partners
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div className="nav-col">
            <p className="footer-heading">Resources</p>
            <ul className="footer-navigation">
              <li>
                <a className="footer-link" href="#">
                  Recipe Directory
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Help Center
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Privacy & terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Hero;
