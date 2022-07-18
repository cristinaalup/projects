import { useState } from "react";
import Hotels from "../data/hotels.json";
import "./css/Form.css";
import toast, { Toaster } from "react-hot-toast";
const Form = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [nrNights, setNrNights] = useState(10);
  const [nrGuests, setNrGuests] = useState(2);
  const [bfIncluded, setBfIncluded] = useState(false);
  const [hotel, setHotel] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const notify = (message, icon) =>
    toast(message, {
      icon: icon,
      style: {
        borderRadius: "10px",
        background: "#1725a1",
        color: "#EBF7FF",
      },
    });
  const handleNameChange = (e) => {
    setName(e.target.value);
    setSubmitted(false);
    setErrors({
      ...errors,
      name: false,
    });
  };

  const handleNrGuestsChange = (e) => {
    setNrGuests(e.target.value);
    setSubmitted(false);
    setErrors({
      ...errors,
      nrGuests: false,
    });
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
    setSubmitted(false);
    setErrors({
      ...errors,
      date: false,
    });
  };

  const handleNrNightsChange = (e) => {
    setNrNights(e.target.value);
    setSubmitted(false);
  };

  const handleBfIncludedChange = (e) => {
    setBfIncluded(e.target.checked);
    setSubmitted(false);
  };

  const handleHotelChange = (e) => {
    setHotel(e.target.value);
    setSubmitted(false);
    setErrors({
      ...errors,
      hotel: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    var errors = {};

    if (!name) {
      errors.name = true;
    }
    if (nrGuests > 3) {
      errors.nrGuests = true;
    }
    if (!date) {
      errors.date = true;
    }
    let ok = 0;
    {
      Hotels.map((h) => {
        if (h.name === hotel) ok++;
      });
    }
    if (ok === 0) {
      errors.hotel = true;
    }

    if (!name || nrGuests > 3 || !date || ok === 0) {
      notify(
        "Form is not valid. Please correct the errors and try again.",
        "❌"
      );
    }

    if (name && !(nrGuests > 3 || nrGuests < 1) && date && ok !== 0) {
      Hotels.map((h) => {
        h.name === hotel && notify(h.booking_message, "👏");
      });
    }
    setErrors(errors);
    setSubmitted(true);
  };

  const disablePastDate = () => {
    var dtToday = new Date();
    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if (month < 10) month = "0" + month.toString();
    if (day < 10) day = "0" + day.toString();
    var maxDate = year + "-" + month + "-" + day;
    return maxDate;
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="box-shadow p-20 border-radius-10px center-center font-poppins blue-text blue-backgroung"
      >
        <div className="field">
          <label className="flex flex-direction-column padding-top-10 center-center">
            Please enter your name
            <input
              className={errors?.name && "red-border-2px"}
              type="text"
              placeholder="Your name..."
              value={name}
              onChange={handleNameChange}
            />
          </label>
          <label className="flex flex-direction-column center-center">
            Please select the hotel you want
            <select
              value={hotel}
              onChange={handleHotelChange}
              className={errors?.hotel ? "red-border-2px" : ""}
            >
              <option className="center-center">{""}</option>
              {Hotels.map((hotel) => (
                <option key={hotel.id} value={hotel.name}>
                  {hotel.name}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-direction-column center-center">
            Select the date
            <input
              type="date"
              min={disablePastDate()}
              // required
              value={date}
              onChange={handleDateChange}
              className={errors?.date ? "red-border-2px" : ""}
            />
          </label>
          <label className="flex flex-direction-column center-center">
            Select how many nights do you want to stay
            <select
              required
              value={nrNights}
              onChange={handleNrNightsChange}
              className="input"
            >
              <option>3</option>
              <option>7</option>
              <option>10</option>
              <option>14</option>
              <option>30</option>
            </select>
          </label>
          <label className="flex flex-direction-column center-center">
            Select the number of guests
            <input
              type="number"
              className={errors?.nrGuests ? "red-border-2px" : ""}
              min="1"
              value={nrGuests}
              onChange={handleNrGuestsChange}
            />
          </label>
        </div>
        <div className="centered-text">
          <label>
            <input
              type="checkbox"
              value={bfIncluded}
              onChange={handleBfIncludedChange}
            />
          </label>
          Select if you want breakfast
        </div>

        <div>
          <div className="center-center max-width-350  block-center rezervation-card box-shadow margin-30px">
            <span className="text-underline">The reservation confirmation</span>
            <p>Guest name: {name}'s booking</p>
            <p>
              {nrGuests <= 1
                ? "Number of guests: " + nrGuests + " Guest visiting"
                : "Number of guests: " + nrGuests + " Guests visiting"}
            </p>
            <p>Check-in date: {date}</p>
            <p>Staying for {nrNights} nights</p>
            <p> {bfIncluded ? "Breakfast included" : null}</p>
            {bfIncluded
              ? Hotels.map((h) => {
                  if (h.name === hotel)
                    return (
                      <p key={h.id}>
                        Total price €
                        {(h.breakfast_price + h.price_ppn) *
                          nrNights *
                          nrGuests}
                      </p>
                    );
                })
              : Hotels.map((h) => {
                  if (h.name === hotel)
                    return (
                      <p key={h.id} className="text-underline">
                        Total price €{h.price_ppn * nrNights * nrGuests}
                      </p>
                    );
                })}
          </div>
        </div>

        <div className="centered-text">
          <button className="font-poppins">SUBMIT</button>
        </div>
      </form>
    </>
  );
};

export default Form;
