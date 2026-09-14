const demoOrbit = document.querySelector(".demo-orbit");
const status = document.querySelector(".orbit-status");
const messages = { idle: "Orbit è pronto.", listening: "Orbit sta ascoltando…", thinking: "Orbit sta pensando…", speaking: "Orbit sta rispondendo…" };
function setMode(mode) { demoOrbit.dataset.state = mode; status.textContent = messages[mode]; document.querySelectorAll("[data-mode]").forEach((button) => button.classList.toggle("active", button.dataset.mode === mode)); }
document.querySelectorAll("[data-mode]").forEach((button) => button.addEventListener("click", () => setMode(button.dataset.mode)));
document.querySelector("[data-test]").addEventListener("click", () => { setMode("listening"); setTimeout(() => setMode("thinking"), 1700); setTimeout(() => setMode("speaking"), 3100); setTimeout(() => setMode("idle"), 5200); });
demoOrbit.addEventListener("click", () => setMode(demoOrbit.dataset.state === "listening" ? "idle" : "listening"));
