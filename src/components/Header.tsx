import Logo from "../../public/images/Logo.png";
import Button from "./Button";

const headerLinks = [
  { text: "Companies", href: "#" },
  { text: "Law Firm", href: "#" },
  { text: "About", href: "#" },
  { text: "CTA", href: "#" },
  { text: "Testimonial", href: "#" },
  { text: "Pricing", href: "#" },
  { text: "FAQ", href: "#" },
];

const Header = () => {
  return (
    <header className="flex flex-wrap justify-between items-center px-4 py-2 [@media(max-width:639px)]:px-2">
      <div className="flex items-center [@media(max-width:821px)]:gap-2 gap-6 lg:gap-11">
        <a href="#">
          <img
            src={Logo}
            alt="Logo"
            className="[@media(max-width:639px)]:!w-20 [@media(max-width:769px)]:w-24 [@media(min-width:769px)]:w-28 [@media(min-width:921px)]:w-32 [@media(min-width:1150px)]:!w-full [@media(min-width:1150px)]:h-auto"
          />
        </a>
        <nav className="flex flex-wrap justify-between items-center [@media(max-width:769px)]:gap-2 gap-6 [@media(min-width:1150px)]:gap-11 ">
          {headerLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="hover:text-seaGreen hover:underline text-gray-500 [@media(max-width:980px)]:text-sm [@media(max-width:900px)]:!text-xs">
              {link.text}
            </a>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-3 [@media(max-width:639px)]:gap-2">
        <Button buttonText="Sign In" />
        <Button buttonText="DEMO" buttonSize={true} />
      </div>
    </header>
  );
};

export default Header;
