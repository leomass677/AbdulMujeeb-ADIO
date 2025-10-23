import React from "react";
import imagies from "./imagies";
import { useEffect } from "react";

const Checkmate = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col items-center gap-12 px-4 text-primary-white lg:gap-20 sm:px-6 md:px-10">
      {/* Title */}
      <h3 className="w-full text-2xl text-center sm:text-3xl lg:text-4xl lg:max-w-2xl">
        CheckMate – Smart Task Management for Students & Teams
      </h3>

      {/* Project Overview Section */}
      <div className="flex flex-col items-center w-full gap-8 lg:flex-row lg:items-start">
        <img
          src={imagies.dashboard}
          alt="Dashboard Overview"
          className="object-cover w-full lg:max-w-[500px] rounded-md"
        />
        <div className="flex-1 text-center lg:text-left">
          <h6 className="mb-2 text-lg font-semibold">Project Overview</h6>
          <p className="text-sm leading-relaxed sm:text-base">
            Managing payments and keeping track of transactions can be a daily
            headache for vehicle owners, commercial drivers, and fleet managers.
            With scattered receipts, long queues, and delays in processing
            payments, the process is often frustrating and inefficient. That’s
            why I designed Drive9ja, a mobile payment app that makes annual and
            fine payments fast, secure, and convenient for fleet managers,
            commercial drivers, and individuals on the road.
          </p>
        </div>
      </div>

      {/* Problem Section 1 */}
      <div className="flex flex-col items-center w-full gap-8 lg:flex-row-reverse lg:items-start">
        <img
          src={imagies.dashboard}
          alt="Dashboard Problem"
          className="object-cover w-full lg:max-w-[500px] rounded-md"
        />
        <div className="w-full text-center lg:text-left">
          <h6 className="mb-2 text-lg font-semibold">The Problem</h6>
          <ul className="space-y-2 text-sm list-disc list-inside sm:text-base">
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
          </ul>
        </div>
      </div>

      {/* Problem Section 2 */}
      <div className="flex flex-col items-center w-full gap-8 lg:flex-row lg:items-start">
        <img
          src={imagies.dashboard}
          alt="Dashboard Solution"
          className="object-cover hidden lg:block opacity-0 w-full lg:max-w-[500px] rounded-md"
        />
        <div className="w-full text-center lg:text-left lg:float-right">
          <h6 className="mb-2 text-lg font-semibold">The Problem</h6>
          <ul className="space-y-2 text-sm list-disc list-inside sm:text-base">
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Checkmate;
