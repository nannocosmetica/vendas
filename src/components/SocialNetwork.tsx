import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa"

export const SocialNetwork = () => {
  return (
      <ul className="flex flex-col items-center justify-evenly w-[50px] rounded-r-2xl h-3/12 bg-gradient-to-b from-purple-950 to-pink-600 fixed bottom-16">
        <li><a href="#" className="w-full "><FaFacebookF size={24} color="#fff"/></a></li>
        <li><FaInstagram size={24} color="#fff" /></li>
        <li><FaYoutube size={24} color="#fff" /></li>
      </ul>
  )
}