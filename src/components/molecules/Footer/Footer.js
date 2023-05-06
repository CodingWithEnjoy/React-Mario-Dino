import "./Footer.css";

const Footer = () => {
  return (
    <div className="copyright">
      Copyright © {new Date().getFullYear()}{" "}
      <a
        href="https://github.com/CodingWithEnjoy/"
        target="_blank"
        rel="noreferrer"
        className="copyright-link"
      >
        Coding With Enjoy
      </a>
    </div>
  );
};
export default Footer;
