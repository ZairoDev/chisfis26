// import React, { FC, Fragment, useState } from "react";
// import DatePicker from "react-datepicker";
// import DatePickerCustomHeaderTwoMonth from "@/components/DatePickerCustomHeaderTwoMonth";
// import DatePickerCustomDay from "@/components/DatePickerCustomDay";

// const SectionDateRange = () => {
//   const [startDate, setStartDate] = useState<Date | null>(
//     new Date("2023/02/06")
//   );
//   const [endDate, setEndDate] = useState<Date | null>(new Date("2023/02/23"));
//   const onChangeDate = (dates: [Date | null, Date | null]) => {
//     const [start, end] = dates;
//     setStartDate(start);
//     setEndDate(end);
//   };

//   const renderSectionCheckIndate = () => {
//     return (
//       <div className="listingSection__wrap overflow-hidden">
//         {/* HEADING */}
//         <div>
//           <h2 className="text-2xl font-semibold">Availability</h2>
//           <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
//             Prices may increase on weekends or holidays 
//           </span>
//         </div>
//         <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
//         {/* CONTENT */}

//         <div className="">
//           <DatePicker
//             selected={startDate}
//             onChange={onChangeDate}
//             startDate={startDate}
//             endDate={endDate}
//             selectsRange
//             monthsShown={2}
//             showPopperArrow={false}
//             inline
//             renderCustomHeader={(p) => (
//               <DatePickerCustomHeaderTwoMonth {...p} />
//             )}
//             renderDayContents={(day, date) => (
//               <DatePickerCustomDay dayOfMonth={day} date={date} />
//             )}
//           />
//         </div>
//       </div>
//     );
//   };

//   return renderSectionCheckIndate();
// };

// export default SectionDateRange;


import React, { useState } from "react";
import DatePicker from "react-datepicker";
import DatePickerCustomHeaderTwoMonth from "@/components/DatePickerCustomHeaderTwoMonth";
import DatePickerCustomDay from "@/components/DatePickerCustomDay";

const SectionDateRange: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const onChangeDate = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const calculateDateDifference = (start: Date | null, end: Date | null) => {
    if (start && end) {
      const timeDiff = end.getTime() - start.getTime();
      const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)) ; 
      // Adding 1 to include both start and end dates
      return dayDiff;
    }
    return 0;
  };

  const daysBetween = calculateDateDifference(startDate, endDate);

  return (
    <div className="listingSection__wrap overflow-hidden">
      {/* HEADING */}
      <div>
        <h2 className="text-2xl font-semibold">Availability</h2>
        <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
          Prices may increase on weekends or holidays
        </span>
      </div>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
      {/* CONTENT */}
      <div className="">
        <DatePicker
          selected={startDate}
          onChange={onChangeDate}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          monthsShown={2}
          showPopperArrow={false}
          inline
          renderCustomHeader={(p) => (
            <DatePickerCustomHeaderTwoMonth {...p} />
          )}
          renderDayContents={(day, date) => (
            <DatePickerCustomDay dayOfMonth={day} date={date} />
          )}
        />
      </div>
      {/* DISPLAY DATE RANGE */}

      {/* comment for future */}
      <div className="mt-4">
        <p className="text-lg">
          {`Selected Date Range: ${startDate ? startDate.toLocaleDateString() : "N/A"} to ${endDate ? endDate.toLocaleDateString() : "N/A"}`}
        </p>
        <p className="text-lg font-semibold">
          {`Total Days: ${daysBetween}`}
        </p>
      </div>
    </div>
  );
};

export default SectionDateRange;
