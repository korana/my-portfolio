import React from "react";

const Casestudy = () => {
  return (
    <div name="casestudy" className="w-full h-screen bg-slate-800 text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Case Study
          </p>
        </div>
        <div className="grid grid-cols-2 space-x-5">
          <div>
            <p className="text-xl font-bold my-2">
              1. Karentoroku App: Available Time Booking
            </p>
            <p className="text-yellow-500">
              If PDF viewer is not available, please click{" "}
              <a
                href="https://drive.google.com/file/d/1Q4eeHmz8msx8EmdglVB5E6rf4S7s6fXm/view?usp=sharing"
                className="text-blue-600"
              >
                here
              </a>
            </p>
            <iframe
              src="https://drive.google.com/file/d/1Q4eeHmz8msx8EmdglVB5E6rf4S7s6fXm/preview"
              width="640"
              height="380"
              allow="autoplay"
            ></iframe>
          </div>
          <div>
            <p className="text-xl font-bold my-2">
              2. KS Movie Reservation App
            </p>
            <p className="text-yellow-500">
              If PDF viewer is not available, please click{" "}
              <a
                href="https://drive.google.com/file/d/1Y2L4alYaE_sHfUmz7MXcj-ctSab9Dpsm/view?usp=sharing"
                className="text-blue-600"
              >
                here
              </a>
            </p>
            <iframe
              src="https://drive.google.com/file/d/1Y2L4alYaE_sHfUmz7MXcj-ctSab9Dpsm/preview"
              width="640"
              height="380"
              allow="autoplay"
            ></iframe>
          </div>
          <div>
            <p className="text-xl font-bold my-2">
              3. Karentoroku Website: Available Time Booking
            </p>
            <p className="text-yellow-500">
              If PDF viewer is not available, please click{" "}
              <a
                href="https://drive.google.com/file/d/1bUjiIhcE8PZyzjJx862M_bdY3ixhN_w0/view?usp=sharing"
                className="text-blue-600"
              >
                here
              </a>
            </p>
            <iframe
              src="https://drive.google.com/file/d/1bUjiIhcE8PZyzjJx862M_bdY3ixhN_w0/preview"
              width="640"
              height="380"
              allow="autoplay"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Casestudy;
