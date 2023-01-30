const myOrdersData = [
  {
    id: 1,
    name: 'Apple iPhone SE (64GB, Black)',
    description:
      '4.7-inch Retina HD display Water and dust resistant (1 meter for up to 30 minutes, IP67)',
    img_url: 'https://d2v8x7eqx4g1su.cloudfront.net/brand_images/lenovo.jpg',
    price: 250.52,
    rating: 4.5,
    created_at: Date.now(),
    updated_at: Date.now(),
    user_id: 1,
    user_name: 'Sonu',
    qty: '2',
    Orderstatus:'pending'
  },
  {
    id: 2,
    name: 'Nintendo Switch with Neon Blue',
    description:
      '3 Play Styles: TV Mode, Tabletop Mode, Handheld Mode 6.2-inch, multi-touch capacitive touch screen',
    img_url: 'https://d2v8x7eqx4g1su.cloudfront.net/brand_images/dell.jpg',
    price: 374.88,
    rating: 2,
    created_at: Date.now(),
    updated_at: Date.now(),
    user_id: 1,
    user_name: 'Manu',
    qty: '5',
    Orderstatus:'completed'
  },
  {
    id: 3,
    name: 'Ring Fit Adventure - Nintendo Switch',
    description:
      'An adventure game that’s also a workout! Explore a huge fantasy world and defeat enemies using real-life exercise Jog, sprint, and high knee through dozens of levels',
    img_url: 'https://d2v8x7eqx4g1su.cloudfront.net/brand_images/hp.jpg',
    price: 109.0,
    rating: 4.7,
    created_at: Date.now(),
    updated_at: Date.now(),
    user_id: 1,
    user_name: 'Luke',
    qty: '3',
    Orderstatus:'pending'
  },
  {
    id: 12,
    name: 'Bluetooth Speakers, DOSS SoundBox Plus',
    description:
      'Bluetooth Speakers, DOSS SoundBox Plus Portable Wireless Bluetooth Speaker with 16W HD Sound and Deep Bass, Wireless Stereo Pairing, 20H Playtime, Wireless Speaker for Home, Outdoor, Travel - Black',
    img_url: 'https://d2v8x7eqx4g1su.cloudfront.net/brand_images/acer.jpg',
    price: 39.99,
    rating: 3.7,
    created_at: Date.now(),
    updated_at: Date.now(),
    user_id: 1,
    user_name: 'Luke',
    qty: '2',
    Orderstatus:'failed'
    
  },
]

export default myOrdersData;