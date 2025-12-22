import { AiFillHome, AiOutlineUser, AiOutlineSetting } from "react-icons/ai";

export const Icons = {
  None: undefined, 
  Home: AiFillHome,
  User: AiOutlineUser,
  Settings: AiOutlineSetting,
};

export type IconName = keyof typeof Icons;
