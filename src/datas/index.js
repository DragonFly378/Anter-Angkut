import homeIcon from "../assets/icons/home.svg";
import accountIcon from "../assets/icons/account.svg";
import jadwalIcon from "../assets/icons/jadwal.svg";
import tempatIcon from "../assets/icons/tempat.svg";
import lrtIcon from "../assets/icons/lrt.svg";
import mrtIcon from "../assets/icons/mrt.svg";
import commuterIcon from "../assets/icons/commuterline.svg";
import transjakartaIcon from "../assets/icons/transjakarta.svg";
import jaklingkoIcon from "../assets/icons/jaklingko.svg";
import lainnya from "../assets/icons/lainnya.svg";
import krlbandaraIcon from "../assets/icons/krlbandara.svg";
import damriIcon from "../assets/icons/damri.svg";

export const bottombars = [
  {
    text: "Home",
    icon: homeIcon,
    link: "/",
  },
  {
    text: "Jadwal",
    icon: jadwalIcon,
    link: "/schedules",
  },
  {
    text: "Tempat",
    icon: tempatIcon,
    link: "/search-place",
  },
  {
    text: "Akun",
    icon: accountIcon,
    link: "/account",
  },
];

export const ListsArmadaCategory = {
  several: [
    {
      title: "Commuterline",
      icon: commuterIcon,
      link: "commuterline",
    },
    {
      title: "Transjakarta",
      icon: transjakartaIcon,
      link: "transjakarta",
    },
    {
      title: "MRT",
      icon: mrtIcon,
      link: "mrt",
    },
    {
      title: "Lainnya",
      icon: lainnya,
      link: "",
    },
  ],
  all: [
    {
      title: "Commuterline",
      icon: commuterIcon,
      link: "commuterline",
    },
    {
      title: "Transjakarta",
      icon: transjakartaIcon,
      link: "transjakarta",
    },
    {
      title: "MRT",
      icon: mrtIcon,
      link: "mrt",
    },
    {
      title: "Jaklingko",
      icon: jaklingkoIcon,
      link: "jaklingko",
    },
    {
      title: "LRT",
      icon: lrtIcon,
      link: "lrt",
    },
    {
      title: "DAMRI",
      icon: damriIcon,
      link: "damri",
    },
    {
      title: "KRL Bandara",
      icon: krlbandaraIcon,
      link: "krlbandara",
    },
  ],
};

export const DataPlaces = [
  {
    title: "Kebun Binatang Ragunan, Jakarta Selatan",
    distance: "3km",
    armada: [transjakartaIcon, krlbandaraIcon, mrtIcon],
  },
  {
    title: "Ayam Geprek Juanda, Jakarta Pusat",
    distance: "3km",
    armada: [transjakartaIcon, commuterIcon],
  },
  {
    title: "Family Mart Juanda, Jakarta Pusat",
    distance: "3km",
    armada: [transjakartaIcon, commuterIcon],
  },
  {
    title: "Ragussa es Italia, Jakarta Pusat",
    distance: "3km",
    armada: [mrtIcon, lrtIcon],
  },
  {
    title: "Lapangan Banteng, Jakarta Pusat",
    distance: "3km",
    armada: [krlbandaraIcon, jaklingkoIcon],
  },
  {
    title: "Kopi Siliwangi Rawamagun, Jakarta Timur",
    distance: "7km",
    armada: [transjakartaIcon],
  },
  {
    title: "Kopi Kayu Klender, Jakarta Timur",
    distance: "5km",
    armada: [jaklingkoIcon],
  },
  {
    title: "Kebun Bunga Mekarsari Bogor, Jawa Barat",
    distance: "5km",
    armada: [krlbandaraIcon, commuterIcon],
  },
  {
    title: "Benteng Betawi Cipondoh, Jawa Barat",
    distance: "5km",
    armada: [commuterIcon],
  },
];

