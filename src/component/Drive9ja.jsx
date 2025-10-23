import React, { useEffect } from "react";
import imagies from "./imagies";

const Drive9ja = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col items-center gap-12 px-4 text-primary-white lg:gap-20 sm:px-6 md:px-10">
      {/* Title */}
      <h3 className="w-full text-2xl text-center sm:text-3xl lg:text-4xl lg:max-w-3xl">
        Drive9ja – Simplifying Payments for Drivers & Fleet Owners
      </h3>

      {/* Project Overview Section */}
      <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-25 lg:pl-20 lg:pr-40">
        <img
          src={imagies.full_scan}
          alt="Drive9ja Scan"
          className="object-contain h-72 sm:h-96 lg:h-120"
        />
        <div className="text-center lg:text-left">
          <h6 className="mb-2 text-lg font-semibold">Project Overview</h6>
          <p className="text-sm leading-relaxed sm:text-base">
            Managing payments and keeping track of transactions can be a daily
            headache for vehicle owners, commercial drivers, and fleet managers.
            With scattered receipts, long queues, and delays in processing
            receipts while making annual car revenue payments, the process is
            often frustrating and inefficient. That’s why I designed Drive9ja, a
            mobile payment app that makes annual and fine payments fast, secure,
            and convenient for fleet managers, commercial drivers, and
            individuals on the road.
          </p>
        </div>
      </div>

      {/* Problem Section */}
      <div className="relative flex flex-col items-center w-full gap-10 mt-8 lg:flex-row lg:items-start lg:gap-16 lg:mt-0">
        <div className="w-full lg:max-w-[380px] text-center lg:text-left">
          <h6 className="mb-2 text-lg font-semibold">The Problem</h6>
          <ol className="space-y-2 text-sm list-decimal list-inside sm:text-base">
            <li>Drivers waste valuable time handling cash payments.</li>
            <li>
              Fleet owners struggle to monitor multiple vehicles’ expenses.
            </li>
            <li>
              Lack of transparency makes tracking daily transactions difficult.
            </li>
            <li>
              Existing payment solutions are not designed with drivers in mind.
            </li>
          </ol>
        </div>

        {/* Phones */}
        <div className="flex justify-center gap-8 lg:justify-start lg:gap-16 lg:-translate-y-30 lg:absolute lg:right-0 ">
          <img
            src={imagies.phone_1}
            alt="Phone UI 1"
            className="object-contain h-72 sm:h-96 lg:h-120"
          />
          <img
            src={imagies.phone_2}
            alt="Phone UI 2"
            className="object-contain h-72 sm:h-96 lg:h-120"
          />
        </div>
      </div>
    </div>
  );
};

export default Drive9ja;
