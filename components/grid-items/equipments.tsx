import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { GridItemInterface } from '@/config/site-config';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import Button from '../button';
import Link from 'next/link';

interface Props {
  item: GridItemInterface;
}

const ImageComparison: React.FC<Props> = ({ item }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const images = Array.isArray(item.images) ? item.images.filter(Boolean) : [];

  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setVisible(false);
        setTimeout(() => {
          setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
          setVisible(true);
        }, 500);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [images.length]);

  useEffect(() => {
    setVisible(true);
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const getContainerHeight = () => {
    switch (item.layout) {
      case '2x8':
        return 'h-[650px]';
      case '2x6':
        return 'h-[480px]';  
      case '2x4':
        return 'h-[400px]';
      case '2x2':
        return 'h-[310px]';
      default:
        return 'h-full';
    }
  };

  const renderMedia = () => {
    const containerHeight = getContainerHeight();
    
    if (item.video) {
      return (
        <div className={`relative flex flex-col items-end justify-end w-full ${containerHeight} overflow-hidden group`}>
          <div className="absolute inset-0 z-10 bg-linear-to-b from-transparent via-neutral-950/98 to-neutral-950/99" />
          <video
            ref={videoRef}
            className="absolute inset-0 z-0 w-full h-full object-cover"
            src={item.video}
            autoPlay
            loop
            muted={isMuted}
            playsInline
          />
          
          {/* Video Controls */}
          <div className="absolute bottom-0 left-0 right-0 z-20 p-4 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={togglePlay}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? 
                <Pause size={20} className="text-white" /> : 
                <Play size={20} className="text-white" />
              }
            </button>
            
            <button
              onClick={toggleMute}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? 
                <VolumeX size={20} className="text-white" /> : 
                <Volume2 size={20} className="text-white" />
              }
            </button>
          </div>
        </div>
      );
    } else if (images.length > 0 || item.image) {
      return (
        <div className={`relative w-full ${containerHeight}`}>
          <Image
            className={`absolute inset-0 object-cover transition-opacity duration-500 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'}`}
            src={images.length > 0 ? images[imageIndex] : item.image || ''}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={true}
            quality={90}
          />
        </div>
      );
    }
    return null;
  };

  const content = (
    <div className="flex flex-col w-full h-full overflow-hidden rounded-lg">
      {renderMedia()}
      <div className="relative z-20 w-full p-4 space-y-3 md:p-4 bg-white dark:bg-neutral-900">
        <div className="flex items-center justify-between gap-4">
          <div className="text-base font-normal text-black dark:text-white">{item.title}</div>
          {item.buttonTitle && (
            <Button
              text={item.buttonTitle}
              secondaryText={item.buttonSecondaryText}
              color={item.color || "#000"}
            />
          )}
        </div>
        {item.description && (
          <div className="text-sm text-neutral-600 dark:text-neutral-400">
            {item.description}
          </div>
        )}
        {item.equipments && item.equipments.length > 0 && (
          <div className="flex flex-wrap items-center gap-2">
            {item.equipments.map((equipment, index) => (
              <div
                className="px-2 py-1 text-[10px] sm:text-sm font-normal bg-gray-200 rounded-lg dark:bg-neutral-700"
                key={index}
              >
                {equipment.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return item.buttonLink ? (
    <Link href={item.buttonLink} target="_blank" className="block h-full">
      {content}
    </Link>
  ) : (
    content
  );
};

export default ImageComparison;