import React, { useState } from 'react';
import PortfolioCard from '../components/PortfolioCard';
import Lightbox from '../components/Lightbox';



const Designs = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [filter, setFilter] = useState('All');

  const portfolioItems = [

    {
      id: 1,
      title: "Deep Flow",
      category: "Logo Design",
      description: "Minimalist logo design for a technology startup focusing on consulting.",
      image: "https://drive.google.com/thumbnail?id=1EkSf_V_PderfN1hyde3MtFicRiYBth1T&sz=w2000",
      year: "2025"
    },
    {
      id: 2,
      title: "Deep Flow",
      category: "Logo Design",
      description: "Minimalist logo design for a technology startup focusing on consulting.",
      image: "https://drive.google.com/thumbnail?id=1rhPLEXT6gu_NZb05Fx1uc-zSAOqryLIp&sz=w2000",
      year: "2025"
    },
    {
      id: 3,
      title: "Simple Fix",
      category: "Social Media Design",
      description: "Clean and modern E-commerce post .",
      image: "https://drive.google.com/thumbnail?id=1yiF4X3qB55fAHoxQCImGHbLgX6bziyap&sz=w2000",
      year: "2025"
    },
    {
      id: 4,
      title: "New Committee",
      category: "Social Media Design",
      description: "social media post for IGSC new committee.",
      image: "https://drive.google.com/thumbnail?id=1A3WLbXRMvLoQdOO5Wwah51wXCaMLFa9n&sz=h2000",
      year: "2024"
    },
    {
      id: 5,
      title: "CodeSell Hakathon",
      category: "Logo Design",
      description: "Modern logo for a hakathon event.",
      image: "https://drive.google.com/thumbnail?id=1jPDk1gcadUR19VZUjOjXXXRJ1LUD4kG7&sz=h2000",
      year: "2023"
    }, {
      id: 6,
      title: "Aid Mubarak",
      category: "Social Media Design",
      description: "A festive social media post for Aid Mubarak celebration.",
      image: "https://drive.google.com/thumbnail?id=13_bfeIUbmDn0_hEnbFuV6nMFj8EylGN2&sz=w2000",
      year: "2023"
    },
    {
      id: 7,
      title: "GIG Competition",
      category: "Social Media Design",
      description: "cool looking design for a design competiton.",
      image: "https://drive.google.com/thumbnail?id=1S7Q_PZpbh6ezyhGLsJxAZGN4x1d0X327&sz=h2000",
      year: "2024"
    },

    {
      id: 8,
      title: "Discord event",
      category: "Social Media Design",
      description: "A vibrant social media post for a Discord event.",
      image: "https://drive.google.com/thumbnail?id=16H6PhF91uIbZOHjs3SS2KowKpZz54_E-&sz=w2000",
      year: "2023"
    },
    {
      id: 9,
      title: "Ramadhan Kareem",
      category: "Social Media Design",
      description: "A festive social media post for Ramadhan Kareem celebration.",
      image: "https://drive.google.com/thumbnail?id=1z9Z8eMkPbc7tJHujFQkv11lhrAYGuxFi&sz=w2000",
      year: "2023"
    },
    {
      id: 10,
      title: "Hakathon preparation",
      category: "Social Media Design",
      description: "A vibrant social media post for a Hakathon preparation event.",
      image: "https://drive.google.com/thumbnail?id=1BzFNyKagJkCH5Z9pYL2vYyMSqGH09xPD&sz=w2000",
      year: "2023"
    },
    {
      id: 11,
      title: "Game Fest",
      category: "Social Media Design",
      description: "A vibrant social media post for a Game Fest event announcement.",
      image: "https://drive.google.com/thumbnail?id=1dMGfjfia6uBwC6shvIZ4CJMQ6zBIJLiC&sz=w2000",
      year: "2023"
    },
    {
      id: 12,
      title: "Google Developer Student Club IPSAS",
      category: "Logo Design",
      description: "Modern logo for a student developer club.",
      image: "https://drive.google.com/thumbnail?id=18dpiFUJI6YTMzEX4JPuTVlI_cqKXWs7Y&sz=w2000",
      year: "2024"
    },
    {
      id: 13,
      title: "CodeCell Banner",
      category: "Print Design",
      description: "A professional banner for a coding event.",
      image: "https://drive.google.com/thumbnail?id=12vum2VOQtsGpSBsQnxIDSKwBQrq7R_Ly&sz=w2000",
      year: "2023"
    },
    {
      id: 14,
      title: "IGSC Banner",
      category: "Print Design",
      description: "A professional banner for a student club.",
      image: "https://drive.google.com/thumbnail?id=1AfpdiAswqYIv8jRJuqbXxzoyghYOMg94&sz=w2000",
      year: "2024"
    },
    {
      id: 15,
      title: "Reminder Poster",
      category: "Social Media Design",
      description: "A minimalist reminder poster design.",
      image: "https://drive.google.com/thumbnail?id=1EB0IpZN1kSUbwEOv75ma1iZihCysW-VQ&sz=w2000",
      year: "2024"
    },
    {
      id: 16,
      title: "CodeSell Event",
      category: "Social Media Design",
      description: "A vibrant social media post for a CodeSell event.",
      image: "https://drive.google.com/thumbnail?id=1D592M9RI7f3gnswJe2IJsDR7l5RdKT9P&sz=w2000",
      year: "2023"
    },
    {
      id: 17,
      title: "AI day",
      category: "Social Media Design",
      description: "A vibrant social media post for an AI day event.",
      image: "https://drive.google.com/thumbnail?id=1GkdUB67TBhoPivBTmAk8bc6nVw5V7tIL&sz=w2000",
      year: "2024"
    },
    {
      id: 18,
      title: "Game Fest Planning",
      category: "Social Media Design",
      description: "A vibrant social media post for Game Fest planning event.",
      image: "https://drive.google.com/thumbnail?id=11OTYYTM3p0kq46Io0SeByI1M3TczdONA&sz=w2000",
      year: "2024"
    },
    {
      id: 19,
      title: "AI Day Planning",
      category: "Social Media Design",
      description: "A vibrant social media post for an AI day planning event.",
      image: "https://drive.google.com/thumbnail?id=1z_FZgGmrTWRypMCAdsoX-YeZmb-XPrKY&sz=w2000",
      year: "2024"
    },
    {
      id: 20,
      title: "AI Day Speaker",
      category: "Social Media Design",
      description: "A vibrant social media post for an AI day speaker announcement.",
      image: "https://drive.google.com/thumbnail?id=1yrljnpsw6eZ7mFj0ya2o1a1oGQUcGYyN&sz=w2000",
      year: "2024"
    },
    {
      id: 21,
      title: "Web Workshop",
      category: "Social Media Design",
      description: "A vibrant social media post for a web workshop event.",
      image: "https://drive.google.com/thumbnail?id=1kWphQpGDCfxtk0uCAsPgR716WByR_grI&sz=w2000",
      year: "2024"
    },
    {
      id: 22,
      title: "CodeSell Stand",
      category: "Social Media Design",
      description: "A vibrant social media post for a CodeSell stand event.",
      image: "https://drive.google.com/thumbnail?id=1j4DCEtNthCFWMIan_MpHwZ554GEvCMm8&sz=w2000",
      year: "2023"
    },
    {
      id: 23,
      title: "IGSC Hiring",
      category: "Social Media Design",
      description: "A vibrant social media post for IGSC hiring announcement.",
      image: "https://drive.google.com/thumbnail?id=1EKAyqlWlLjlwhsAgfx00_PMcM04dqfAs&sz=w2000",
      year: "2024"
    },
    {
      id: 24,
      title: "Master Faster Banner",
      category: "Print Design",
      description: "A professional banner for Master Faster event.",
      image: "https://drive.google.com/thumbnail?id=1DMP6kpvt2NnvV03KpfwhEWEP6ic0sFr1&sz=w2000",
      year: "2024"
    },
    {
      id: 25,
      title: "CodeSell rollup",
      category: "Print Design",
      description: "A professional rollup for a coding event.",
      image: "https://drive.google.com/thumbnail?id=1C3ZJ-_UtLpxp6g7ivYlN2ZO0qJy8frQp&sz=w2000",
      year: "2023"
    },
  ];

  const categories = ['All', 'Social Media Design', 'Logo Design', 'Print Design'];

  const filteredItems = filter === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === filter);

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Design Portfolio
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A curated collection of my graphic design work, showcasing Social Media graphics,
            logo designs, and print materials crafted with attention to detail.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${filter === category
                ? 'bg-amber-500 text-white shadow-lg'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-amber-300 hover:text-amber-600'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <PortfolioCard
              key={item.id}
              item={item}
              onClick={() => setSelectedItem(item)}
            />
          ))}
        </div>

        {/* Lightbox */}
        {selectedItem && (
          <Lightbox
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Designs;