import { FunctionComponent } from "react";
import { IconType } from "react-icons";

export interface Service {
  Icon: IconType;
  title: string;
  about: string;
}

export interface Skill {
  name: string,
  level: string,
  Icon: IconType;
}

export interface Project {
  id: number,
  name: string,
  description: string,
  image_path: string,
  deployed_url: string,
  Github_url: string,
  category: Category[];
  key_tech: string[];
}

export type Category = "reactjs" | "nodejs" | "expressjs" | "nextjs" | "mongoDb" | "Game Dev" | "firebase" | "C#";