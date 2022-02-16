// eslint-disable-next-line import/no-anonymous-default-export
export default (editor) => {
  editor.DomComponents.addType("mj-image", {
    model: {
      defaults: {
        traits: [
          {
            type: "href-next",
            name: "href",
            label: "Logo",
            command: (editor) => {
              const selectedComponent = editor.getSelected();
              editor.runCommand("open-assets", {
                target: selectedComponent,
              });
            },
          },
          {
            type: "button",
            text: "Click me",
            full: true,
            command: (editor) => {
              const selectedComponent = editor.getSelected();
              editor.runCommand("open-assets", {
                target: selectedComponent,
              });
            },
          },
        ],
        attributes: { type: "text", required: true },
      },
    },
  });

  editor.DomComponents.addType("mj-text", {
    model: {
      defaults: {
        traits: [
          {
            name: "mycoupon",
            full: true,
            type: "my-coupon",
          },
        ],
        attributes: { type: "text", required: true },
      },
    },
  });
};
