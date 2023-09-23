import React from "react";

const Cta = () => {
  return (
    <main className="h-[500px] w-full p-8">
      <section className="border-2 border-[#ef4136] bg-white rounded-md p-8 h-full flex flex-col md:flex-row justify-center items-center gap-5 shadow-xl">
        <div className="md:w-2/3 flex flex-col gap-3">
          <h3 className="font-bold text-xl md:text-4xl capitalize">
            Now accepting applications!
          </h3>
          <p className="font-medium text-lg">
            Flight training students and flight instructors are encouraged to
            apply for our opening.
          </p>
        </div>
        <button className="w-full md:w-1/3 md:max-w-xs mx-auto md:h-12 p-3 px-8 bg-[#ef4136] rounded-full text-white font-semibold">
          Apply Now
        </button>
      </section>
    </main>
  );
};

export default Cta;
