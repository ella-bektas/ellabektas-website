import { AiOutlineGithub, AiOutlineLinkedin, AiFillHome, AiOutlineHome, AiOutlineUser, AiOutlineFolder, AiOutlineSetting, AiOutlineYoutube} from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";

export const Icons = {
  None: undefined, 
  HomeFill: AiFillHome,
  HomeOutline: AiOutlineHome,
  User: AiOutlineUser,
  Settings: AiOutlineSetting,
  YoutubeFill: FaYoutube,
  YoutubeOutline: AiOutlineYoutube,
  Portfolio: AiOutlineFolder,
  Linkedin: AiOutlineLinkedin,
  Github: AiOutlineGithub,
};

export type IconName = keyof typeof Icons;
