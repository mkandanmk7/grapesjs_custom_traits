export const Event = (editor) => {
  editor.on("component:update", () => {
    const selectedComponent = editor.getSelected().attributes.attributes.src;
    const el = document.getElementById("trait_img");
    if (el && el.src !== selectedComponent) {
      document.getElementById("trait_img").src = selectedComponent;
    }
  });
};
