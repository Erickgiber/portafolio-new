export const animate = {
  opacity: 1,
  scale: 1,
};

export const transition = {
  duration: window.matchMedia("(orientation: portrait)").matches ? 0 : 0.3,
};

export const initial = {
  opacity: 0,
  scale: 1.05,
};

export const initialSkill = {
  opacity: 0,
  scale: 0.7,
};
