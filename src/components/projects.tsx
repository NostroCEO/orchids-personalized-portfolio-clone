'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Building2, Zap, Film, RefreshCw, FolderOpen, Code2, Play, Pause, Volume2, VolumeX, Maximize, Smartphone, ExternalLink, BarChart3, Linkedin } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useLang } from '@/lib/lang-context';

interface ProjectDef {
  id: string;
  icon: React.ReactNode;
  tags: string[];
  accentColor: string;
  link?: { url: string; label: string };
  media: {
    type: 'video' | 'image' | 'before-after' | 'gallery';
    src?: string;
    poster?: string;
    before?: string;
    after?: string;
    images?: { src: string; alt: string }[];
  };
}

const projectDefs: ProjectDef[] = [
  {
    id: 'groupe-idec',
    icon: <Building2 className="h-5 w-5" />,
    tags: ['Brand Strategy', 'Video Production', 'Social Media', 'Content Management'],
    accentColor: 'from-blue-500/10 to-indigo-500/10',
    media: {
      type: 'gallery',
      images: [
        { src: '/avant-espace-carriere.png', alt: 'Espace Carriere - Original' },
        { src: '/apres-espace-carriere.png', alt: 'Espace Carriere - Rebrand' },
      ],
    },
  },
  {
    id: 'linkedin-idec',
    icon: <Linkedin className="h-5 w-5" />,
    tags: ['LinkedIn', 'Employer Brand', 'B2B', 'Social Media'],
    accentColor: 'from-blue-700/10 to-indigo-700/10',
    media: {
      type: 'image',
      src: '/post-linkedin-idec.png',
    },
  },
  {
    id: 'gridx',
    icon: <Zap className="h-5 w-5" />,
    tags: ['Video Editing', 'Motion Graphics', 'Brand Video'],
    accentColor: 'from-emerald-500/10 to-teal-500/10',
    media: {
      type: 'gallery',
      images: [
        { src: '/Video GridX.mp4', alt: 'GridX Video' },
        { src: '/workflow-gemini.webp', alt: 'GridX Workflow' },
      ],
    },
  },
  {
    id: 'scpf',
    icon: <Film className="h-5 w-5" />,
    tags: ['Motion Design', 'After Effects', 'Presentation', 'Animation'],
    accentColor: 'from-purple-500/10 to-pink-500/10',
    link: { url: '/plaquette-scpf.pdf', label: 'Plaquette SCPF (PDF)' },
    media: {
      type: 'video',
      src: '/SCPF Project1 (1).mp4',
    },
  },
  {
    id: 'espace-carrier',
    icon: <RefreshCw className="h-5 w-5" />,
    tags: ['Rebranding', 'Visual Identity', 'Before/After', 'Graphic Design'],
    accentColor: 'from-orange-500/10 to-amber-500/10',
    media: { type: 'before-after', before: '/avant-espace-carriere.png', after: '/apres-espace-carriere.png' },
  },
  {
    id: 'ceram-pierre',
    icon: <RefreshCw className="h-5 w-5" />,
    tags: ['SEO', 'Growth', 'Content Strategy', 'Web Creation'],
    accentColor: 'from-amber-500/10 to-orange-500/10',
    media: {
      type: 'image',
      src: '/ceram-pierre.png',
    },
  },
  {
    id: 'vibe-coding',
    icon: <Code2 className="h-5 w-5" />,
    tags: ['Vibe Coding', 'Claude', 'Cursor', 'React', 'Next.js', 'AI Agents'],
    accentColor: 'from-violet-500/10 to-fuchsia-500/10',
    link: { url: 'https://figma-landing-page-website-creation.vercel.app/', label: 'UD Labs Landing Page' },
    media: {
      type: 'gallery',
      images: [
        { src: '/ud-labs-landing.jpg', alt: 'UD Labs Landing Page' },
        { src: '/ai-working.webp', alt: 'AI Working' },
        { src: '/workflow-gemini.webp', alt: 'Workflow Gemini' },
      ],
    },
  },
  {
    id: 'culinea-ios',
    icon: <Smartphone className="h-5 w-5" />,
    tags: ['iOS App', 'Vibe Coding', 'React Native', 'Expo', 'AI Agents', 'Mobile', 'Figma'],
    accentColor: 'from-green-500/10 to-emerald-500/10',
    media: {
      type: 'gallery',
      images: [
        { src: '/culinea-app.png', alt: 'Culinea iOS App' },
        { src: '/sketch-culinea.jpg', alt: 'Figma Sketch Culinea' },
      ],
    },
  },
  {
    id: 'dashboard-ia',
    icon: <BarChart3 className="h-5 w-5" />,
    tags: ['AI Dashboard', 'n8n', 'Automation', 'Data Visualization'],
    accentColor: 'from-blue-600/10 to-cyan-600/10',
    media: {
      type: 'image',
      src: '/dashboard-ia.png',
    },
  },
  {
    id: 'diverse',
    icon: <FolderOpen className="h-5 w-5" />,
    tags: ['Graphic Design', 'AI Production', 'Social Media', 'Higgsfield'],
    accentColor: 'from-cyan-500/10 to-sky-500/10',
    media: {
      type: 'gallery',
      images: [
        { src: '/Motion Design UD Labs.mp4', alt: 'Motion Design UD Labs' },
        { src: '/higgsfield-cinema.jpg', alt: 'Higgsfield Cinema Studio' },
        { src: '/ai-working.webp', alt: 'AI Creative Work' },
        { src: '/capture-projets-divers.png', alt: 'Projets Divers' },
      ],
    },
  },
];

