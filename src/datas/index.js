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

export const Kendaraan = {
  commuterline: {
    juanda: [
      {
        id: "#A12E44",
        rute: "Bogor - Kota",
        destination: "Kota",
        currentPos: "Lenteng Agung",
      },
      {
        id: "#B32E33",
        rute: "Kota - Cikarang",
        destination: "Kota",
        currentPos: "Klender",
      },
      {
        id: "#E32A10",
        rute: "Kota - Kota",
        destination: "Bogor",
        currentPos: "Mangga Besar",
      },
      {
        id: "#A12E44",
        rute: "Kota - Bogor",
        destination: "Bogor",
        currentPos: "Sawah Besar",
      },
    ],
    "mangga besar": [
      {
        id: "#A12E44",
        rute: "Bogor - Kota",
        destination: "Kota",
        currentPos: "Lenteng Agung",
      },
      {
        id: "#B32E33",
        rute: "Kota - Cikarang",
        destination: "Kota",
        currentPos: "Klender",
      },
      {
        id: "#E32A10",
        rute: "Kota - Kota",
        destination: "Bogor",
        currentPos: "Mangga Besar",
      },
      {
        id: "#A12E44",
        rute: "Kota - Bogor",
        destination: "Bogor",
        currentPos: "Sawah Besar",
      },
    ],
    cikini: [
      {
        id: "#A12E44",
        rute: "Bogor - Kota",
        destination: "Kota",
        currentPos: "Lenteng Agung",
      },
      {
        id: "#B32E33",
        rute: "Kota - Cikarang",
        destination: "Kota",
        currentPos: "Klender",
      },
      {
        id: "#E32A10",
        rute: "Kota - Kota",
        destination: "Bogor",
        currentPos: "Mangga Besar",
      },
      {
        id: "#A12E44",
        rute: "Kota - Bogor",
        destination: "Bogor",
        currentPos: "Sawah Besar",
      },
    ],
    bogor: [
      {
        id: "#A12E44",
        rute: "Bogor - Kota",
        destination: "Kota",
        currentPos: "Lenteng Agung",
      },
      {
        id: "#B32E33",
        rute: "Kota - Cikarang",
        destination: "Kota",
        currentPos: "Klender",
      },
      {
        id: "#E32A10",
        rute: "Kota - Kota",
        destination: "Bogor",
        currentPos: "Mangga Besar",
      },
      {
        id: "#A12E44",
        rute: "Kota - Bogor",
        destination: "Bogor",
        currentPos: "Sawah Besar",
      },
    ],
    kota: [
      {
        id: "#A12E44",
        rute: "Bogor - Kota",
        destination: "Kota",
        currentPos: "Lenteng Agung",
      },
      {
        id: "#B32E33",
        rute: "Kota - Cikarang",
        destination: "Kota",
        currentPos: "Klender",
      },
      {
        id: "#E32A10",
        rute: "Kota - Kota",
        destination: "Bogor",
        currentPos: "Mangga Besar",
      },
      {
        id: "#A12E44",
        rute: "Kota - Bogor",
        destination: "Bogor",
        currentPos: "Sawah Besar",
      },
    ],
    gondangdia: [
      {
        id: "#A12E44",
        rute: "Bogor - Kota",
        destination: "Kota",
        currentPos: "Lenteng Agung",
      },
      {
        id: "#B32E33",
        rute: "Kota - Cikarang",
        destination: "Kota",
        currentPos: "Klender",
      },
      {
        id: "#E32A10",
        rute: "Kota - Kota",
        destination: "Bogor",
        currentPos: "Mangga Besar",
      },
      {
        id: "#A12E44",
        rute: "Kota - Bogor",
        destination: "Bogor",
        currentPos: "Sawah Besar",
      },
    ],
    tebet: [
      {
        id: "#A12E44",
        rute: "Bogor - Kota",
        destination: "Kota",
        currentPos: "Lenteng Agung",
      },
      {
        id: "#B32E33",
        rute: "Kota - Cikarang",
        destination: "Kota",
        currentPos: "Klender",
      },
      {
        id: "#E32A10",
        rute: "Kota - Kota",
        destination: "Bogor",
        currentPos: "Mangga Besar",
      },
      {
        id: "#A12E44",
        rute: "Kota - Bogor",
        destination: "Bogor",
        currentPos: "Sawah Besar",
      },
    ],
    "pasar minggu": [
      {
        id: "#A12E44",
        rute: "Bogor - Kota",
        destination: "Kota",
        currentPos: "Lenteng Agung",
      },
      {
        id: "#B32E33",
        rute: "Kota - Cikarang",
        destination: "Kota",
        currentPos: "Klender",
      },
      {
        id: "#E32A10",
        rute: "Kota - Kota",
        destination: "Bogor",
        currentPos: "Mangga Besar",
      },
      {
        id: "#A12E44",
        rute: "Kota - Bogor",
        destination: "Bogor",
        currentPos: "Sawah Besar",
      },
    ],
  },
  transjakarta: "bogor",
  jaklingko: "ciawi",
  mrt: "bandung",
};

