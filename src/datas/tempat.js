import lrtIcon from "../assets/icons/lrt.svg";
import mrtIcon from "../assets/icons/mrt.svg";
import commuterIcon from "../assets/icons/commuterline.svg";
import transjakartaIcon from "../assets/icons/transjakarta.svg";
import jaklingkoIcon from "../assets/icons/jaklingko.svg";
import krlbandaraIcon from "../assets/icons/krlbandara.svg";
import damriIcon from "../assets/icons/damri.svg";

const DataPlaces = [
  {
    id: 19108,
    title: "Kebon Bawang Tanjung Priok, Jakarta Utara",
    distance: "5 km",
    armada: [krlbandaraIcon, commuterIcon],
    stasiunTerdekat: ["semper", "tanjung priok", "kebon bawang"],
  },
  {
    id: 12101,
    title: "Kebun Binatang Ragunan, Jakarta Selatan",
    distance: "3 km",
    armada: [transjakartaIcon, krlbandaraIcon, mrtIcon],
    stasiunTerdekat: ["pasar minggu", "pejaten"],
  },
  {
    id: 18107,
    title: "Kopi Kayu Klender, Jakarta Timur",
    distance: "5 km",
    armada: [jaklingkoIcon],
    stasiunTerdekat: ["klender", "buaran", "jatinegara kaum"],
  },
  {
    id: 17106,
    title: "Kopi Siliwangi Rawamagun, Jakarta Timur",
    distance: "7 km",
    armada: [transjakartaIcon, damriIcon],
    stasiunTerdekat: ["pemuda", "klender", "rawamagun muka"],
  },
  {
    id: 13102,
    title: "Ayam Geprek Juanda, Jakarta Pusat",
    distance: "3 km",
    armada: [transjakartaIcon, commuterIcon],
    stasiunTerdekat: ["juanda", "sawah besar"],
  },
  {
    id: 14103,
    title: "Family Mart Juanda, Jakarta Pusat",
    distance: "3 km",
    armada: [transjakartaIcon, commuterIcon],
    stasiunTerdekat: ["juanda", "sawah besar"],
  },
  {
    id: 15104,
    title: "Ragussa es Italia, Jakarta Pusat",
    distance: "3 km",
    armada: [mrtIcon, lrtIcon],
    stasiunTerdekat: ["juanda"],
  },
  {
    id: 16105,
    title: "Lapangan Banteng, Jakarta Pusat",
    distance: "3 km",
    armada: [krlbandaraIcon, jaklingkoIcon],
    stasiunTerdekat: ["juanda", "pasar baru"],
  },

  {
    id: 10109,
    title: "ITC Roxy Mas, Jakarta Pusat",
    distance: "5 km",
    armada: [commuterIcon],
    stasiunTerdekat: ["roxy", "tanah abang", "sumber waras"],
  },
];
export default DataPlaces;
