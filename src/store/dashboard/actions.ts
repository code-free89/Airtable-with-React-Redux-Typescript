import { createAsyncThunk } from "@reduxjs/toolkit";
import Airtable from "airtable";
import { Student, ClassInfo } from "./types";

const base = new Airtable({apiKey: process.env.REACT_APP_API_KEY}).base('app8ZbcPx7dkpOnP0');

const getData = createAsyncThunk(
  "getData",
  async (name: string, thinkAPI) => {
    let classes: string[] = [];
    let students: Student[] = [];
    const studentRecords = await base("Students").select().all();
    studentRecords!.forEach((studentRecord) => {
      students.push({
        id: studentRecord.id,
        name: studentRecord.get("Name")?.toString() ?? "",
      });
      if (studentRecord.get("Name")?.toString() === name) {
        classes = studentRecord.get("Classes") as string[];
      }
    });
    const classRecords = await base("Classes").select().all();
    const classInfos: ClassInfo[] = [];
    classRecords.forEach((classRecord) => {
      if (classes.includes(classRecord.id)) {
        const classInfo: ClassInfo = {
          name: classRecord.get("Name")?.toString() ?? "",
          students: "",
        };
        const classStudents: string[] = classRecord.get("Students") as string[];
        let studentNames = "";
        classStudents.forEach((classStudent) => {
          const studentName = students.find((student) => student.id === classStudent)?.name;
          if (studentNames !== "") studentNames += ", ";
          studentNames += studentName;
        });
        classInfo.students = studentNames;
        classInfos.push(classInfo);
      }
    });
    return classInfos;
  }
);

export {
  getData
};