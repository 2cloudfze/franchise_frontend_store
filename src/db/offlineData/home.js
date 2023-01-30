import brands from "@/config/constants";
const home = [
  {
    id: "45dfs",
    image:
      "https://computronstore.com/html/images/uploads/homepages/2020/apr/1apr/images/Desktops-All-In-Ones.jpg",
    title: "Desktops, All-In-Ones",
    brands: [
      { label: "HP", img: brands.hp },
      { label: "Dell", img: brands.dell },
      { label: "Lenovo", img: brands.lenovo },
      { label: "Apple", img: brands.apple },
      { label: "ASUS", img: brands.asus },
    ],
    link: "Desktop",
  },

  {
    id: "49dfs",
    image:
      "https://computronstore.com/html/images/uploads/homepages/2020/apr/1apr/images/Laptops-Tablets-Mobiles.jpg",
    title: "Laptops, Tablets , Mobiles",
    brands: [
      { label: "HP", img: brands.hp },
      { label: "Dell", img: brands.dell },
      { label: "Lenovo", img: brands.lenovo },
      { label: "Acer", img: brands.acer },
      { label: "Samsung", img: brands.samsung },
      { label: "Panasonic", img: brands.panasonic },
      { label: "Nokia", img: brands.nokia },
      { label: "Huawei", img: brands.huawei },
      { label: "ASUS", img: brands.asus },
    ],
    link: "Notebook",
  },

  {
    id: "3673fs",
    image:
      "https://computronstore.com/html/images/uploads/homepages/2020/apr/1apr/images/Servers-Workstations-Server-Options.jpg",
    title: "Servers, Workstations, Server Options",
    brands: [
      { label: "HPE", img: brands.hpe },
      { label: "Dell", img: brands.dell },
      { label: "LENOVO/IBM", img: brands.lenoibm },
      { label: "Acer", img: brands.acer },
      { label: "Fujitsu", img: brands.fujitsu },
    ],
    link: "Servers",
  },

  {
    id: "4828fs",
    image:
      "https://computronstore.com/html/images/uploads/homepages/2020/apr/1apr/images/Printers-Scanners-Copiers.jpg",
    title: "Printers, Scanners, Copiers",
    brands: [
      { label: "HP", img: brands.hp },
      { label: "Canon", img: brands.canon },
      { label: "Epson", img: brands.epson },
      { label: "Kodak", img: brands.kodak },
      { label: "Fujitsu", img: brands.fujitsu },
      { label: "Sharp", img: brands.sharp },
      { label: "Kyocera", img: brands.kyocera },
      { label: "Xerox", img: brands.xerox },
    ],
    link: "Printers",
  },

  {
    id: "42348fs",
    image:
      "https://computronstore.com/html/images/uploads/homepages/2020/apr/1apr/images/Monitors-TVs-Commercial-Displays.jpg",
    title: "Monitors, TVs, Projectors and Displays",
    brands: [
      { label: "Samsung", img: brands.samsung },
      { label: "LG", img: brands.lg },
      { label: "BenQ", img: brands.benq },
      { label: "NEC", img: brands.nec },
      { label: "ACER", img: brands.acer },
      { label: "Lenovo", img: brands.lenovo },
      { label: "HP", img: brands.hp },
      { label: "Dell", img: brands.dell },
    ],
    link: "Monitors",
  },

  {
    id: "4378Ds",
    image:
      "https://computronstore.com/html/images/uploads/homepages/2020/apr/1apr/images/Networking-Equipment-and-Accessories.jpg",
    title: "Networking Equipment’s and Accessories",
    brands: [
      { label: "Cisco", img: brands.cisco },
      { label: "Linksys", img: brands.linksys },
      { label: "TP-LINK", img: brands.tplink },
      { label: "D-Link", img: brands.dlink },
      { label: "Netgear", img: brands.netgear },
    ],
    link: "Networking",
  },

  {
    id: "265Ds",
    image:
      "https://computronstore.com/html/images/uploads/homepages/2020/apr/1apr/images/UPS-Power-Products.jpg",
    title: "UPS/Power Products",
    brands: [
      { label: "APC/SCHNEIDER", img: brands.apcschn },
      { label: "Eaton", img: brands.eaton },
      { label: "TRIPPLITE", img: brands.tripplite },
    ],
    link: "UPS",
  },

  {
    id: "4028Fs",
    image:
      "https://computronstore.com/html/images/uploads/homepages/2020/apr/1apr/images/PC-Components-Storage.jpg",
    title: "PC Components Storage, Accessories",
    brands: [
      { label: "Intel", img: brands.intel },
      { label: "Seagate", img: brands.seagate },
      { label: "WD", img: brands.wd },
      { label: "Kingston", img: brands.kingston },
      { label: "Crucial", img: brands.crucial },
      { label: "QNAP", img: brands.qnap },
      { label: "Synology", img: brands.synology },
      { label: "SanDisk", img: brands.sandisk },
      { label: "NVIDIA", img: brands.nvidia },
      { label: "AMD", img: brands.amd },
      { label: "Logitech", img: brands.logitech },
      { label: "Microsoft", img: brands.microsoft },
    ],
    link: "PC",
  },

  {
    id: "4098Fs",
    image:
      "https://computronstore.com/html/images/uploads/homepages/2020/apr/1apr/images/Software-Licensing-Cybersecurity.jpg",
    title: "Software, Licensing, Cybersecurity",
    brands: [
      { label: "Microsoft", img: brands.microsoft },
      { label: "KASPERSKY", img: brands.kaspersky },
      { label: "NORTON", img: brands.norton },
      { label: "McAfee", img: brands.mcafee },
      { label: "VmWare", img: brands.vmware },
      { label: "Adobe", img: brands.adobe },
      { label: "Autodesk", img: brands.autodesk },
    ],
    link: "Software",
  },

  {
    id: "2398Fs",
    image:
      "https://computronstore.com/html/images/uploads/homepages/2020/apr/1apr/images/Telephones-&-Telecom-Products.jpg",
    title: "Telephones & Telecom Products",
    brands: [
      { label: "Panasonic", img: brands.panasonic },
      { label: "NEC", img: brands.nec },
      { label: "Seimens", img: brands.seimens },
      { label: "MikroTik", img: brands.microtik },
      { label: "Ubiquiti", img: brands.ubiquiti },
      { label: "Digi", img: brands.digi },
    ],
    link: "Telephone",
  },

  {
    id: "2DHJs",
    image:
      "https://computronstore.com/html/images/uploads/homepages/2020/apr/1apr/images/Surveillance.jpg",
    title: "Surveillance and Security Products",
    brands: [
      { label: "Samsung", img: brands.samsung },
      { label: "Sony", img: brands.sony },
      { label: "Hikvision", img: brands.hikvision },
      { label: "Panasonic", img: brands.panasonic },
      { label: "Bosch", img: brands.bosch },
    ],
    link: "Surveillance",
  },

  {
    id: "3TWYDH",
    image:
      "https://computronstore.com/html/images/uploads/homepages/2020/apr/1apr/images/Audio-Video-Electronics.jpg",
    title: "Audio/Video Conferencing, Audio/Video Electronics",
    brands: [
      { label: "Polycom", img: brands.polycom },
      { label: "Shure", img: brands.shure },
      { label: "Bose", img: brands.bose },
      { label: "Plantronics", img: brands.plantronics },
      { label: "Jabra", img: brands.jabra },
      { label: "Logitech", img: brands.logitech },
      { label: "Microsoft", img: brands.microsoft },
      { label: "JTS", img: brands.jts },
      { label: "Yamaha", img: brands.yamaha },
    ],
    link: "Video",
  },
];

export default home;
