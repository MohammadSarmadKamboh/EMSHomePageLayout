import deuploadFileSharing2 from "../assets/deuploadFileSharing2.png";
import deuploadFileRequest1 from "../assets/deuploadFileRequest1.png";

const FeatureSections = [
  {
    title: "Notifications",
    description:
      "Get real-time notifications with custom notification builder and never miss any update.",
    imageSrc: deuploadFileSharing2,
    altText: "deuploadFileSharing2",
  },
  {
    title: "Advanced Reporting",
    description:
      "Create your own customized reports, export files with different formats.",
    imageSrc: deuploadFileRequest1,
    altText: "deuploadFileRequest1",
  },
];

const Features = () => {
  return (
    <div className="flex justify-between gap-7 px-40 py-20 [@media(max-width:1025px)]:px-20 [@media(max-width:1025px)]:py-10 [@media(max-width:769px)]:flex-col ">
      {FeatureSections.map((section, index) => (
        <div
          key={index}
          className="flex flex-col bg-lightGreen rounded-3xl px-5">
          <h1 className="text-center font-bold text-3xl pt-14">
            {section.title}
          </h1>
          <p className="text-center lg:px-14 py-5 text-lg text-gray-500">
            {section.description}
          </p>
          <img
            src={section.imageSrc}
            alt={section.altText}
            className="h-full"
          />
        </div>
      ))}
    </div>
  );
};

export default Features;
