export const getLighterColor = (hex: string, opacity = 0.9) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  const lighterR = Math.min(255, Math.round(r * opacity + 255 * 0.1));
  const lighterG = Math.min(255, Math.round(g * opacity + 255 * 0.1));
  const lighterB = Math.min(255, Math.round(b * opacity + 255 * 0.1));

  return `#${lighterR.toString(16).padStart(2, "0")}${lighterG
    .toString(16)
    .padStart(2, "0")}${lighterB.toString(16).padStart(2, "0")}`;
};
