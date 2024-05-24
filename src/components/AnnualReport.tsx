import teleWorkbBro1 from "../../public/teleWorkbBro1.png";
import Button from "./Button";

const AnnualReport = () => {
  return (
    <div className="flex items-center justify-between gap-8 px-40 pb-7 [@media(max-width:1025px)]:px-20  [@media(max-width:769px)]:flex-col-reverse">
      <div className="w-[525px] [@media(max-width:700px)]:w-auto">
        <h1 className="font-extrabold text-[56px] [@media(max-width:769px)]:text-center [@media(max-width:625px)]:text-[36px]">
          <span className="text-seaGreen ">ANNUAL REPORT</span> FILING
        </h1>

        <p className="text-justify pt-12 text-xl text-gray-500 ">
          EMS identifies and tracks annual report deadlines for all U.S. states
          and the District of Columbia. As the deadline approaches, the system
          sends up to four reminders with links to our simplified online filing
          workflow.
        </p>

        <div className="pt-24 gap-8  flex [@media(max-width:769px)]:justify-center">
          <Button buttonText="Getting Started" />
          <Button buttonText="Learn More" />
        </div>
      </div>

      <div className="rounded-full bg-lightGreen">
        <img src={teleWorkbBro1} alt="teleWorkbBro1" />
      </div>
    </div>
  );
};

export default AnnualReport;
