const offlineCategories = [
  {
    id: 1,
    name: 'SERVERS, DESKTOPS,NOTEBOOKS',
    label: 'SERVERS, DESKTOPS,NOTEBOOKS',
    md_icon: 'MdDesktopWindows',
    created_at: '1603806592003',
    sub_category:[ { id: 732178, name: 'Servers'},
          { id: 231888, name: 'Notebooks/Laptops' },
          { id: 332866, name: 'All in one, Desktops & Workstations' },
          { id: 328829, name: 'Tablet pcs' },
          { id: 301982, name: 'Notebook & Tablet Accessories'}]
  },
  {
    id: 2,
    name: 'NETWORKING & COMMUNICATION',
    label: 'NETWORKING & COMMUNICATION',
    md_icon: 'MdDesktopMac',
    created_at: '1603806592003',
    sub_category:[ { id: 455484, name: 'PCMCIA Cards' },
    { id: 500243, name: 'Connectors & Components' },
    { id: 278126, name: 'Fax/Modems' },
    { id: 345281, name: 'Pagers' },
    { id: 209876, name: 'Print Servers' },
    { id: 781236, name: 'Internet Gateways' },
    { id: 210026, name: 'Tranceivers & Modules' },
    { id: 200882, name: 'VOIP Products' },
    { id: 123253, name: 'Wireless Products' },
    { id: 264812, name: 'Networking Cable' },
    { id: 276686, name: 'Redundant Power Supply' },
    { id: 578946, name: '2 Way Radios' },
    { id: 737476, name: 'Switches & Hubs' },
    { id: 120126, name: 'Gigabite' },
    { id: 248126, name: 'ADSL/Cable Modems' },
    { id: 223122, name: 'Access Point' },
    { id: 248988, name: 'Network Adapters' },
    { id: 222336, name: 'Firewalls' },
    { id: 848126, name: 'Network Management Software' },
    { id: 283926, name: 'Analog & Digital Telephones' },
    { id: 908393, name: 'PABX & Telephone Accessories' },
    { id: 832893, name: 'Cabnets & Racks' },
    { id: 312332, name: 'Routers' },]
    
  },
  {
    id: 3,
    name: 'STORAGE/COMPONENTS & ACCESSORIES',
    label: 'STORAGE/COMPONENTS & ACCESSORIES',
    md_icon: 'MdLaptop',
    created_at: '1603806592003',
    sub_category:[ { id: 170937, name: 'Duplicators' },
    { id: 126762, name: 'CPU' },
    { id: 111256, name: 'Motherboards' },
    { id: 132783, name: 'Monitors' },
    { id: 127738, name: 'Hard Drives' },
    { id: 152672, name: 'Memory' },
    { id: 115412, name: 'Tape/Data Storage Drives' },
    { id: 136711, name: 'Controller Cards' },
    { id: 123788, name: 'Sound Cards' },
    { id: 133453, name: 'VGA Cards' },
    { id: 109092, name: 'Power Supply Units' },
    { id: 138819, name: 'External HDD' },
    { id: 123645, name: 'DVD Drives' },
    { id: 112090, name: 'DVD Writers' },
    { id: 138922, name: 'Floppy Drives' },
    { id: 187312, name: 'NAS Network Attached Storage' },
    { id: 191202, name: 'SCSI Cards' },
    { id: 119293, name: 'USB Cards' },
    { id: 133476, name: 'Memory Cards & Readers' },
    { id: 156743, name: 'Keyboards' },
    { id: 101292, name: 'Mice/Pointing Device' },
    { id: 198282, name: 'Joystick' },
    { id: 190812, name: 'Combo Drives' },
    { id: 118782, name: 'Headset/MicroPhones' },
    { id: 112982, name: 'TV Tuner Cards' },]
  },
  {
    id: 4,
    name: 'CONSUMER ELECTRONICS',
    label: 'CONSUMER ELECTRONICS',
    md_icon: 'MdKeyboard',
    created_at: '1603806592003',
    sub_category:[ { id: 209323, name: 'Electronic Components & Accessories' },
    { id: 212133, name: 'Web Cameras' },
    { id: 222326, name: 'Speakers' },
    { id: 256745, name: 'Digital/Normal Cameras' },
    { id: 221989, name: 'Projectors' },
    { id: 298992, name: 'Digital Video Products' },
    { id: 202738, name: 'Mobile Phones' },
    { id: 212573, name: 'Global Position Systems' },
    { id: 209988, name: 'Video Game Console' },
    { id: 231612, name: 'Video Cameras' },
    { id: 218178, name: 'Entertainment & Gaming' },
    { id: 210901, name: 'Plasma' },
    { id: 212878, name: 'Projector Screens & Accessories' },
    { id: 292193, name: 'Web Cameras' },
    { id: 212187, name: 'Mobile Phone Accessories' },
    { id: 298373, name: 'Home Theatre System' },
    { id: 203709, name: 'DVD Players' },
    { id: 217831, name: 'Blueray' },
    { id: 228767, name: 'LED/LCD TVS' },
    { id: 234524, name: 'MP3/MP4/Ipod Players & Accessories' },
    { id: 209732, name: 'Security Cameras' },]
  },
  {
    id: 5,
    name: 'PRINTERS & SCANNERS',
    label: 'PRINTERS & SCANNERS',
    md_icon: 'MdMemory',
    created_at: '1603806592003',
    sub_category:[ { id: 376733, name: 'Scanners' },
    { id: 347414, name: 'Thermal Printers' },
    { id: 387416, name: 'Laser Printers' },
    { id: 345321, name: 'Scanner & Fax Copier, Printer Parts' },
    { id: 387285, name: 'Receipt Printers' },
    { id: 387236, name: 'ID Card Printers' },
    { id: 381829, name: 'Mobile Printers' },
    { id: 303426, name: 'Deskjet Printers' },
    { id: 306815, name: 'Photosmart Printers' },
    { id: 337883, name: 'NIP Printers' },
    { id: 312234, name: 'Dotmatrix Printers' },
    { id: 384838, name: 'Plotters' },
    { id: 332899, name: 'All in one Printers' },]
  },
  {
    id: 6,
    name: 'ACCESSORIES & CABLES',
    label: 'ACCESSORIES & CABLES',
    md_icon: 'MdSpeaker',
    created_at: '1603806592003',
    sub_category:[ { id: 476316, name: 'Mouse pads' },
    { id: 468817, name: 'Power Cords' },
    { id: 423718, name: 'Tool kit' },
    { id: 426377, name: 'Cable Organisers' },
    { id: 403298, name: 'VGA Cables' },
    { id: 432767, name: 'CD/Disk Storage ' },
    { id: 423254, name: 'Mount Kit' },
    { id: 409982, name: 'Laplink Cables ' },
    { id: 412342, name: 'Modem Cables' },
    { id: 409909, name: 'Fiber Optic Cables' },
    { id: 425712, name: 'Networking Cables' },
    { id: 423298, name: 'Data/KVM Switches' },
    { id: 429812, name: 'USB Cables' },
    { id: 404320, name: 'FireWire Cables' },
    { id: 401788, name: 'Serial Cables' },
    { id: 490378, name: 'Audio Video Cables' },
    { id: 467663, name: 'Power Cables' },
    { id: 409283, name: 'Keyboard Connectivity' },
    { id: 439776, name: 'Dust Covers' },
    { id: 495388, name: 'Monitor/UPS Cables' },
    { id: 432564, name: 'Pointer Cables' },]
  },
  {
    id: 7,
    name: 'CONSUMABLES & SUPPLIES',
    label: 'CONSUMABLES & SUPPLIES',
    md_icon: ' MdSmartphone',
    created_at: '1603806592003',
    sub_category:[ { id: 566719, name: 'Paper' },
    { id: 543090, name: 'Toner Cartridges' },
    { id: 547367, name: 'Ink Cartridges' },
    { id: 587221, name: 'Data Storage/Disk' },
    { id: 526351, name: 'Ribbons' },
    { id: 543278, name: 'Data/Tape Cartridges' },]
  },
  {
    id: 8,
    name: 'OFFICE PRODUCTS & EQUIPMENT',
    label: 'OFFICE PRODUCTS & EQUIPMENT',
    md_icon: 'MdTv',
    created_at: '1603806592003',
    sub_category:[ { id: 634322, name: 'Cash Drawers' },
    { id: 628823, name: 'Laminators' },
    { id: 624224, name: 'Shredders' },
    { id: 624224, name: 'Binding Products' },
    { id: 624224, name: 'SAFES' },
    { id: 624224, name: 'Barcode Label Printers' },
    { id: 624224, name: 'Scanner & Fax, Copier' },
    { id: 624224, name: 'POS Keyboards' },
    { id: 624224, name: 'POS Accessories' },]
  },
  {
    id: 9,
    name: 'SOFTWARE ',
    label: 'SOFTWARE',
    md_icon: 'MdVideogameAsset',
    created_at: '1603806592003',
    sub_category:[ { id: 25, name: '' },
    { id: 26, name: '' },
    { id: 27, name: '' },]
  },
  {
    id: 10,
    name: 'POWER PRODUCTS & UPS',
    label: 'POWER PRODUCTS & UPS',
    md_icon: 'MdWatch',
    created_at: '1603806592003',
    sub_category:[ { id: 28, name: '' },
    { id: 29, name: '' },
    { id: 30, name: '' },]
  },
];

export default offlineCategories;
