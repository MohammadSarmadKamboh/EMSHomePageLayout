import circleNodes2 from "../../public/images/circleNodes2.png";
import arrowRightLong3 from "../../public/images/arrowRightLong3.png";
import shieldKeyhole2 from "../../public/images/shieldKeyhole2.png";
import block1 from "../../public/images/block1.png";

const chooseData = [
  {
    title: "Efficiency:",
    description:
      "Save time and effort by automating repetitive tasks such as entity creation, compliance filings, and document management. Our intuitive interface ensures smooth navigation and quick access to the information you need",
    image: circleNodes2,
    link: "#",
  },
  {
    title: "Compliance Confidence:",
    description:
      "Stay compliant with regulatory requirements effortlessly. Our system automatically alerts you of upcoming deadlines and ensures all necessary filings are completed accurately and on time.",
    image: shieldKeyhole2,
    link: "#",
  },
  {
    title: "Customization:",
    description:
      "Tailor the system to suit your unique business needs. Whether you're managing corporations, LLCs, partnerships, or trusts, our flexible platform adapts to your requirements.",
    image: block1,
    link: "#",
  },
];

const Choose = () => {
  return (
    <div className="flex flex-col px-40 pt-40 pb-24 [@media(max-width:1436px)]:px-20 [@media(max-width:900px)]:pt-20 [@media(max-width:900px)]:pb-12 [@media(max-width:877px)]:!px-10">
      <h1 className="text-center font-extrabold text-[56px]">
        Why Choose <span className="text-seaGreen ">Us!</span>
      </h1>

      <p className="text-center px-[250px] py-5 text-gray-500 [@media(max-width:1250px)]:px-36 [@media(max-width:1050px)]:!px-0 [@media(max-width:492px)]:text-justify">
        Centralized Platform that access all your entity information from one
        centralized location. No more searching through piles of paperwork or
        multiple spreadsheets.
      </p>

      <div className="flex [@media(max-width:769px)]:flex-col justify-between gap-3 py-20">
        {chooseData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-between gap-8 rounded-3xl bg-lightPurple p-12">
            <div className="w-20 h-20 rounded-full bg-seaGreen py-5 px-5">
              <img src={item.image} alt={`image${index}`} />
            </div>
            <h1 className="text-seaGreen text-2xl font-bold">{item.title}</h1>
            <p className="text-justify ">{item.description}</p>
            <a href="#" className="flex text-seaGreen hover:underline">
              Learn more
              <img
                src={arrowRightLong3}
                alt="arrowRightLong3"
                className="pl-2 pt-[6px] cursor-pointer"
              />
            </a>
          </div>
        ))}
      </div>

      <h1 className="text-center font-extrabold text-[56px] pt-14">Security</h1>

      <p className="text-center px-[200px] py-5 text-gray-500 [@media(max-width:1200px)]:px-24 [@media(max-width:1050px)]:!px-0 [@media(max-width:558px)]:text-justify">
        Rest easy knowing that your sensitive entity data is protected with
        state-of-the-art security measures. Our robust security protocols
        safeguard your information against unauthorized access or breaches.
      </p>
    </div>
  );
};

export default Choose;
