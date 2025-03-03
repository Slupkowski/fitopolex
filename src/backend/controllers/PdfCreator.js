const fs = require("fs");
const { default: PDFDocumentWithTables } = require("pdfkit-table");

function countBMI(weight, height) {
  return (weight / (height * height)) * 10000;
}
function reps(type, goalInfo, extraGoalInfo) {
  if (type == "abs") {
    return "3 serie do upadku mięśniowego";
  } else if (type == "calves" && (extraGoalInfo == 1 || extraGoalInfo == 2)) {
    return "20 minut";
  } else if (type == "calves" && extraGoalInfo == 0) {
    return "3x12";
  } else if (
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

function exercise(type, equipmentInfo, houseEquipment, extraGoalInfo) {
  //Nogi
  if (type == "legsA") {
    if (equipmentInfo == 0) {
      return "Przysiad ze sztangą klasyczny";
    } else if (equipmentInfo == 1) {
      return "Przysiad z wyskokiem";
    } else if (equipmentInfo == 2) {
      if (houseEquipment[1] == true) {
        return "Przysiad z hantlami";
      } else if (houseEquipment[2] == true) {
        return "Przysiad z gumą";
      } else {
        return "Przysiad z wyskokiem";
      }
    }
  } else if (type == "legsB") {
    if (equipmentInfo == 0) {
      return "Martwy ciąg klasyczny";
    } else if (equipmentInfo == 1) {
      return "Wykroki";
    } else if (equipmentInfo == 2) {
      if (houseEquipment[1] == true) {
        return "Wykroki z hantlami";
      } else {
        return "Wykroki";
      }
    }
  }

  //   //Klata
  if (type == "chestA") {
    if (equipmentInfo == 0) {
      return "Wyciskanie na ławce prostej";
    } else if (equipmentInfo == 1) {
      return "Pompki na poręczach";
    } else if (equipmentInfo == 2) {
      if (houseEquipment[1] == true) {
        return "Wyciskanie hantli na podłodze";
      } else if (houseEquipment[2] == true) {
        return "Pompki klasyczne z gumą";
      } else {
        return "Pompki klasyczne";
      }
    }
  } else if (type == "chestB") {
    if (equipmentInfo == 0) {
      return "Wyciskanie na ławce skośnej";
    } else if (equipmentInfo == 1) {
      return "Pompki na drążku";
    } else if (equipmentInfo == 2) {
      if (houseEquipment[1] == true) {
        return "Rozpiętki hantlami na podłodze";
      } else if (houseEquipment[2] == true) {
        return "Pompki diamentowe z gumą";
      } else {
        return "Pompki diamentowe";
      }
    }
  }

  //Plecy
  if (type == "backA") {
    if (equipmentInfo == 2) {
      if (houseEquipment[0] == true) {
        return "Podciąganie na drążku nachwytem";
      } else if (houseEquipment[1] == true) {
        return "Wiosłowanie hantlem";
      } else if (houseEquipment[2] == true) {
        return "Wiosłowanie gumą w opadzie tułowia";
      } else {
        return "Podciąganie australijskie nachwytem z użyciem stołu";
      }
    } else {
      return "Podciąganie na drążku nachwytem";
    }
  }
  if (type == "backB") {
    if (equipmentInfo == 0) {
      return "Wiosłowanie sztangą";
    } else if (equipmentInfo == 1) {
      return "Podciąganie na drążku podchwytem";
    } else if (equipmentInfo == 2) {
      if (houseEquipment[0] == true) {
        return "Podciąganie na drążku nachwytem";
      } else if (houseEquipment[1] == true) {
        return "Wiosłowanie hantlem";
      } else if (houseEquipment[2] == true) {
        return "Wiosłowanie gumą w opadzie tułowia";
      } else {
        return "Podciąganie australijskie podchwytem z użyciem stołu";
      }
    }
  }

  //Barki
  if (type == "delts") {
    if (equipmentInfo == 0) {
      return "Wyciskanie żołnierskie sztangą";
    } else if (equipmentInfo == 1) {
      return "Pompki pike";
    } else if (equipmentInfo == 2) {
      if (houseEquipment[1] == true) {
        return "Wznosy bokiem";
      } else if (houseEquipment[2] == true) {
        return "Wyciskanie żołnierskie gumą oporową";
      } else {
        return "Pompki pike";
      }
    }
  }
  //triceps
  if (type == "triceps") {
    if (equipmentInfo == 0) {
      return "Wyciskanie francuskie";
    } else if (equipmentInfo == 1) {
      return "Pompki w podporze tyłem";
    } else if (equipmentInfo == 2) {
      if (houseEquipment[1] == true) {
        return "Wyciskanie francuskie hantlami w leżeniu na podłodze";
      } else if (houseEquipment[2] == true) {
        return "Prostowanie ramion z gumą oporową";
      } else {
        return "Pompki w podporze tyłem";
      }
    }
  }
  //biceps
  if (type == "biceps") {
    if (equipmentInfo == 0) {
      return "Zginanie przedramion ze sztangą stojąc";
    } else if (equipmentInfo == 1) {
      return "Uginanie ramion z masą własnego ciała na poręczy";
    } else if (equipmentInfo == 2) {
      if (houseEquipment[1] == true) {
        return "Zginanie przedramion hantlami stojąc";
      } else if (houseEquipment[2] == true) {
        return "Zginanie przedramion z gumą stojąc";
      } else {
        return "Uginanie ramion z masą własnego ciała przy pomocy stołu";
      }
    }
  }
  //brzuch
  if (type == "abs") {
    if (equipmentInfo == 0) {
      return "Wznosy kolan wisząc na drążku";
    } else if (equipmentInfo == 1) {
      return "Wznosy kolan wisząc na drążku";
    } else if (equipmentInfo == 2) {
      if (houseEquipment[0] == true) {
        return "Wznosy kolan wisząc na drążku";
      } else {
        return "deska";
      }
    }
  }
  //łydki
  if (type == "calves")
    if (extraGoalInfo == 1 || extraGoalInfo == 2) {
      return "Bieganie";
    } else {
      return "Wspięcia na palcach";
    }
}
function createPdf(data) {
  const doc = new PDFDocumentWithTables({ margin: 30, size: "A4" });
  doc.pipe(
    fs.createWriteStream(`../../documents/fitopolex/src/documents/document.pdf`)
  );
  doc.text("Plan Treningowy");
  doc.font(
    "../../documents/fitopolex/src/fonts/RobotoSlab-VariableFont_wght.ttf"
  );
  doc.text(
    data.goalInfo == 0
      ? "Plan na chudnięcie"
      : data.goalInfo == 1
      ? "Plan na budowę mięśni"
      : "Plan na budowę mięśni i chudnięcie"
  );

  doc.text(data.firstName);
  doc.text("");
  doc.text(data.gender == "female" ? "Kobieta" : "Mężczyzna");
  doc.text(`Wiek: ${data.age}`);
  doc.text(`BMI: ${countBMI(data.weight, data.height).toFixed(2)}`);
  console.log(countBMI(data.weight, data.height));

  if (data.timeInfo == 0 || data.timeInfo == 2) {
    if (data.extraGoalInfo == 1 && data.goalInfo == 0) {
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
      const tableWidth = 400;
      const pageWidth = doc.page.width;
      const xPosition = (pageWidth - tableWidth) / 2;
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
        width: tableWidth,
        columnsSize: [200, 200],
        x: xPosition,
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
        width: 400,
        columnsSize: [200, 200],
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
        width: 400,
        columnsSize: [200, 200],
      });
    } else {
      const tableA = {
        title: "Plan A",
        headers: ["Ćwiczenie", "Ilość powtórzeń"],
        rows: [
          [
            exercise("legsA", data.equipmentInfo, data.houseEquipment),
            reps("main", data.goalInfo, data.extraGoalInfo),
          ],
          [
            exercise("chestA", data.equipmentInfo, data.houseEquipment),
            reps("main", data.goalInfo, data.extraGoalInfo),
          ],
          [
            exercise("backA", data.equipmentInfo, data.houseEquipment),
            reps("main", data.goalInfo, data.extraGoalInfo),
          ],
          [
            exercise("delts", data.equipmentInfo, data.houseEquipment),
            reps("side", data.goalInfo, data.extraGoalInfo),
          ],
          [
            exercise("biceps", data.equipmentInfo, data.houseEquipment),
            reps("side", data.goalInfo, data.extraGoalInfo),
          ],
          [
            exercise("triceps", data.equipmentInfo, data.houseEquipment),
            reps("side", data.goalInfo, data.extraGoalInfo),
          ],
          [
            exercise("abs", data.equipmentInfo, data.houseEquipment),
            reps("abs", data.goalInfo, data.extraGoalInfo),
          ],
          [
            exercise(
              "calves",
              data.equipmentInfo,
              data.houseEquipment,
              data.extraGoalInfo
            ),
            reps("calves", data.goalInfo, data.extraGoalInfo),
          ],
        ],
      };
      const tableWidth = 400;
      const pageWidth = doc.page.width;
      const xPosition = (pageWidth - tableWidth) / 2;
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
        width: tableWidth,
        columnsSize: [200, 200],
        x: xPosition,
      });

      const tableB = {
        title: "Plan B",
        headers: ["Ćwiczenie", "ilość powtórzeń"],
        rows: [
          [
            exercise("legsB", data.equipmentInfo, data.houseEquipment),
            reps("main", data.goalInfo, data.extraGoalInfo),
          ],
          [
            exercise("chestB", data.equipmentInfo, data.houseEquipment),
            reps("main", data.goalInfo, data.extraGoalInfo),
          ],
          [
            exercise("backB", data.equipmentInfo, data.houseEquipment),
            reps("main", data.goalInfo, data.extraGoalInfo),
          ],
          [
            exercise("delts", data.equipmentInfo, data.houseEquipment),
            reps("side", data.goalInfo, data.extraGoalInfo),
          ],
          [
            exercise("biceps", data.equipmentInfo, data.houseEquipment),
            reps("side", data.goalInfo, data.extraGoalInfo),
          ],
          [
            exercise("triceps", data.equipmentInfo, data.houseEquipment),
            reps("side", data.goalInfo, data.extraGoalInfo),
          ],
          [
            exercise("abs", data.equipmentInfo, data.houseEquipment),
            reps("abs", data.goalInfo, data.extraGoalInfo),
          ],
          [
            exercise(
              "calves",
              data.equipmentInfo,
              data.houseEquipment,
              data.extraGoalInfo
            ),
            reps("calves", data.goalInfo, data.extraGoalInfo),
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
        width: 400,
        columnsSize: [200, 200],
      });
    }
  } else {
    console.log(data.timeInfo, "/??", typeof data.timeInfo, data);
    if (data.extraGoalInfo == 1) {
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
      const tableWidth = 400;
      const pageWidth = doc.page.width;
      const xPosition = (pageWidth - tableWidth) / 2;
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
        width: tableWidth,
        columnsSize: [200, 200],
        x: xPosition,
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
        width: 400,
        columnsSize: [200, 200],
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
        width: 400,
        columnsSize: [200, 200],
      });
    } else {
      const tableA = {
        title: "Plan A",
        headers: ["Ćwiczenie", "Ilość powtórzeń"],
        rows: [
          [
            exercise("legsA", data.equipmentInfo, data.houseEquipment),
            reps("main", data.goalInfo, data.extraGoalInfo),
          ],
          [
            exercise("legsB", data.equipmentInfo, data.houseEquipment),
            reps("side", data.goalInfo, data.extraGoalInfo),
          ],
          [
            exercise("calves", data.equipmentInfo, data.houseEquipment),
            reps(
              "calves",
              data.goalInfo,
              data.extraGoalInfo,
              data.extraGoalInfo
            ),
          ],
        ],
      };
      const tableWidth = 400;
      const pageWidth = doc.page.width;
      const xPosition = (pageWidth - tableWidth) / 2;
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
        width: tableWidth,
        columnsSize: [200, 200],
        x: xPosition,
      });

      const tableB = {
        title: "Plan B",
        headers: ["Ćwiczenie", "Ilość powtórzeń"],
        rows: [
          [
            exercise("chestA", data.equipmentInfo, data.houseEquipment),
            reps("main", data.goalInfo, data.extraGoalInfo),
          ],
          [
            exercise("chestB", data.equipmentInfo, data.houseEquipment),
            reps("side", data.goalInfo, data.extraGoalInfo),
          ],
          [
            exercise("delts", data.equipmentInfo, data.houseEquipment),
            reps("side", data.goalInfo, data.extraGoalInfo),
          ],
          [
            exercise("triceps", data.equipmentInfo, data.houseEquipment),
            reps("side", data.goalInfo, data.extraGoalInfo),
          ],
          [
            exercise("abs", data.equipmentInfo, data.houseEquipment),
            reps("abs", data.goalInfo, data.extraGoalInfo),
          ],
          [
            exercise("calves", data.equipmentInfo, data.houseEquipment),
            reps(
              "calves",
              data.goalInfo,
              data.extraGoalInfo,
              data.extraGoalInfo
            ),
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
        width: 400,
        columnsSize: [200, 200],
      });
      const tableC = {
        title: "Plan C",
        headers: ["Ćwiczenie", "Ilość powtórzeń"],
        rows: [
          [
            exercise("backA", data.equipmentInfo, data.houseEquipment),
            reps("main", data.goalInfo, data.extraGoalInfo),
          ],
          [
            exercise("backB", data.equipmentInfo, data.houseEquipment),
            reps("side", data.goalInfo, data.extraGoalInfo),
          ],
          [
            exercise("biceps", data.equipmentInfo, data.houseEquipment),
            reps("side", data.goalInfo, data.extraGoalInfo),
          ],
          [
            exercise("abs", data.equipmentInfo, data.houseEquipment),
            reps("abs", data.goalInfo, data.extraGoalInfo),
          ],
          [
            exercise("calves", data.equipmentInfo, data.houseEquipment),
            reps(
              "calves",
              data.goalInfo,
              data.extraGoalInfo,
              data.extraGoalInfo
            ),
          ],
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
        width: 400,
        columnsSize: [200, 200],
      });
    }
  }
  doc.text(`Progresja`);
  doc.text(
    `Żeby budować mięśnie i kondycję trzeba progresować, żeby to robic, najlepiej co trening dodawać ciężaru, bądź zwiększać liczbę powtórzeń w seriach. Jeśli chodzi o trening biegowy, trzeba biec dłuzej. `
  );
  doc.text(`Zmiana wagi`);
  doc.text(
    `Aby schudnąć, musisz jeść mniej kalorii, niż spalasz w ciągu dnia. Najpierw oblicz swoje zapotrzebowanie kaloryczne, a potem wprowadź deficyt, czyli zmniejsz ilość spożywanych kalorii o około 300–500 dziennie. W takiej sytuacji organizm zacznie czerpać energię z zapasów tłuszczu, co pozwoli na utratę wagi. Jeśli chcesz przytyć, zrób odwrotnie – jedz więcej kalorii, niż spalasz. Oblicz swoje zapotrzebowanie kaloryczne i dodaj do niego 300–500 kalorii dziennie. Dzięki temu organizm będzie miał nadwyżkę energii, którą wykorzysta na budowę masy mięśniowej (jeśli trenujesz) lub zgromadzi ją jako zapasy, co prowadzi do zwiększenia wagi. Kluczem jest regularne liczenie kalorii. Swoje zapotrzebowanie kaloryczne można wstępnie obliczyć jednym z wielu kalkulatorów online, a potem od tej wartości odjąć lub dodać kalorie zależnie od naszego celu.`
  );
  doc.end();
}
module.exports = { createPdf };
