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
    link: "/places",
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
      link: "/pilih-armada",
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

export const DataStations = [
  {
    title: "St Juanda",
    distance: "1 km",
    status: "Lancar",
    link: "https://maps.app.goo.gl/fg1EPXpDc6ywQbPj7",
  },
  {
    title: "St Mangga Besar",
    distance: "3 km",
    status: "Padat",
    link: "https://maps.app.goo.gl/fg1EPXpDc6ywQbPj7",
  },
  {
    title: "St Cikini",
    distance: "2 km",
    status: "Lancar",
    link: "https://maps.app.goo.gl/fg1EPXpDc6ywQbPj7",
  },
  {
    title: "St Gondangdia",
    distance: "4 km",
    status: "Lancar",
    link: "https://maps.app.goo.gl/fg1EPXpDc6ywQbPj7",
  },
];

export const DataPlaces = [
  {
    title: "Kebun Binatang Ragunan, Jawa Barat",
    distance: "3km",
    armada: [transjakartaIcon, krlbandaraIcon, mrtIcon],
  },
  {
    title: "Kebun Binatang Ragunan, Jawa Barat",
    distance: "3km",
    armada: [mrtIcon, lrtIcon],
  },
  {
    title: "Kebun Binatang Ragunan, Jawa Barat",
    distance: "3km",
    armada: [krlbandaraIcon, jaklingkoIcon],
  },
  {
    title: "Kebun Binatang Ragunan, Jawa Barat",
    distance: "3km",
    armada: [jaklingkoIcon],
  },
];
