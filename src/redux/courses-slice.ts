import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  courses: {
    id: number;
    courseName: string;
    author: string;
    duration: number;
    progress: number;
    rate: number;
    image: string;
    aims: string[];
    projectDesc: string;
    materials: {
      topic: string;
      date: string;
      desc: string;
      type: "lecture" | "practice";
      passed: boolean;
      notes: string[];
    }[];
  }[];
}

const initialState: IState = {
  courses: [
    {
      id: 1,
      courseName: "React.JS + TypeScript advanced",
      author: "Bill Brama",
      duration: 72000,
      progress: 22,
      rate: 4,
      image: "https://www.aryandeora.com/img/react_ts_logo.svg",
      projectDesc:
        "Master React JS & TypeScript, build REST APIs, add Authentication, use MongoDB, SQL & much more!",
      aims: [
        "Learn TypeScript basics",
        "Learn React basics",
        "Learn last ES changes",
        "Build new project",
      ],
      materials: [
        {
          topic: "Introduction",
          date: "02.03.2023",
          desc: "Course Roadmap",
          type: "lecture",
          passed: true,
          notes: ["Hello world"],
        },
        {
          topic: "Learn React",
          date: "12.03.2023",
          desc: "React fundamentals",
          type: "practice",
          passed: true,
          notes: [],
        },
        {
          topic: "TypeScript basics",
          date: "12.04.2023",
          desc: "Course Roadmap",
          type: "lecture",
          passed: true,
          notes: [],
        },
        {
          topic: "Adding mock backend",
          date: "15.05.2023",
          desc: "Work with DB",
          type: "practice",
          passed: true,
          notes: [],
        },
        {
          topic: "Build first application",
          date: "22.06.2023",
          desc: "Trying to build fullstack app",
          type: "lecture",
          passed: false,
          notes: [],
        },
      ],
    },
    {
      id: 2,
      courseName: "Node.js Fundamentals",
      author: "Ilon Maks",
      duration: 43200,
      progress: 100,
      rate: 5,
      image:
        "https://web-developer.in.ua/assets/articles/node/node-why/node-why.png",
      projectDesc:
        "Master Node JS & Deno.js, build REST APIs with Node.js, GraphQL APIs, add Authentication, use MongoDB, SQL & much more!",
      aims: [
        "Learn Node.js basics",
        "Learn Deno basics",
        "Learn GraphQL",
        "Build MongoDB",
      ],
      materials: [
        {
          topic: "Introduction",
          date: "02.03.2023",
          desc: "Course Roadmap",
          type: "lecture",
          passed: true,
          notes: [],
        },
        {
          topic: "Learn Node.js",
          date: "12.03.2023",
          desc: "Node.js fundamentals",
          type: "practice",
          passed: true,
          notes: [],
        },
        {
          topic: "TypeScript basics",
          date: "12.04.2023",
          desc: "Course Roadmap",
          type: "lecture",
          passed: true,
          notes: [],
        },
        {
          topic: "Adding mock backend",
          date: "15.05.2023",
          desc: "Work with DB",
          type: "practice",
          passed: true,
          notes: [],
        },
        {
          topic: "Build first application",
          date: "22.06.2023",
          desc: "Trying to build fullstack app",
          type: "lecture",
          passed: false,
          notes: [],
        },
      ],
    },
    {
      id: 3,
      courseName: "Why Next.JS?",
      author: "Jeff Withoses",
      duration: 72000,
      progress: 4,
      rate: 0,
      image:
        "https://mobisoftinfotech.com/resources/wp-content/uploads/2022/04/next-JS-framework.png",
      projectDesc:
        "Master Node JS & Deno.js, build REST APIs with Node.js, GraphQL APIs, add Authentication, use MongoDB, SQL & much more!",
      aims: [
        "Learn Node.js basics",
        "Learn Deno basics",
        "Learn GraphQL",
        "Build MongoDB",
      ],
      materials: [
        {
          topic: "Introduction",
          date: "02.03.2023",
          desc: "Course Roadmap",
          type: "lecture",
          passed: true,
          notes: [],
        },
        {
          topic: "Learn Node.js",
          date: "12.03.2023",
          desc: "Node.js fundamentals",
          type: "practice",
          passed: true,
          notes: [],
        },
        {
          topic: "TypeScript basics",
          date: "12.04.2023",
          desc: "Course Roadmap",
          type: "lecture",
          passed: true,
          notes: [],
        },
        {
          topic: "Adding mock backend",
          date: "15.05.2023",
          desc: "Work with DB",
          type: "practice",
          passed: true,
          notes: [],
        },
        {
          topic: "Build first application",
          date: "22.06.2023",
          desc: "Trying to build fullstack app",
          type: "lecture",
          passed: false,
          notes: [],
        },
      ],
    },
    {
      id: 4,
      courseName: "Web 3.0 / web3.js / solidity",
      author: "Steve Works",
      duration: 115200,
      progress: 72,
      rate: 5,
      image:
        "https://vitto.cc/wp-content/uploads/2021/10/Complete-Web3.0-and-Solidity-Development-Roadmap-2022.jpg",
      projectDesc:
        "Master Node JS & Deno.js, build REST APIs with Node.js, GraphQL APIs, add Authentication, use MongoDB, SQL & much more!",
      aims: [
        "Learn Node.js basics",
        "Learn Deno basics",
        "Learn GraphQL",
        "Build MongoDB",
      ],
      materials: [
        {
          topic: "Introduction",
          date: "02.03.2023",
          desc: "Course Roadmap",
          type: "lecture",
          passed: true,
          notes: [],
        },
        {
          topic: "Learn Node.js",
          date: "12.03.2023",
          desc: "Node.js fundamentals",
          type: "practice",
          passed: true,
          notes: [],
        },
        {
          topic: "TypeScript basics",
          date: "12.04.2023",
          desc: "Course Roadmap",
          type: "lecture",
          passed: true,
          notes: [],
        },
        {
          topic: "Adding mock backend",
          date: "15.05.2023",
          desc: "Work with DB",
          type: "practice",
          passed: true,
          notes: [],
        },
        {
          topic: "Build first application",
          date: "22.06.2023",
          desc: "Trying to build fullstack app",
          type: "lecture",
          passed: false,
          notes: [],
        },
      ],
    },
    {
      id: 5,
      courseName: "Ethereum - complete course",
      author: "Vitalii Buterbrodin",
      duration: 36000,
      progress: 100,
      rate: 5,
      image:
        "https://img.currency.com/imgs/articles/834xx/shutterstock_1030451626_5.jpg",
      projectDesc:
        "Master Node JS & Deno.js, build REST APIs with Node.js, GraphQL APIs, add Authentication, use MongoDB, SQL & much more!",
      aims: [
        "Learn Node.js basics",
        "Learn Deno basics",
        "Learn GraphQL",
        "Build MongoDB",
      ],
      materials: [
        {
          topic: "Introduction",
          date: "02.03.2023",
          desc: "Course Roadmap",
          type: "lecture",
          passed: true,
          notes: [],
        },
        {
          topic: "Learn Node.js",
          date: "12.03.2023",
          desc: "Node.js fundamentals",
          type: "practice",
          passed: true,
          notes: [],
        },
        {
          topic: "TypeScript basics",
          date: "12.04.2023",
          desc: "Course Roadmap",
          type: "lecture",
          passed: true,
          notes: [],
        },
        {
          topic: "Adding mock backend",
          date: "15.05.2023",
          desc: "Work with DB",
          type: "practice",
          passed: true,
          notes: [],
        },
        {
          topic: "Build first application",
          date: "22.06.2023",
          desc: "Trying to build fullstack app",
          type: "lecture",
          passed: false,
          notes: [],
        },
      ],
    },
    {
      id: 6,
      courseName: "C1 English",
      author: "Elizabeth Second",
      duration: 180000,
      progress: 7,
      rate: 0,
      image:
        "https://yesk.com.ua/wp-content/uploads/2022/03/istockphoto-1047570732-612x612-1.jpg",
      projectDesc:
        "Master Node JS & Deno.js, build REST APIs with Node.js, GraphQL APIs, add Authentication, use MongoDB, SQL & much more!",
      aims: [
        "Learn Node.js basics",
        "Learn Deno basics",
        "Learn GraphQL",
        "Build MongoDB",
      ],
      materials: [
        {
          topic: "Introduction",
          date: "02.03.2023",
          desc: "Course Roadmap",
          type: "lecture",
          passed: true,
          notes: [],
        },
        {
          topic: "Learn Node.js",
          date: "12.03.2023",
          desc: "Node.js fundamentals",
          type: "practice",
          passed: true,
          notes: [],
        },
        {
          topic: "TypeScript basics",
          date: "12.04.2023",
          desc: "Course Roadmap",
          type: "lecture",
          passed: true,
          notes: [],
        },
        {
          topic: "Adding mock backend",
          date: "15.05.2023",
          desc: "Work with DB",
          type: "practice",
          passed: true,
          notes: [],
        },
        {
          topic: "Build first application",
          date: "22.06.2023",
          desc: "Trying to build fullstack app",
          type: "lecture",
          passed: false,
          notes: [],
        },
      ],
    },
  ],
};

const coursesSlice = createSlice({
  name: "courses-slice",
  initialState,
  reducers: {
    addNote(
      state,
      action: PayloadAction<{ id: number; note: string; topic: string }>
    ) {
      state.courses
        .find((el) => el.id === action.payload.id)
        ?.materials.find((el) => el.topic === action.payload.topic)
        ?.notes.push(action.payload.note);
    },
  },
});

export default coursesSlice.reducer;
export const { addNote } = coursesSlice.actions;
