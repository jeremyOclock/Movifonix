import React from 'react';

const SignUp = () => (
  <div className="signup">
    <h1 className="signup__title">Sign Up</h1>
    <form className="signup__form">
      <ul className="signup__form__list">
        <li className="signup__form__input-icons">
          <i className="fas fa-user fa-2x" />
          <input
            className="signup__form__input"
            type="text"
            value=""
            placeholder="Lastname"
            name="Lastname"
          />
        </li>
        <li className="signup__form__input-icons">
          <i className="fas fa-user fa-2x" />
          <input
            className="signup__form__input"
            type="text"
            value=""
            placeholder="Firstname"
            name="Firstname"
          />
        </li>
        <li className="signup__form__input-icons">
          <i className="fas fa-user fa-2x" />
          <input
            className="signup__form__input"
            type="email"
            value=""
            placeholder="Email"
            name="email"
          />
        </li>
        <li className="signup__form__input-icons">
          <i className="fas fa-user fa-2x" />
          <input
            className="signup__form__input"
            type="number"
            value=""
            placeholder="Phone"
            name="phone"
          />
        </li>
        <li className="signup__form__input-icons">
          <i className="fas fa-user fa-2x" />
          <input
            className="signup__form__input"
            type="text"
            value=""
            placeholder="Address"
            name="address"
          />
        </li>
        <li className="signup__form__input-icons">
          <i className="fas fa-user fa-2x" />
          <input
            className="signup__form__input"
            type="text"
            value=""
            placeholder="Zip code"
            name="Zip"
            pattern="[0-9]*"
          />
        </li>
        <li className="signup__form__input-icons">
          <i className="fas fa-user fa-2x" />
          <input
            className="signup__form__input"
            type="text"
            value=""
            placeholder="City"
            name="city"
          />
        </li>
      </ul>
    </form>
  </div>
);
export default SignUp;
