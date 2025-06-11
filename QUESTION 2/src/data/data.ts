import type { Student } from "../types";

export const students: Student[] = [
  {
    id: "1",
    name: "Alice",
    grade: "A",
    courses: [
      {
        id: "MTH",
        name: "Mathematics",
        description: "The study of numbers, shapes, and patterns.",
      },
      {
        id: "PHY",
        name: "Physics",
        description: "Understanding the laws of nature and matter.",
      },
      {
        id: "ENG",
        name: "English",
        description:
          "Development of reading, writing, and communication skills.",
      },
    ],
  },
  {
    id: "2",
    name: "Brian",
    grade: "B",
    courses: [
      {
        id: "BIO",
        name: "Biology",
        description: "Study of living organisms and life processes.",
      },
      {
        id: "CHE",
        name: "Chemistry",
        description: "Exploration of substances and their interactions.",
      },
    ],
  },
  {
    id: "3",
    name: "Cynthia",
    grade: "A",
    courses: [
      {
        id: "ECO",
        name: "Economics",
        description:
          "Understanding production, distribution, and consumption of goods.",
      },
    ],
  },
  {
    id: "4",
    name: "David",
    grade: "B",
    courses: [
      {
        id: "MTH",
        name: "Mathematics",
        description: "The study of numbers, shapes, and patterns.",
      },
      {
        id: "PHY",
        name: "Physics",
        description: "Understanding the laws of nature and matter.",
      },
      {
        id: "ENG",
        name: "English",
        description:
          "Development of reading, writing, and communication skills.",
      },
      {
        id: "CIV",
        name: "Civic Education",
        description:
          "Promotes responsible citizenship and understanding of civic duties.",
      },
    ],
  },
];
