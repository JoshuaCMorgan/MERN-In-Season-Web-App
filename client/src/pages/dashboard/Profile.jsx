/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import { useState } from "react";
import { FormRow, Alert } from "../../components";
import { useAppContext } from "../../context/appContext";
import * as mq from "../../styles/media-queries";

export const Profile = () => {
  const { user, showAlert, displayAlert, updateUser, isLoading } =
    useAppContext();
  console.log("profileUser", user);
  const [name, setName] = useState(user && user.name);
  const [email, setEmail] = useState(user && user.email);
  const [lastName, setLastName] = useState(user && user.lastName);
  const [location, setLocation] = useState(user && user.location);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !lastName || !location) {
      displayAlert();
      return;
    }
    console.log("inside handle submit");
    console.log({ name, lastName, location, email });
    console.log("USER", user);
    updateUser({ name, lastName, location, email });
  };

  return (
    <section css={sectionCss}>
      <form css={formCss} className="form" onSubmit={handleSubmit}>
        <h3 css={h3Css}>profile</h3>
        {showAlert && <Alert />}
        <div css={formCenterCss}>
          <FormRow
            cssOverride={formRowCss}
            type="text"
            name="name"
            value={name}
            handleChange={(e) => setName(e.target.value)}
          />
          <FormRow
            cssOverride={formRowCss}
            type="text"
            name="lastName"
            value={lastName}
            handleChange={(e) => setLastName(e.target.value)}
          />
          <FormRow
            cssOverride={formRowCss}
            type="email"
            name="email"
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />
          <FormRow
            cssOverride={formRowCss}
            type="text"
            name="location"
            value={location}
            handleChange={(e) => setLocation(e.target.value)}
          />
          <button
            css={formCenterBtnCss}
            className="btn btn-block"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Please Wait..." : "save changes"}
          </button>
        </div>
      </form>
    </section>
  );
};

const formRowCss = css({
  marginBottom: "0",
});

const formCenterCss = css({
  display: "grid",
  rowGap: "0.5rem",
  marginTop: "1rem",
  [mq.small]: {
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
    columnGap: "1rem",
  },
  [mq.large]: {
    gridTemplateColumns: "1fr 1fr 1fr",
  },
});

const formCenterBtnCss = css({
  alignSelf: "end",
  height: "35px",
  marginTop: "1rem",
  marginBottom: "1rem",
  [mq.large]: {
    marginTop: "0",
  },
});

const sectionCss = css({
  borderRadius: "var(--borderRadius)",
  width: "100%",
  background: "var(--white)",
  padding: "3rem 2rem 4rem",
  boxShadow: "var(--shadow-2)",
});

const h3Css = css({
  marginTop: "0",
});

const formCss = css({
  margin: "0",
  borderRadius: "0",
  boxShadow: "none",
  padding: "0",
  maxWidth: "100%",
  width: "100%",
  "&:hover": {
    boxShadow: "none",
  },
});
