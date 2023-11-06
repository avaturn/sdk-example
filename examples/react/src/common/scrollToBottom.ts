export const scrollToBottom = (ref: HTMLElement) => {
  ref.scrollIntoView({ block: "nearest", inline: "start", behavior: "smooth" });
};