export const DataStations = [
  {
    title: "St Juanda",
    distance: "1 km",
    status: "Lancar",
    type: "stasiun",
    armada: "commuterline",
    link: "https://maps.app.goo.gl/fg1EPXpDc6ywQbPj7",
  },
  {
    title: "Halte Juanda",
    distance: "1 km",
    status: "Lancar",
    type: "halte",
    armada: "transjakarta",
    link: "https://maps.app.goo.gl/fg1EPXpDc6ywQbPj7",
  },
  {
    title: "Halte Juanda",
    distance: "1 km",
    status: "Lancar",
    type: "halte",
    armada: "jaklingko",
    link: "https://maps.app.goo.gl/fg1EPXpDc6ywQbPj7",
  },
  {
    title: "St Mangga Besar",
    distance: "3 km",
    status: "Padat",
    type: "stasiun",
    armada: "commuterline",
    link: "https://maps.app.goo.gl/fg1EPXpDc6ywQbPj7",
  },
  {
    title: "Halte Mangga Besar",
    distance: "3 km",
    status: "Padat",
    type: "halte",
    armada: "transjakarta",
    link: "https://maps.app.goo.gl/fg1EPXpDc6ywQbPj7",
  },
  {
    title: "Halte Mangga Besar",
    distance: "3 km",
    status: "Padat",
    type: "halte",
    armada: "jaklingko",
    link: "https://maps.app.goo.gl/fg1EPXpDc6ywQbPj7",
  },
  {
    title: "St Cikini",
    distance: "2 km",
    status: "Lancar",
    type: "stasiun",
    armada: "commuterline",
    link: "https://maps.app.goo.gl/fg1EPXpDc6ywQbPj7",
  },
  {
    title: "St Cikini",
    distance: "2 km",
    status: "Lancar",
    type: "stasiun",
    armada: "commuterline",
    link: "https://maps.app.goo.gl/fg1EPXpDc6ywQbPj7",
  },
  {
    title: "St Gondangdia",
    distance: "4 km",
    status: "Padat",
    type: "stasiun",
    armada: "commuterline",
    link: "https://maps.app.goo.gl/fg1EPXpDc6ywQbPj7",
  },
  {
    title: "St Tanah Abang",
    distance: "7 km",
    status: "Padat",
    type: "stasiun",
    armada: "commuterline",
    link: "https://maps.app.goo.gl/fg1EPXpDc6ywQbPj7",
  },
  {
    title: "St Bundaran HI",
    distance: "4 km",
    status: "Padat",
    type: "stasiun",
    armada: "mrt",
    link: "https://maps.app.goo.gl/fg1EPXpDc6ywQbPj7",
  },
  {
    title: "St Kota",
    distance: "4 km",
    status: "Padat",
    type: "stasiun",
    armada: "commuterline",
    link: "https://maps.app.goo.gl/fg1EPXpDc6ywQbPj7",
  },
  {
    title: "St Depok",
    distance: "16 km",
    status: "Lancar",
    type: "stasiun",
    armada: "commuterline",
    link: "https://maps.app.goo.gl/fg1EPXpDc6ywQbPj7",
  },
  {
    title: "St Ciracas",
    distance: "7 km",
    status: "Padat",
    type: "stasiun",
    armada: "lrt",
    link: "https://maps.app.goo.gl/fg1EPXpDc6ywQbPj7",
  },
  {
    title: "St Cawang",
    distance: "4 km",
    status: "Padat",
    type: "stasiun",
    armada: "lrt",
    link: "https://maps.app.goo.gl/fg1EPXpDc6ywQbPj7",
  },
  {
    title: "St Pasar Minggu",
    distance: "1 km",
    status: "Lancar",
    type: "stasiun",
    armada: "commuterline",
    link: "https://maps.app.goo.gl/fg1EPXpDc6ywQbPj7",
  },
  {
    title: "St Klender",
    distance: "12 km",
    status: "Padat",
    type: "stasiun",
    armada: "commuterline",
    link: "https://maps.app.goo.gl/fg1EPXpDc6ywQbPj7",
  },
  {
    title: "St Cikunir",
    distance: "7 km",
    status: "Padat",
    type: "stasiun",
    armada: "lrt",
    link: "https://maps.app.goo.gl/fg1EPXpDc6ywQbPj7",
  },
];

export const CommuterStations = [
  {
    title: "St Juanda",
    distance: "1 km",
    status: "Lancar",
    type: "stasiun",
    armada: "commuterline",
    link: "https://maps.app.goo.gl/fg1EPXpDc6ywQbPj7",
  },
  {
    title: "St Mangga Besar",
    distance: "3 km",
    status: "Padat",
    type: "stasiun",
    armada: "commuterline",
    link: "https://maps.app.goo.gl/fg1EPXpDc6ywQbPj7",
  },
  {
    title: "St Cikini",
    distance: "2 km",
    status: "Lancar",
    type: "stasiun",
    armada: "commuterline",
    link: "https://maps.app.goo.gl/fg1EPXpDc6ywQbPj7",
  },
  {
    title: "St Gondangdia",
    distance: "4 km",
    status: "Padat",
    type: "stasiun",
    armada: "commuterline",
    link: "https://maps.app.goo.gl/fg1EPXpDc6ywQbPj7",
  },
  {
    title: "St Tanah Abang",
    distance: "7 km",
    status: "Padat",
    type: "stasiun",
    armada: "commuterline",
    link: "https://maps.app.goo.gl/fg1EPXpDc6ywQbPj7",
  },
  {
    title: "St Kota",
    distance: "4 km",
    status: "Padat",
    type: "stasiun",
    armada: "commuterline",
    link: "https://maps.app.goo.gl/fg1EPXpDc6ywQbPj7",
  },
  {
    title: "St Depok",
    distance: "16 km",
    status: "Lancar",
    type: "stasiun",
    armada: "commuterline",
    link: "https://maps.app.goo.gl/fg1EPXpDc6ywQbPj7",
  },
  {
    title: "St Pasar Minggu",
    distance: "1 km",
    status: "Lancar",
    type: "stasiun",
    armada: "commuterline",
    link: "https://maps.app.goo.gl/fg1EPXpDc6ywQbPj7",
  },
  {
    title: "St Klender",
    distance: "12 km",
    status: "Padat",
    type: "stasiun",
    armada: "commuterline",
    link: "https://maps.app.goo.gl/fg1EPXpDc6ywQbPj7",
  },
];
