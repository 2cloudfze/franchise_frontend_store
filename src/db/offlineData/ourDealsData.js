const ourDealsData = [
  
    {
        id: 1,
        name: "Canon PowerShot N100",
        img_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqOo93FDPzPsoGEzPmbsYrw7mseKUm8hEjankXwC6V2A&s",
        price: 39.99,
      },
      {
        id: 2,
        name: "NEC E905-AVT  ",
        img_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNuJ9q5wK2PVuSa-pL5DuR3mvHSCmWx4mFUhVc6XQXJQ&s",
        price: 1228.99,
      },
      {
        id: 3,
        name: "Canon LV WX300USTi ",
        img_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR5v_ZqCgWioH3e21MfFXIIROiW6LvloceAyOfVgv-bA&s",
        price: 118.99,
      },
      {
        id: 4,
        name: "Naxa NT-2407 24 TV/DVD Combo",
        img_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2GfQrJVJkUi5NNrlhJ4O22sSgFQxxFxFD8gLMyFU2mg&s",
        price: 972,
      },
      {
    id: 5,
    name: "Apple iPhone SE (64GB, Black)",
   
      
    img_url:
      "data:image/jpeg;base64,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",
    price: 250.52,
  
  },
  {
    id: 6,
    name: "Nintendo Switch with Neon Blue",
    
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiD3Yh6V3KwqkPfP-hyDZkLqOdclfBPz_6p02b2BZNBg&s",
    price: 374.88,
   
  },
  {
    id: 7,
    name: "Ring Fit Adventure - Nintendo Switch",
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE3x3ulcW3IVk9N-_jCq79ACz6wZxdKh8hFsYl0iSAdg&s",
    price: 109.0,
 
  },
  {
    id: 8,
    name: "Bluetooth Speakers, DOSS SoundBox Plus",
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Plv8BHpGkzdhF8KKXhCSew5AxSBa6RVmAZ_u73TFJA&s",
    price: 39.99,
  },
 
  {
    id: 9,
    name: "Planar ContentSmart Media Player MP60  ",
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrzlG4PJ5Z4VLYxQsqzL4iu3Toa8KIgiyvfqNCJ_d7Sg&s",
    price: 3267,
  },
  {
    id: 10,
    name: "Sandberg 133-58 External Sound Box",
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyBINgCHaYYnrfMjVbRliRfVHsxesAs7OASsriaNTsUA&s",
    price: 399,
  },
  {
    id: 11,
    name: "Xerox DocuMate 3640 Flatbed Scanner  ",
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJZXJLImP-LG0Gi1u7Ev-68CeJ2Dlr3xTJ3AGe80fW3w&s",
    price: 3209,
  },
  {
    id: 12,
    name: "Freecom Hard Drive Duplicator ",
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST3brwCvitnWQT3C30kCh1rToDS1Zrhele_3FnU3qjwA&s",
    price: 899,
  },
];

export default ourDealsData;
