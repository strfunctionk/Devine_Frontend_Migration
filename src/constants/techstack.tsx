import type { ReactNode } from "react";
import C from "@assets/badges/C.svg";
import AWS from "@assets/badges/amazonwebservices.svg";
import Django from "@assets/badges/django.svg";
import PHP from "@assets/badges/php.svg";
import VueJS from "@assets/badges/vuejs.svg";
import Docker from "@assets/badges/docker.svg";
import Express from "@assets/badges/express.svg";
import Firebase from "@assets/badges/firebase.svg";
import Flutter from "@assets/badges/flutter.svg";
import Go from "@assets/badges/go.svg";
import Java from "@assets/badges/java.svg";
import JavaScript from "@assets/badges/javascript.svg";
import Kotlin from "@assets/badges/kotlin.svg";
import Kubernetes from "@assets/badges/kubernetes.svg";
import MongoDB from "@assets/badges/mongodb.svg";
import MySQL from "@assets/badges/mysql.svg";
import NestJS from "@assets/badges/nestjs.svg";
import NextJS from "@assets/badges/nextjs.svg";
import NodeJS from "@assets/badges/nodejs.svg";
import Python from "@assets/badges/python.svg";
import React from "@assets/badges/react.svg";
import Spring from "@assets/badges/spring.svg";
import Svelte from "@assets/badges/svelte.svg";
import Swift from "@assets/badges/swift.svg";
import TypeScript from "@assets/badges/typescript.svg";

// 백엔드 TechName enum과 1:1 대응
// SVG가 없는 항목: VUEJS, REACT_NATIVE, PHP, DJANGO
export type TechName =
  | "BACKEND"
  | "FRONTEND"
  | "INFRA"
  | "JAVASCRIPT"
  | "TYPESCRIPT"
  | "REACT"
  | "VUEJS"
  | "NEXTJS"
  | "SVELTE"
  | "REACT_NATIVE"
  | "FLUTTER"
  | "KOTLIN"
  | "SWIFT"
  | "JAVA"
  | "PYTHON"
  | "GO"
  | "C"
  | "PHP"
  | "SPRINGBOOT"
  | "NODEJS"
  | "EXPRESS"
  | "NESTJS"
  | "DJANGO"
  | "MONGODB"
  | "MYSQL"
  | "AWS"
  | "FIREBASE"
  | "DOCKER"
  | "KUBERNETES";

export const TECH_BADGE_ICON: Partial<Record<TechName, ReactNode>> = {
  JAVASCRIPT: <JavaScript />,
  TYPESCRIPT: <TypeScript />,
  REACT: <React />,
  VUEJS: <VueJS />,
  NEXTJS: <NextJS />,
  SVELTE: <Svelte />,
  REACT_NATIVE: <React />, // SVG 없음 → React 아이콘 임시 사용
  FLUTTER: <Flutter />,
  KOTLIN: <Kotlin />,
  SWIFT: <Swift />,
  JAVA: <Java />,
  PYTHON: <Python />,
  GO: <Go />,
  C: <C />,
  SPRINGBOOT: <Spring />,
  NODEJS: <NodeJS />,
  EXPRESS: <Express />,
  NESTJS: <NestJS />,
  DJANGO: <Django />,
  PHP: <PHP />,
  MONGODB: <MongoDB />,
  MYSQL: <MySQL />,
  AWS: <AWS />,
  FIREBASE: <Firebase />,
  DOCKER: <Docker />,
  KUBERNETES: <Kubernetes />,
  // REACT_NATIVE: SVG 없음 → React 아이콘 임시 사용
};

export const TECH_LABEL: Record<TechName, string> = {
  BACKEND: "백엔드",
  FRONTEND: "프론트엔드",
  INFRA: "인프라",
  JAVASCRIPT: "JavaScript",
  TYPESCRIPT: "TypeScript",
  REACT: "React",
  VUEJS: "Vue.js",
  NEXTJS: "Next.js",
  SVELTE: "Svelte",
  REACT_NATIVE: "React Native",
  FLUTTER: "Flutter",
  KOTLIN: "Kotlin",
  SWIFT: "Swift",
  JAVA: "Java",
  PYTHON: "Python",
  GO: "Go",
  C: "C",
  PHP: "PHP",
  SPRINGBOOT: "Spring Boot",
  NODEJS: "Node.js",
  EXPRESS: "Express",
  NESTJS: "NestJS",
  DJANGO: "Django",
  MONGODB: "MongoDB",
  MYSQL: "MySQL",
  AWS: "AWS",
  FIREBASE: "Firebase",
  DOCKER: "Docker",
  KUBERNETES: "Kubernetes",
};
