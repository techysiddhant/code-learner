import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { Link } from "react-router-dom";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full px-8 sm:px-20 py-4 bg-slate-900 border-t border-gray-200 text-gray-200 md:flex md:items-center md:justify-between  ">
      <p className="text-sm text-center">
        © {year} - code learner | Developed by{" "}
        <Link className="bg-indigo-600 px-1 rounded-sm">techysiddhant</Link>{" "}
      </p>
      <ul className="flex flex-wrap gap-5 items-center justify-center mt-3 text-sm text-gray-200 sm:mt-0">
        <li>
          <Link to={"/"}>
            <AiFillGithub size={25} />
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <AiOutlineTwitter size={25} />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
