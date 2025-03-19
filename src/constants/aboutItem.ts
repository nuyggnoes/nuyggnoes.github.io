import { FaUser,FaHome,FaEnvelope } from 'react-icons/fa';
import { FaCakeCandles,FaPhone } from "react-icons/fa6";
import { IoMdSchool } from "react-icons/io";

export const ABOUT_ITEM = [
    {
        id: "name",
        icon: FaUser,
        content: "임성균",
    },
    {
        id: "birth",
        icon: FaCakeCandles,
        content: "2000.06.07",
    },
    {
        id: "home",
        icon: FaHome,
        content: "서울특별시 동작구",
    },
    {
        id: "phone",
        icon: FaPhone,
        content: "010-2870-0607",
    },
    {
        id: "email",
        icon: FaEnvelope,
        content: "tjdrbs0607@naver.com",
    },
    {
        id: "school",
        icon: IoMdSchool,
        content: "부경대학교(컴퓨터공학부)",
    }
]