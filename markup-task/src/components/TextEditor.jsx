import React, { useRef, useEffect } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

class Counter {
  constructor(quill, options) {
    this.quill = quill;
    this.options = options;
    this.container = document.querySelector(options.container);
    quill.on("text-change", this.update.bind(this));
    this.update(); // Account for initial contents
  }

  calculate() {
    let text = this.quill.getText().trim();
    if (this.options.unit === "word") {
      text = text.trim();
      // Splitting empty text returns a non-empty array
      return text.length > 0 ? text.split(/\s+/).length : 0;
    } else {
      return text.length;
    }
  }

  update() {
    var length = this.calculate();
    var label = this.options.unit;
    if (length !== 1) {
      label += "s";
    }
    this.container.innerText = length + " " + label;
  }
}

const CustomToolbar = () => {
  return (
    <div id="toolbar">
      <button className="ql-bold"></button>
      <button className="ql-italic"></button>
      <button className="ql-underline">IC</button>
      <button className="ql-list" value="ordered"></button>
      <button className="ql-list" value="bullet"></button>
      <button className="ql-header-1"></button>
      <button className="ql-header-2"></button>
    </div>
  );
};

export default function TextEditor() {
  return (
    <div className="editor__container">
      <ReactQuill
        modules={TextEditor.modules}
        theme="snow"
        placeholder="Type or paste (⌘+V) something here."
      />
      <CustomToolbar />
      <div className="editor__count__box" id="text-counter">
        12 Characters, 3 words
      </div>
    </div>
  );
}

TextEditor.modules = {
  toolbar: {
    container: "#toolbar",
  },
};

TextEditor.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "color",
];
