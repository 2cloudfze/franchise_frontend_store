const Categories = [
  {
    id: "1",
    head: "Servers,Desktops & Notebooks",
    subCategories: [
      {
        id: "1/1",
        displayname: "Servers",
        categories: ["Servers"],
      },
      {
        id: "1/2",
        displayname: "All In One, Desktops & workstations",
        categories: ["Workstations", "All-In-One_Desktops", "Desktops"],
      },
      {
        id: "1/3",
        displayname: "Notebooks/Laptops",
        categories: ["Notebooks"],
      },
      {
        id: "1/4",
        displayname: "Tablet PCs",
        categories: ["Tablet_PCs"],
      },
    ],
  },

  {
    id: "2",
    head: "networking & communication",
    subCategories: [
      { id: "2/2", displayname: "PCMCIA Cards", categories: ["Memory_Cards"] },
      {
        id: "2/3",
        displayname: "Connectors & Components",
        categories: [
          "Connectors",
          "Connector_Cables",
          "Connector/Cable_Inserts",
        ],
      },
      {
        id: "2/4",
        displayname: "Print Servers",
        categories: [
          "Print_Servers",
          "Wireless_Print_Servers",
          "Ethernet_Print_Servers",
        ],
      },
      {
        id: "2/55",
        displayname: "Routers & Gateways",
        categories: ["Routers_&_Gateways"],
      },
      {
        id: "2/5",
        displayname: "Modems",
        categories: ["Dial-Up_Modems", "Modems"],
      },
      {
        id: "2/6",
        displayname: "Modules",
        categories: ["Modules"],
      },
      {
        id: "2/7",
        displayname: "VOIP Products ",
        categories: ["VoIP_Gateways"],
      },
      {
        id: "2/8",
        displayname: "Wireless Products",
        categories: ["Wireless"],
      },
      {
        id: "2/9",
        displayname: "Networking Cable",
        categories: ["Special_Network_Cables", "Network_Cabling_Accessories"],
      },
      {
        id: "2/10",
        displayname: "Power Supplies",
        categories: [
          "Power_Supplies",
          "ATX_Power_Supplies",
          "EPS_Power_Supplies",
          "Power_Supply_Testers",
        ],
      },
      {
        id: "2/11",
        displayname: "2 Way Radios",
        categories: ["Walkie_Talkies"],
      },
      {
        id: "2/12",
        displayname: "Switches & Hubs",
        categories: ["Switches_&_Bridges", "Gigabit_Hubs_&_Switches"],
      },

      {
        id: "2/14",
        displayname: "Cable modems",
        categories: ["Cable_Modems"],
      },
      {
        id: "2/15",
        displayname: "Access Point",
        categories: [
          "Wireless_Access_Points/Bridges",
          "Wireless Access Points",
        ],
      },
      {
        id: "2/16",
        displayname: "Network Adapters",
        categories: [
          "PCI-E_Network_Adapters",
          "USB_Network_Adapters",
          "Gigabit_Network_Adapters",
          "PCI_Network_Adapters",
          "Powerline_Network_Adapters",
          "Network_Adapters",
          "10/100_Network_Adapters",
          "PCI-X_Network_Adapters",
          "PC_Card_Network_Adapters",
          "Fiber_Network_Adapters",
        ],
      },
      {
        id: "2/17",
        displayname: "Firewalls",
        categories: [
          "Firewalls",
          "Network_Security_&_Firewalls",
          "Firewall_/_VPN_Appliances",
        ],
      },
      {
        id: "2/18",
        displayname: "Network Management Software",
        categories: ["Network_&_Enterprise_Management"],
      },
      {
        id: "2/19",
        displayname: "Analog & Digital Telephones",
        categories: ["Analog_&_Digital_Phones"],
      },
      {
        id: "2/20",
        displayname: "PABX & Telephone Accessories",
        categories: ["Telephone_Accessories"],
      },
      { id: "2/21", displayname: "Cabinet & Racks", categories: ["Cabinets"] },
      { id: "2/22", displayname: "Routers", categories: ["Routers"] },
    ],
  },
  {
    id: "3",
    head: "storage components & accessories",
    subCategories: [
      {
        id: "3/1",
        displayname: "Monitors",
        categories: [
          "Monitors",
          " TV_&_Monitor_Mounts",
          "Monitor_Cables",
          "Touchscreen_Monitors",
          "Monitor_Accessories",
          "LED_Monitors",
          "LCD_Monitors",
          "Computer_Monitors",
          "Monitor_Stands",
          "POS_Monitors",
        ],
      },
      {
        id: "3/2",
        displayname: "Hard Drives",
        categories: [
          "Hard_Drives",
          "Internal_Hard_Drives",
          "External_Hard_Drives",
          "Hard_Drive_Mounting",
          "Hard_Drive_Arrays",
          "Hard_Drive_Enclosures",
          "Hard_Drive_Duplicators",
        ],
      },
      {
        id: "3/3",
        displayname: "Memory",
        categories: [
          "Memory",
          "Memory_Cards",
          "Read-Only_Memory",
          "Flash_Memory",
          "Flash_Memory_Duplicators",
          "Memory_Expansion_Boards",
          "Cache_Memory",
        ],
      },

      {
        id: "3/5",
        displayname: "Duplicators",
        categories: [
          "CD_/_DVD_/_Blu-ray_Duplicators",
          "CD/DVD_Duplicators",
          "Flash_Duplicators",
          "HDD_Duplicators",
          "Hard_Drive_Duplicators",
          "Flash_Memory_Duplicators",
        ],
      },
      { id: "3/6", displayname: "CPU", categories: ["Microprocessors"] },
      {
        id: "3/7",
        displayname: "Motherboards",
        categories: ["Motherboards", "Server/Workstation_Motherboards"],
      },
      {
        id: "3/8",
        displayname: "Controller Cards",
        categories: ["Legacy_Controller_Cards"],
      },
      {
        id: "3/9",
        displayname: "Sound Cards",
        categories: [
          "Sound_Cards",
          "External_Sound_Cards",
          "Internal_Sound_Cards",
        ],
      },
      {
        id: "3/10",
        displayname: "VGA Cards",
        categories: [
          "Consumer_Video_Cards",
          "HDMI_Video_Cards",
          "DVI_Video_Cards",
          "DisplayPort_Video_Cards",
          "Professional_Video_Cards",
        ],
      },
      {
        id: "3/11",
        displayname: "Power Supply Units",
        categories: [
          "Power_Supplies",
          "ATX_Power_Supplies",
          "EPS_Power_Supplies",
          "Power_Supply_Testers",
        ],
      },

      { id: "3/13", displayname: "DVD Drives", categories: ["DVD_Drives"] },
      {
        id: "3/15",
        displayname: "Floppy Drives",
        categories: ["Floppy_Drives"],
      },
      {
        id: "3/16",
        displayname: "NAS Network Attached Storage",
        categories: ["NAS"],
      },

      {
        id: "3/21",
        displayname: "Keyboards",
        categories: [
          "Keyboards_&_Keypads",
          "Keyboard_&_Mouse_Accessories",
          "Keyboard/Keypad_&_Pointing_Device_Kits",
          "Corded_Keyboards",
          "Keyboards",
          "Keyboard_Trays/Drawers",
          "Keyboard_&_Mouse_Cables",
          "Keyboard_&_Mouse_Bundles",
          "Wireless_Keyboards",
          "Keyboards_&_Mice",
        ],
      },
      {
        id: "3/22",
        displayname: "Mice/Pointing Device",
        categories: [
          "Pointing_Devices",
          "Keyboard/Keypad_&_Pointing_Device_Kits",
        ],
      },
      { id: "3/23", displayname: "Joystick", categories: ["Joysticks"] },
      {
        id: "3/24",
        displayname: "Combo Drives",
        categories: ["CD/DVD_Combo_Drives"],
      },
      {
        id: "3/25",
        displayname: "Headset/Microphones",
        categories: ["Headsets/Earsets"],
      },
    ],
  },

  {
    id: "4",
    head: "consumer electronics",
    subCategories: [
      {
        id: "4/2",
        displayname: "Digital/Normal Cameras",
        categories: ["Compact_Digital_Cameras"],
      },
      {
        id: "4/3",
        displayname: "Projectors",
        categories: [
          "Projector_Accessories",
          "Projector_Screens",
          "Projector_Mounts",
          "Projectors",
          "DLP_Projectors",
          "Projector_Cables",
        ],
      },

      {
        id: "4/5",
        displayname: "Mobile phones",
        categories: [
          "IP_Phones",
          "Cellular_Phones",
          "Phone_Add-ons",
          "VoIP_Phones",
          "Analog_&_Digital_Phones",
          "Cellular_Phone_Batteries_&_Power_Adapters",
          "Phone_Accessories",
          "Cellular_Phone_Accessories",
          "Video_Door_Phones",
          "Phone/Modem_Cables",
          "Cellular_Phone_Cases_&_Holsters",
          "Conference_Phones",
          "Phone_Expansion_Modules",
          "Cellular_Phone_Cables",
          "Mobile_&_Phone_Accessories",
          "Phones",
          "Phone_Systems",
        ],
      },
      {
        id: "4/6",
        displayname: "Global Position Systems",
        categories: ["GPS"],
      },

      {
        id: "4/8",
        displayname: "Video Cameras",
        categories: [
          "Camcorders",
          "Camera_&_Camcorder_Add-ons",
          "Camcorder_Accessories_&_Accessory_Kits",
          "Camcorder_Batteries",
          "Camcorder_Cases",
          "Professional_Camcorders",
        ],
      },

      {
        id: "4/11",
        displayname: "Projector screens & Accessories",
        categories: [
          "Projector_Screens",
          "Remote_Controls",
          "Remote_Control_Extender",
        ],
      },
      {
        id: "4/12",
        displayname: "Web Cameras",
        categories: ["Web_Cameras"],
      },

      {
        id: "4/15",
        displayname: "LED/LCD TVs",
        categories: ["LCD_TVs", "LED_TVs"],
      },
      {
        id: "4/16",
        displayname: "MP3/MP4/Ipod Players & Accessories",
        categories: ["Portable_Media_Players", "MP3_Players"],
      },
      {
        id: "4/17",
        displayname: "Security Cameras",
        categories: ["Security_Cameras"],
      },
      {
        id: "4/18",
        displayname: "Speakers",
        categories: [
          "Component_Speakers",
          "Multimedia_Speakers",
          "Speakers",
          "Computer_Speakers",
          "Multi-element_Speakers",
          "Speaker_Enclosures",
          "Speaker_Grills",
          "Home_Speakers",
          "Speaker_Accessories",
        ],
      },
    ],
  },

  {
    id: "5",
    head: "printers & scanners",
    subCategories: [
      {
        id: "5/1",
        displayname: "Scanner & Fax Copier Printer Parts",
        categories: [
          "Multifunction_Printers",
          "Scanner_Accessories",
          "Scanners",
          "Barcode_Scanners",
          "Document_Scanners",
          "Sheetfed_Scanners",
          "Multifunction_Printer_Accessories",
          "Flatbed_Scanners",
          "Scanner_Power",
        ],
      },
      {
        id: "5/2",
        displayname: "Scanners",
        categories: [
          "Scanner_Accessories",
          "Scanners",
          "Barcode_Scanners",
          "Document_Scanners",
          "Flatbed_Scanners",
          "Scanner_Power",
        ],
      },

      {
        id: "5/7",
        displayname: "Thermal Printers",
        categories: ["Thermal_Printers"],
      },

      {
        id: "5/12",
        displayname: "All in one Printers",
        categories: [
          "Multifunction_Printers",
          "Multifunction_Printer_Accessories",
        ],
      },
      {
        id: "5/13",
        displayname: "Laser Printers",
        categories: [
          "B&W_Multifunction_Laser_Printers",
          "Color_Multifunction_Laser_Printers",
          "Color_Laser_Printers",
          "Monochrome_Laser_Printers",
        ],
      },
    ],
  },

  {
    id: "6",
    head: "accessories & cables",
    subCategories: [
      { id: "6/2", displayname: "Power Cords", categories: ["Power_Cords"] },

      {
        id: "6/8",
        displayname: "Modem Cables",
        categories: [" Phone/Modem_Cables", "Modem_Cables"],
      },

      {
        id: "6/11",
        displayname: "Tool Kit",
        categories: ["Tools_&_Tool_Kits", "Tool_Kits"],
      },
      {
        id: "6/12",
        displayname: "Data/KVM Switches",
        categories: ["KVM_Switches"],
      },
      { id: "6/13", displayname: "USB Cables", categories: ["USB_Cables"] },
      {
        id: "6/14",
        displayname: "Firewire Cables",
        categories: ["FireWire_Cables"],
      },
      {
        id: "6/15",
        displayname: "Serial Cables",
        categories: ["Serial_Cables"],
      },
      {
        id: "6/16",
        displayname: "Audio/Video Cables",
        categories: ["Video_Cables", "Audio_Cables"],
      },
      { id: "6/17", displayname: "Power Cables", categories: ["Power_Cables"] },

      {
        id: "6/21",
        displayname: "Printer Cables",
        categories: ["Printer_Cables"],
      },

      {
        id: "6/22",
        displayname: "Mouse Pads",
        categories: ["Wrist/Mouse_Pads"],
      },
    ],
  },

  {
    id: "7",
    head: "consumables & supplies",
    subCategories: [
      {
        id: "7/1",
        displayname: "Paper",
        categories: [
          "Paper_Trays_&_Feeders",
          "Roll_Paper",
          "Roll_Paper_Holders",
          "Photo_Paper",
          "Office_Paper",
          "Paper_Cutters",
          "Receipt_Paper_Rolls",
          "Large_Format_Paper",
        ],
      },

      {
        id: "7/4",
        displayname: "Toner Catridges",
        categories: ["Toners_&_Cartridges_(Remodeled)", "Toner_Cartridges"],
      },

      {
        id: "7/6",
        displayname: "Ink Catridges",
        categories: ["Lamination_Sheets_&_Cartridges"],
      },
    ],
  },

  {
    id: "8",
    head: "office products & equipment",
    subCategories: [
      {
        id: "8/1",
        displayname: "Binding Products",
        categories: [
          "Binding_Covers",
          "Binding_Combs_&_Strips",
          "Binding_Machines",
        ],
      },
      { id: "8/3", displayname: "Cash Drawers", categories: ["Cash_Drawers"] },
      {
        id: "8/6",
        displayname: "Shredders",
        categories: ["Shredders", "Shredder_Accessories"],
      },
      {
        id: "8/7",
        displayname: "POS Accessories",
        categories: [
          "POS_Keyboards",
          "POS_Receipt_Printers",
          "POS_Terminals",
          "POS_Monitors",
        ],
      },
      { id: "8/8", displayname: "Laminators", categories: ["Laminators"] },
    ],
  },
  {
    id: "9",
    head: "Software Applications",
    subCategories: [
      {
        id: "9/1",
        displayname: "Software",
        categories: [
          "Software_Technical_Support",
          "Software_Suite",
          "Software_Products",
        ],
      },

      {
        id: "9/2",
        displayname: "Software Licensing",
        categories: ["Software_Licensing"],
      },
      {
        id: "9/3",
        displayname: "Communication software",
        categories: [
          "Instant_Communication_Software",
          "Web_Conferencing_Software",
        ],
      },
      {
        id: "9/4",
        displayname: "Remote Access",
        categories: ["Remote_Access_Software"],
      },
      {
        id: "9/5",
        displayname: "Network Software",
        categories: ["Network_Software", " Network_Appliance_Software"],
      },
      {
        id: "9/6",
        displayname: "Recovery/Backup",
        categories: ["Recovery_/_Backup_Software", "Web_Conferencing_Software"],
      },
      {
        id: "9/7",
        displayname: "cloud services",
        categories: ["Cloud_Software_&_Services"],
      },
      {
        id: "9/8",
        displayname: "Office Software",
        categories: [
          "Office_Software",
          "Fax_Software",
          "Labeling_/_Barcode_Software",
          "Document_Management_Software",
        ],
      },
      {
        id: "9/9",
        displayname: "Virtualization & Graphics",
        categories: [
          "Virtualization_Software",
          "Graphics_&_Publishing_Software",
        ],
      },
      {
        id: "9/10",
        displayname: "Security & Antivirus",
        categories: [
          "Encryption_Software",
          "Video_Surveillance_Software",
          "Antivirus_&_Security_Software",
          "Authentication_Software",
        ],
      },
      {
        id: "9/11",
        displayname: "CRM/VPN software",
        categories: ["CRM_software", "VPN_Software"],
      },
      {
        id: "9/12",
        displayname: "CAD/CAM & OCR software",
        categories: ["CAD/CAM_Software", "OCR_Software"],
      },
      {
        id: "9/13",
        displayname: "Software Books & Manuals",
        categories: [
          "Software_Books_&_Manuals",
          "Creativity_Software_Books_&_Manuals",
        ],
      },
    ],
  },
  {
    id: "10",
    head: "Power Products & UPS",
    subCategories: [
      {
        id: "10/1",
        displayname: "Stand Alone UPS",
        categories: ["Stand-Alone_UPS"],
      },
      {
        id: "10/2",
        displayname: "UPS",
        categories: [
          "UPS",
          "Rack-Mountable_UPS",
          "Industrial_UPS",
          "General_Purpose_UPS",
          "UPS_Batteries",
        ],
      },
      {
        id: "10/3",
        displayname: "Power_Accessories",
        categories: [
          "Power_Accessories",
          "Power_Supplies",
          "Power_Management_Adapters",
          "Power_Receptacles",
          "Power_Enclosures",
          "Power_Cables",
          "Power_Modules",
          "Power_Array_Cabinets",
        ],
      },
    ],
  },
];
export default Categories;
