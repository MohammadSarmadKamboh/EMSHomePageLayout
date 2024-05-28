import GDPRcompliant from "../../public/images/GDPRcompliant.png";
import nortonBySymantec from "../../public/images/nortonBySymantec.png";
import stripe from "../../public/images/stripe.png";
import payPal from "../../public/images/payPal.png";
import Facebook from "../../public/images/Facebook.png";
import Twitter from "../../public/images/Twitter.png";
import Youtube from "../../public/images/Youtube.png";
import Medium from "../../public/images/Medium.png";
import { ImagesAndIconsProps } from "../types/interfaces";

const ImagesAndIcons: React.FC<ImagesAndIconsProps> = ({ type }) => {
  const assets = {
    images: [
      { src: GDPRcompliant, alt: "GDPR compliant" },
      { src: nortonBySymantec, alt: "Norton By Symantec" },
      { src: stripe, alt: "stripe" },
      { src: payPal, alt: "payPal" },
    ],
    icons: [
      { src: Facebook, alt: "Facebook Icon" },
      { src: Twitter, alt: "Twitter Icon" },
      { src: Youtube, alt: "Youtube Icon" },
      { src: Medium, alt: "Medium Icon" },
    ],
  };

  const filteredAssets =
    type === "images"
      ? assets.images // the array to get only images
      : assets.icons; // the array to get only icons

  return (
    <>
      {filteredAssets.map((asset, index) => (
        <a
          key={index}
          href="#"
          className="hover:scale-125 hover:ease-out duration-300">
          <img src={asset.src} alt={asset.alt} />
        </a>
      ))}
    </>
  );
};

const navigationDataFooterSection = [
  {
    title: "Products",
    linkText: [
      "Features",
      "Solutions",
      "Pricing",
      "Token",
      "Security",
      "Comparison",
    ],
  },
  {
    title: "Resource",
    linkText: [
      "Whitepaper",
      "Developer",
      "Brand Kits",
      "Compliance",
      "Privacy Policy",
      "Terms of service",
    ],
  },
  {
    title: "Community",
    linkText: ["Guide", "Blog", "FAQs", "Forum", "Help center", "Support desk"],
  },
];

const Footer = () => {
  return (
    <footer className="flex  flex-col bg-footerBGColor px-10 py-10 [@media(max-width:715px)]:px-4 [@media(max-width:605px)]:!px-2">
      <div className="flex justify-between  gap-2 ">
        <div className="flex flex-col justify-between max-w-[317px]">
          <h1 className="text-[#E2E4E9] font-extrabold text-lg">
            What is Deupload?
          </h1>
          <p className="text-[#E2E4E9] my-8 ">
            Deupload is a cloud storage services based on Blockchain and Web3
            technology, designed to help teams collaborate and file sharing in a
            completely private like never before.
          </p>
          <div className="flex justify-between mt-8 [@media(max-width:667px)]:mt-0">
            <ImagesAndIcons type="images" />
          </div>
        </div>
        {navigationDataFooterSection.map((section) => (
          <div key={section.title} className="flex flex-col ">
            <h1 className="text-[#E2E4E9] font-extrabold text-lg">
              {section.title}
            </h1>
            <ul className="flex flex-col gap-2 mt-8 text-[#E2E4E9]">
              {section.linkText.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:underline truncate">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-24">
        <p className="text-[#E2E4E9] text-sm">
          © 2022 Deupload. Powered by Conikal LLC
        </p>
        <div className="flex gap-4">
          <ImagesAndIcons type="icons" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
