import React from "react";
import "../node_modules/grapesjs/dist/css/grapes.min.css";
import "./app.css";
import PluginEditor from "./plugin";
import { GrapesjsReact as Editor } from "grapesjs-react";

export default function App() {
  const onInit = (editor) => {
    const bm = editor.Blocks;

    // Add a new Block
    bm.add("legacy_column", {
      // Your block properties...
      appendTo: "#legacy_column",
      label: "Legacy Column",
      className: "legacy_column_class",
      content: `
      <mj-section>
      <mj-column>
      <mj-text><div class="coupon" id="legacy_coupon">Legacy Column</div></mj-text>
      </mj-column>
      </mj-section>
      `,
    });

    bm.add("dynamic_column", {
      // Your block properties...
      appendTo: "#dynamic_column",
      label: "Dynamic Column",
      className: "dynamic_column_class",
      content: `
      <mj-section>
      <mj-column>
      <mj-text><div class="coupon" id="dynamic_coupon">Dynamic Column</div></mj-text>
      </mj-column>
      </mj-section>
      `,
    });
  };

  return (
    <Editor
      id="grapesjs-react"
      plugins={["grapesjs-mjml", PluginEditor]}
      onInit={onInit}
      storageManager={{
        type: "remote",
        stepsBeforeSave: 3,
        urlStore: "http://localhost:3000/template.json",
        urlLoad: "http://localhost:3000/template.json",
      }}
    ></Editor>
  );
}
