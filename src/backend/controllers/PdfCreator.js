const fs = require("fs");
const { default: PDFDocumentWithTables } = require("pdfkit-table");

function countBMI(weight, height) {
  return (weight / (height * height)) * 10000;
}
function reps(type, goalInfo, extraGoalInfo) {
  if (
    type == "main" &&
    goalInfo == 0 &&
    (extraGoalInfo == 0 || extraGoalInfo == 1 || extraGoalInfo == 2)
  ) {
    return "5x5";
  } else if (
    type == "side" &&
    goalInfo == 0 &&
    (extraGoalInfo == 0 || extraGoalInfo == 1 || extraGoalInfo == 2)
  ) {
    return "3x8";
  } else if (
    type == "main" &&
    (goalInfo == 1 || goalInfo == 2) &&
    (extraGoalInfo == 0 || extraGoalInfo == 1 || extraGoalInfo == 2)
  ) {
    return "3x8";
  } else if (
    type == "side" &&
    (goalInfo == 1 || goalInfo == 2) &&
    (extraGoalInfo == 0 || extraGoalInfo == 1 || extraGoalInfo == 2)
  ) {
    return "3x12";
  }
  return "";
}
function exercise(legs, chest, back, equipmentInfo, houseEquipment) {
  //Nogi
  if (legs == "A" && equipmentInfo == 0) {
    return "Przysiady";
  } else if ((legs = "B" && equipmentInfo == 0)) {
    return "Martwy ciąg";
  } else if ((legs = "A" && equipmentInfo == 1)) {
  } else if ((legs = "B" && equipmentInfo == 1)) {
  } else if ((legs = "A" && equipmentInfo == 2 && houseEquipment == 0)) {
  } else if ((legs = "A" && equipmentInfo == 2 && houseEquipment == 1)) {
  } else if ((legs = "A" && equipmentInfo == 2 && houseEquipment == 2)) {
  } else if ((legs = "A" && equipmentInfo == 2 && houseEquipment == 3)) {
  } else if ((legs = "B" && equipmentInfo == 2 && houseEquipment == 0)) {
  } else if ((legs = "B" && equipmentInfo == 2 && houseEquipment == 1)) {
  } else if ((legs = "B" && equipmentInfo == 2 && houseEquipment == 2)) {
  } else if ((legs = "B" && equipmentInfo == 2 && houseEquipment == 3)) {
  }
}
// function cardio(extraGoalInfo) {
//   if (extraGoalInfo == 2) {
//     return "bieganie", "20 minut";
//   } else {
//     return "Łydki", reps("side", data.goalInfo, data.extraGoalInfo);
//   }
// }
function createPdf(data) {
  const doc = new PDFDocumentWithTables({ margin: 30, size: "A4" });
  doc.pipe(
    fs.createWriteStream(
      `../../documents/fitopolex/src/documents/PlanTreningowy_${data.firstName}.pdf`
    )
  );
  doc.text("Plan Treningowy");
  doc.font(
    "../../documents/fitopolex/src/fonts/RobotoSlab-VariableFont_wght.ttf"
  );
  doc.text(
    data.goalInfo == 0
      ? "Na chudnięcie"
      : data.goalInfo == 1
      ? "Na budowę mięśni"
      : "Na budowę mięśni i chudnięcie"
  );

  doc.text(data.firstName);
  doc.text("");

  doc.text(data.gender == "female" ? "Kobieta" : "Mężczyzna");
  doc.text(data.age);
  doc.text(`BMI:${countBMI(data.weight, data.height).toFixed(2)}`);
  console.log(countBMI(data.weight, data.height));

  if (data.timeInfo == 0 || data.timeInfo == 2) {
    if (data.extraGoalInfo == 1) {
      //dodaj tabelki biegowe
      const tableA = {
        title: "Tydzień 1-2",
        headers: ["Dzień", "Trening"],
        rows: [
          [
            "Dzień 1",
            "20 minut spaceru z 1-minutowymi odcinkami truchtu co 5 minut",
          ],
          [
            "Dzień 3",
            "25 minut spaceru z 1-minutowymi odcinkami truchtu co 4 minuty",
          ],
          [
            "Dzień 5",
            "25 minut spaceru z 2-minutowymi odcinkami truchtu co 5 minut",
          ],
        ],
      };
      doc.table(tableA, {
        prepareRow: () => {
          doc.font(
            "../../documents/fitopolex/src/fonts/RobotoSlab-VariableFont_wght.ttf"
          );
        },
        width: 300,
        columnsSize: [200, 100, 100],
      });
      const tableB = {
        title: "Tydzień 3-4",
        headers: ["Dzień", "Trening"],
        rows: [
          [
            "Dzień 1",
            "30 minut marszobiegu - 2 minuty truchtu, 3 minuty marszu (powtórzyć 6 razy)",
          ],
          [
            "Dzień 3",
            "30 minut marszobiegu - 3 minuty truchtu, 2 minuty marszu (powtórzyć 6 razy)",
          ],
          [
            "Dzień 5",
            "35 minut marszobiegu - 3 minuty truchtu, 2 minuty marszu (powtórzyć 7 razy)",
          ],
        ],
      };
      doc.table(tableB, {
        width: 300,
        columnsSize: [200, 100, 100],
      });
      const tableC = {
        title: "Tydzień 5-6",
        headers: ["Dzień", "Trening"],
        rows: [
          [
            "Dzień 1",
            "35 minut marszobiegu - 4 minuty truchtu, 2 minuty marszu (powtórzyć 6 razy)",
          ],
          [
            "Dzień 3",
            "40 minut marszobiegu - 5 minut truchtu, 2 minuty marszu (powtórzyć 6 razy)",
          ],
          [
            "Dzień 5",
            "40 minut marszobiegu - 6 minut truchtu, 1 minuta marszu (powtórzyć 5 razy)",
          ],
        ],
      };
      doc.table(tableC, {
        width: 300,
        columnsSize: [200, 100, 100],
      });
    } else {
      const tableA = {
        title: "Plan A",
        headers: ["Ćwiczenie", "Ilość powtórzeń"],
        rows: [
          ["Martwy Ciąg", reps("main", data.goalInfo, data.extraGoalInfo)],
          [
            "Wyciskanie Żołnierskie",
            reps("main", data.goalInfo, data.extraGoalInfo),
          ],
          ["Podciąganie", reps("main", data.goalInfo, data.extraGoalInfo)],
          ["Wznosy bokiem", reps("side", data.goalInfo, data.extraGoalInfo)],
          ["Biceps", reps("side", data.goalInfo, data.extraGoalInfo)],
          ["Triceps", reps("side", data.goalInfo, data.extraGoalInfo)],
          ["Deska", "3 razy do upadku mięśniowego"],
          [
            data.extraGoalInfo == 2 ? "Bieganie" : "Łydki",
            data.extraGoalInfo == 2
              ? "20 minut"
              : reps("side", data.goalInfo, data.extraGoalInfo),
          ],
        ],
      };
      doc.table(tableA, {
        prepareHeader: () => {
          doc.font(
            "../../documents/fitopolex/src/fonts/RobotoSlab-VariableFont_wght.ttf"
          );
        },
        prepareRow: () => {
          doc.font(
            "../../documents/fitopolex/src/fonts/RobotoSlab-VariableFont_wght.ttf"
          );
        },
        width: 300,
        columnsSize: [200, 100, 100],
      });

      const tableB = {
        title: "Plan B",
        headers: ["Ćwiczenie", "ilość powtórzeń"],
        rows: [
          [
            `Przysiad ${
              data.equipmentInfo == 0
                ? "ze sztanga"
                : data.houseEquipment[2]
                ? "z gumami"
                : ""
            }`,
            reps("main", data.goalInfo, data.extraGoalInfo),
          ],
          [
            "Wyciskanie Żołnierskie",
            reps("main", data.goalInfo, data.extraGoalInfo),
          ],
          ["Wiosłowanie", reps("main", data.goalInfo, data.extraGoalInfo)],
          ["Wznosy bokiem", reps("side", data.goalInfo, data.extraGoalInfo)],
          ["Podciąganie", reps("side", data.goalInfo, data.extraGoalInfo)],
          ["Biceps", reps("side", data.goalInfo, data.extraGoalInfo)],
          ["Triceps", reps("side", data.goalInfo, data.extraGoalInfo)],
          ["Allahy", reps("side", data.goalInfo, data.extraGoalInfo)],
          [
            data.extraGoalInfo == 2 ? "Bieganie" : "Łydki",
            data.extraGoalInfo == 2
              ? "20 minut"
              : reps("side", data.goalInfo, data.extraGoalInfo),
          ],
        ],
      };
      doc.table(tableB, {
        prepareHeader: () => {
          doc.font(
            "../../documents/fitopolex/src/fonts/RobotoSlab-VariableFont_wght.ttf"
          );
        },
        prepareRow: () => {
          doc.font(
            "../../documents/fitopolex/src/fonts/RobotoSlab-VariableFont_wght.ttf"
          );
        },
        width: 300,
        columnsSize: [200, 100, 100],
      });
    }
  }
  //timeInfo==1 codziennie
  else {
    console.log(data.timeInfo, "/??", typeof data.timeInfo, data);
    if (data.extraGoalInfo == 1) {
      //dodaj tabelki biegowe
      const tableA = {
        title: "Tydzień 1-2",
        headers: ["Dzień", "Trening"],
        rows: [
          [
            "Dzień 1",
            "20 minut spaceru z 1-minutowymi odcinkami truchtu co 5 minut",
          ],
          ["Dzień 2", "30 minut spaceru w umiarkowanym tempie"],
          [
            "Dzień 3",
            "25 minut marszobiegu - 2 minuty truchtu, 3 minuty marszu (powtórzyć 5 razy)",
          ],
          ["Dzień 4", "30 minut spokojnego spaceru"],
          [
            "Dzień 5",
            "25 minut marszobiegu - 3 minuty truchtu, 2 minuty marszu (powtórzyć 5 razy)",
          ],
          ["Dzień 6", "30 minut spokojnego spaceru"],
          [
            "Dzień 7",
            "25 minut swobodnego truchtu z przerwami na marsz, kiedy czujesz zmęczenie",
          ],
        ],
      };
      doc.table(tableA, {
        prepareHeader: () => {
          doc.font(
            "../../documents/fitopolex/src/fonts/RobotoSlab-VariableFont_wght.ttf"
          );
        },
        prepareRow: () => {
          doc.font(
            "../../documents/fitopolex/src/fonts/RobotoSlab-VariableFont_wght.ttf"
          );
        },
        width: 300,
        columnsSize: [200, 100, 100],
      });
      doc.addPage();
      const tableB = {
        title: "Tydzień 3-4",
        headers: ["Dzień", "Trening"],
        rows: [
          [
            "Dzień 1",
            "30 minut marszobiegu - 3 minuty truchtu, 2 minuty marszu (powtórzyć 6 razy)",
          ],
          ["Dzień 2", "35 minut spaceru w umiarkowanym tempie"],
          [
            "Dzień 3",
            "35 minut marszobiegu - 4 minuty truchtu, 2 minuty marszu (powtórzyć 6 razy)",
          ],
          ["Dzień 4", "30 minut spokojnego spaceru"],
          [
            "Dzień 5",
            "40 minut marszobiegu - 5 minut truchtu, 2 minuty marszu (powtórzyć 6 razy)",
          ],
          ["Dzień 6", "30 minut spokojnego spaceru"],
          ["Dzień 7", "35 minut swobodnego biegu/truchtu w wolnym tempie"],
        ],
      };
      doc.table(tableB, {
        prepareHeader: () => {
          doc.font(
            "../../documents/fitopolex/src/fonts/RobotoSlab-VariableFont_wght.ttf"
          );
        },
        prepareRow: () => {
          doc.font(
            "../../documents/fitopolex/src/fonts/RobotoSlab-VariableFont_wght.ttf"
          );
        },
        width: 300,
        columnsSize: [200, 100, 100],
      });
      const tableC = {
        title: "Tydzień 5-6",
        headers: ["Dzień", "Trening"],
        rows: [
          [
            "Dzień 1",
            "40 minut marszobiegu - 5 minut truchtu, 2 minuty marszu (powtórzyć 7 razy)",
          ],
          ["Dzień 2", "35 minut spaceru w umiarkowanym tempie"],
          [
            "Dzień 3",
            "45 minut marszobiegu - 6 minut truchtu, 1 minuta marszu (powtórzyć 6 razy)",
          ],
          ["Dzień 4", "30 minut spokojnego spaceru"],
          [
            "Dzień 5",
            "45 minut biegu - 7 minut biegu, 1 minuta marszu (powtórzyć 5 razy)",
          ],
          ["Dzień 6", "35 minut spaceru w umiarkowanym tempie"],
          ["Dzień 7", "40 minut ciągłego biegu w wolnym tempie"],
        ],
      };
      doc.table(tableC, {
        prepareHeader: () => {
          doc.font(
            "../../documents/fitopolex/src/fonts/RobotoSlab-VariableFont_wght.ttf"
          );
        },
        prepareRow: () => {
          doc.font(
            "../../documents/fitopolex/src/fonts/RobotoSlab-VariableFont_wght.ttf"
          );
        },
        width: 300,
        columnsSize: [200, 100, 100],
      });
    } else {
    }
  }

  doc.end();
}
module.exports = { createPdf };
