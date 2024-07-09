import { GoStack } from "react-icons/go";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { BsSubstack } from "react-icons/bs";

import { HiOutlineAtSymbol } from "react-icons/hi2";

type Metadata = {
    title: string;
    description: string;
    section?: any;
}

export const metadata: Metadata = {
    title: "Darcio Massala",
    description: "Software Engineer",
    section: [
        { title: "Tech Stack", icon: GoStack, button: "And counting..." },
        {
            title: "Follow Me", icon: HiOutlineAtSymbol, social1: FaLinkedin, social2: FaGithubSquare, social3: BsSubstack,
            linkedin: '@darciomassala', linkedinUrl: 'https://www.linkedin.com/in/darciomassala/',
            github: '@darcio-codes279', gitHubUrl: 'https://github.com/darcio-codes279',
            substack: '@darciowrites', substackUrl: 'https://darciowrites919.substack.com/',
            email: 'darciomassala@gmail.com'
        },
        { title: "Random", src: "" },
        { title: "Buy Me a Coffee", icon: "coffee" },
        { title: "pic", src: "/images/img1.jpeg" },
        {
            title: "Profile", src: "/images/third.png", quote: "I specialise in using Full-Stack Development to create digital solutions to our everyday problems.",
            quote1: "I believe that Technology harnesses the power to propel the world into the future.",
            quote2: "Therefore, I set out to create and teach others to create Technology for good.",
            icon1: "<Mail />", icon2: "<Download />"
        },
        { title: "pic2", src: "" },
        { title: "View Works", icon: "", buttonTitle: "" },
        { title: "About Me", icon: "", tag1: "", tag2: "", tag3: "", tag4: "", tag5: "", tag6: "", tag7: "", tag8: "" }, ,
    ]
};