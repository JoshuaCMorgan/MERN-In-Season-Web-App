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
    { label: "Early January", value: "1" },
    { label: "January", value: "2" },
    { label: "Early February", value: "3" },
    { label: "February", value: "4" },
    { label: "Early March", value: "5" },
    { label: "March", value: "6" },
    { label: "Early April", value: "7" },
    { label: "April", value: "8" },
    { label: "Early May", value: "9" },
    { label: "May", value: "10" },
    { label: "Early June", value: "11" },
    { label: "June", value: "12" },
    { label: "Early July", value: "13" },
    { label: "July", value: "14" },
    { label: "Early August", value: "15" },
    { label: "August", value: "16" },
    { label: "Early September", value: "17" },
    { label: "September", value: "18" },
    { label: "Early October", value: "19" },
    { label: "October", value: "20" },
    { label: "Early November", value: "21" },
    { label: "November", value: "22" },
    { label: "Early December", value: "23" },
    { label: "December", value: "24" },
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
