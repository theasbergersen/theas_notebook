import React, { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

function DatePickerComponent(): JSX.Element {
  const [startDate, setStartDate] = useState<Date>(new Date());

  function onChangeDateHandler(value: Date | null): void {
    if (value) {
      setStartDate(value);
    }
  }

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={onChangeDateHandler}
        dateFormat="dd MMM yyyy"
      />
    </div>
  );
}

export default DatePickerComponent;




