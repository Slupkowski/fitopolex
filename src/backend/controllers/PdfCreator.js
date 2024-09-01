const fs = require("fs");
const PDFDocument = require("pdfkit-table");

let doc = new PDFDocument({ margin: 30, size: "A4" });
// save document
doc.pipe(
  fs.createWriteStream("../../documents/fitopolex/src/documents/dupa.pdf")
);

(async function () {
  // table
  const table = {
    title: "Title",
    subtitle: "Subtitle",
    headers: ["Country", "Conversion rate", "Trend"],
    rows: [
      ["Switzerland", "12%", "+1.12%"],
      ["France", "67%", "-0.98%"],
      ["England", "33%", "+4.44%"],
    ],
  };
  // A4 595.28 x 841.89 (portrait) (about width sizes)
  // width
  await doc.table(table, {
    width: 300,
  });
  // or columnsSize
  await doc.table(table, {
    columnsSize: [200, 100, 100],
  });
  // done!
  doc.end();
})();
// function createPdf(doc) {}
// module.exports = { createPdf };
