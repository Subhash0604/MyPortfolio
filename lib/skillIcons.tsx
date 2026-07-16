import { IconType } from "react-icons";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiShadcnui,
  SiNodedotjs,
  SiExpress,
  SiFastify,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiBitcoin,
  SiEthereum,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import {
  Database,
  Vote,
  Coins,
  Network,
  Boxes,
  Binary,
  RefreshCw,
  Workflow,
  Smartphone,
  Code2,
} from "lucide-react";

export interface SkillIcon {
  Icon: IconType | React.ComponentType<{ size?: number; className?: string }>;
  color: string;
}


export const skillIcons: Record<string, SkillIcon> = {

  "Java": { Icon: DiJava, color: "#f89820" },
  "JavaScript (ES6+)": { Icon: SiJavascript, color: "#f7df1e" },
  "TypeScript": { Icon: SiTypescript, color: "#3178c6" },


  "React.js": { Icon: SiReact, color: "#61dafb" },
  "Next.js": { Icon: SiNextdotjs, color: "#ffffff" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#38bdf8" },
  "Bootstrap": { Icon: SiBootstrap, color: "#7952b3" },
  "Material UI": { Icon: SiMui, color: "#007fff" },
  "ShadCN/UI": { Icon: SiShadcnui, color: "#ffffff" },


  "Node.js": { Icon: SiNodedotjs, color: "#339933" },
  "Express.js": { Icon: SiExpress, color: "#e0e0e0" },
  "Fastify": { Icon: SiFastify, color: "#e0e0e0" },


  "MongoDB": { Icon: SiMongodb, color: "#47a248" },
  "SQL": { Icon: Database, color: "#7ff0e0" },

  "Git": { Icon: SiGit, color: "#f05032" },
  "GitHub": { Icon: SiGithub, color: "#e0e0e0" },
  "Postman": { Icon: SiPostman, color: "#ff6c37" },
  "VS Code": { Icon: VscVscode, color: "#007acc" },

  
  "Bitcoin": { Icon: SiBitcoin, color: "#f7931a" },
  "Ethereum": { Icon: SiEthereum, color: "#9b7bff" },
  "DAO methodology": { Icon: Vote, color: "#9b7bff" },
  "Tokenization": { Icon: Coins, color: "#ff9466" },

 
  "REST APIs": { Icon: Network, color: "#7ff0e0" },
  "OOP": { Icon: Boxes, color: "#9b7bff" },
  "DSA": { Icon: Binary, color: "#ff9466" },
  "Agile": { Icon: RefreshCw, color: "#7ff0e0" },
  "CI/CD": { Icon: Workflow, color: "#9b7bff" },
  "Responsive Design": { Icon: Smartphone, color: "#ff9466" },
};

export const fallbackSkillIcon: SkillIcon = { Icon: Code2, color: "#aab2c8" };
