import { GridItemInterface } from "@/config/site-config";
import Link from "next/link";
import Image from "next/image";
import { Play } from "lucide-react";

interface VideoItem {
  title: string;
  link: string;
  thumbnail: string;
  views?: string;
}

const FeaturedVideos = ({ item }: { item: GridItemInterface }) => {
  // Esta lista seria populada com dados reais do seu canal
  const featuredVideos: VideoItem[] = [
    {
      title: "O que é Potência Aeróbica na Corrida? Porque não gastar tempo nessa zona?",
      link: "https://youtu.be/nKDbfljUgAY",
      thumbnail: "/videos/potencia.jpg",
      views: "10k visualizações",
    },
    {
      title: "Mente de Corredor: Um Guia para a Corrida Consciente",
      link: "https://youtu.be/cfu-FxRjIDQ",
      thumbnail: "/videos/mente.jpg",
      views: "2.7k visualizações",
    },
    {
      title: "Tempo de Contato com o Solo",
      link: "https://youtu.be/b0r_8KL6PNI",
      thumbnail: "/videos/contato.jpg",
      views: "2.5k visualizações",
    },
    {
      title: "O segredo dos corredores quenianos",
      link: "https://youtu.be/AZVo04C0EWU",
      thumbnail: "/videos/quenia.jpg",
      views: "12k visualizações",
    },
    {
      title: "O segredo dos corredores quenianos",
      link: "https://youtu.be/AZVo04C0EWU",
      thumbnail: "/videos/quenia.jpg",
      views: "12k visualizações",
    },
    {
      title: "O segredo dos corredores quenianos",
      link: "https://youtu.be/AZVo04C0EWU",
      thumbnail: "/videos/quenia.jpg",
      views: "12k visualizações",
    },
    {
      title: "O segredo dos corredores quenianos",
      link: "https://youtu.be/AZVo04C0EWU",
      thumbnail: "/videos/quenia.jpg",
      views: "12k visualizações",
    },
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Header Section */}
      <div className="p-4 border-b border-neutral-200 dark:border-neutral-800">
        {/* Title and Icon */}
        <div className="flex items-center gap-3">
          <div className="p-2 bg-red-600 rounded-lg">
            <Play size={20} className="text-white" />
          </div>
          <h2 className="text-lg font-semibold">{item.title}</h2>
        </div>

        {/* Description */}
        {item.description && (
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            {item.description}
          </p>
        )}
      </div>

      {/* Videos List */}
      <div className="flex-1 overflow-y-auto">
        {featuredVideos.map((video, index) => (
          <Link
            href={video.link}
            key={index}
            className="flex items-start gap-3 p-2 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
            target="_blank"
          >
            {/* Thumbnail - Ajustado para proporção 16:9 */}
            <div className="relative flex-shrink-0 w-32 overflow-hidden rounded-lg">
              <div className="pb-[56.25%]">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="absolute object-cover"
                  sizes="(max-width: 120px) 100vw, 120px"
                />
              </div>
            </div>

            {/* Video Info */}
            <div className="flex flex-col flex-1 py-1">
              <h3 className="font-medium line-clamp-2 text-sm">
                {video.title}
              </h3>
              {video.views && (
                <span className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
                  {video.views}
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedVideos;
