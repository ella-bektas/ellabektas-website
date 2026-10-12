import { AiOutlineTikTok, AiOutlineGithub, AiOutlineLinkedin, AiFillHome, AiOutlineHome, AiOutlineUser, AiOutlineFolder, AiOutlineSetting, AiOutlineYoutube} from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaToggleOff, FaToggleOn } from "react-icons/fa6";
import { BsMoon, BsSun } from "react-icons/bs";

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
  TikTok: AiOutlineTikTok,
  ToggleOff: FaToggleOff,
  ToggleOn: FaToggleOn,
  Moon: BsMoon,
  Sun: BsSun,

};

export type IconName = keyof typeof Icons;
