const Filter = () => {
  return (
    <section className='filter'>
      <form action='' method=''>
        <div className='container'>
          <label htmlFor='state'>
            <select name='state' id='state'>
              <option value='' disabled selected>
                Select A State
              </option>
              <option value='current location'>Use My Location</option>
              <option value='Alabama'>Alabama</option>
              <option value='Alaska'>Alaska</option>
              <option value='Arizona'>Arizona</option>
              <option value='Arkansas'>Arkansas</option>
              <option value='California'>California</option>
              <option value='Colorado'>Colorado</option>
              <option value='Connecticut'>Connecticut</option>
              <option value='Delaware'>Delaware</option>
              <option value='Florida'>Florida</option>
              <option value='Georgia'>Georgia</option>
              <option value='Guam'>Guam</option>
              <option value='Hawaii'>Hawaii</option>
              <option value='Idaho'>Idaho</option>
              <option value='Illinois'>Illinois</option>
              <option value='Indiana'>Indiana</option>
              <option value='Iowa'>Iowa</option>
              <option value='Kansas'>Kansas</option>
              <option value='Kentucky'>Kentucky</option>
              <option value='Louisiana'>Louisiana</option>
              <option value='Maine'>Maine</option>
              <option value='Maryland'>Maryland</option>
              <option value='Massachusetts'>Massachusetts</option>
              <option value='Michigan'>Michigan</option>
              <option value='Minnesota'>Minnesota</option>
              <option value='Mississippi'>Mississippi</option>
              <option value='Missouri'>Missouri</option>
              <option value='Montana'>Montana</option>
              <option value='Nebraska'>Nebraska</option>
              <option value='Nevada'>Nevada</option>
              <option value='New Hampshire'>New Hampshire</option>
              <option value='New Jersey'>New Jersey</option>
              <option value='New Mexico'>New Mexico</option>
              <option value='New York'>New York</option>
              <option value='North Carolina'>North Carolina</option>
              <option value='North Dakota'>North Dakota</option>
              <option value='Ohio'>Ohio</option>
              <option value='Oklahoma'>Oklahoma</option>
              <option value='Oregon'>Oregon</option>
              <option value='Pennsylvania'>Pennsylvania</option>
              <option value='Rhode Island'>Rhode Island</option>
              <option value='South Carolina'>South Carolina</option>
              <option value='South Dakota'>South Dakota</option>
              <option value='Tennessee'>Tennessee</option>
              <option value='Texas'>Texas</option>
              <option value='Utah'>Utah</option>
              <option value='Vermont'>Vermont</option>
              <option value='Virginia'>Virginia</option>
              <option value='Washington'>Washington</option>
              <option value='Washington DC'>Washington DC</option>
              <option value='West Virginia'>West Virginia</option>
              <option value='Wisconsin'>Wisconsin</option>
              <option value='Wyoming'>Wyoming</option>
            </select>
          </label>
        </div>
        <div className='container'>
          <label htmlFor='food'>
            <select name='food' id='food'>
              <option value='Any'>Any Produce</option>
              <option value='Fruits'>Fruits</option>
              <option value='Veggies'>Veggies</option>
            </select>
          </label>
        </div>
        <div className='container'>
          <label htmlFor='Month'>
            <select name='month' id='month'>
              <option value='any month'>Any Month</option>
              <option value='current month'>Select Current Month</option>
              <option value='Early January'>Early January</option>
              <option value='Late January'>January</option>
              <option value='Early February'>Early February</option>
              <option value='Late February'>February</option>
              <option value='Early March'>Early March</option>
              <option value='Late March'>March</option>
              <option value='Early April'>Early April</option>
              <option value='Late April'>April</option>
              <option value='Early May'>Early May</option>
              <option value='Late May'>May</option>
              <option value='Early June'>Early June</option>
              <option value='Late June'>June</option>
              <option value='Early July'>Early July</option>
              <option value='Late July'>July</option>
              <option value='Early August'>Early August</option>
              <option value='Late August'>August</option>
              <option value='Early September'>Early September</option>
              <option value='Late September'>September</option>
              <option value='Early October'>October</option>
              <option value='Late October'>October</option>
              <option value='Early November'>November</option>
              <option value='Late November'>November</option>
              <option value='Early December'>December</option>
              <option value='Late December'>December</option>
            </select>
          </label>
        </div>
      </form>
    </section>
  );
};

export default Filter;
