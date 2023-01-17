import { readFileLines } from "./utils/read-file-lines";
import { parseRow } from "./utils/parse-row";
import { getLecturesByName } from "./tasks/get-lectures-by-name";
import { getLecturesByTime } from "./tasks/get-lectures-by-time";

readFileLines("./data.txt", parseRow).then((rows) => {
  console.log("Лекции Ивана Иванова:", getLecturesByName(rows, "Иван Иванов"));
  console.log(
    "Лекции, которые длятся больше 15 минут:",
    getLecturesByTime(rows, 15)
  );
});
