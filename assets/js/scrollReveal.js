export function initScrollReveal() {
  const sr = ScrollReveal({
    origin: "top",
    distance: "50px",
    duration: 800,
  });

  sr.reveal(".delaySmallReveal", { delay: 100 });
  sr.reveal(".delayMediumReveal", { delay: 150 });
  sr.reveal(".delayLargeReveal", { delay: 200 });
  sr.reveal(".delayExtraBigReveal", { delay: 250 });
  sr.reveal(".intervalCardReveal", { interval: 300 });
}
