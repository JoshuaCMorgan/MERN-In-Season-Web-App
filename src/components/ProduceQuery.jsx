import produce from "../../fruits-veggie.js";

const ProduceQuery = () => {
  return (
    <section className='produceQuery'>
      <h1>Your Selection: </h1>
      {produce.map((item, idx) => {
        return (
          <div key={idx} className='item-container'>
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
          </div>
        );
      })}
    </section>
  );
};

export default ProduceQuery;
