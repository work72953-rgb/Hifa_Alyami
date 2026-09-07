export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function truncate(text, length = 140) {
  if (!text || text.length <= length) return text;
  return `${text.slice(0, length).trim()}...`;
}
