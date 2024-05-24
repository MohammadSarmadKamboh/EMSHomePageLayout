import userTieHair1 from "/userTieHair1.png";
import arrowRightLong1 from "/arrowRightLong1.png";
import buildings1 from "/buildings1.png";
import arrowRightLong2 from "/arrowRightLong2.png";

const sections = [
  {
    bgColor: "bg-lightGreen",
    imgSrc: userTieHair1,
    imgAlt: "userTieHair1",
    imgBgColor: "bg-darkGreen",
    title: "Are you individual?",
    description:
      "Keep everything that’s important to you and your family shareable and safe in one place.",
    linkText: "Create an account",
    linkHref: "#",
    linkImgSrc: arrowRightLong1,
    linkImgAlt: "arrowRightLong1",
    linkColor: "text-darkGreen",
  },
  {
    bgColor: "bg-lightPurple",
    imgSrc: buildings1,
    imgAlt: "buildings1",
    imgBgColor: "bg-darkPurple",
    title: "Are you business?",
    description:
      "Work efficiently with teammates and clients, stay in sync on projects and keep company data safe.",
    linkText: "See more pricing",
    linkHref: "#",
    linkImgSrc: arrowRightLong2,
    linkImgAlt: "arrowRightLong2",
    linkColor: "text-darkPurple",
  },
];

const Ready = () => {
  return (
    <div className="flex flex-col px-40 pb-40 [@media(max-width:1025px)]:px-20 [@media(max-width:1025px)]:p-20">
      <h1 className="text-center font-extrabold py-5 text-5xl [@media(max-width:624px)]:text-[36px]">
        Ready to get started?
      </h1>

      <p className="text-center text-xl text-gray-500 [@media(max-width:595px)]:text-justify">
        The IPFS file storage and shring with collaboration solution that suits
        any industry and business size.
      </p>

      <div className="flex justify-between gap-7 pt-16 [@media(max-width:769px)]:flex-col">
        {sections.map((section, index) => (
          <div key={index} className={`rounded-3xl p-12 ${section.bgColor}`}>
            <div
              className={`size-20 rounded-full pl-[22px] ${
                section.bgColor === "bg-lightGreen"
                  ? "pt-[19px] bg-darkGreen"
                  : "pt-[22px] bg-darkPurple"
              }`}>
              <img src={section.imgSrc} alt={section.imgAlt} />
            </div>
            <h1 className="text-[32px] font-extrabold pt-4">{section.title}</h1>
            <p className="text-gray-500 pt-4">{section.description}</p>
            <a
              href={section.linkHref}
              className={`flex pt-8 font-semibold hover:underline ${section.linkColor}`}>
              {section.linkText}
              <img
                src={section.linkImgSrc}
                alt={section.linkImgAlt}
                className="pl-2 pt-[6px] cursor-pointer"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ready;