export const DataStations = [
  {
    title: "Juanda",
    distance: "1 km",
    status: "Lancar",
    type: "stasiun",
    armada: "commuterline",
    kendaraan: Kendaraan["commuterline"],
  },
  {
    title: "Juanda",
    distance: "1 km",
    status: "Lancar",
    type: "halte",
    armada: "transjakarta",
    kendaraan: Kendaraan["transjakarta"],
  },
  {
    title: "Juanda",
    distance: "1 km",
    status: "Lancar",
    type: "halte",
    armada: "jaklingko",
    kendaraan: Kendaraan["jaklingko"],
  },
  {
    title: "Mangga Besar",
    distance: "3 km",
    status: "Padat",
    type: "stasiun",
    armada: "commuterline",
    kendaraan: Kendaraan["commuterline"],
  },
  {
    title: "Mangga Besar",
    distance: "3 km",
    status: "Padat",
    type: "halte",
    armada: "transjakarta",
    kendaraan: Kendaraan["transjakarta"],
  },
  {
    title: "Mangga Besar",
    distance: "3 km",
    status: "Padat",
    type: "halte",
    armada: "jaklingko",
    kendaraan: Kendaraan["jaklingko"],
  },
  {
    title: "Cikini",
    distance: "2 km",
    status: "Lancar",
    type: "stasiun",
    armada: "commuterline",
    kendaraan: Kendaraan["commuterline"],
  },
  {
    title: "Cikini",
    distance: "2 km",
    status: "Lancar",
    type: "stasiun",
    armada: "commuterline",
    kendaraan: Kendaraan["commuterline"],
  },
  {
    title: "Gondangdia",
    distance: "4 km",
    status: "Padat",
    type: "stasiun",
    armada: "commuterline",
    kendaraan: Kendaraan["commuterline"],
  },
  {
    title: "Tanah Abang",
    distance: "7 km",
    status: "Padat",
    type: "stasiun",
    armada: "commuterline",
    kendaraan: Kendaraan["commuterline"],
  },
  {
    title: "Bundaran HI",
    distance: "4 km",
    status: "Padat",
    type: "stasiun",
    armada: "mrt",
    kendaraan: Kendaraan["mrt"],
  },
  {
    title: "Kota",
    distance: "4 km",
    status: "Padat",
    type: "stasiun",
    armada: "commuterline",
    kendaraan: Kendaraan["commuterline"],
  },
  {
    title: "Depok",
    distance: "16 km",
    status: "Lancar",
    type: "stasiun",
    armada: "commuterline",
    kendaraan: Kendaraan["commuterline"],
  },
  {
    title: "Ciracas",
    distance: "7 km",
    status: "Padat",
    type: "stasiun",
    armada: "lrt",
    kendaraan: Kendaraan["lrt"],
  },
  {
    title: "Cawang",
    distance: "4 km",
    status: "Padat",
    type: "stasiun",
    armada: "lrt",
    kendaraan: Kendaraan["lrt"],
  },
  {
    title: "Pasar Minggu",
    distance: "1 km",
    status: "Lancar",
    type: "stasiun",
    armada: "commuterline",
    kendaraan: Kendaraan["commuterline"],
  },
  {
    title: "Klender",
    distance: "12 km",
    status: "Padat",
    type: "stasiun",
    armada: "commuterline",
    kendaraan: Kendaraan["commuterline"],
  },
  {
    title: "Cikunir",
    distance: "7 km",
    status: "Padat",
    type: "stasiun",
    armada: "lrt",
    kendaraan: Kendaraan["lrt"],
  },
];

export const CommuterStations = [
  {
    title: "Juanda",
    distance: "1 km",
    status: "Lancar",
    type: "stasiun",
    armada: "commuterline",
    kendaraan: Kendaraan["commuterline"],
  },
  {
    title: "Mangga Besar",
    distance: "3 km",
    status: "Padat",
    type: "stasiun",
    armada: "commuterline",
    kendaraan: Kendaraan["commuterline"],
  },
  {
    title: "Cikini",
    distance: "2 km",
    status: "Lancar",
    type: "stasiun",
    armada: "commuterline",
    kendaraan: Kendaraan["commuterline"],
  },
  {
    title: "Gondangdia",
    distance: "4 km",
    status: "Padat",
    type: "stasiun",
    armada: "commuterline",
    kendaraan: Kendaraan["commuterline"],
  },
  {
    title: "Tanah Abang",
    distance: "7 km",
    status: "Padat",
    type: "stasiun",
    armada: "commuterline",
    kendaraan: Kendaraan["commuterline"],
  },
  {
    title: "Kota",
    distance: "4 km",
    status: "Padat",
    type: "stasiun",
    armada: "commuterline",
    kendaraan: Kendaraan["commuterline"],
  },
  {
    title: "Depok",
    distance: "16 km",
    status: "Lancar",
    type: "stasiun",
    armada: "commuterline",
    kendaraan: Kendaraan["commuterline"],
  },
  {
    title: "Pasar Minggu",
    distance: "1 km",
    status: "Lancar",
    type: "stasiun",
    armada: "commuterline",
    kendaraan: Kendaraan["commuterline"],
  },
  {
    title: "Klender",
    distance: "12 km",
    status: "Padat",
    type: "stasiun",
    armada: "commuterline",
    kendaraan: Kendaraan["commuterline"],
  },
];
