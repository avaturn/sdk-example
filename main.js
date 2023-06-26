import "./style.css";
import { AvaturnSDK } from "@avaturn/sdk";

(async function main() {
  const container = document.querySelector("#app");

  const sdk = new AvaturnSDK();
  const scene = await sdk.init(container, {
    url: "https://hub.avaturn.me",
    iframeClassName: "scene",
  });

  scene.on("load", () => {
    console.log("Scene loaded and ready to work");
  });
})();
