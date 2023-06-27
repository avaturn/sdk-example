import "./style.css";
import { AvaturnSDK } from "@avaturn/sdk";

(async function main() {
  const container = document.querySelector("#app");

  const sdk = new AvaturnSDK();
  const scene = await sdk.init(container, {
    url: "https://preview.avaturn.dev/",
    iframeClassName: "scene",
  });

  scene.on("load", () => {
    console.log("Scene loaded and ready to work");
  });

  scene.on("export", data => console.log(data));
})();
