const fs = require("fs");
const { default: PDFDocumentWithTables } = require("pdfkit-table");

const doc = new PDFDocumentWithTables({ margin: 30, size: "A4" });

doc.pipe(
  fs.createWriteStream("../../documents/fitopolex/src/documents/ratunku1.pdf")
);
doc.text("Plan Treningowy");

(async function () {
  const table = {
    title: "Plan A",
    headers: ["Ćwiczenie", "ilość powtórzeń"],
    rows: [
      ["Przysiad", "5x5"],
      ["Wyciskanie", "5x5"],
      ["Wiosłowanie", "5x5"],
    ],
  };
  await doc.table(table, {
    width: 300,
  });
  await doc.table(table, {
    columnsSize: [200, 100, 100],
  });
})();
(async function () {
  const table = {
    title: "Plan B",
    headers: ["Ćwiczenie", "ilość powtórzeń"],
    rows: [
      ["Martwy Ciąg", "5x5"],
      ["Wyciskanie Żołnierskie", "5x5"],
      ["Podciąganie", "5x5"],
    ],
  };
  await doc.table(table, {
    width: 300,
  });
  await doc.table(table, {
    columnsSize: [200, 100, 100],
  });
})();
doc.font(
  "../../documents/fitopolex/src/fonts/RobotoSlab-VariableFont_wght.ttf"
);
doc.text("Test PDF bez tabeli z ąśźżćł.");
doc.end();
