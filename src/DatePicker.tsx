import React, { useState } from "react";

function DatePick(): JSX.Element {
  const [date, setDate] = useState<string | undefined>();

  console.log("Date", date);

  return (
    <>
      <h1>Selected Date : {date} </h1>
      <input type="date" onChange={(e) => setDate(e.target.value)} />
    </>
  );
}

export default DatePick;