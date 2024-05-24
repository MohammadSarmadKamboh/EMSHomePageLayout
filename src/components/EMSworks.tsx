import Frame from "../../public/Frame.png";
import Button from "./Button";

const EMSworks = () => {
  return (
    <div className="flex items-center justify-between gap-8 px-40 py-20 [@media(max-width:1025px)]:px-20 [@media(max-width:1025px)]:py-10  [@media(max-width:769px)]:flex-col bg-gradient-to-b from-gradientStart to-gradientEnd">
      <div className="w-[560px] [@media(max-width:700px)]:w-auto">
        <h1 className="font-extrabold text-[56px] [@media(max-width:769px)]:text-center [@media(max-width:600px)]:text-[36px]">
          How EMS works?{" "}
        </h1>

        <p className="text-justify pt-12 text-xl text-gray-500 ">
          When you add a file to EMS, your file is split into smaller chunks,
          cryptographically hashed, and given a unique fingerprint called a
          content identifier (CID). This CID acts as a permanent record of your
          file as it exists at that point in time. However, this doesn't mean
          you need to remember a long string of CIDs to access files. Deupload
          can be used to map CIDs to human-readable DNS names.
        </p>

        <div className="pt-16 [@media(max-width:769px)]:text-center">
          <Button buttonText="Learn more EMS" />
        </div>
      </div>
      <div>
        <img src={Frame} alt="Frame" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default EMSworks;
