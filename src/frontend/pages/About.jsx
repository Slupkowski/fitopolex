import { Header } from "../components/Header";
import { createPalette } from "../theme/palette";
import {
  Box,
  Typography,
  Button,
  Autocomplete,
  TextField,
} from "@mui/material";
import { useRef } from "react";

const exercises = [
  {
    title: "Przysiad ze sztangą klasyczny",
    description: `
      <p style="color:black;font-size:20px">Pozycja wyjściowa</p>
      <ul style="list-style-type:square">
        <li>Pozycja stojąca ze sztangą na plecach.</li>
        <li>Stopy mniej więcej na szerokości barków (palce stóp na zewnątrz).</li>
        <li>Dłonie na sztandze w szerokim rozstawie.</li>
        <li>Klatka piersiowa wypchnięta do przodu, brzuch i pośladki mocno napięte.</li>
      </ul>
      <p style="color:black;font-size:20px">Ruch</p>
      <ul style="list-style-type:square">
        <li>Utrzymując prawidłową pozycję wyjściową i naturalną krzywiznę kręgosłupa, wykonaj płynny i powolny przysiad do pozycji mniej więcej kąta prostego, wraz z powolnym wdechem powietrza.</li>
        <li>Wykonując wydech, wstań do pozycji wyjściowej. Nie wykonuj przeprostu w stawach kolanowych.</li>
        <li>Wykonaj wyznaczoną liczbę powtórzeń.</li>
      </ul>
    `,
    gif: require("../gifs/high-bar.gif"),
  },
  {
    title: "Przysiad z wyskokiem",
    description: `
      <p style="color:black;font-size:20px">Pozycja wyjściowa</p>
      <ul style="list-style-type:square">
        <li>Pozycja stojąca, plecy wyprostowane, ramiona skierowane w dół.</li>
        <li>Mięśnie brzucha oraz pośladki napięte, łopatki ściągnięte.</li>
        <li>Stopy mniej więcej na szerokości barków (palce stóp lekko na zewnątrz).</li>
      </ul>
      <p style="color:black;font-size:20px">Ruch</p>
      <ul style="list-style-type:square">
        <li>Utrzymując prawidłową pozycję wyjściową, weź wdech, wykonaj płynny i powolny przysiad (utrzymując naturalną krzywiznę kręgosłupa) do pozycji poniżej kąta prostego, ramiona wysuń przed siebie.</li>
        <li>Z wydechem wykonaj dynamiczny wyprost kolan wraz z wyskokiem w górę i dynamiczną pracą ramion. Opadając, amortyzuj skok, uginając kolana oraz schodząc równocześnie do pozycji przysiadu.</li>
        <li>Wykonaj wyznaczoną liczbę powtórzeń.</li>
      </ul>
    `,
    gif: require("../gifs/squat-jumps.gif"),
  },
  {
    title: "Przysiad z hantlami",
    description: `
      <p style="color:black;font-size:20px">Pozycja wyjściowa</p>
      <ul style="list-style-type:square">
        <li>Pozycja stojąca, plecy proste.</li>
        <li>Hantelki trzymane chwytem młotkowym.</li>
        <li>Klatka piersiowa wypchnięta do przodu, łopatki ściągnięte, brzuch i pośladki napięte.</li>
        <li>Stopy mniej więcej na szerokości barków (palce stóp na zewnątrz).</li>
      </ul>
      <p style="color:black;font-size:20px">Ruch</p>
      <ul style="list-style-type:square">
        <li>Utrzymując prawidłową pozycję wyjściową oraz naturalną krzywiznę kręgosłupa, wykonaj płynny i powolny przysiad wraz z powolnym wdechem powietrza.</li>
        <li>Wykonując wydech, wstań do pozycji wyjściowej. Nie wykonuj przeprostu w stawach kolanowych.</li>
        <li>Wykonaj wyznaczoną liczbę powtórzeń.</li>
      </ul>
    `,
    gif: require("../gifs/weighted-squat.gif"),
  },
  {
    title: "Przysiad z gumą",
    description: `
      <p style="color:black;font-size:20px">Pozycja wyjściowa</p>
      <ul style="list-style-type:square">
        <li>Pozycja stojąca, plecy proste.</li>
        <li>Guma oporowa trzymana oburącz przed klatką piersiową.</li>
        <li>Stopy mniej więcej na szerokości barków (palce stóp na zewnątrz).</li>
        <li>Klatka piersiowa wypchnięta, łopatki ściągnięte, brzuch i pośladki napięte.</li>
      </ul>
      <p style="color:black;font-size:20px">Ruch</p>
      <ul style="list-style-type:square">
        <li>Utrzymując prawidłową pozycję wyjściową i naturalną krzywiznę kręgosłupa, weź wdech i wykonaj płynny i powolny przysiad do pozycji w której biodra są poniżej linii kolan.</li>
        <li>Wykonując wydech, wstań do pozycji wyjściowej. Nie rób przeprostu w stawach kolanowych.</li>
        <li>Wykonaj wyznaczoną liczbę powtórzeń.</li>
      </ul>
    `,
    gif: require("../gifs/band-squat.gif"),
  },
  {
    title: "Martwy ciąg klasyczny",
    description: `
      <p style="color:black;font-size:20px">Pozycja wyjściowa</p>
      <ul style="list-style-type:square">
        <li>Półprzysiad przed sztangą, ciało mocno pochylone.</li>
        <li>Sztanga nad stopami, blisko piszczeli.</li>
        <li>Ramiona wyprostowane, ustawione na szerokość barków</li>
        <li>Plecy wyprostowane, głowa powinna stanowić przedłużenie kręgosłupa.</li>
      </ul>
      <p style="color:black;font-size:20px">Ruch</p>
      <ul style="list-style-type:square">
        <li>Utrzymując prawidłową pozycję wyjściową, wykonaj mocny wdech powietrza do brzucha. Wybierz luz na sztandze, a następnie zacznij unosić sztangę z ziemi, wykonując wyprost w stawach biodrowych oraz kolanowych.</li>
        <li>Sztangę prowadź blisko nóg, nie pozwól, aby podczas ruchu plecy wygięły się w łuk.</li>
        <li>Kończąc ruch, utrzymuj mocne napięcie mięśni brzucha oraz pośladków i wykonaj wydech.</li>
        <li>Utrzymaj pozycję przez sekundę, następnie nabierając kolejny wdech, w kontrolowany sposób odstaw sztangę na podłogę. Utrzymuj plecy proste, a mięśnie brzucha mocno napięte.</li>
        <li>Wykonaj wyznaczoną liczbę powtórzeń, za każdym razem odkładaj sztangę na podłogę.</li>
      </ul>
    `,
    gif: require("../gifs/deadlift.gif"),
  },
  {
    title: "Wykroki",
    description: `
      <p style="color:black;font-size:20px">Pozycja wyjściowa</p>
      <ul style="list-style-type:square">
        <li>Pozycja stojąca, plecy proste.</li>
        <li>Klatka piersiowa wypchnięta do przodu, łopatki ściągnięte, brzuch napięty.</li>
        <li>Ramiona swobodnie lub przed klatką piersiową.</li>
      </ul>
      <p style="color:black;font-size:20px">Ruch</p>
      <ul style="list-style-type:square">
        <li>Utrzymując prawidłową pozycję wyjściową i naturalną krzywiznę kręgosłupa, wykonaj wykrok jedną nogą do przodu tak, aby staw kolanowy nogi wykrocznej był zgięty pod kątem ok. 90 stopni. Pamiętaj o wdechu. Noga zakroczna pozostaje z tyłu, przechodząc na palce podczas wykonywania wykroku.</li>
        <li>Wykonując wydech, wstań dynamicznie, przenosząc nogę zakroczną do przodu do pozycji nogi wykrocznej.</li>
        <li>Wykonaj wyznaczoną liczbę powtórzeń na każdą nogę.</li>
      </ul>
    `,
    gif: require("../gifs/lunges.gif"),
  },
  {
    title: "Wykroki z hantlami",
    description: `
      <p style="color:black;font-size:20px">Pozycja wyjściowa</p>
      <ul style="list-style-type:square">
        <li>Pozycja stojąca.</li>
        <li>Hantelki trzymane chwytem młotkowym.</li>
        <li>Klatka piersiowa wypchnięta do przodu, łopatki ściągnięte, brzuch i pośladki napięte.</li>
      </ul>
      <p style="color:black;font-size:20px">Ruch</p>
      <ul style="list-style-type:square">
        <li>Z pozycji wyjściowej wykonaj daleki krok w przód.</li>
        <li>Utrzymując wyprostowaną sylwetkę, ugnij nogi tak, aby kolano z tyłu zatrzymało się tuż nad podłogą, a z przodu nie wystawało za linię palców.</li>
        <li>Piętę nogi z przodu cały czas mocno dociskaj do podłogi.</li>
        <li>Następnie wykonaj mocny wyprost nogi wykrocznej oraz przeniesienie nogi zakrocznej w przód do kolejnego wykroku.</li>
        <li>Staraj się nie odkładać nogi zakrocznej do pozycji wyjściowej, lecz kontynuować ruch.</li>
      </ul>
    `,
    gif: require("../gifs/weighted-lounges.gif"),
  },
  {
    title: "Wyciskanie na ławce prostej",
    description: `
      <p style="color:black;font-size:20px">Pozycja wyjściowa</p>
      <ul style="list-style-type:square">
        <li>Połóż się na ławce płaskiej.</li>
        <li>Stopy ustaw w lekkim rozkroku i mocno zaprzyj o podłoże.</li>
        <li>Chwyć sztangę nachwytem (palce wskazują przód, kciuki skierowane do środka) na taką szerokość, aby w połowie wykonywania ruchu kąt między ramieniem a przedramieniem wynosił 90 stopni.</li>
        <li>Łopatki ściągnięte, barki opuszczone i mocno dociśnięte do ławeczki.</li>
        <li>Zachowaj naturalne ustawienie kręgosłupa odcinek lędźwiowy lekko uniesiony, pośladki na ławeczce.</li>
      </ul>
      <p style="color:black;font-size:20px">Ruch</p>
      <ul style="list-style-type:square">
        <li>Utrzymując prawidłową pozycję wyjściową, wykonaj wdech i powolnym ruchem opuść sztangę do środkowej części klatki piersiowej, uginając ramiona w łokciach.</li>
        <li>Po przytrzymaniu sztangi w okolicach klatki przez ułamek sekundy zacznij unosić sztangę z powrotem do pozycji wyjściowej, wykonując wydech powietrza. Skup się, aby wyciskanie następowało z mięśnia piersiowego.</li>
        <li>W momencie wyprostowania ramion ze sztangą (unikaj przeprostu w łokciach) mocno dopnij mięsień piersiowy, po czym ponownie zacznij opuszczać sztangę.</li>
        <li>Wykonaj wyznaczoną liczbę powtórzeń.</li>
        </ul>
    `,
    gif: "Placeholder gif",
  },
  {
    title: "Pompki na poręczach",
    description: `
      <p style="color:black;font-size:20px">Pozycja wyjściowa</p>
      <ul style="list-style-type:square">
        <li>Chwytając za poręcze, unieś ciało w górę poprzez mocne wyprostowanie ramion.</li>
        <li>Tułów utrzymuj prostopadle do podłoża.</li>
      </ul>
      <p style="color:black;font-size:20px">Ruch</p>
      <ul style="list-style-type:square">
        <li>Pochyl tułów do momentu, w którym poczujesz rozciąganie w klatce piersiowej. Tak pochylony wykonaj wdech i zginając ramiona w łokciach, zejdź do momentu, w którym klatka będzie znajdowała się w okolicy poręczy.</li>
        <li>Wykonując wydech, prostuj ramiona, powracając do pozycji wyjściowej.</li>
        <li>Wykonaj wyznaczoną liczbę powtórzeń.</li>
      </ul>
    `,
    gif: "Placeholder gif",
  },
  {
    title: "Wyciskanie hantli na podłodze",
    description: `
      <p style="color:black;font-size:20px">Pozycja wyjściowa</p>
      <ul style="list-style-type:square">
        <li>Połóż się na podłodze, ugnij nogi.</li>
        <li>Unieś sztangielki. Ramiona ustaw pod kątem około 45 stopni względem ciała.</li>
      </ul>
      <p style="color:black;font-size:20px">Ruch</p>
      <ul style="list-style-type:square">
        <li>Utrzymując prawidłową pozycję wyjściową, wykonaj wdech do brzucha.</li>
        <li>Zdecydowanym, kontrolowanym ruchem wyciśnij ciężar w górę poprzez wyprost ramion, w końcowej fazie ruchu wykonaj wydech.</li>
        <li>W momencie prostowania ramion ze sztangielkami unikaj przeprostu w łokciach.</li>
        <li>Spokojnym ruchem wróć do pozycji wyjściowej, wykonując wdech.</li>
      </ul>
    `,
    gif: "Placeholder gif",
  },
  {
    title: "Pompki klasyczne z gumą",
    description: `
      <p style="color:black;font-size:20px">Pozycja wyjściowa</p>
      <ul style="list-style-type:square">
        <li>Pozycja podporu przodem.</li>
        <li>Dłonie ustawione na wysokości barków, nieco szerzej niż na szerokość barków, palce dłoni skierowane do przodu. Ramiona zablokowane w stawach łokciowych.</li>
        <li>Guma zablokowana pod dłońmi i zapleciona za plecami.</li>
        <li>Mięśnie brzucha i mięśnie pośladkowe napięte.</li>
      </ul>
      <p style="color:black;font-size:20px">Ruch</p>
      <ul style="list-style-type:square">
        <li>Utrzymując prawidłową pozycję wyjściową, dokładnie, płynnie i wolno opuszczaj klatkę piersiową (bez dotykania podłoża), równocześnie wykonaj wdech powietrza, następnie dynamiczne unieś tułów i wykonaj wydech powietrza.</li>
        <li>Wykonaj wyznaczoną liczbę powtórzeń.</li>
      </ul>
    `,
    gif: "Placeholder gif",
  },
  {
    title: "Pompki klasyczne",
    description: `
      <p style="color:black;font-size:20px">Pozycja wyjściowa</p>
      <ul style="list-style-type:square">
        <li>Podpór przodem.</li>
        <li>Tułów wyprostowany, ręce ustawione prostopadle do osi ciała, dłonie w jednej linii, ustawione równolegle do siebie, nieco szerzej niż rozstaw barków.</li>
        <li>Nogi wyprostowane, stopy złączone.</li>
      </ul>
      <p style="color:black;font-size:20px">Ruch</p>
      <ul style="list-style-type:square">
        <li>Utrzymując prawidłową pozycję wyjściową, wykonaj wdech, następnie zginając ramiona w łokciach, opuść klatkę piersiową do podłoża. Należy zadbać o to, aby tułów był cały czas w linii prostej, a biodra nie opadały.</li>
        <li>Prostując ramiona wróć do pozycji wyjściowej, w końcowej fazie ruchu wykonaj wydech.</li>
        <li>Wykonaj wyznaczoną liczbę powtórzeń.</li>
      </ul>
    `,
    gif: "Placeholder gif",
  },
  {
    title: "Wyciskanie na ławce skośnej",
    description: `
      <p style="color:black;font-size:20px">Pozycja wyjściowa</p>
      <ul style="list-style-type:square">
        <li>Połóż się na ławce ze skosem dodatnim (kąt oparcia około 30-45 stopni).</li>
        <li>Stopy ustaw w lekkim rozkroku i mocno zaprzyj o podłoże.</li>
        <li>Chwyć sztangę nachwytem (palce wskazują przód, kciuki skierowane do środka) na taką szerokość, aby w połowie wykonywania ruchu kąt między ramieniem a przedramieniem wynosił 90 stopni.</li>
        <li>Pośladki oraz plecy mocno dociśnij do ławeczki. Łopatki ściągnij.</li>
      </ul>
      <p style="color:black;font-size:20px">Ruch</p>
      <ul style="list-style-type:square">
        <li>Utrzymując prawidłową pozycję wyjściową, wykonaj wdech i powolnym ruchem opuść sztangę w okolicę górnej części klatki piersiowej.</li>
        <li>Po przytrzymaniu sztangi przez ułamek sekundy zacznij unosić sztangę z powrotem do pozycji wyjściowej, wykonując wydech powietrza. Skup się, by wyciskanie następowało z mięśnia piersiowego.</li>
        <li>W momencie wyprostowania ramion ze sztangą (unikaj przeprostu w łokciach) mocno dopnij mięsień piersiowy, po czym ponownie zacznij opuszczać sztangę.</li>
        <li>Wykonaj wyznaczoną liczbę powtórzeń.</li>
        </ul>
    `,
    gif: "Placeholder gif",
  },
  {
    title: "Pompki na drążku",
    description: `
      <p style="color:black;font-size:20px">Pozycja wyjściowa</p>
      <ul style="list-style-type:square">
        <li>Podpór na drążku.</li>
        <li>Ręce wyprostowane.</li>
        <li>Chwyt zamknięty.</li>
        <li>Nogi lekko wychylone do przodu.</li>
        <li>Mięsień czworoboczny rozciągnięty.</li>
      </ul>
      <p style="color:black;font-size:20px">Ruch</p>
      <ul style="list-style-type:square">
        <li>Utrzymując prawidłową pozycję wyjściową, wykonaj płynne zgięcie w stawie łokciowym, nabierając powietrza. Nogi lekko wychylają się przy tym do przodu.</li>
        <li>Łokcie trzymaj przy ciele, kieruj je do tyłu wzdłuż ciała. Ruch wykonuj do poziomu 90 stopni w łokciach.</li>
        <li>Barki lekko przechyl do przodu.</li>
        <li>Następnie wyprostuj ręce, wypuszczając powietrze. Dopnij klatkę piersiową i triceps.</li>
      </ul>
    `,
    gif: "Placeholder gif",
  },
  {
    title: "Rozpiętki hantlami na podłodze",
    description: `
      <p style="color:black;font-size:20px">Pozycja wyjściowa</p>
      <ul style="list-style-type:square">
        <li>Pozycja leżąca na podłodze, nogi ugięte.</li>
        <li>Sztangielki uniesione. Ramiona ustawione na szerokość barków, prostopadle do podłogi.</li>
        <li>Nadgarstki odwrócone tak, aby palce były skierowane do siebie.</li>
        <li>Łopatki mocno ściśnięte, barki obniżone.</li>
      </ul>
      <p style="color:black;font-size:20px">Ruch</p>
      <ul style="list-style-type:square">
        <li>Utrzymując prawidłową pozycję wyjściową, wykonaj wdech i powolnym ruchem rozłóż wyprostowane ramiona, tak aby hantle znalazły się tuż nad podłogą.</li>
        <li>Zacznij unosić sztangielki z powrotem do pozycji wyjściowej, wykonując wydech powietrza i mocno napinając klatkę piersiową.</li>
        <li>W momencie wyprostowania ramion ze sztangielkami (unikaj przeprostu w łokciach) mocno dopnij mięsień piersiowy, po czym weź wdech i ponownie zacznij rozkładać ramiona.</li>
      </ul>
    `,
    gif: "Placeholder gif",
  },
  {
    title: "Pompki diamentowe z gumą",
    description: `
      <p style="color:black;font-size:20px">Pozycja wyjściowa</p>
      <ul style="list-style-type:square">
        <li>Pozycja podporu przodem.</li>
        <li>Dłonie ustawione wąsko przy sobie w taki sposób, by między nimi powstał trójkąt (diament). Ramiona zablokowane w stawach łokciowych.</li>
        <li>Guma zablokowana pod dłońmi i zapleciona za plecami.</li>
        <li>Mięśnie brzucha i mięśnie pośladkowe napięte.</li>
      </ul>
      <p style="color:black;font-size:20px">Ruch</p>
      <ul style="list-style-type:square">
        <li>Weź wdech, utrzymując prawidłową pozycję wyjściową; rozpocznij uginanie ramion, opuszczając klatkę piersiową w stronę dłoni.</li>
        <li>Nie kładź się na podłogę, w najniższym punkcie wykonaj zatrzymanie na ułamek sekundy, po czym energiczną pracą ramion wróć do pozycji początkowej, wykonaj równocześnie wydech.</li>
        <li>Wykonaj wyznaczoną liczbę powtórzeń.</li>
        </ul>
    `,
    gif: "Placeholder gif",
  },
  {
    title: "Pompki diamentowe",
    description: `
      <p style="color:black;font-size:20px">Pozycja wyjściowa</p>
      <ul style="list-style-type:square">
        <li>Podpór przodem. Dłonie ustawione wąsko przy sobie w taki sposób, by między nimi powstał trójkąt (diament).</li>
        <li>Ciało w jednej linii, brzuch oraz pośladki mocno napięte.</li>
      </ul>
      <p style="color:black;font-size:20px">Ruch</p>
      <ul style="list-style-type:square">
        <li>Weź wdech, utrzymując prawidłową pozycję wyjściową; rozpocznij uginanie ramion, opuszczając klatkę piersiową w stronę dłoni.</li>
        <li>Nie kładź się na podłogę, w najniższym punkcie wykonaj zatrzymanie na ułamek sekundy, po czym energiczną pracą ramion wróć do pozycji początkowej, wykonaj równocześnie wydech.</li>
        <li>Wykonaj wyznaczoną liczbę powtórzeń.</li>
      </ul>
    `,
    gif: "Placeholder gif",
  },
  {
    title: "Podciąganie na drążku nachwytem",
    description: `
      <p style="color:black;font-size:20px">Pozycja wyjściowa</p>
      <ul style="list-style-type:square">
        <li>Złap za drążek nachwytem (kciuki skierowane do wewnątrz), szerzej niż rozstaw barków.</li>
        <li>Ramiona wyprostowane, wzrok skierowany do góry.</li>
      </ul>
      <p style="color:black;font-size:20px">Ruch</p>
      <ul style="list-style-type:square">
        <li>Weź wdech, ruch rozpocznij od mocnego ściągnięcia łopatek w dół i do siebie.</li>
        <li>Płynnym ruchem dołącz pracę ramion, łokcie kieruj w stronę bioder.</li>
        <li>Podciągaj się tak, jakbyś chciał dotknąć drążka klatką piersiową.</li>
        <li>W najwyższy punkcie wyraźnie zatrzymaj ruch, wykonaj wydech i powolnym ruchem rozpocznij opuszczanie aż do pełnego wyprostu ramion.</li>
        <li>Wykonaj wyznaczoną liczbę powtórzeń.</li>
      </ul>
    `,
    gif: "Placeholder gif",
  },
  {
    title: "Wiosłowanie hantlem",
    description: `
      <p style="color:black;font-size:20px">Pozycja wyjściowa</p>
      <ul style="list-style-type:square">
        <li>Pozycja wykroczna przed ławeczką lub innym miejscem podporu.</li>
        <li>Ręka oparta o podwyższenie.</li>
        <li>Plecy proste, hantel w dłoni, ramię skierowane w dół.</li>
      </ul>
      <p style="color:black;font-size:20px">Ruch</p>
      <ul style="list-style-type:square">
        <li>Utrzymuj prawidłową pozycję ciała i wykonaj wdech, a następnie przyciągnij sztangielkę pionowo w górę, kierując ją w stronę biodra, jednoczenie maksymalnie zbliżając łopatkę do kręgosłupa i w dół.</li>
        <li>Kontynuuj ruch do momentu, w którym sztangielka będzie znajdowała się na wysokości biodra, a plecy uzyskają szczytowe napięcie.</li>
        <li>Utrzymaj napięcie przez ułamek sekundy.</li>
        <li>Ruch opuszczania wykonaj zdecydowanie wolniej niż podnoszenia, zrób wydech.</li>
      </ul>
    `,
    gif: "Placeholder gif",
  },
  {
    title: "Wiosłowanie gumą w opadzie tułowia",
    description: `
      <p style="color:black;font-size:20px">Pozycja wyjściowa</p>
      <ul style="list-style-type:square">
        <li>Pozycja stojąca z opadem tułowia pod kątem ok. 45 stopni, guma pod stopami.</li>
        <li>Końce gumy trzymane w wyprostowanych, ustawionych prostopadle do podłoża ramionach.</li>
      </ul>
      <p style="color:black;font-size:20px">Ruch</p>
      <ul style="list-style-type:square">
        <li>Utrzymując prawidłową pozycję, wykonaj wdech, a następnie przyciągnij gumę w górę, kierując dłonie w stronę bioder, jednocześnie maksymalnie zbliżając łopatki do kręgosłupa.</li>
        <li>Zatrzymaj ruch na ułamek sekundy w momencie, gdy mięśnie grzbietu są maksymalnie napięte.</li>
        <li>Wykonując wydech powietrza, powoli obniż gumę do pozycji wyjściowej.</li>
        <li>Wykonaj wyznaczoną liczbę powtórzeń.</li>
      </ul>
    `,
    gif: "Placeholder gif",
  },
  {
    title: "Podciąganie australijskie nachwytem z użyciem stołu",
    description: `
      <p style="color:black;font-size:20px">Pozycja wyjściowa</p>
      <ul style="list-style-type:square">
        <li>Wykonaj zwis podparty pod stołem, sztangą lub lub szerokim krzesłem</li>
        <li>Sylwetka wyprostowana, mięśnie brzucha oraz pośladków napięte.</li>
        <li>Ramiona wyprostowane, sztanga złapana podchwytem nieco szerzej niż szerokość barków.</li>
      </ul>
      <p style="color:black;font-size:20px">Ruch</p>
      <ul style="list-style-type:square">
        <li>Utrzymując prawidłową pozycję wyjściową, weź wdech i zacznij uginać ramiona w łokciach, podciągając klatkę piersiową w górę. Podczas wykonywania ruchu łopatki pozostają mocno ściągnięte.</li>
        <li>W najwyższym punkcie zatrzymaj ruch na ułamek sekundy.</li>
        <li>Następnie spokojnym i kontrolowanym ruchem zacznij opuszczać ciało, równocześnie wykonując wydech.</li>
        <li>Wykonaj wyznaczoną liczbę powtórzeń.</li>
      </ul>
    `,
    gif: "Placeholder gif",
  },
  {
    title: "Wiosłowanie sztangą",
    description: `
      <p style="color:black;font-size:20px">Pozycja wyjściowa</p>
      <ul style="list-style-type:square">
        <li>Trzymając sztangę nachwytem (palce skierowane w dół), nieco szerzej niż na szerokość barków, ugnij lekko nogi w kolanach i wykonaj opad tułowia w przód.</li>
        <li>Ramiona wyprostowane, ustawione prostopadle do podłoża.</li>
      </ul>
      <p style="color:black;font-size:20px">Ruch</p>
      <ul style="list-style-type:square">
        <li>Utrzymując prawidłową pozycję ciała, wykonaj wdech, a następnie przyciągnij sztangę pionowo w górę, kieruj ją w stronę mostka, jednocześnie maksymalnie zbliżając łopatki do kręgosłupa.</li>
        <li>Zatrzymaj ruch na ułamek sekundy w momencie, kiedy sztanga znajduje się blisko tułowia.</li>
        <li>Wykonując wydech powietrza, powoli obniż sztangę do pozycji wyjściowej.</li>
        <li>Wykonaj wyznaczoną liczbę powtórzeń.</li>
      </ul>
    `,
    gif: "Placeholder gif",
  },
  {
    title: "Podciąganie na drążku podchwytem",
    description: `
      <p style="color:black;font-size:20px">Pozycja wyjściowa</p>
      <ul style="list-style-type:square">
        <li>Złap za drążek podchwytem (kciuki skierowane na zewnątrz), na szerokość barków</li>
        <li>Ramiona wyprostowane, wzrok skierowany w przód.</li>
      </ul>
      <p style="color:black;font-size:20px">Ruch</p>
      <ul style="list-style-type:square">
        <li>Weź wdech, ruch rozpocznij od mocnego ściągnięcia łopatek w dół i do siebie.</li>
        <li>Płynnym ruchem dołącz pracę ramion, łokcie kieruj w stronę bioder.</li>
        <li>Podciągaj się tak, jakbyś chciał dotknąć drążka klatką piersiową.</li>
        <li>W najwyższy punkcie wyraźne zatrzymaj ruch, wykonaj wydech i powolnym ruchem rozpocznij opuszczanie aż do pełnego wyprostu ramion.</li>
        <li>Wykonaj wyznaczoną liczbę powtórzeń.</li>
        </ul>
    `,
    gif: "Placeholder gif",
  },
  {
    title: "Podciąganie australijskie podchwytem z użyciem stołu",
    description: `
      <p style="color:black;font-size:20px">Pozycja wyjściowa</p>
      <ul style="list-style-type:square">
        <li>Wykonaj zwis podparty pod sztangą, TRX lub kółkami.</li>
        <li>Sylwetka wyprostowana, mięśnie brzucha oraz pośladków napięte.</li>
        <li>Ramiona wyprostowane, sztanga złapana podchwytem nieco szerzej niż szerokość barków.</li>
      </ul>
      <p style="color:black;font-size:20px">Ruch</p>
      <ul style="list-style-type:square">
        <li>Utrzymując prawidłową pozycję wyjściową, weź wdech i zacznij uginać ramiona w łokciach, podciągając klatkę piersiową w górę. Podczas wykonywania ruchu łopatki pozostają mocno ściągnięte.</li>
        <li>W najwyższym punkcie zatrzymaj ruch na ułamek sekundy.</li>
        <li>Następnie spokojnym i kontrolowanym ruchem zacznij opuszczać ciało, równocześnie wykonując wydech.</li>
        <li>Wykonaj wyznaczoną liczbę powtórzeń.</li>
      </ul>
    `,
    gif: "Placeholder gif",
  },
  {
    title: "Wyciskanie żołnierskie sztangą",
    description: `
      <p style="color:black;font-size:20px">Pozycja wyjściowa</p>
      <ul style="list-style-type:square">
        <li>Złap sztangę nachwytem, nieco szerzej niż na szerokość barków.</li>
        <li>Stopy w lekkim rozkroku. Plecy proste, brzuch napięty.</li>
        <li>Sztangę utrzymuj na wysokości obojczyków.</li>
      </ul>
      <p style="color:black;font-size:20px">Ruch</p>
      <ul style="list-style-type:square">
        <li>Utrzymując prawidłową pozycję wyjściową, wykonaj wdech i rozpocznij wyciskanie ciężaru w górę. Łokcie prowadź przodem, przedramiona skierowane w górę.</li>
        <li>Nie blokuj rąk w stawach łokciowych, nie dopuszczaj do ich przeprostu.</li>
        <li>Następnie opuść sztangę do linii obojczyków, wykonując wydech.</li>
        <li>Wykonaj wyznaczoną liczbę powtórzeń.</li>
      </ul>
    `,
    gif: "Placeholder gif",
  },
  {
    title: "Pompki pike",
    description: `
      <p style="color:black;font-size:20px">Pozycja wyjściowa</p>
      <ul style="list-style-type:square">
        <li>Nogi na podwyższeniu.</li>
        <li>Nogi w kolanach wyprostowane.</li>
        <li>Kąt w biodrach 90 stopni.</li>
        <li>Plecy proste.</li>
        <li>Ręce szeroko.</li>
        <li>Dłonie i głowa powinny tworzyć trójkąt.</li>
      </ul>
      <p style="color:black;font-size:20px">Ruch</p>
      <ul style="list-style-type:square">
        <li>Utrzymując prawidłową pozycję, wykonaj pompkę w górę, prostując ręce w stawie łokciowym (są to pompki, które pomogą opanować pompki w staniu na rękach przy ścianie).</li>
        <li>Utrzymując proste plecy, ugnij ręce, schodząc w dół.</li>
        <li>Łokcie skierowane w stronę tułowia (głowa i dłonie tworzą trójkąt).</li>
        <li>Brzuch jest cały czas wciągnięty i napięty.</li>
      </ul>
    `,
    gif: "Placeholder gif",
  },
  {
    title: "Wznosy bokiem",
    description: `
      <p style="color:black;font-size:20px">Pozycja wyjściowa</p>
      <ul style="list-style-type:square">
        <li>Pozycja stojąca, ramiona wyprostowane (lekko odblokowane w łokciu), ustawione wzdłuż tułowia, w dłoniach hantle.</li>
        <li>Palce skierowane do tułowia. Kciuki zwrócone do przodu.</li>
        <li>Stopy w lekkim rozkroku.</li>
        <li>Plecy proste.</li>
      </ul>
      <p style="color:black;font-size:20px">Ruch</p>
      <ul style="list-style-type:square">
        <li>Utrzymując prawidłową pozycję wyjściową, wykonaj wdech i wznieś hantle w bok, aż ramiona będą ustawione równolegle do podłogi.</li>
        <li>Następnie dwukrotnie wolniej opuszczaj hantle, wykonuj przy tym wydech.</li>
        <li>Wykonaj wyznaczoną liczbę powtórzeń.</li>
      </ul>
    `,
    gif: "Placeholder gif",
  },
  {
    title: "Wyciskanie żołnierskie gumą oporową",
    description: `
      <p style="color:black;font-size:20px">Pozycja wyjściowa</p>
      <ul style="list-style-type:square">
        <li>Złap gumę nachwytem zamkniętym nieco szerzej niż na szerokość barków.</li>
        <li>Stopy w lekkim rozkroku. Plecy proste, brzuch napięty.</li>
        <li>Gumę utrzymuj na wysokości obojczyków, drugi koniec pod stopami.</li>
      </ul>
      <p style="color:black;font-size:20px">Ruch</p>
      <ul style="list-style-type:square">
        <li>Utrzymując prawidłową pozycję wyjściową, wykonaj wdech i rozpocznij wyciskanie ramion z gumą w górę. Łokcie prowadź przodem, przedramiona staraj się utrzymać skierowane w górę. </li>
        <li>Po wyciśnięciu wykonaj wydech, nie blokuj rąk w stawach łokciowych, nie dopuszczaj do ich przeprostu. Następnie wykonaj wdech.</li>
        <li>Wróć do pozycji wyjściowej, opuszczając gumę do linii obojczyków i wykonując wydech.</li>
        <li>Wykonaj wyznaczoną liczbę powtórzeń.</li>
      </ul>
    `,
    gif: "Placeholder gif",
  },
  {
    title: "Wyciskanie francuskie",
    description: `
      <p style="color:black;font-size:20px">Pozycja wyjściowa</p>
      <ul style="list-style-type:square">
        <li>Leżąc na ławce, chwyć sztangę łamaną wąskim chwytem. Dłonie nieco węziej niż szerokość barków, kciuki skierowane do siebie.</li>
        <li>Ściągnij sztangę z uchwytu i unieś ją nad klatkę piersiową, ramiona powinny znajdować się prostopadle do podłoża.</li>
      </ul>
      <p style="color:black;font-size:20px">Ruch</p>
      <ul style="list-style-type:square">
        <li>Inicjując wdech, opuść sztangę do czoła, trzymając ramiona nieruchomo. Przedramiona wykonują półkolisty ruch.</li>
        <li>Utrzymując stałe zgięcie w łokciu, przenieś sztangę za głowę.</li>
        <li>Następnie przenieś sztangę z powrotem nad czoło i wykonaj wyprost w łokciach, wracając do pozycji początkowej.</li>
      </ul>
    `,
    gif: "Placeholder gif",
  },
  {
    title: "Pompki w podporze tyłem",
    description: `
      <p style="color:black;font-size:20px">Pozycja wyjściowa</p>
      <ul style="list-style-type:square">
        <li>Dłonie ułożone na podwyższeniu, stopy oparte o podłoże. Kończyny dolne wyprostowane.</li>
        <li>Ciało w podporze tyłem, tułów prostopadle do podłoża.</li>
        <li>Ramiona rozstawione na szerokość barków.</li>
      </ul>
      <p style="color:black;font-size:20px">Ruch</p>
      <ul style="list-style-type:square">
        <li>Utrzymując prawidłową pozycję wyjściową, wykonaj wdech, a następnie ugnij przedramiona, opuszczając ciało.</li>
        <li>W dolnej pozycji zatrzymaj ruch na ułamek sekundy, a następnie mocną pracą wyprostną w łokciach unieś ciało i wróć do pozycji początkowej, w końcowej fazie ruchu wykonaj wydech.</li>
        <li>Wykonaj wyznaczoną liczbę powtórzeń.</li>
      </ul>
    `,
    gif: "Placeholder gif",
  },
  {
    title: "Wyciskanie francuskie hantlami w leżeniu na podłodze",
    description: `
      <p style="color:black;font-size:20px">Pozycja wyjściowa</p>
      <ul style="list-style-type:square">
        <li>Pozycja leżąca na podłodze, nogi ugięte.</li>
        <li>Hantle w dłoniach, ramiona wyprostowane nad klatką piersiową. Kciuki skierowane w tył.</li>
      </ul>
      <p style="color:black;font-size:20px">Ruch</p>
      <ul style="list-style-type:square">
        <li>Weź wdech, następnie rozpocznij uginanie w łokciach, kierując hantle do czoła, ramiona trzymaj nieruchomo. Przedramiona wykonują półkolisty ruch.</li>
        <li>W momencie, gdy hantle znajdą się blisko czoła, wróć do pozycji wyjściowej poprzez mocny wyprost w stawach łokciowych połączony z wydechem.</li>
      </ul>
    `,
    gif: "Placeholder gif",
  },
  {
    title: "Prostowanie ramion z gumą oporową",
    description: `
      <p style="color:black;font-size:20px">Pozycja wyjściowa</p>
      <ul style="list-style-type:square">
        <li>Stań przodem do gumy oporowej zaczepionej wyżej.</li>
        <li>Sylwetka wyprostowana, nieznacznie pochylona.</li>
        <li>Łokcie znajdują się blisko tułowia.</li>
      </ul>
      <p style="color:black;font-size:20px">Ruch</p>
      <ul style="list-style-type:square">
        <li>Utrzymując prawidłową pozycję wyjściową, weź wdech i zacznij prostować ramiona w stawach łokciowych.</li>
        <li>Podczas ruchu utrzymuj ciało nieruchomo, łopatki mocno ściągnięte, kontynuuj ruch do pełnego wyprostu w stawie łokciowym.</li>
        <li>W momencie maksymalnego napięcia zatrzymaj ruch na ułamek sekundy, a następnie zacznij odkładać ciężar, wydychając powietrze.</li>
      </ul>
    `,
    gif: "Placeholder gif",
  },
  {
    title: "Zginanie przedramion ze sztangą stojąc",
    description: `
      <p style="color:black;font-size:20px">Pozycja wyjściowa</p>
      <ul style="list-style-type:square">
        <li>Pozycja stojąca, plecy proste, sztanga trzymana podchwytem.</li>
        <li>Pełne ustabilizowanie łokci, które znajdują się możliwie jak najbliżej tułowia.</li>
        <li>Dłonie rozstawione na szerokość nieco większą niż rozstaw barków.</li>
      </ul>
      <p style="color:black;font-size:20px">Ruch</p>
      <ul style="list-style-type:square">
        <li>Utrzymując prawidłową pozycję wyjściową i przytrzymując ramiona nieruchomo, wykonaj ugięcie ramion w łokciach ze sztangą do momentu szczytowego napięcia bicepsa, w którym sztanga powinna znajdować się na wysokości barków. Utrzymuj stałe napięcie mięśni.</li>
        <li>Przytrzymaj maksymalnie napięty biceps przez ułamek sekundy, w szczytowym momencie ruchu wykonaj wydech, a następnie powolnym ruchem opuść przedramiona.</li>
        <li>Wykonaj wyznaczoną liczbę powtórzeń.</li>
      </ul>
    `,
    gif: "Placeholder gif",
  },
  {
    title: "Uginanie ramion z masą własnego ciała na poręczy",
    description: `
      <p style="color:black;font-size:20px">Pozycja wyjściowa</p>
      <ul style="list-style-type:square">
        <li>Wykonaj zwis podparty pod poręczą, nogi zgięte w kolanach 90 stopni.</li>
        <li>Kręgosłup prosty, mięśnie brzucha oraz pośladków napięte.</li>
        <li>Ramiona zgięte, podchwytem na szerokość barków.</li>
      </ul>
      <p style="color:black;font-size:20px">Ruch</p>
      <ul style="list-style-type:square">
        <li>Utrzymując prawidłową pozycję wyjściową, weź wdech i zacznij uginać ramiona w łokciach, podciągając głowę do poręczy.
        <li>W najwyższym punkcie zatrzymaj ruch na ułamek sekundy.</li>
        <li>Następnie spokojnym i kontrolowanym ruchem zacznij opuszczać ciało, równocześnie wykonując wydech.</li>
        <li>Wykonaj wyznaczoną liczbę powtórzeń.</li>
      </ul>
    `,
    gif: "Placeholder gif",
  },
  {
    title: "Zginanie przedramion hantlami stojąc",
    description: `
      <p style="color:black;font-size:20px">Pozycja wyjściowa</p>
      <ul style="list-style-type:square">
        <li>Pozycja stojąca z ustabilizowaną sylwetką i spiętymi mięśniami brzucha.</li>
        <li>Pełne ustabilizowanie łokci, które powinny znajdować się możliwie jak najbliżej tułowia.</li>
        <li>Hantelki trzymane chwytem młotkowym.</li>
      </ul>
      <p style="color:black;font-size:20px">Ruch</p>
      <ul style="list-style-type:square">
        <li>Utrzymując prawidłową pozycję wyjściową, wykonaj mocne zgięcie przedramion w pełnym zakresie ruchu, połączone z wdechem powietrza. Utrzymuj stałe napięcie mięśni.</li>
        <li>Utrzymaj maksymalnie napięty biceps przez ułamek sekundy w szczytowym momencie ruchu, a następnie powolnym ruchem opuść przedramiona, wykonując płynny wydech.</li>
        <li>Wykonaj wyznaczoną liczbę powtórzeń.</li>
      </ul>
    `,
    gif: "Placeholder gif",
  },
  {
    title: "Zginanie przedramion z gumą stojąc",
    description: `
      <p style="color:black;font-size:20px">Pozycja wyjściowa</p>
      <ul style="list-style-type:square">
        <li>Pozycja stojąca, ustabilizowana sylwetka, mięśnie brzucha i pośladki mocno napięte.</li>
        <li>Ustabilizowane łokcie, które znajdują się możliwie jak najbliżej tułowia.</li>
        <li>Guma oporowa trzymana podchwytem, zablokowana pod stopami.</li>
        <li></li>
      </ul>
      <p style="color:black;font-size:20px">Ruch</p>
      <ul style="list-style-type:square">
        <li>Utrzymując prawidłową pozycję wyjściową, weź wdech i wykonaj dokładne płynne zgięcie przedramion w pełnym zakresie ruchu.</li>
        <li>Utrzymaj maksymalnie napięty biceps przez ułamek sekundy.</li>
        <li>Następnie powolnym ruchem opuść przedramiona do pełnego rozciągnięcia, wykonaj również płynny wydech.</li>
      </ul>
    `,
    gif: "Placeholder gif",
  },
  {
    title: "Uginanie ramion z masą własnego ciała przy pomocy stołu",
    description: `
      <p style="color:black;font-size:20px">Pozycja wyjściowa</p>
      <ul style="list-style-type:square">
        <li>Wykonaj zwis podparty pod stołem, nogi zgięte w kolanach 90 stopni.</li>
        <li>Kręgosłup prosty, mięśnie brzucha oraz pośladków napięte.</li>
        <li>Ramiona zgięte, podchwytem na szerokość barków.</li>
      </ul>
      <p style="color:black;font-size:20px">Ruch</p>
      <ul style="list-style-type:square">
        <li>Utrzymując prawidłową pozycję wyjściową, weź wdech i zacznij uginać ramiona w łokciach, podciągając głowę do stołu.
        <li>W najwyższym punkcie zatrzymaj ruch na ułamek sekundy.</li>
        <li>Następnie spokojnym i kontrolowanym ruchem zacznij opuszczać ciało, równocześnie wykonując wydech.</li>
        <li>Wykonaj wyznaczoną liczbę powtórzeń.</li>
      </ul>
    `,
    gif: "Placeholder gif",
  },
  {
    title: "Wznosy kolan wisząc na drążku",
    description: `
      <p style="color:black;font-size:20px">Pozycja wyjściowa</p>
      <ul style="list-style-type:square">
        <li>Drążek złapany nachwytem (kciuki na zewnątrz) na szerokość barków.</li>
        <li>Tułów w jednej linii z wyprostowanymi kończynami dolnymi, miednica ustawiona neutralnie.</li>
      </ul>
      <p style="color:black;font-size:20px">Ruch</p>
      <ul style="list-style-type:square">
        <li>Napinając mocno mięśnie brzucha, unieś kolana do klatki piersiowej.</li>
        <li>Kontynuuj ruch, aż miednica uniesie się w górę. Jest to warunek odpowiedniej pracy mięśni brzucha.</li>
        <li>W najwyższym punkcie zatrzymaj ruch na ułamek sekundy oraz wykonaj wydech.</li>
        <li>Następnie spokojnym kontrolowanym ruchem opuść kolana do pozycji początkowej.</li>
        <li>Wykonaj wyznaczoną liczbę powtórzeń.</li>
      </ul>
    `,
    gif: "Placeholder gif",
  },
  {
    title: "Deska",
    description: `
      <p style="color:black;font-size:20px">Pozycja wyjściowa</p>
      <ul style="list-style-type:square">
        <li>Podpór przodem na przedramionach, łokcie pod barkami, nogi złączone, wyprostowane, ustawione w jednej linii z tułowiem – równolegle do podłoża.</li>
        <li>Zachowana naturalna krzywizna kręgosłupa. Wzrok skierowany w przód.</li>
        <li>Pozycję utrzymuj do momentu, w którym jesteś w stanie kontrolować ustawienie ciała.</li>
        <li>Tylko utrzymanie prawidłowej pozycji będzie miało wpływ na pozytywne efekty.</li>
      </ul>
      <p style="color:black;font-size:20px">Ruch</p>
      <ul style="list-style-type:square">
        <li>Utrzymując prawidłową pozycję wyjściową i napinając mocno mięśnie nóg, pośladki oraz brzuch, postaraj się wytrzymać jak najdłużej, wykonaj izometryczny skurcz mięśni oraz głęboko oddychaj.</li>
      </ul>
    `,
    gif: "Placeholder gif",
  },
];
const { neutral, teal } = createPalette();
export const About = () => {
  const exerciseRefs = useRef([]);

  // Przewijanie do wybranego ćwiczenia
  const scrollToExercise = (title) => {
    const index = exercises.findIndex((exercise) => exercise.title === title);
    if (index !== -1) {
      const element = exerciseRefs.current[index];
      const offset = -120;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition + offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const scrollToSearch = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <Header />
      <Box sx={{ marginTop: "110px" }} />
      <Box
        id="search-bar"
        sx={{
          width: "80%",
          margin: "0 auto",
          textAlign: "center",
          paddingBottom: "20px",
        }}
      >
        <Typography variant="h5" sx={{ fontSize: "40px", fontWeight: "bold" }}>
          Atlas Ćwiczeń
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          <Autocomplete
            options={exercises.map((exercise) => exercise.title)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Wyszukaj ćwiczenie"
                variant="outlined"
              />
            )}
            sx={{
              width: "400px",
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#ffffff",
                outline: "none",
                "& fieldset": {
                  borderWidth: "1px",
                  borderColor: neutral[400],
                },
                "&:hover fieldset": {
                  borderColor: neutral[600],
                },
                "&.Mui-focused fieldset": {
                  borderColor: neutral[600],
                  borderWidth: "1px",
                },
                "&.Mui-disabled fieldset": {
                  borderColor: neutral[400],
                  borderWidth: "1px",
                  outline: "none",
                },
              },
              "& .MuiOutlinedInput-input": {
                padding: "8px",
                zIndex: 1,
                position: "relative",
              },
              "& .MuiInputLabel-root": {
                color: neutral[600],
                "&.Mui-focused": {
                  color: neutral[600],
                },
              },
            }}
            onChange={(event, value) => {
              if (value) scrollToExercise(value);
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          width: "800px",
          gap: "20px",
        }}
      >
        {exercises.map((exercise, index) => (
          <Box
            ref={(el) => (exerciseRefs.current[index] = el)}
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              backgroundColor: "#ffffff",
            }}
          >
            <Typography
              variant="h1"
              sx={{ fontSize: "24px", fontWeight: "bold" }}
            >
              {exercise.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#555",
                  textAlign: "left",
                  maxWidth: "600px",
                }}
              >
                <Box
                  sx={{ marginTop: "10px" }}
                  dangerouslySetInnerHTML={{ __html: exercise.description }}
                />
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "auto",
                marginTop: "10px",
                borderRadius: "8px",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={exercise.gif}
                alt={exercise.title}
                style={{
                  width: "600px",
                  height: "400px",
                  objectFit: "contain",
                }}
              />
            </Box>
            <Button
              variant="text"
              onClick={scrollToSearch}
              sx={{ marginTop: "20px" }}
            >
              Powrót do wyszukiwania
            </Button>
          </Box>
        ))}
      </Box>
    </div>
  );
};
