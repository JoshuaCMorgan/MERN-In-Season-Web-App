const Selections = ({ produce }) => {
  return (
    <section className="produceQuery">
      <h1>Your Selection: </h1>
      <ul>
        {produce.map((item, idx) => {
          return (
            <li key={idx} className="item-container">
              <h4>{item.name}</h4>
              <figure>
                <img src="" alt="" />
              </figure>
              <p>{item.desc}</p>
              <button>Add to Shopping List</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Selections;
