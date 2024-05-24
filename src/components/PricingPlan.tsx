import { useState } from "react";
import checkMark from "../../public/checkMark.png";
import Button from "./Button";

const plans = {
  personal: [
    {
      name: "Lite",
      storage: "50GB",
      priceMonthly: "$0.99",
      priceAnnually: "$9.99",
      features: [
        "50 GB Storage",
        "50 GB Transfer",
        "05 Team members",
        "2GB File upload size",
        "Basic features included",
        "Limited IPFS pinned",
        "Ticket base support",
      ],
    },
    {
      name: "Basic",
      storage: "100GB",
      priceMonthly: "$1.99",
      priceAnnually: "$19.99",
      features: [
        "100 GB Storage",
        "100 GB Transfer",
        "20 Team members",
        "3GB File upload size",
        "All features included",
        "Unlimited IPFS pinned",
        "24/7 customer support",
      ],
    },
    {
      name: "Standard",
      storage: "200GB",
      priceMonthly: "$2.99",
      priceAnnually: "$29.99",
      features: [
        "200 GB Storage",
        "200 GB Transfer",
        "25 Team members",
        "3GB File upload size",
        "All features included",
        "Unlimited IPFS pinned",
        "24/7 customer support",
      ],
    },
  ],
  professional: [
    {
      name: "Lite",
      storage: "500GB",
      priceMonthly: "$9.99",
      priceAnnually: "$99.99",
      features: [
        "500 GB Storage",
        "500 GB Transfer",
        "50 Team members",
        "5GB File upload size",
        "Basic features included",
        "Limited IPFS pinned",
        "Ticket base support",
      ],
    },
    {
      name: "Basic",
      storage: "1000GB",
      priceMonthly: "$19.99",
      priceAnnually: "$199.99",
      features: [
        "1000 GB Storage",
        "1000 GB Transfer",
        "100 Team members",
        "10GB File upload size",
        "Advanced features included",
        "Unlimited IPFS pinned",
        "24/7 customer support",
      ],
    },
    {
      name: "Standard",
      storage: "2000GB",
      priceMonthly: "$29.99",
      priceAnnually: "$299.99",
      features: [
        "2000 GB Storage",
        "2000 GB Transfer",
        "200 Team members",
        "20GB File upload size",
        "Premium features included",
        "Unlimited IPFS pinned",
        "Priority 24/7 customer support",
      ],
    },
  ],
};

const PricingPlan = () => {
  const [showProfessionalPlan, setShowProfessionalPlan] = useState(false);
  const [billedAnnually, setBilledAnnually] = useState(false);

  const toggleProfessionalPlan = () => {
    setShowProfessionalPlan(!showProfessionalPlan);
  };

  const toggleBilledAnnually = () => {
    setBilledAnnually(!billedAnnually);
  };
  const plansToShow = showProfessionalPlan
    ? plans.professional
    : plans.personal;

  return (
    <div className="flex flex-col px-40 py-28 [@media(max-width:1220px)]:px-20 [@media(max-width:1220px)]:py-14 [@media(max-width:1050px)]:!px-10">
      <h1 className="font-extrabold text-[56px]">Pricing Plan</h1>

      <p className="pt-5 text-gray-500 text-xl">
        Access a complete decentralized storage with simple and transparent
        pricing.
      </p>

      <div className="flex items-center justify-between pt-16 [@media(max-width:540px)]:flex-col [@media(max-width:540px)]:gap-7">
        <div className="toggle-container text-lg">
          <input
            type="checkbox"
            name="Pricing Plan"
            onChange={toggleProfessionalPlan}
          />
          <span className="slider round "></span>
        </div>

        <div className="flex flex-col">
          <div className="flex gap-4 ">
            <span className="text-gray-500">Billed Annually</span>
            <label className="switch">
              <input
                type="checkbox"
                name="Billed Annually"
                onChange={toggleBilledAnnually}
              />
              <span className="mover rounded-full" />
            </label>
          </div>
          {billedAnnually && (
            <p className="text-[#22C55E] text-[13px]">Save up to 17%</p>
          )}
          {/* <p className="text-[#22C55E] text-[13px]">Save up to 17%</p> */}
        </div>
      </div>

      <div className="bg-[url('../../public/Ellipse11.png')] bg-no-repeat  bg-[right_-6rem_bottom_0rem]">
        {/* <img
          src={ellipseImage}
          alt="Ellipse Image"
          className="absolute right-[-100px] bottom-0 -z-10"
        /> */}
        <div className="flex py-10 justify-between [@media(max-width:850px)]:flex-col [@media(max-width:850px)]:gap-7">
          {plansToShow.map((plan, index) => (
            <div
              key={index}
              className="flex flex-col justify-between border-[3px] rounded-3xl hover:border-black shadow-xl p-10 [@media(max-width:950px)]:p-8 [@media(max-width:900px)]:!p-6 hover:scale-105 hover:ease-out duration-300 bg-white gap-4">
              {plan.name === "Basic" && (
                <span className="-mt-10 [@media(max-width:950px)]:-mt-8 [@media(max-width:900px)]:!-mt-6 mx-10 h-6 text-center rounded-b-full bg-black text-white text-sm">
                  Recommended
                </span>
              )}
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">{plan?.name}</h1>
                <h1 className="text-lg text-center font-semibold w-24 h-8 text-seaGreen bg-lightPurple rounded-lg border border-seaGreen">
                  {plan?.storage}
                </h1>
              </div>
              <h1 className="text-5xl pt-8 pb-4 font-extrabold ">
                {billedAnnually ? plan?.priceAnnually : plan?.priceMonthly}
                <span className="text-xl font-semibold">
                  {billedAnnually ? "/year" : "/ month"}
                </span>
              </h1>
              <h1 className="text-gray-500">
                {billedAnnually ? "Billed yearly" : "Billed monthly"}
              </h1>
              <div className="pt-8 pb-16 ">
                <Button buttonText="Get Started" buttonStyleType="custom" />
              </div>
              <ul className="list-none">
                {plan?.features.map((feature, index) => (
                  <li key={index} className="flex gap-2 py-2 text-gray-500">
                    <div className="flex justify-center items-center w-6 h-6 bg-lightPurple rounded-full ">
                      <img src={checkMark} alt="checkMark" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="py-5 gap-8  flex justify-center">
          <Button buttonText="Getting Started" />
          <Button buttonText="See detail pricing" />
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
