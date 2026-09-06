const YOUTUBE_ID = /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/|live\/))([A-Za-z0-9_-]{11})/;

export function getYoutubeEmbedUrl(url) {
  if (!url) return null;
  const match = url.match(YOUTUBE_ID);
  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
}

export function isYoutubeShorts(url) {
  return !!url && /youtube\.com\/shorts\//.test(url);
}
