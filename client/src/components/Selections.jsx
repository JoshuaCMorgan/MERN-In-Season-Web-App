/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";

const Selections = ({ produce }) => {
  return (
    <section className="produceQuery">
      <h1 css={h1Css}>Your Selection: </h1>
      <ul css={ulCss}>
        {produce.map((item, idx) => {
          return (
            <li css={liCss} key={idx} className="item-container">
              <h4>{item.name}</h4>
              <figure>
                <img src="" alt="" />
              </figure>
              <p css={pCss}>{item.desc}</p>
              <button type="button" className="btn">
                Add to Shopping List
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

const pCss = css({
  marginBottom: "1rem",
  lineHeight: "1.2rem",
});
const liCss = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  textAlign: "center",
  border: "1px solid #b7b5b5",
  backgroundColor: "var(--grey-200)",
  borderRadius: "5px",
  width: "240px",
  padding: "1rem",
});

const ulCss = css({
  display: "grid",
  margin: "0 auto",
  gridTemplateColumns: "repeat(auto-fill, minmax(240px, 240px))",
  gridGap: "1.3rem",
  justifyContent: "center",
  backgroundColor: "var(--grey200)",
});
const h1Css = css({
  textAlign: "center",
  margin: "15px",
});

export default Selections;
