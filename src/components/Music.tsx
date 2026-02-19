import igThumbnail from '../assets/ig_thumbnail copy.png';
import tiktokThumbnail from '../assets/tiktok_thumbnail copy.png';
import youtubeThumbnail from '../assets/youtube_thumbnail copy.png';

interface MediaItem {
  id: number;
  type: 'youtube' | 'instagram' | 'tiktok';
  thumbnailUrl: string;
  videoUrl: string;
  title: string;
  description: string;
}

const Music = () => {
  const bars = Array.from({ length: 60 }, (_, i) => i);

  const mediaItems: MediaItem[] = [
    {
      id: 1,
      type: 'instagram',
      thumbnailUrl: igThumbnail,
      videoUrl: 'https://www.instagram.com/reel/DLspnCvIXAn/',
      title: 'Worship Moment',
      description: 'Experience our latest worship sessions',
    },
    {
      id: 2,
      type: 'tiktok',
      thumbnailUrl: tiktokThumbnail,
      videoUrl: 'https://www.tiktok.com/@houseofpraisee/video/7502520295979289878',
      title: 'Daily Praise',
      description: 'Join our community for daily inspiration',
    },
    {
      id: 3,
      type: 'youtube',
      thumbnailUrl: youtubeThumbnail,
      videoUrl: 'https://youtube.com/shorts/7UiS_oXKbn4',
      title: 'Live Sessions',
      description: 'Full worship experiences and more',
    },
  ];

  return (
    <section id="music" className="py-24 md:py-32 bg-light-gray">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-8">
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-charcoal mb-6">
            Prophetic Sound
          </h2>
          <div className="flex items-center justify-center gap-1 mb-6 h-16">
            {bars.map((i) => (
              <div
                key={i}
                className="w-1 bg-gold/60 rounded-full animate-wave"
                style={{
                  animationDelay: `${i * 0.05}s`,
                  animationDuration: `${1 + (i % 3) * 0.2}s`,
                }}
              />
            ))}
          </div>
          <p className="font-sans text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto font-light">
            Sound that breaks through heaven and stirs every heart
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {mediaItems.map((item, index) => (
              <a
                key={item.id}
                href={item.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group block"
                style={{
                  transform: index === 1 ? 'scale(1.05)' : 'scale(1)',
                  zIndex: index === 1 ? 10 : 1,
                }}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2">
                  <div className="aspect-[9/16] relative overflow-hidden bg-charcoal">
                    <img
                      src={item.thumbnailUrl}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-charcoal/50 opacity-80 group-hover:opacity-70 transition-opacity duration-500" />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-gold/90 backdrop-blur-sm flex items-center justify-center transform group-hover:scale-110 transition-all duration-500 shadow-xl">
                        <svg
                          className="w-7 h-7 text-charcoal ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>

                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                        {item.type === 'instagram' && (
                          <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                        )}
                        {item.type === 'tiktok' && (
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                          </svg>
                        )}
                        {item.type === 'youtube' && (
                          <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                          </svg>
                        )}
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-cream text-lg font-medium mb-1">{item.title}</h3>
                      <p className="text-cream/80 text-sm font-light">{item.description}</p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://spotify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-charcoal text-cream text-sm font-medium tracking-widest uppercase hover:bg-gold transition-colors duration-300"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
            Listen on Spotify
          </a>
        </div>
      </div>
    </section>
  );
};

export default Music;
