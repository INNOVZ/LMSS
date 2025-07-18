// stores/videoPlayerStore.ts
interface VideoPlayerState {
    currentVideo: Video | null;
    isPlaying: boolean;
    currentTime: number;
    duration: number;
    volume: number;
    playbackRate: number;
    quality: VideoQuality;
    isFullscreen: boolean;
    subtitles: Subtitle[];
    activeSubtitle: string | null;
    
    // Player controls
    play: () => void;
    pause: () => void;
    seek: (time: number) => void;
    setVolume: (volume: number) => void;
    setPlaybackRate: (rate: number) => void;
    setQuality: (quality: VideoQuality) => void;
    toggleFullscreen: () => void;
    
    // Progress tracking
    updateProgress: (time: number) => void;
    saveWatchTime: () => Promise<void>;
  }