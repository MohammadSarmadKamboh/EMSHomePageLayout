import deupoadFeatureScreen1 from "../../public/deupoadFeatureScreen1.png";
import deuploadFeatureMobile2 from "../../public/deuploadFeatureMobile2.png";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="flex flex-col  items-center bg-lightGreen px-40 pt-40 [@media(max-width:900px)]:px-20 [@media(max-width:421px)]:!px-2 [@media(max-width:900px)]:pt-20">
      <h1 className="text-center font-extrabold text-[56px] [@media(max-width:739px)]:text-5xl [@media(max-width:656px)]:!text-[40px]">
        Streamline <span className="text-seaGreen ">Your</span> Entity
        Management Process
      </h1>

      <p className="text-center py-5 text-gray-500 [@media(max-width:900px)]:text-justify">
        Are you tired of juggling multiple entities and struggling to keep track
        of their intricate details? Say goodbye to the chaos and welcome
        simplicity with [Entity Management System Name]. Our comprehensive
        platform is designed to empower businesses of all sizes to efficiently
        manage their entities with ease.
      </p>

      <div className="py-5 gap-8  flex ">
        <Button buttonText="Getting Started" />
        <Button buttonText="Learn More" />
      </div>

      <div className="relative my-12">
        <img src={deupoadFeatureScreen1} alt="deupoadFeatureScreen1" />
        <img
          className="absolute bottom-[-50px] left-[-74px] [@media(max-width:1321px)]:w-64 [@media(max-width:1151px)]:!w-52 [@media(max-width:951px)]:!w-40 "
          src={deuploadFeatureMobile2}
          alt="deuploadFeatureMobile2"
        />
      </div>
    </div>
  );
};

export default Hero;
