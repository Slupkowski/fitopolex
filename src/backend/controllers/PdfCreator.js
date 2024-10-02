const fs = require("fs");
const { default: PDFDocumentWithTables } = require("pdfkit-table");

// const doc = new PDFDocumentWithTables({ margin: 30, size: "A4" });

// doc.pipe(
//   fs.createWriteStream("../../documents/fitopolex/src/documents/ratunku1.pdf")
// );
// doc.text(`Plan Treningowy`);

// (async function () {
//   const table = {
//     title: "Plan A",
//     headers: ["Ćwiczenie", "ilość powtórzeń"],
//     rows: [
//       ["Przysiad", "5x5"],
//       ["Wyciskanie", "5x5"],
//       ["Wiosłowanie", "5x5"],
//     ],
//   };
//   await doc.table(table, {
//     width: 300,
//   });
//   await doc.table(table, {
//     columnsSize: [200, 100, 100],
//   });
// })();
// (async function () {
//   const table = {
//     title: "Plan B",
//     headers: ["Ćwiczenie", "ilość powtórzeń"],
//     rows: [
//       ["Martwy Ciąg", "5x5"],
//       ["Wyciskanie Żołnierskie", "5x5"],
//       ["Podciąganie", "5x5"],
//     ],
//   };
//   await doc.table(table, {
//     width: 300,
//     columnsSize: [200, 100, 100],
//   });
//   await doc.table(table, {
//     columnsSize: [200, 100, 100],
//   });
// })();
// doc.font(
//   "../../documents/fitopolex/src/fonts/RobotoSlab-VariableFont_wght.ttf"
// );
// doc.text("Test PDF bez tabeli z ąśźżćł.");
// doc.end();

function countBMI(weight, height) {
  return (weight / (height * height)) * 10000;
}

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
        headers: ["Ćwiczenie", "ilość powtórzeń"],
        rows: [
          ["Martwy Ciąg", "5x5"],
          ["Wyciskanie Żołnierskie", "5x5"],
          ["Podciąganie", "5x5"],
        ],
      };
      doc.table(tableA, {
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
            "5x5",
          ],
          ["Wyciskanie Żołnierskie", "5x5"],
          ["Podciąganie", "5x5"],
          data.extraGoalInfo == 2 ? ["cardio", "10minut"] : null,
        ],
      };
      doc.table(tableB, {
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
    } else {
    }
  }

  doc.end();
}
module.exports = { createPdf };
