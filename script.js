"use strict";

//selecting the main alphabet buttons
const headerA = document.querySelector(".header-A");
const headerB = document.querySelector(".header-B");
const headerC = document.querySelector(".header-C");
const headerD = document.querySelector(".header-D");
const headerE = document.querySelector(".header-E");
const headerF = document.querySelector(".header-F");
const headerG = document.querySelector(".header-G");
const headerH = document.querySelector(".header-H");
const headerI = document.querySelector(".header-I");
const headerJ = document.querySelector(".header-J");
const headerK = document.querySelector(".header-K");
const headerL = document.querySelector(".header-L");
const headerM = document.querySelector(".header-M");
const headerN = document.querySelector(".header-N");
const headerO = document.querySelector(".header-O");
const headerP = document.querySelector(".header-P");
const headerQ = document.querySelector(".header-Q");
const headerR = document.querySelector(".header-R");
const headerS = document.querySelector(".header-S");
const headerT = document.querySelector(".header-T");
const headerU = document.querySelector(".header-U");
const headerV = document.querySelector(".header-V");
const headerW = document.querySelector(".header-W");
// const headerX = document.querySelector(".header-X");
// const headerY = document.querySelector(".header-Y");
// const headerZ = document.querySelector(".header-Z");

//Selecting sections that contain all the entries for hiding/un-hiding
const sectionA = document.querySelector(".a-entries");
const sectionB = document.querySelector(".b-entries");
const sectionC = document.querySelector(".c-entries");
const sectionD = document.querySelector(".d-entries");
const sectionE = document.querySelector(".e-entries");
const sectionF = document.querySelector(".f-entries");
const sectionG = document.querySelector(".g-entries");
const sectionH = document.querySelector(".h-entries");
const sectionI = document.querySelector(".i-entries");
const sectionJ = document.querySelector(".j-entries");
const sectionK = document.querySelector(".k-entries");
const sectionL = document.querySelector(".l-entries");
const sectionM = document.querySelector(".m-entries");
const sectionN = document.querySelector(".n-entries");
const sectionO = document.querySelector(".o-entries");
const sectionP = document.querySelector(".p-entries");
const sectionQ = document.querySelector(".q-entries");
const sectionR = document.querySelector(".r-entries");
const sectionS = document.querySelector(".s-entries");
const sectionT = document.querySelector(".t-entries");
const sectionU = document.querySelector(".u-entries");
const sectionV = document.querySelector(".v-entries");
const sectionW = document.querySelector(".w-entries");
// const sectionX = document.querySelector(".x-entries");
// const sectionY = document.querySelector(".y-entries");
// const sectionZ = document.querySelector(".z-entries");

//inter section links for the Related Item links
//THIS IS A NODELIST due to querySelectorAll()
const linkToA = document.querySelectorAll(".link-to-A");

const linkToB = document.querySelectorAll(".link-to-b");
const linkToC = document.querySelectorAll(".link-to-c");
const linkToD = document.querySelectorAll(".link-to-d");
const linkToE = document.querySelectorAll(".link-to-e");
const linkToF = document.querySelectorAll(".link-to-f");
const linkToG = document.querySelectorAll(".link-to-g");
const linkToH = document.querySelectorAll(".link-to-h");
const linkToI = document.querySelectorAll(".link-to-i");
const linkToJ = document.querySelectorAll(".link-to-j");
const linkToK = document.querySelectorAll(".link-to-k");
const linkToL = document.querySelectorAll(".link-to-l");
const linkToM = document.querySelectorAll(".link-to-m");
const linkToN = document.querySelectorAll(".link-to-n");
const linkToO = document.querySelectorAll(".link-to-o");
const linkToP = document.querySelectorAll(".link-to-p");
const linkToQ = document.querySelectorAll(".link-to-q");
const linkToR = document.querySelectorAll(".link-to-r");
const linkToS = document.querySelectorAll(".link-to-s");
const linkToT = document.querySelectorAll(".link-to-t");
const linkToU = document.querySelectorAll(".link-to-u");
const linkToV = document.querySelectorAll(".link-to-v");
const linkToW = document.querySelectorAll(".link-to-w");
// const linkToX = document.querySelectorAll(".link-to-x");
// const linkToY = document.querySelectorAll(".link-to-y");
// const linkToZ = document.querySelectorAll(".link-to-z");

// Expands letter sections when main letter button is clicked
function expandSection(headerXXX, sectionXXX) {
  headerXXX.addEventListener("click", function () {
    sectionXXX.classList.toggle("hidden");
  });
}

//Inter Letter Section Links that close the section you're leaving and open the one you're going to
function linkTo(linkToXXX, sectionXXX) {
  linkToXXX.forEach((item) => {
    item.addEventListener("click", function () {
      if (sectionXXX.classList.contains("hidden")) {
        sectionXXX.classList.toggle("hidden");
      }

      item.closest(".collapse").classList.toggle("hidden");
    });
  });
}

expandSection(headerA, sectionA);
expandSection(headerB, sectionB);
expandSection(headerC, sectionC);
expandSection(headerD, sectionD);
expandSection(headerE, sectionE);
expandSection(headerF, sectionF);
expandSection(headerG, sectionG);
expandSection(headerH, sectionH);
expandSection(headerI, sectionI);
expandSection(headerJ, sectionJ);
expandSection(headerK, sectionK);
expandSection(headerL, sectionL);
expandSection(headerM, sectionM);
expandSection(headerN, sectionN);
expandSection(headerO, sectionO);
expandSection(headerP, sectionP);
expandSection(headerQ, sectionQ);
expandSection(headerR, sectionR);
expandSection(headerS, sectionS);
expandSection(headerT, sectionT);
expandSection(headerU, sectionU);
expandSection(headerV, sectionV);
expandSection(headerW, sectionW);
// expandSection(headerX, sectionX);
// expandSection(headerY, sectionY);
// expandSection(headerZ, sectionZ);

linkTo(linkToA, sectionA);
linkTo(linkToB, sectionB);
linkTo(linkToC, sectionC);
linkTo(linkToD, sectionD);
linkTo(linkToE, sectionE);
linkTo(linkToF, sectionF);
linkTo(linkToG, sectionG);
linkTo(linkToH, sectionH);
linkTo(linkToI, sectionI);
linkTo(linkToJ, sectionJ);
linkTo(linkToK, sectionK);
linkTo(linkToL, sectionL);
linkTo(linkToM, sectionM);
linkTo(linkToN, sectionN);
linkTo(linkToO, sectionO);
linkTo(linkToP, sectionP);
linkTo(linkToQ, sectionQ);
linkTo(linkToR, sectionR);
linkTo(linkToS, sectionS);
linkTo(linkToT, sectionT);
linkTo(linkToU, sectionU);
linkTo(linkToV, sectionV);
linkTo(linkToW, sectionW);
// linkTo(linkToX, sectionX);
// linkTo(linkToY, sectionY);
// linkTo(linkToZ, sectionZ);
