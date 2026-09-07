export function getPlatformLabel(platform) {
  const labels = { X: "منصة X", TikTok: "تيك توك" };
  return labels[platform] || platform;
}
