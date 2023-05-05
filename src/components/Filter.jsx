import { useState } from "react";
import Select from "./Select";

const Filter = () => {
  const stateOptions = [
    { label: "Select A State", value: "Select A State" },
    { label: "current location", value: "Use My Location" },
    { label: "Alabama", value: "Alabama" },
    { label: "Alaska", value: "Alaska" },
    { label: "Arizona", value: "Arizona" },
    { label: "Arkansas", value: "Arkansas" },
    { label: "California", value: "California" },
    { label: "Colorado", value: "Colorado" },
    { label: "Connecticut", value: "Connecticut" },
    { label: "Delaware", value: "Delaware" },
    { label: "Florida", value: "Florida" },
    { label: "Georgia", value: "Georgia" },
    { label: "Hawaii", value: "Hawaii" },
    { label: "Idaho", value: "Idaho" },
    { label: "Illinois", value: "Illinois" },
    { label: "Indiana", value: "Indiana" },
    { label: "Iowa", value: "Iowa" },
    { label: "Kansas", value: "Kansas" },
    { label: "Kentucky", value: "Kentucky" },
    { label: "Louisiana", value: "Louisiana" },
    { label: "Maine", value: "Maine" },
    { label: "Maryland", value: "Maryland" },
    { label: "Massachusetts", value: "Massachusetts" },
    { label: "Michigan", value: "Michigan" },
    { label: "Minnesota", value: "Minnesota" },
    { label: "Mississippi", value: "Mississippi" },
    { label: "Missouri", value: "Missouri" },
    { label: "Montana", value: "Montana" },
    { label: "Nebraska", value: "Nebraska" },
    { label: "Nevada", value: "Nevada" },
    { label: "New Hampshire", value: "New Hampshire" },
    { label: "New Jersey", value: "New Jersey" },
    { label: "New Mexico", value: "New Mexico" },
    { label: "New York", value: "New York" },
    { label: "North Carolina", value: "North Carolina" },
    { label: "North Dakota", value: "North Dakota" },
    { label: "Ohio", value: "Ohio" },
    { label: "Oklahoma", value: "Oklahoma" },
    { label: "Oregon", value: "Oregon" },
    { label: "Pennsylvania", value: "Pennsylvania" },
    { label: "Rhode Island", value: "Rhode Island" },
    { label: "South Carolina", value: "South Carolina" },
    { label: "South Dakota", value: "South Dakota" },
    { label: "Tennessee", value: "Tennessee" },
    { label: "Texas", value: "Texas" },
    { label: "Utah", value: "Utah" },
    { label: "Vermont", value: "Vermont" },
    { label: "Virginia", value: "Virginia" },
    { label: "Washington", value: "Washington" },
    { label: "Washington DC", value: "Washington DC" },
    { label: "West Virginia", value: "West Virginia" },
    { label: "Wisconsin", value: "Wisconsin" },
    { label: "Wyoming", value: "Wyoming" },
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
    console.log(event.target.value);
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
