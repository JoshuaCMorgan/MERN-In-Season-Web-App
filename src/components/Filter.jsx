import { useState } from "react";
import Select from "./Select";

const Filter = ({ filterProduce }) => {
  const stateOptions = [
    { label: "Select A State", value: "Select A State" },
    { label: "current location", value: "Use My Location" },
    { label: "Alabama", value: "AL" },
    { label: "Alaska", value: "AK" },
    { label: "Arizona", value: "AR" },
    { label: "Arkansas", value: "AK" },
    { label: "California", value: "CA" },
    { label: "Colorado", value: "CO" },
    { label: "Connecticut", value: "CT" },
    { label: "Delaware", value: "DE" },
    { label: "Florida", value: "FL" },
    { label: "Georgia", value: "GA" },
    { label: "Hawaii", value: "HI" },
    { label: "Idaho", value: "ID" },
    { label: "Illinois", value: "IL" },
    { label: "Indiana", value: "IN" },
    { label: "Iowa", value: "IA" },
    { label: "Kansas", value: "KS" },
    { label: "Kentucky", value: "KY" },
    { label: "Louisiana", value: "LA" },
    { label: "Maine", value: "ME" },
    { label: "Maryland", value: "MD" },
    { label: "Massachusetts", value: "MA" },
    { label: "Michigan", value: "MI" },
    { label: "Minnesota", value: "MN" },
    { label: "Mississippi", value: "MS" },
    { label: "Missouri", value: "MO" },
    { label: "Montana", value: "MT" },
    { label: "Nebraska", value: "NE" },
    { label: "Nevada", value: "NV" },
    { label: "New Hampshire", value: "NH" },
    { label: "New Jersey", value: "NJ" },
    { label: "New Mexico", value: "NM" },
    { label: "New York", value: "NY" },
    { label: "North Carolina", value: "NC" },
    { label: "North Dakota", value: "ND" },
    { label: "Ohio", value: "OH" },
    { label: "Oklahoma", value: "OK" },
    { label: "Oregon", value: "OR" },
    { label: "Pennsylvania", value: "PN" },
    { label: "Rhode Island", value: "RI" },
    { label: "South Carolina", value: "SC" },
    { label: "South Dakota", value: "SD" },
    { label: "Tennessee", value: "TN" },
    { label: "Texas", value: "TX" },
    { label: "Utah", value: "UT" },
    { label: "Vermont", value: "VT" },
    { label: "Virginia", value: "VA" },
    { label: "Washington", value: "WA" },
    { label: "Washington DC", value: "DC" },
    { label: "West Virginia", value: "WV" },
    { label: "Wisconsin", value: "WI" },
    { label: "Wyoming", value: "WY" },
  ];

  const produceOptions = [
    { label: "Any Produce", value: "Any Produce" },
    { label: "Fruit", value: "Fruit" },
    { label: "Veggie", value: "Veggie" },
  ];

  const monthOptions = [
    { label: "any month", value: "any month" },
    { label: "current month", value: "Select Current Month" },
    { label: "Early January", value: "Early January" },
    { label: "January", value: "January" },
    { label: "Early February", value: "Early February" },
    { label: "February", value: "February" },
    { label: "Early March", value: "Early March" },
    { label: "March", value: "March" },
    { label: "Early April", value: "Early April" },
    { label: "April", value: "April" },
    { label: "Early May", value: "Early May" },
    { label: "May", value: "May" },
    { label: "Early June", value: "Early June" },
    { label: "June", value: "June" },
    { label: "Early July", value: "Early July" },
    { label: "July", value: "July" },
    { label: "Early August", value: "Early August" },
    { label: "August", value: "August" },
    { label: "Early September", value: "Early September" },
    { label: "September", value: "September" },
    { label: "Early October", value: "Early October" },
    { label: "October", value: "October" },
    { label: "Early November", value: "Early November" },
    { label: "November", value: "November" },
    { label: "Early December", value: "Early December" },
    { label: "December", value: "December" },
  ];

  const [state, setState] = useState("Select A State");
  const [produce, setProduce] = useState("Any Produce");
  const [month, setMonth] = useState("Any Month");

  const handleStateChange = (event) => {
    setState(event.target.value);
    filterProduce({
      state: event.target.value,
      produce: produce,
      month: month,
    });
  };

  const handleProduceChange = (event) => {
    setProduce(event.target.value);
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  return (
    <section className='filter'>
      <div className='container'>
        <label>
          <Select
            cat='state'
            options={stateOptions}
            value={state}
            onChange={handleStateChange}
          />
        </label>
      </div>
      <div className='container'>
        <label>
          <Select
            cat='food'
            options={produceOptions}
            value={produce}
            onChange={handleProduceChange}
          />
        </label>
      </div>
      <div className='container'>
        <label>
          <Select
            cat='moth'
            options={monthOptions}
            value={month}
            onChange={handleMonthChange}
          />
        </label>
      </div>
    </section>
  );
};

export default Filter;
