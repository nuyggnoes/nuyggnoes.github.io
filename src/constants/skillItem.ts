import { FaReact } from "react-icons/fa";
import { FaDocker, FaAws } from "react-icons/fa6";
import { SiNextdotjs, SiTypescript, SiJavascript, SiReactquery, SiReacthookform, SiMongodb, SiGraphql, SiRecoil } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

export const SKILL_ITEM = 
{
        language: {
            id: "language",
            content: "Language",
            data: [
                {
                    id: 'typescript',
                    icon: SiTypescript,
                    content: 'TypeScript',
                    bgColor: '#2f74c0',
                    textColor: '#ffffff',
                },
                {
                    id: 'javascript',
                    icon: SiJavascript,
                    content: 'JavaScript',
                    bgColor: '#efd81d',
                    textColor: '#000000',
                },
            ]
        },
        frontend: {
            id: 'frontend',
            content: "FrontEnd",
            data: [
                {
                    id: 'react',
                    icon: FaReact,
                    content: 'React.js',
                    bgColor: '#21ddff',
                    textColor: '#ffffff',
                },
                {
                    id: 'next',
                    icon: SiNextdotjs,
                    content: 'Next.js',
                    bgColor: '#000000',
                    textColor: '#ffffff',
                },
                
                {
                    id: 'reactquery',
                    icon: SiReactquery,
                    content: 'React-Query',
                    bgColor: "#ff4260",
                    textColor: '#ffffff',
                },
                {
                    id: 'tailwind',
                    icon: RiTailwindCssFill,
                    content: 'Tailwind CSS',
                    bgColor: '#38bdf8',
                    textColor: '#ffffff',
                },
                {
                    id: 'reacthookform',
                    icon: SiReacthookform,
                    content: 'React-Hook-Form',
                    bgColor: '#0f1931',
                    textColor: '#ffffff',
                }
            ]
        },
        backend: {
            id: "backend",
            content: "BackEnd",
            data: [
                {
                    id: 'mongo',
                    icon: SiMongodb,
                    content: 'MongoDB',
                    bgColor: '#126d50',
                    textColor: '#ffffff',
                }
            ]
        },
        devops: {
            id: "devops",
            content: "DevOps",
            data: [
                {
                    id: 'aws',
                    icon: FaAws,
                    content: "AWS",
                    bgColor: '#f79b26',
                    textColor: '#000000',
                },
                {
                    id: 'docker',
                    icon: FaDocker,
                    content: "Docker",
                    bgColor: '#2468ee',
                    textColor: '#ffffff',
                },
            ]
        }
    }