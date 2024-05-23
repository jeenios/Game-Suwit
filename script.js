function getPilihanKomputer() {
  const comp = Math.random();

  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}

function getHasil(comp, player) {
  if (player == comp) return "SERI!";
  if (player == "gajah") return comp == "orang" ? "MENANG!" : "KALAH!";
  if (player == "orang") return comp == "gajah" ? "KALAH!" : "MENANG!";
  if (player == "semut") return comp == "orang" ? "KALAH!" : "MENANG!";
}

function putar() {
  const imgComputer = document.querySelector(".img-komputer");
  const gambar = ["gajah", "semut", "orang"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  });
}

const tombolGajah = document.querySelector(".gajah");
tombolGajah.addEventListener("click", function () {
  const pilihanKomputer = getPilihanKomputer();
  const pilihanPlayer = tombolGajah.className;
  const hasil = getHasil(pilihanKomputer, pilihanPlayer);

  putar();

  setTimeout(function () {
    const imgKomputer = document.querySelector(".img-komputer");
    imgKomputer.setAttribute("src", "img/" + pilihanKomputer + ".png");
    const info = document.querySelector(".info");
    info.innerHTML = hasil;
  }, 1000);

  console.log(pilihanKomputer);
  console.log(pilihanPlayer);
  console.log(hasil);
});

const tombolOrang = document.querySelector(".orang");
tombolOrang.addEventListener("click", function () {
  const pilihanKomputer = getPilihanKomputer();
  const pilihanPlayer = tombolOrang.className;
  const hasil = getHasil(pilihanKomputer, pilihanPlayer);

  putar();

  setTimeout(function () {
    const imgKomputer = document.querySelector(".img-komputer");
    imgKomputer.setAttribute("src", "img/" + pilihanKomputer + ".png");
    const info = document.querySelector(".info");
    info.innerHTML = hasil;
  }, 1000);

  console.log(pilihanKomputer);
  console.log(pilihanPlayer);
  console.log(hasil);
});

const tombolSemut = document.querySelector(".semut");
tombolSemut.addEventListener("click", function () {
  const pilihanKomputer = getPilihanKomputer();
  const pilihanPlayer = tombolSemut.className;
  const hasil = getHasil(pilihanKomputer, pilihanPlayer);

  putar();

  setTimeout(function () {
    const imgKomputer = document.querySelector(".img-komputer");
    imgKomputer.setAttribute("src", "img/" + pilihanKomputer + ".png");
    const info = document.querySelector(".info");
    info.innerHTML = hasil;
  }, 1000);

  console.log(pilihanKomputer);
  console.log(pilihanPlayer);
  console.log(hasil);
});
