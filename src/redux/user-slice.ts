import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  name: string;
  achievements: {
    endedCourses: number;
    timeSpended: number;
    yearsOnPlatform: number;
    codeWarsRating: number;
    medals: { image: string; desc: string }[];
  };
  courses: {
    id: number;
    courseName: string;
    author: string;
    duration: number;
    progress: number;
    rate: number;
    image: string;
  }[];
}

const initialState: IState = {
  name: "Yaroslav Kravchenko",
  achievements: {
    endedCourses: 2,
    timeSpended: 432000,
    yearsOnPlatform: 19008000,
    codeWarsRating: 4.4,
    medals: [
      {
        image:
          "https://i.pinimg.com/originals/21/eb/7f/21eb7f3fe42fbd6057a170a2b7efb4c6.png",
        desc: "Finish a course less than one week",
      },
      {
        image:
          "https://www.supercoloring.com/sites/default/files/styles/drawing_full/public/fif/2017/05/gold-medal-paper-craft.png",
        desc: "Buy your first course",
      },
      {
        image:
          "https://www.maxmedals.com/hubfs/Maxwell-2020/Images/Product_Catalog/Custom_Medals/Die_Cast/DieCastMedals-hoovers-ata-martial-arts.png",
        desc: "Finish 100 code tasks",
      },
    ],
  },
  courses: [
    {
      id: 1,
      courseName: "React.JS + TypeScript advanced",
      author: "Bill Brama",
      duration: 72000,
      progress: 22,
      rate: 4,
      image: "https://www.aryandeora.com/img/react_ts_logo.svg",
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
    },
  ],
};

const userSlice = createSlice({
  name: "user-slice",
  initialState,
  reducers: {
    changeCourseRate(
      state,
      action: PayloadAction<{ id: number; rate: number }>
    ) {
      state.courses.forEach((el) =>
        el.id === action.payload.id ? (el.rate = action.payload.rate) : el.rate
      );
    },
  },
});

export default userSlice.reducer;
export const { changeCourseRate } = userSlice.actions;
