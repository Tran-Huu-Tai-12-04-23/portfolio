import { BsLinkedin } from "react-icons/bs";
import { FaBirthdayCake, FaFacebookF, FaGithub, FaPhone } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { SiGmail } from "react-icons/si";

export const SocialLinking = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/huutai.tran.9",
    icon: <FaFacebookF size={32} color="#1A77F2" />,
  },
  {
    name: "Github",
    url: "",
    icon: <FaGithub size={32} color="black" />,
  },
  {
    name: "LinkedIn",
    url: "",
    icon: <BsLinkedin size={32} color="#1A77F2" />,
  },
  {
    name: "Gmail",
    url: "",
    icon: <SiGmail size={32} color="red" />,
  },
];

export const Info = [
  {
    title: "Birthday",
    content: "04/04/2004",
    icon: (
      <FaBirthdayCake
        size={24}
        className="hover:text-[#EC1C09] text-[#FF9A1A]"
      />
    ),
  },
  {
    title: "Email",
    content: "huutt201@gmail.com",
    icon: <SiGmail size={24} className="hover:text-[#EC1C09] text-[#FF9A1A]" />,
  },
  {
    title: "Phone number",
    content: "03761005xx",
    icon: <FaPhone size={24} className="hover:text-[#EC1C09] text-[#FF9A1A]" />,
  },
  {
    title: "Address",
    content: "Phuong 2, Quan 8, Ho Chi Minh City",
    icon: (
      <HiLocationMarker
        size={24}
        className="hover:text-[#EC1C09] text-[#FF9A1A]"
      />
    ),
  },
];
