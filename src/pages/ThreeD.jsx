import React, { useMemo, useState } from 'react';
import PortfolioCard from '../components/PortfolioCard';
import Lightbox from '../components/Lightbox';



// helper: extract YouTube video id from URL (supports youtu.be and youtube.com forms)
const getYouTubeId = (url) => {
  if (!url) return null;
  const patterns = [
    /(?:youtube\.com\/.*v=|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
    /youtu\.be\/([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m && m[1]) return m[1];
  }
  // fallback: try to parse query param v
  try {
    const u = new URL(url);
    const v = u.searchParams.get('v');
    if (v && v.length === 11) return v;
  } catch {
    // ignore
  }
  return null;
};

const VideoModal = ({ item, onClose }) => {
  const ytId = getYouTubeId(item.video);
  const isYouTube = Boolean(ytId);
  const isDirectVideo = item.video && !isYouTube;

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col lg:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full lg:w-1/2 bg-black flex items-center justify-center p-4 overflow-auto">
          {/* If YouTube link -> use iframe embed, else direct video element.
              Use a fixed aspect ratio and max-height so the player doesn't push modal height. */}
          {isYouTube ? (
            <div className="w-full max-h-[75vh]">
              <div className="w-full aspect-video max-h-[75vh]">
                <iframe
                  title={item.title}
                  src={`https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0&modestbranding=1`}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ) : isDirectVideo ? (
            <video
              src={item.video}
              controls
              autoPlay
              className="w-full h-auto max-h-[75vh] object-contain"
            />
          ) : (
            // fallback: show image if no playable video URL
            <img src={item.thumbnail ?? item.image} alt={item.title} className="w-full h-auto max-h-[75vh] object-contain" />
          )}
        </div>

        <div className="p-6 lg:w-1/2 flex flex-col justify-center space-y-4 overflow-y-auto">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 bg-amber-100 text-amber-700 text-sm font-medium rounded-full">
              {item.category}
            </span>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-slate-100">
              ✕
            </button>
          </div>

          <h2 className="text-2xl font-bold text-slate-800">{item.title}</h2>
          <p className="text-slate-600">{item.description}</p>

          <div className="pt-4 border-t border-slate-200">
            <div className="text-sm text-slate-500">Year</div>
            <div className="font-medium text-slate-700">{item.year}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ThreeD = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [filter, setFilter] = useState('All');

  // Add videos by setting the `video` field and optionally `thumbnail`.
  // Video items will appear at the top of the grid automatically.
  const threeDItems = [
    {
      id: 1,
      title: "Isometric Room",
      category: "3D Modeling",
      description: "Isometric 3D room design with detailed furniture and decor elements.",
      image: "https://drive.google.com/thumbnail?id=1l3jSiFGFWJ9Lu7N-f-9NSEd3w3j-dWJ2&sz=w2000",
      year: "2024"
    },
    {
      id: 2,
      title: "Mouse Model",
      category: "3D Modeling",
      description: "Detailed 3D model of a computer mouse with realistic textures.",
      image: "https://drive.google.com/thumbnail?id=1XKp5uY-uDpSO-aAKJstfC2gF-YVh3VTm&sz=w2000",
      year: "2024"
    },
    // Example YouTube video item (replace with your YouTube URL)
    {
      id: 3,
      title: "Frostmorne Animation",
      category: "3D Animation",
      description: "3D animation showcasing the Frostmorne sword with dynamic lighting effects.",
      image: "https://drive.google.com/thumbnail?id=1lsO86Y7t57dBsYjQ-XeSjkfIAlQAjtiO&sz=w2000",
      thumbnail: "https://drive.google.com/thumbnail?id=1lsO86Y7t57dBsYjQ-XeSjkfIAlQAjtiO&sz=w2000",
      video: "https://youtu.be/00clnLLHLQM",
      year: "2024"
    },
    {
      id: 4,
      title: "Solar System",
      category: "3D Animation",
      description: "Animation of the solar system with orbiting planets and realistic textures.",
      image: "https://drive.google.com/thumbnail?id=1wpYyopxkhGdW1WNXsok2Rl9RqjKIsE1u&sz=w2000",
      thumbnail: "https://drive.google.com/thumbnail?id=1wpYyopxkhGdW1WNXsok2Rl9RqjKIsE1u&sz=w2000",
      video: "https://youtu.be/Us_-tarO1XA",
      year: "2024"
    },
    {
      id: 5,
      title: "Isometric Room",
      category: "3D Modeling",
      description: "Isometric 3D room design with detailed furniture and decor elements.",
      image: "https://drive.google.com/thumbnail?id=1WgbFKz8lXSdel8DIW-aprcLAUWCklpa_&sz=w2000",
      year: "2023"
    },
    {
      id: 6,
      title: "Lock Model",
      category: "3D Modeling",
      description: "Detailed 3D model of a padlock with metallic textures and reflections.",
      image: "https://drive.google.com/thumbnail?id=1H3QZ2YqYkNQk8yKgwLK73k0_hbHSpLoz&sz=w2000",
      year: "2023"
    },
    {
      id: 7,
      title: "Black Hole Animation",
      category: "3D Animation",
      description: "a black hole with swirling accretion disk and gravitational lensing effects.",
      image: "https://drive.google.com/thumbnail?id=1U4BMHarPdR2w_KyzeBwzKP7ixSdoW6k9&sz=w2000",
      thumbnail: "https://drive.google.com/thumbnail?id=1U4BMHarPdR2w_KyzeBwzKP7ixSdoW6k9&sz=w2000",
      video: "https://youtu.be/3xlnqslPvN8",
      year: "2024"
    },
    {
      id: 8,
      title: "Mini Factroy",
      category: "3D Animation",
      description: "A mini factory setup with animated machinery and conveyor belts.",
      image: "https://drive.google.com/thumbnail?id=1mqD7Js1Cr5bYWotw03S9pg5UuLrUcfIC&sz=w2000",
      thumbnail: "https://drive.google.com/thumbnail?id=1mqD7Js1Cr5bYWotw03S9pg5UuLrUcfIC&sz=w2000",
      video: "https://youtu.be/zcX8AImoPEc",
      year: "2024"
    },
    {
      id: 9,
      title: "Earth Animation",
      category: "3D Animation",
      description: "3D animation of the Earth rotating with realistic cloud and an orbiting moon.",
      image: "https://drive.google.com/thumbnail?id=1ZRh0n5gmTXnCZ9BVC60QG7q6C_asHNvQ&sz=w2000",
      thumbnail: "https://drive.google.com/thumbnail?id=1ZRh0n5gmTXnCZ9BVC60QG7q6C_asHNvQ&sz=w2000",
      video: "https://youtu.be/sViUADlXFuY",
      year: "2024"
    },
    {
      id: 10,
      title: "Headset Animation",
      category: "3D Animation",
      description: "3D animation of a gaming headset rotating to showcase its design and features.",
      image: "https://drive.google.com/thumbnail?id=1Fk7mgAFkAKajxuUNaAt_7tgqKVIama7P&sz=w2000",
      thumbnail: "https://drive.google.com/thumbnail?id=1Fk7mgAFkAKajxuUNaAt_7tgqKVIama7P&sz=w2000",
      video: "https://youtube.com/shorts/nkbERcgxSmU",
      year: "2024"
    },
    {
      id: 11,
      title: "Isometric Room",
      category: "3D Modeling",
      description: "Isometric 3D room design with detailed furniture and decor elements.",
      image: "https://drive.google.com/thumbnail?id=197Q5cgzB_ODWDes_RPha7NfxzRI0z_0p&sz=w2000",
      year: "2023"
    },
    {
      id: 12,
      title: "Key Ring Model",
      category: "3D Modeling",
      description: "Detailed 3D model of a key ring with realistic metal textures.",
      image: "https://drive.google.com/thumbnail?id=13ZnTj8T5RDaVGAtshsFSTTQvpVzttfcV&sz=w2000",
      year: "2024"
    },
  ];

  // Ensure videos appear first (stable sort: videos -> non-videos)
  const sortedItems = [...threeDItems].sort((a, b) => {
    const aHas = a.video ? 1 : 0;
    const bHas = b.video ? 1 : 0;
    return bHas - aHas; // video items (1) come before non-video (0)
  });

  // categories derived from items (keeps order stable)
  const categories = useMemo(() => {
    const cats = Array.from(new Set(threeDItems.map((i) => i.category)));
    return ['All', ...cats];
  }, [threeDItems]);

  // filtered list according to selected category
  const filteredItems = useMemo(
    () => sortedItems.filter((i) => filter === 'All' || i.category === filter),
    [sortedItems, filter]
  );

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            3D Design & Visualization
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Immersive 3D designs that bring concepts to life through detailed modeling,
            realistic rendering, and dynamic animations.
          </p>
        </div>

        {/* Category filter */}
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
            <div key={item.id} className="relative">


              {/* PortfolioCard can still be used if it displays item.image/thumbnail */}
              <div onClick={() => setSelectedItem(item)} className="cursor-pointer">
                <PortfolioCard
                  item={{
                    id: item.id,
                    title: item.title,
                    category: item.category,
                    description: item.description,
                    image: item.thumbnail ?? item.image,
                    year: item.year
                  }}
                  onClick={() => setSelectedItem(item)}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Modal: if selected item has video open VideoModal, else open existing Lightbox */}
        {selectedItem && (
          selectedItem.video ? (
            <VideoModal item={selectedItem} onClose={() => setSelectedItem(null)} />
          ) : (
            <Lightbox item={selectedItem} onClose={() => setSelectedItem(null)} />
          )
        )}
      </div>
    </div>
  );
};

export default ThreeD;