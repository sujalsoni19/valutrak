import React from "react";

const About = () => {
  return (
    <div className="p-8 flex justify-center pt-16">
      <div
        className="
          max-w-4xl w-full p-8 rounded-3xl shadow-2xl 
          bg-white/50 backdrop-blur-xl border border-white/80
          text-gray-800 space-y-4 shadow-indigo-400/50 
        "
      >
        <header className="text-center pb-4 border-b border-indigo-500/50">
          <h1 className="text-4xl font-extrabold text-indigo-700 tracking-tight">
            <span className="text-2xl mr-2"></span> About ValuTrak: Your
            Essential Crypto Data Platform
          </h1>
        </header>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold text-teal-600">Our Mission</h2>
          <p className="text-lg">
            In the fast-paced world of cryptocurrency, timing and accuracy are
            everything. Our mission at <strong>ValuTrak</strong> is simple: to
            provide traders, investors, and enthusiasts with the{" "}
            <strong>
              most reliable, clear, and comprehensive cryptocurrency market data
            </strong>{" "}
            they need to make informed decisions. We cut through the noise,
            delivering actionable insights directly to you.
          </p>
        </section>

        <section className="space-y-2 pt-4">
          <h2 className="text-2xl font-semibold text-teal-600">
            What is ValuTrak?
          </h2>
          <p>
            ValuTrak is a dedicated, real-time cryptocurrency marketplace data
            platform. We are not an exchange—we are your{" "}
            <strong>trusted data hub</strong> for tracking and analyzing the
            market's top digital assets.
          </p>
        </section>

        <section className="pt-4">
          <blockquote className="mt-2 p-4 italic text-center text-xl text-purple-700 border-t border-b border-indigo-400/50 bg-white/60 rounded-lg">
            "Track the Value, Master the Market."
          </blockquote>
        </section>
      </div>
    </div>
  );
};

export default About;
