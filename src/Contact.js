import React, { useState } from "react";

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [firstuserErr, setfirstUserErr] = useState(false);
  const [lastName, setlastName] = useState("");
  const [seconduserErr, setsecondUserErr] = useState(false);
  const [mobNum, setMobnum] = useState("");
  const [mobNumErr, setMobnumErr] = useState(false);
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);

  const [allEntry, setAllEntry] = useState([]);

  function FirstNameHandler(e) {
    let item = e.target.value;
    if (item.length > 50) {
      setfirstUserErr(true);
    } else {
      setfirstUserErr(false);
    }
    setFirstName(item);
  }

  function SecondNameHandler(e) {
    let item = e.target.value;
    if (item.length > 50) {
      setsecondUserErr(true);
    } else {
      setsecondUserErr(false);
    }
    setlastName(item);
  }

  function MobValid(e) {
    let item = e.target.value;
    if (item.length < 10) {
      setMobnumErr(true);
    } else {
      setMobnumErr(false);
    }
    setMobnum(item);
  }
  function submitForm(e) {
    alert("all good :)");
    e.preventDefault();
  }

  return (
    <div className="form__heading">
      <h1>This is contact page</h1>
      <h2>Login</h2>
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          onChange={FirstNameHandler}
        />
        {firstuserErr ? <span>User Not Valid</span> : ""}
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={SecondNameHandler}
        />
        {seconduserErr ? <span>User Not Valid</span> : ""}
        <br />
        <input
          type="text"
          name="MobNum"
          placeholder="Mobile Number"
          onChange={MobValid}
        />
        {mobNumErr ? <span>wrong Mob Num</span> : ""}
        <br />
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
