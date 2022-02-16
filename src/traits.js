// eslint-disable-next-line import/no-anonymous-default-export
export default (editor) => {
  editor.TraitManager.addType("href-next", {
    createInput({ trait }) {
      const traitOpts = trait.get("command") || (() => {});

      const image = editor.getSelected().attributes.attributes.src;

      const el = document.createElement("div");

      el.innerHTML = `<img src="${image}" id="trait_img" alt="img"/>`;
      el.querySelector("#trait_img").addEventListener("click", () =>
        traitOpts(editor)
      );

      return el;
    },
  });

  editor.TraitManager.addType("my-coupon", {
    noLabel: true,
    createInput() {
      const id = editor.getSelected().view.$el.find(".coupon").attr("id");
      // const el = document.createElement("div");
      // el.innerHTML = `<div>${id || "others"}</div>`;
      // return el;

      // LEGACY
      if (id === "legacy_coupon") {
        const el = document.createElement("div");
        el.innerHTML = `<label for="cars">Choose a car:</label>
        <select name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>`;
        return el;
      }

      // DYNAMIC
      else if (id === "dynamic_coupon") {
        const el = document.createElement("div");
        el.innerHTML = `<label for="fname">First name:</label>
        <input type="text" id="fname" name="fname">`;
        return el;
      }

      // OTHERS
      else {
        const el = document.createElement("div");
        el.innerHTML = `<label for="fname">Id:</label>
        <input type="text" id="fname" name="fname">
        <label for="lname">Title:</label>
        <input type="text" id="lname" name="lname">`;
        return el;
      }
    },
  });
};
