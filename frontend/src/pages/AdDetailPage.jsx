import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './AdDetailPage.css';

const adDetailsData = {
  // ── Real Estate ──
  1: {
    title: 'Harmony 7 - End Unit w/Pool View - 5mins from Spotts Beach',
    price: 'Price Upon Request',
    location: 'Prospect, Grand Cayman',
    category: 'Real Estate',
    posted: 'Today',
    description: 'Discover this stunning, recently renovated and fully furnished luxury apartment situated just a 5-minute drive from Spotts Beach. This residence offers a haven of tranquility, boasting 2 bedrooms, 2.5 baths, and 1200 sq ft of contemporary living space. It provides a captivating view of the pool. Plenty of natural light streaming through the rear and by the poolside, creating the delightful feature of a private pool experience.',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=800'
    ],
    features: { beds: '2', baths: '2.5', yearBuilt: '2021', furnished: 'Yes', petsAllowed: 'Yes', pool: 'Yes', view: 'Pool View' },
    seller: { name: 'Bock Property Ltd', memberSince: 'Member since Jan 2023', phone: '+1 (345) 555-7788' }
  },
  5: {
    title: 'Seagull 1 Bed 1 Bath – Stunning Beachfront Condo',
    price: 'CI$ 2,800/mo',
    location: '7 Mile Beach, Grand Cayman',
    category: 'Real Estate',
    posted: '2 days ago',
    description: 'Gorgeous 1-bedroom, 1-bathroom condo directly on the world-famous 7 Mile Beach. Enjoy breathtaking ocean views from your private balcony. Fully furnished with modern amenities, resort-style pool, and beach access. Perfect for long-term rental or vacation living.',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=800'
    ],
    features: { beds: '1', baths: '1', yearBuilt: '2018', furnished: 'Yes', petsAllowed: 'No', pool: 'Yes', view: 'Ocean View' },
    seller: { name: 'Seagull Rentals Ltd', memberSince: 'Member since Mar 2020', phone: '+1 (345) 555-3344' }
  },
  6: {
    title: 'Oceanfront Villa – Rum Point Paradise',
    price: 'CI$ 1,200,000',
    location: 'Rum Point, Grand Cayman',
    category: 'Real Estate',
    posted: '1 week ago',
    description: 'Exceptional oceanfront villa set on a private lot at the serene Rum Point. This 4-bedroom, 3-bathroom home features an open-plan living space, chef\'s kitchen, infinity pool, and direct beach access. A rare opportunity to own a slice of Caribbean paradise.',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=800'
    ],
    features: { beds: '4', baths: '3', yearBuilt: '2016', furnished: 'Yes', petsAllowed: 'Yes', pool: 'Yes', view: 'Oceanfront' },
    seller: { name: 'Cayman Luxury Homes', memberSince: 'Member since Jun 2018', phone: '+1 (345) 555-9900' }
  },
  13: {
    title: 'Camana Bay Penthouse – Iconic Skyline Views',
    price: 'CI$ 8,500/mo',
    location: 'Seven Mile Beach, Grand Cayman',
    category: 'Real Estate',
    posted: '3 days ago',
    description: 'Live in the heart of Camana Bay in this spectacular penthouse apartment. Floor-to-ceiling windows offer panoramic views of the marina and Seven Mile Beach. The unit includes 3 bedrooms, 2 bathrooms, a wraparound terrace, private parking, and resort amenities.',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&q=80&w=800'
    ],
    features: { beds: '3', baths: '2', yearBuilt: '2020', furnished: 'Yes', petsAllowed: 'No', pool: 'Yes', view: 'Marina & Ocean' },
    seller: { name: 'Camana Bay Realty', memberSince: 'Member since Apr 2019', phone: '+1 (345) 555-6677' }
  },
  24: {
    title: 'Prime Beachfront Lot – Build Your Dream Home',
    price: 'CI$ 450,000',
    location: 'North Side, Grand Cayman',
    category: 'Real Estate',
    posted: '5 days ago',
    description: 'Rare opportunity to own a prime beachfront lot on the untouched North Side of Grand Cayman. This 0.5-acre parcel has direct beach access, stunning sunrise views, and all utilities at the boundary. Planning approval available. Perfect for a luxury private residence or boutique villa.',
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800'
    ],
    features: { beds: 'N/A', baths: 'N/A', yearBuilt: 'N/A', furnished: 'No', petsAllowed: 'N/A', pool: 'No', view: 'Beachfront' },
    seller: { name: 'North Side Land Co.', memberSince: 'Member since Jan 2022', phone: '+1 (345) 555-4411' }
  },
  25: {
    title: 'Downtown Office Space – George Town CBD',
    price: 'CI$ 3,500/mo',
    location: 'George Town, Grand Cayman',
    category: 'Real Estate',
    posted: 'Today',
    description: 'Modern, fully fitted office space available for lease in the heart of George Town\'s Central Business District. 1,200 sq ft open-plan layout with glass partitions, high-speed fibre internet, air conditioning, 4 private offices, a boardroom, and a kitchenette. Immediate availability.',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1562664377-709f2c337eb2?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800'
    ],
    features: { beds: 'N/A', baths: '2', yearBuilt: '2015', furnished: 'Yes', petsAllowed: 'No', pool: 'No', view: 'City View' },
    seller: { name: 'GT Commercial Properties', memberSince: 'Member since Feb 2021', phone: '+1 (345) 555-2200' }
  },
  26: {
    title: 'Secure Garage Unit – Industrial Park',
    price: 'CI$ 300/mo',
    location: 'Industrial Park, Grand Cayman',
    category: 'Real Estate',
    posted: '1 week ago',
    description: 'Clean, dry, and secure garage/storage unit available for immediate rental. Ideal for vehicle storage, business inventory, or personal belongings. 24/7 CCTV, gated access, and on-site management. Units available in multiple sizes.',
    images: [
      'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800'
    ],
    features: { beds: 'N/A', baths: 'N/A', yearBuilt: '2010', furnished: 'No', petsAllowed: 'No', pool: 'No', view: 'None' },
    seller: { name: 'Park Storage Solutions', memberSince: 'Member since Aug 2020', phone: '+1 (345) 555-7711' }
  },
  27: {
    title: 'Beachfront Modern Condo – 7 Mile Beach',
    price: 'CI$ 850,000',
    location: '7 Mile Beach, Grand Cayman',
    category: 'Real Estate',
    posted: '4 days ago',
    description: 'Beautifully designed modern condo directly on 7 Mile Beach. This 2-bedroom, 2-bathroom unit was recently renovated with premium finishes, an open-plan kitchen, spa-style bathrooms, and a large oceanview balcony. The complex includes a heated pool, gym, and beachside bar.',
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=800'
    ],
    features: { beds: '2', baths: '2', yearBuilt: '2019', furnished: 'Yes', petsAllowed: 'No', pool: 'Yes', view: 'Ocean View' },
    seller: { name: 'Island Dream Realty', memberSince: 'Member since Nov 2020', phone: '+1 (345) 555-8833' }
  },
  28: {
    title: 'Luxury Tropical Estate – Savannah',
    price: 'CI$ 3,200,000',
    location: 'Savannah, Grand Cayman',
    category: 'Real Estate',
    posted: '2 weeks ago',
    description: 'Magnificent luxury estate set in the peaceful Savannah district. Spanning over 6,000 sq ft across 1.5 acres of lush tropical landscaping, this 5-bedroom, 4.5-bathroom mansion features a resort-style infinity pool, outdoor entertainment pavilion, smart home technology, and a 3-car garage.',
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=800'
    ],
    features: { beds: '5', baths: '4.5', yearBuilt: '2022', furnished: 'Yes', petsAllowed: 'Yes', pool: 'Yes', view: 'Tropical Garden' },
    seller: { name: 'Cayman Elite Estates', memberSince: 'Member since Jul 2017', phone: '+1 (345) 555-1122' }
  },

  // ── Autos & Boats ──
  2: {
    title: '2024 BMW X6 xDrive 40i – Pristine Condition',
    price: 'CI$ 73,900',
    location: 'On Island, Grand Cayman',
    category: 'Autos & Boats',
    posted: 'Today',
    description: 'Brand new 2024 BMW X6 xDrive 40i finished in Carbon Black Metallic with Cognac Vernasca leather interior. Loaded with M Sport package, panoramic sunroof, Harman Kardon sound system, heads-up display, and BMW driver assistance package. Only 800 miles.',
    images: [
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1547245324-d777c6f05e80?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=800'
    ],
    features: { beds: 'N/A', baths: 'N/A', yearBuilt: '2024', furnished: 'N/A', petsAllowed: 'N/A', pool: 'N/A', view: 'N/A' },
    seller: { name: 'Island Motor Co.', memberSince: 'Member since Jan 2020', phone: '+1 (345) 555-4455' }
  },
  3: {
    title: 'Chris Craft Catalina 29 – Ready to Sail',
    price: 'CI$ 159,500',
    location: 'On Island, Grand Cayman',
    category: 'Autos & Boats',
    posted: '3 days ago',
    description: 'Classic Chris Craft Catalina 29 in excellent condition. Twin inboard engines recently serviced, new upholstery, updated electronics including GPS chartplotter, VHF radio, and depth finder. Sleeps 4 comfortably. Trailer available separately.',
    images: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1469796466635-455ede028aca?auto=format&fit=crop&q=80&w=800'
    ],
    features: { beds: 'N/A', baths: 'N/A', yearBuilt: '2018', furnished: 'N/A', petsAllowed: 'N/A', pool: 'N/A', view: 'N/A' },
    seller: { name: 'Caribbean Marine Sales', memberSince: 'Member since Mar 2019', phone: '+1 (345) 555-6622' }
  },
  7: {
    title: 'Yamaha WaveRunner FX – High Performance',
    price: 'CI$ 12,000',
    location: 'Grand Cayman',
    category: 'Autos & Boats',
    posted: '2 days ago',
    description: 'Yamaha WaveRunner FX in great condition. Powerful 1.8L engine, 3-person capacity, top speed of 67 mph. Includes custom cover, life jackets, and trailer. Regular maintenance done, only 45 hours on engine. Perfect for island life and weekend fun.',
    images: [
      'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1469796466635-455ede028aca?auto=format&fit=crop&q=80&w=800'
    ],
    features: { beds: 'N/A', baths: 'N/A', yearBuilt: '2021', furnished: 'N/A', petsAllowed: 'N/A', pool: 'N/A', view: 'N/A' },
    seller: { name: 'Cayman Watercraft', memberSince: 'Member since Feb 2021', phone: '+1 (345) 555-7733' }
  },
  15: {
    title: '2023 Tesla Model 3 – Long Range AWD',
    price: 'CI$ 45,000',
    location: 'George Town, Grand Cayman',
    category: 'Autos & Boats',
    posted: 'Yesterday',
    description: '2023 Tesla Model 3 Long Range AWD in Pearl White. Single owner, garage kept. 358-mile range, Autopilot enabled, 15" touchscreen, premium audio, heated front and rear seats. Includes home charging cable. Serviced by Tesla.',
    images: [
      'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1551651653-c5dcb914d809?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1561580125-028ee3bd62eb?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800'
    ],
    features: { beds: 'N/A', baths: 'N/A', yearBuilt: '2023', furnished: 'N/A', petsAllowed: 'N/A', pool: 'N/A', view: 'N/A' },
    seller: { name: 'EV Auto Cayman', memberSince: 'Member since Aug 2022', phone: '+1 (345) 555-2211' }
  },
  16: {
    title: 'Boston Whaler 270 Dauntless – Offshore Ready',
    price: 'CI$ 125,000',
    location: 'On Island, Grand Cayman',
    category: 'Autos & Boats',
    posted: '1 week ago',
    description: 'Boston Whaler 270 Dauntless with twin Evinrude 150HP outboards. Freshwater flushed after every use, full canvas enclosure, Garmin chartplotter, VHF radio, freshwater shower, and live baitwell. Ready for offshore fishing and island adventures.',
    images: [
      'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1469796466635-455ede028aca?auto=format&fit=crop&q=80&w=800'
    ],
    features: { beds: 'N/A', baths: 'N/A', yearBuilt: '2020', furnished: 'N/A', petsAllowed: 'N/A', pool: 'N/A', view: 'N/A' },
    seller: { name: 'Grand Cayman Marine', memberSince: 'Member since Jun 2019', phone: '+1 (345) 555-5599' }
  },
  29: {
    title: 'Solar Electric Boat – Eco Cruiser',
    price: 'CI$ 38,000',
    location: 'Grand Cayman',
    category: 'Autos & Boats',
    posted: 'Today',
    description: 'Stunning 100% solar-powered electric boat — the future of eco-friendly cruising. Completely silent, zero emissions, and powered by high-efficiency rooftop solar panels. Range of 60 nautical miles per charge. Seats 6 comfortably, fully fitted cockpit with GPS, Bluetooth sound system, and USB charging. Perfect for sunset cruises, island hopping, and eco-tours. Low running costs, no fuel needed.',
    images: [
      'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800'
    ],
    features: { beds: 'N/A', baths: 'N/A', yearBuilt: '2023', furnished: 'N/A', petsAllowed: 'Yes', pool: 'N/A', view: 'Ocean View' },
    seller: { name: 'EcoCruise Cayman', memberSince: 'Member since Jan 2024', phone: '+1 (345) 555-3366' }
  },

  // ── Buy & Sell ──
  // ── Buy & Sell ──
  8: {
    title: 'iPhone 14 Pro Max – 256GB – Deep Purple',
    price: 'CI$ 800',
    location: 'George Town, Grand Cayman',
    category: 'Buy & Sell',
    posted: 'Today',
    description: 'Selling my iPhone 14 Pro Max 256GB in Deep Purple. In excellent condition with no scratches or cracks. Comes with original box, charger, and a brand new screen protector. Unlocked and ready to use on any network.',
    images: [
      'https://images.unsplash.com/photo-1678652197831-2d180705cd2c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1664478546384-d97f51173067?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1663499827990-147555a1edc1?auto=format&fit=crop&q=80&w=800'
    ],
    features: { beds: 'N/A', baths: 'N/A', yearBuilt: '2022', furnished: 'N/A', petsAllowed: 'N/A', pool: 'N/A', view: 'N/A' },
    seller: { name: 'TechResale CJ', memberSince: 'Member since Jun 2022', phone: '+1 (345) 555-9988' }
  },
  9: {
    title: 'MacBook Pro M2 – 14" – Space Grey',
    price: 'CI$ 1,500',
    location: 'West Bay, Grand Cayman',
    category: 'Buy & Sell',
    posted: 'Yesterday',
    description: 'MacBook Pro 14-inch with M2 chip, 16GB RAM, 512GB SSD in Space Grey. Only 8 months old and in like-new condition. Includes original charger, MagSafe cable, and box. Selling because upgrading to the M3 Pro.',
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=800'
    ],
    features: { beds: 'N/A', baths: 'N/A', yearBuilt: '2023', furnished: 'N/A', petsAllowed: 'N/A', pool: 'N/A', view: 'N/A' },
    seller: { name: 'Apple Reseller CJ', memberSince: 'Member since Aug 2021', phone: '+1 (345) 555-3300' }
  },
  17: {
    title: 'PlayStation 5 Console – Disc Edition',
    price: 'CI$ 450',
    location: 'Bodden Town, Grand Cayman',
    category: 'Buy & Sell',
    posted: '2 days ago',
    description: 'Selling my PS5 Disc Edition. Excellent condition, very quiet. Includes one DualSense controller, original stand, power cable, and HDMI 2.1 cable. Original box included. No issues at all, just not using it much anymore.',
    images: [
      'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1606813907291-d86ebb9c74ad?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1622239434817-626b1bbbbca8?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1621259182978-f09e5e2ca07a?auto=format&fit=crop&q=80&w=800'
    ],
    features: { beds: 'N/A', baths: 'N/A', yearBuilt: '2022', furnished: 'N/A', petsAllowed: 'N/A', pool: 'N/A', view: 'N/A' },
    seller: { name: 'Gaming Zone', memberSince: 'Member since Feb 2022', phone: '+1 (345) 555-7766' }
  },
  18: {
    title: 'Nikon Z6 II Mirrorless Camera with 24-70mm Lens',
    price: 'CI$ 1,800',
    location: 'George Town, Grand Cayman',
    category: 'Buy & Sell',
    posted: '3 days ago',
    description: 'Nikon Z6 II in like-new condition. Low shutter count (under 5,000). Includes the Nikkor Z 24-70mm f/4 S lens, original battery, charger, and strap. Fantastic camera for both photography and video. Crystal clear sensor.',
    images: [
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1621932953986-15fcfec8327c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1616423642371-72ec00c5bc94?auto=format&fit=crop&q=80&w=800'
    ],
    features: { beds: 'N/A', baths: 'N/A', yearBuilt: '2021', furnished: 'N/A', petsAllowed: 'N/A', pool: 'N/A', view: 'N/A' },
    seller: { name: 'PhotoPro Cayman', memberSince: 'Member since Oct 2020', phone: '+1 (345) 555-4422' }
  },

  // ── Jobs ──
  10: {
    title: 'Senior Software Engineer',
    price: 'Competitive Salary',
    location: 'Camana Bay, Grand Cayman',
    category: 'Jobs',
    posted: 'Today',
    description: 'We are looking for an experienced Senior Software Engineer to join our dynamic team in Camana Bay. You will be responsible for building high-performance web applications using React, Node.js, and MongoDB. Requirements: 5+ years of experience, strong problem-solving skills, and a passion for clean code.',
    images: ['https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800'],
    seller: { name: 'Tech Solutions Ltd', memberSince: 'Member Since 2021', phone: '+1 (345) 555-0199' }
  },

  // ── Services ──
  11: {
    title: 'Professional Plumbing Services – All Islands',
    price: 'CI$ 50/hr',
    location: 'All Islands, Grand Cayman',
    category: 'Services & Specials',
    posted: '2 days ago',
    description: 'Licensed and insured plumber with 15+ years of experience. Available for emergency call-outs, installations, repairs, and routine maintenance. Services include pipe repairs, hot water heater installation, bathroom renovations, and drain cleaning. Fast response times.',
    images: [
      'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800'
    ],
    features: { beds: 'N/A', baths: 'N/A', yearBuilt: 'N/A', furnished: 'N/A', petsAllowed: 'N/A', pool: 'N/A', view: 'N/A' },
    seller: { name: 'CJ PlumbPro', memberSince: 'Member since May 2019', phone: '+1 (345) 555-5544' }
  },

  // ── Community ──
  12: {
    title: 'Beach Cleanup Volunteer – Seven Mile Beach',
    price: 'Free',
    location: 'Seven Mile Beach, Grand Cayman',
    category: 'Community',
    posted: 'Today',
    description: 'Join us for our monthly beach cleanup at Seven Mile Beach! All ages and abilities welcome. Equipment and refreshments provided. Together we can make a difference for our beautiful island environment. Meet at the Public Beach entrance at 8:00 AM.',
    images: [
      'https://images.unsplash.com/photo-1618477461853-488b0a9cdcf8?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800'
    ],
    features: { beds: 'N/A', baths: 'N/A', yearBuilt: 'N/A', furnished: 'N/A', petsAllowed: 'N/A', pool: 'N/A', view: 'N/A' },
    seller: { name: 'Cayman Green Initiative', memberSince: 'Member since Jan 2020', phone: '+1 (345) 555-0011' }
  },
};


