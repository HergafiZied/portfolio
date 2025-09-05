import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { X } from 'phosphor-react';

const Lightbox = ({ item, onClose }) => {
  const [isImageFull, setIsImageFull] = useState(false);
  const modalRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        if (isImageFull) {
          setIsImageFull(false);
        } else {
          onClose();
        }
      }
    };

    document.addEventListener('keydown', handleEscape);
    // prevent background scroll while lightbox is open
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, isImageFull]);

  const checkOverflow = () => {
    const el = modalRef.current;
    if (!el) return;
    // compare scrollHeight against clientHeight to detect vertical overflow
    setIsOverflowing(el.scrollHeight > el.clientHeight);
  };

  // measure after layout and on resize / image change
  useLayoutEffect(() => {
    checkOverflow();
    const onResize = () => checkOverflow();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [item.image]);

  return (
    <>
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        style={{ zIndex: 1000 }}
        onClick={onClose} // close when clicking the blurred/backdrop area
      >
        {/* stop clicks inside the modal from bubbling to the backdrop */}
        <div
          ref={modalRef}
          className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 lg:h-full object-cover cursor-zoom-in"
                onLoad={() => setTimeout(checkOverflow, 0)}
                onClick={() => setIsImageFull(true)}
              />
            </div>

            {/* when overflowing, align details to the top; otherwise center vertically */}
            <div
              className={`p-8 flex flex-col ${isOverflowing ? 'justify-start' : 'justify-center'} space-y-6`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 text-sm font-medium rounded-full">
                    {item.category}
                  </span>
                  {/* Close button placed where the year used to be */}
                  <button
                    onClick={onClose}
                    aria-label="Close"
                    className="p-2 rounded-full hover:bg-slate-100 transition-colors"
                  >
                    <X size={20} className="text-slate-600" />
                  </button>
                </div>

                <h2 className="text-3xl font-bold text-slate-800">{item.title}</h2>

                <p className="text-slate-600 leading-relaxed text-lg">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <h3 className="text-sm font-semibold text-slate-800 mb-3 uppercase tracking-wide">
                  Project Details
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-slate-500">Category:</span>
                    <p className="font-medium text-slate-700">{item.category}</p>
                  </div>
                  <div>
                    <span className="text-slate-500">Year:</span>
                    <p className="font-medium text-slate-700">{item.year}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen image overlay */}
      {isImageFull && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center p-4"
          style={{ zIndex: 1100 }}
          onClick={() => setIsImageFull(false)}
          aria-modal="true"
          role="dialog"
        >
          <img
            src={item.image}
            alt={item.title}
            className="max-w-full max-h-full object-contain cursor-zoom-out"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setIsImageFull(false)}
            aria-label="Close fullscreen image"
            className="absolute top-4 right-4 z-70 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-200 hover:scale-110"
          >
            <X size={24} className="text-slate-800" />
          </button>
        </div>
      )}
    </>
  );
};

export default Lightbox;