import "./style.css";

const ports = {
  react: 3001,
  vanilla: 3002,
};

(async function main() {
  const container = document.querySelector("#app");
  const select = document.querySelector("#select");
  const uiCheckbox = document.querySelector("#disable-ui");
  const iframe = document.createElement("iframe");

  uiCheckbox.addEventListener("change", (e) => {
    console.log(e.target.checked);
    iframe.setAttribute(
      "src",
      `http://localhost:${ports.react}?disableUi=${JSON.stringify(
        e.target.checked,
      )}`,
    );
  });

  select.addEventListener("change", (e) => {
    iframe.setAttribute(
      "src",
      `http://localhost:${ports[e.target.value] || ports.react}`,
    );
    showAdditionalOptions(e.target.value);
  });

  applyAttributes(iframe, {
    src: `http://localhost:${ports[select.value] || ports.react}`,
    frameborder: 0,
    class: "scene",
  });

  container.appendChild(iframe);
  showAdditionalOptions(select.value);
})();

function applyAttributes(el, attrs) {
  for (const key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

function showAdditionalOptions(selected) {
  const options = document.querySelector(".react-options");
  options.style.display = selected === "react" ? "flex" : "none";
}