function BeforeAfterSlider({ before, after }: { before: string; after: string }) {
  const { t } = useLang();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (sliderRef.current) {
      setContainerWidth(sliderRef.current.offsetWidth);
    }
    const handleResize = () => {
      if (sliderRef.current) {
        setContainerWidth(sliderRef.current.offsetWidth);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const updatePos = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
    setContainerWidth(rect.width);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePos(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    updatePos(e.clientX);
  };

  const handlePointerUp = () => setIsDragging(false);

  return (
    <div
      ref={sliderRef}
      className="relative aspect-video w-full cursor-col-resize overflow-hidden rounded-xl select-none"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={after} alt={t.projects.after} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPos}%` }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={before}
          alt={t.projects.before}
          className="absolute inset-0 h-full object-cover"
          style={{ width: containerWidth > 0 ? `${containerWidth}px` : '100vw', maxWidth: 'none' }}
        />
      </div>
      <div
        className="absolute top-0 bottom-0 z-10 w-0.5 bg-white shadow-lg"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md">
          <RefreshCw className="h-4 w-4 text-gray-700" />
        </div>
      </div>
      <span className="absolute top-3 left-3 rounded-full bg-black/60 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
        {t.projects.before}
      </span>
      <span className="absolute top-3 right-3 rounded-full bg-black/60 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
        {t.projects.after}
      </span>
    </div>
  );
}

function VideoPlayer({ src, poster }: { src: string; poster?: string }) {
  const { t } = useLang();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isLoaded && videoRef.current) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => setHasError(true));
    }
  }, [isLoaded]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(() => setHasError(true));
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      videoRef.current.requestFullscreen();
    }
  };

  if (hasError) {
    return (
      <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
        <div className="flex flex-col items-center gap-3 text-muted-foreground">
          <Film className="h-12 w-12" />
          <span className="text-sm font-medium">{t.projects.videoComingSoon}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="group/video relative aspect-video w-full overflow-hidden rounded-xl bg-gray-900">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted={isMuted}
        loop
        playsInline
        autoPlay
        className="h-full w-full object-contain"
        onLoadedData={() => setIsLoaded(true)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        onError={() => setHasError(true)}
      />
      {(
        <>
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover/video:opacity-100">
            <button onClick={togglePlay} className="rounded-full bg-white/90 p-3 shadow-lg transition-transform hover:scale-110">
              {isPlaying ? <Pause className="h-6 w-6 text-gray-800" /> : <Play className="h-6 w-6 text-gray-800" />}
            </button>
          </div>
          <div className="absolute right-3 bottom-3 flex gap-2 opacity-0 transition-opacity group-hover/video:opacity-100">
            <button onClick={toggleMute} className="rounded-full bg-black/50 p-1.5 backdrop-blur-sm transition-colors hover:bg-black/70">
              {isMuted ? <VolumeX className="h-4 w-4 text-white" /> : <Volume2 className="h-4 w-4 text-white" />}
            </button>
            <button onClick={toggleFullscreen} className="rounded-full bg-black/50 p-1.5 backdrop-blur-sm transition-colors hover:bg-black/70">
              <Maximize className="h-4 w-4 text-white" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

function ImageGallery({ images }: { images: { src: string; alt: string }[] }) {
  const [activeIdx, setActiveIdx] = useState(0);

  const isVideo = (src: string) => src.endsWith('.mp4');

  return (
    <div className="space-y-3">
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-900">
        {isVideo(images[activeIdx].src) ? (
          <VideoPlayer src={images[activeIdx].src} />
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={images[activeIdx].src}
            alt={images[activeIdx].alt}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300"
          />
        )}
      </div>
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className={`relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                i === activeIdx
                  ? 'border-blue-500 shadow-sm'
                  : 'border-transparent opacity-60 hover:opacity-90'
              }`}
            >
              {isVideo(img.src) ? (
                <div className="flex h-full w-full items-center justify-center bg-gray-800">
                  <Play className="h-6 w-6 text-white" />
                </div>
              ) : (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img src={img.src} alt={img.alt} className="absolute inset-0 h-full w-full object-cover" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectMedia({ project }: { project: ProjectDef }) {
  const { media } = project;

  switch (media.type) {
    case 'before-after':
      return <BeforeAfterSlider before={media.before!} after={media.after!} />;
    case 'video':
      return <VideoPlayer src={media.src!} poster={media.poster} />;
    case 'gallery':
      return <ImageGallery images={media.images!} />;
    case 'image':
    default:
      return media.src ? (
        <div className={`relative w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-900 ${
          project.id === 'linkedin-idec' ? 'max-w-md mx-auto' : 'aspect-video'
        }`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={media.src}
            alt=""
            className={`${
              project.id === 'linkedin-idec'
                ? 'w-full h-auto object-contain'
                : 'absolute inset-0 h-full w-full object-cover'
            }`}
          />
        </div>
      ) : null;
  }
}

const Projects = () => {
  const { t } = useLang();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <motion.div
      initial={{ scale: 0.98, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
      className="mx-auto w-full max-w-5xl rounded-4xl px-4 sm:px-6"
    >
      <Card className="w-full border-none px-0 pb-8 sm:pb-12 shadow-none">
        <CardHeader className="px-0 pb-4">
          <CardTitle className="text-primary px-0 text-2xl sm:text-3xl lg:text-4xl font-bold">
            {t.projects.title}
          </CardTitle>
          <p className="text-muted-foreground text-sm sm:text-base mt-1">
            {t.projects.subtitle}
          </p>
        </CardHeader>

        <CardContent className="px-0">
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projectDefs.map((project) => {
              const itemT = t.projects.items[project.id as keyof typeof t.projects.items];
              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="group rounded-2xl border border-gray-100 bg-white p-4 sm:p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-950"
                >
                  <div className="mb-4 flex items-start gap-3">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${project.accentColor}`}>
                      {project.icon}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        {itemT.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{itemT.subtitle}</p>
                    </div>
                  </div>

                  <ProjectMedia project={project} />

                    <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                      {itemT.description}
                    </p>

                    {project.link && (
                      <a
                        href={project.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline underline-offset-4 hover:text-foreground/70 transition-colors"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        {project.link.label}
                      </a>
                    )}

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Projects;
