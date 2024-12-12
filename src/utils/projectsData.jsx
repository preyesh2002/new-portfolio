import { SiGodotengine, SiExpress, SiTypescript, SiPostgresql } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { RiHtml5Fill } from "react-icons/ri";
import { DiMongodb, DiPostgresql } from "react-icons/di";
import { IoPrism } from "react-icons/io5";
import { BsPostage } from "react-icons/bs";

const createTag = (icon, color, tagName) => ({ label: icon, color, tagName });

const iconClassName = "inline-block w-11 h-11";

const projects = [
	{
		imgSrc: "/images/pk.webp",
		title: "Popstack",
		description:
			"A music app that allows users to upvote songs, with the highest-voted song playing next.",
		tags: [
			createTag(
				<SiGodotengine className={iconClassName} />,
				"bg-[#458dc0] text-zinc-50",
				"Godot"
			),

			createTag(
				<RiHtml5Fill className={iconClassName} />,
				"bg-[#017fa5] text-zinc-50",
				"HTML5"
			),
		],
		projectLink: "",
		codeLink: "",
		category: "GAME",
	},
	{
		imgSrc: "/images/1.webp",
		title: " Medium Blog App",
		description:
			"A full-stack blog app with Zod validation, Cloudflare Workers backend.",
		tags: [
			createTag(
				<SiTypescript className={iconClassName} />,
				"bg-[#017fa5] text-zinc-50",
				"Typescript"
			),
			createTag(
				<RiNextjsFill className={iconClassName} />,
				"bg-[#23b45d] text-zinc-50",
				"Next.js"
			),
			createTag(
				<IoPrism className={iconClassName} />,
				"bg-zinc-50 text-zinc-950",
				"Prisma"
			),
			createTag(
				<SiPostgresql className={iconClassName} />,
				"bg-[#353535] text-zinc-50",
				"PostgresSql"
			),
		],
		projectLink: "https://medium-like-app.vercel.app",
		codeLink: "https://github.com/preyesh2002/Medium-app.git",
		category: "WEB",
	},
	{
		imgSrc: "/images/Ricemill (1).webp",
		title: "Rice mill management",
		description:
			"A Comprehensive and feature rich Rice-Mill management system",
		tags: [
			createTag(
				<DiMongodb className={iconClassName} />,
				"bg-[#4eb1b4] text-zinc-50",
				"MongoDB"
			),
			createTag(
				<SiExpress className={iconClassName} />,
				"bg-[#017fa5] text-zinc-50",
				"Express"
			),
			
			createTag(
				<FaReact className={iconClassName} />,
				"bg-[#017fa5] text-zinc-50",
				"React"
			),
			createTag(
				<FaNodeJs className={iconClassName} />,
				"bg-[#dfce3c] text-zinc-950",
				"NodeJS"
			)
			
			
		],
		projectLink: "https://srivinayakaricemill.vercel.app",
		codeLink: "https://github.com/preyesh2002/Rice-Mill-Management.git",
		category: "WEB",
	},
	
];

export default projects;
