import { FaUser,FaHome,FaEnvelope } from 'react-icons/fa';
import { FaCakeCandles,FaPhone } from "react-icons/fa6";
import { IoMdSchool } from "react-icons/io";

export const ABOUT_ITEM = [
    {
        id: "name",
        id_kr:"이름",
        icon: FaUser,
        content: "임성균",
    },
    {
        id: "birth",
        id_kr:"생년월일",
        icon: FaCakeCandles,
        content: "2000.06.07",
    },
    {
        id: "home",
        id_kr:"위치",
        icon: FaHome,
        content: "서울특별시 동작구",
    },
    {
        id: "phone",
        id_kr:"연락처",
        icon: FaPhone,
        content: "010-2870-0607",
    },
    {
        id: "email",
        id_kr:"이메일",
        icon: FaEnvelope,
        content: "tjdrbs0607@naver.com",
    },
    {
        id: "school",
        id_kr:"학력",
        icon: IoMdSchool,
        content: "부경대학교(컴퓨터공학부)",
    }    
]