const API = 'http://localhost:5000';

// Helper: resolve image URL (uploaded files start with /uploads/)
const imgSrc = (url) => url?.startsWith('/uploads/') ? `${API}${url}` : url;

export default function AdDetailPage() {
  const { id } = useParams();

  // Detect if id is a MongoDB ObjectId (24-char hex) or a numeric dummy id
  const isMongoId = /^[a-f\d]{24}$/i.test(id);

  const [ad, setAd] = useState(isMongoId ? null : (adDetailsData[id] || adDetailsData[1]));
  const [loading, setLoading] = useState(isMongoId);
  const [fetchError, setFetchError] = useState('');

  useEffect(() => {
    if (!isMongoId) return;
    setLoading(true);
    fetch(`${API}/api/ads/${id}`)
      .then(r => {
        if (!r.ok) throw new Error('Ad not found');
        return r.json();
      })
      .then(data => { setAd(data); setLoading(false); })
      .catch(err => { setFetchError(err.message); setLoading(false); });
  }, [id, isMongoId]);

  const [selectedImage, setSelectedImage] = useState(null);
  const [isMsgModalOpen, setIsMsgModalOpen] = useState(false);
  const [msgSent, setMsgSent] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isViewingModalOpen, setIsViewingModalOpen] = useState(false);
  const [viewingBooked, setViewingBooked] = useState(false);

  // ── Loading / Error states ─────────────────────────────────────
  if (loading) return (
    <div className="ad-detail-page container" style={{display:'flex',justifyContent:'center',alignItems:'center',minHeight:'50vh'}}>
      <motion.div animate={{rotate:360}} transition={{duration:1,repeat:Infinity,ease:'linear'}} style={{width:48,height:48,border:'4px solid #e2e8f0',borderTopColor:'#3b82f6',borderRadius:'50%'}} />
    </div>
  );
  if (fetchError || !ad) return (
    <div className="ad-detail-page container" style={{textAlign:'center',paddingTop:'4rem'}}>
      <h2>Ad not found</h2>
      <Link to="/" className="btn-primary" style={{marginTop:'1rem',display:'inline-block'}}>← Back to Home</Link>
    </div>
  );

  const handleSendMessage = (e) => {
    e.preventDefault();
    setMsgSent(true);
    setTimeout(() => {
      setIsMsgModalOpen(false);
      setMsgSent(false);
    }, 2000);
  };

  const handleBookViewing = (e) => {
    e.preventDefault();
    setViewingBooked(true);
    setTimeout(() => {
      setIsViewingModalOpen(false);
      setViewingBooked(false);
    }, 2500);
  };

  return (
    <motion.div 
      className="ad-detail-page container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div 
          className="lightbox-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div 
            className="lightbox-content"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
          >
            <img src={selectedImage} alt="Full view" />
            <button className="close-lightbox">✕</button>
          </motion.div>
        </motion.div>
      )}

      {/* Message Modal */}
      {isMsgModalOpen && (
        <motion.div className="lightbox-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <motion.div className="message-modal glass-card" initial={{ y: 50 }} animate={{ y: 0 }}>
            {!msgSent ? (
              <>
                <h3>Send Message to {ad.seller.name}</h3>
                <form onSubmit={handleSendMessage}>
                  <textarea placeholder="Write your message here..." required></textarea>
                  <div className="modal-actions">
                    <button type="button" className="btn-cancel" onClick={() => setIsMsgModalOpen(false)}>Cancel</button>
                    <button type="submit" className="btn-primary">Send Message</button>
                  </div>
                </form>
              </>
            ) : (
              <div className="success-msg">
                <div className="success-icon">✔️</div>
                <h3>Message Sent!</h3>
                <p>The seller will contact you shortly.</p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}

      {/* Viewing / Interview Booking Modal */}
      {isViewingModalOpen && (
        <motion.div className="lightbox-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <motion.div className="message-modal glass-card" initial={{ y: 50 }} animate={{ y: 0 }}>
            {!viewingBooked ? (
              <>
                <h3>{ad.category === 'Jobs' ? 'Schedule an Interview' : 'Request a Viewing'}</h3>
                <p style={{marginBottom: '1.5rem', color: '#64748b'}}>
                  {ad.category === 'Jobs' 
                    ? 'Select your preferred date and time for a preliminary interview.' 
                    : 'Select your preferred date and time to visit this property.'}
                </p>
                <form onSubmit={handleBookViewing}>
                  <div className="form-group-row">
                    <div className="input-box">
                      <label>Date</label>
                      <input type="date" required />
                    </div>
                    <div className="input-box">
                      <label>Time</label>
                      <input type="time" required />
                    </div>
                  </div>
                  <div className="modal-actions" style={{marginTop: '1.5rem'}}>
                    <button type="button" className="btn-cancel" onClick={() => setIsViewingModalOpen(false)}>Cancel</button>
                    <button type="submit" className="btn-primary">
                      {ad.category === 'Jobs' ? 'Request Interview' : 'Request Booking'}
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="success-msg">
                <div className="success-icon">{ad.category === 'Jobs' ? '🤝' : '📅'}</div>
                <h3>{ad.category === 'Jobs' ? 'Interview Requested!' : 'Viewing Requested!'}</h3>
                <p>The {ad.category === 'Jobs' ? 'employer' : 'seller'} will confirm your appointment soon.</p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}

      <div className="breadcrumb">
        <Link to="/">Home</Link> / <Link to={`/category/${ad.category.toLowerCase().replace(/ /g, '-')}`}>{ad.category}</Link> / <span>{ad.title}</span>
      </div>

      <div className="ad-detail-grid">
        <div className="ad-main-content">
          {/* Enhanced Image Gallery Grid */}
          <motion.div 
            className="ad-gallery-container"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {ad.images && ad.images.length > 1 ? (
              <div className="image-grid-premium">
                <motion.div 
                  className="main-img-large" 
                  whileHover={{ scale: 1.01 }}
                  onClick={() => setSelectedImage(imgSrc(ad.images[0]))}
                >
                  <img src={imgSrc(ad.images[0])} alt={ad.title} />
                </motion.div>
                <div className="side-imgs-grid">
                  {ad.images.slice(1, 5).map((img, i) => (
                    <motion.div 
                      key={i} 
                      className="small-img-box"
                      whileHover={{ scale: 1.05, zIndex: 10 }}
                      onClick={() => setSelectedImage(imgSrc(img))}
                    >
                      <img src={imgSrc(img)} alt={`${ad.title} ${i+1}`} />
                      {i === 3 && ad.images.length > 5 && (
                        <div className="more-imgs-overlay">+{ad.images.length - 5} photos</div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            ) : ad.images && ad.images.length === 1 ? (
              <div className="ad-gallery glass-card" onClick={() => setSelectedImage(imgSrc(ad.images[0]))}>
                <img src={imgSrc(ad.images[0])} alt={ad.title} className="main-ad-image" />
              </div>
            ) : (
              <div className="ad-gallery glass-card" style={{display:'flex',alignItems:'center',justifyContent:'center',minHeight:200,background:'#f1f5f9',borderRadius:'1rem'}}>
                <span style={{fontSize:'3rem'}}>🏠</span>
              </div>
            )}
          </motion.div>

          <motion.div 
            className="ad-description-box glass-card"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="description-header">
              <h2>About this property</h2>
              <div className="posted-badge">Updated {ad.posted}</div>
            </div>
            <p className="description-text">{ad.description}</p>
            
            {ad.features && (
              <div className="property-features-section">
                <h3>Key Features</h3>
                <div className="features-grid">
                  <div className="feature-tile">
                    <span className="tile-icon">🛏️</span>
                    <div className="tile-info">
                      <span className="tile-label">Beds</span>
                      <span className="tile-value">{ad.features.beds}</span>
                    </div>
                  </div>
                  <div className="feature-tile">
                    <span className="tile-icon">🛁</span>
                    <div className="tile-info">
                      <span className="tile-label">Baths</span>
                      <span className="tile-value">{ad.features.baths}</span>
                    </div>
                  </div>
                  <div className="feature-tile">
                    <span className="tile-icon">🏗️</span>
                    <div className="tile-info">
                      <span className="tile-label">Built</span>
                      <span className="tile-value">{ad.features.yearBuilt}</span>
                    </div>
                  </div>
                  <div className="feature-tile">
                    <span className="tile-icon">🏊</span>
                    <div className="tile-info">
                      <span className="tile-label">Pool</span>
                      <span className="tile-value">{ad.features.pool}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="ad-meta-info">
              <div className="meta-badge">#{ad.category}</div>
              <div className="meta-badge">📍 {ad.location}</div>
            </div>
          </motion.div>
        </div>

        <div className="ad-sidebar">
          <motion.div 
            className="ad-price-card glass-card"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="sidebar-header-row">
              <h1 className="detail-price">{ad.price}</h1>
              <motion.button 
                className={`btn-save-ad ${isSaved ? 'saved' : ''}`}
                onClick={() => setIsSaved(!isSaved)}
                whileTap={{ scale: 0.8 }}
              >
                {isSaved ? '❤️' : '🤍'}
              </motion.button>
            </div>
            <h2 className="detail-title">{ad.title}</h2>
            <p className="detail-location-text">📍 {ad.location}</p>
            
            <div className="sidebar-action-btns">
              <motion.button 
                className="btn-primary contact-btn" 
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }}
                onClick={() => alert(`Contacting ${ad.seller.name} at ${ad.seller.phone}...`)}
              >
                Contact Seller
              </motion.button>
              <motion.button 
                className="btn-secondary-outline message-btn" 
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsMsgModalOpen(true)}
              >
                Message
              </motion.button>

              {(ad.category === 'Real Estate' || ad.category === 'Jobs') && (
                <motion.button 
                  className="btn-viewing"
                  style={{
                    marginTop: '0.5rem',
                    background: ad.category === 'Jobs' ? '#eff6ff' : '#fdf2f8',
                    color: ad.category === 'Jobs' ? '#3b82f6' : '#db2777',
                    borderColor: ad.category === 'Jobs' ? '#3b82f6' : '#f472b6'
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsViewingModalOpen(true)}
                >
                  {ad.category === 'Jobs' ? '🤝 Book Interview' : '📅 Book a Viewing'}
                </motion.button>
              )}
            </div>
          </motion.div>

          <motion.div 
            className="seller-card-premium glass-card"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="seller-header-main">
              <div className="seller-avatar-premium">
                {ad.seller.name.charAt(0)}
              </div>
              <div className="seller-title-box">
                <h4>{ad.seller.name}</h4>
                <p>{ad.seller.memberSince}</p>
              </div>
            </div>
            
            <div className="seller-stats">
              <div className="stat-item">
                <span className="stat-num">4.9</span>
                <span className="stat-label">Rating</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">12</span>
                <span className="stat-label">Ads</span>
              </div>
            </div>

            <div className="seller-phone-box">
              <span>📞 {ad.seller.phone}</span>
            </div>
            
            <Link 
              to={`/seller/${ad.seller.name}`} 
              className="btn-view-profile" 
              style={{display: 'block', width: '100%', textAlign: 'center', color: '#3b82f6', fontWeight: '800', fontSize: '0.95rem', textDecoration: 'none', marginTop: '1rem'}}
            >
              View Profile
            </Link>
          </motion.div>

          <motion.div 
            className="safety-card-premium glass-card"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h4>Safety Tips</h4>
            <div className="safety-steps">
              <div className="step">✓ Meet in a public place</div>
              <div className="step">✓ Check item quality</div>
              <div className="step">✓ No advance payments</div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
