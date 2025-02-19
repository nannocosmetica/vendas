import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export const SocialNetwork = () => {
  return (
    <aside className="hidden lg:flex flex-col items-center justify-evenly w-[50px] rounded-r-2xl h-3/12 bg-gradient-to-b from-purple-950 to-pink-600 fixed bottom-32 gap-y-4">
      <ul className="h-full flex flex-col items-center justify-evenly">
        <li className="w-4 hover:w-6 transition-all">
          <a href="https://facebook.com/nannocosmetica" target="_blank" rel="nofollow noopener noreferrer" className="w-full ">
            <FaFacebookF size={"100%"} color="#fff" />
          </a>
        </li>
        <li className="w-6 hover:w-8 transition-all">
          <a href="https://instagram.com/nannocosmetica" target="_blank" rel="nofollow noopener noreferrer" className="w-full ">
            <FaInstagram size={"100%"} color="#fff" />
          </a>
        </li>
        <li className="w-7 hover:w-9 transition-all">
          <a href="https://youtube.com/NannoCosmética" target="_blank" rel="nofollow noopener noreferrer" className="w-full ">
            <FaYoutube size={"100%"} color="#fff" />
          </a>
        </li>
      </ul>
    </aside>
  );
};
