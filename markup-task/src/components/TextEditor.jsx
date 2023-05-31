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

const modules = {
  toolbar: [
    ["bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ header: 1 }, { header: 2 }],
    ["link"],
    ["clean"],
  ],
  // counter: {
  //   container: '#text-counter',
  //   unit: 'character'
  // }
};

export default function TextEditor() {
  const editorRef = useRef(null);
  const counterRef = useRef(null);

  // useEffect(() => {
  //   if (editorRef.current) {
  //     const quill = editorRef.current.getEditor();
  //     Quill.register("modules/counter", Counter, true);
  //     quill.getModule("toolbar").addHandler("counter", () => {});
  //     quill.addContainer("counter", counterRef.current);
  //   }
  // }, []);

  return (
    <div className="editor__container">
      <ReactQuill
        ref={editorRef}
        modules={modules}
        theme="snow"
        placeholder="Type or paste (⌘+V) something here."
      />
      <div className="editor__count__box" id="text-counter" ref={counterRef}>
        12 Characters, 3 words
      </div>
    </div>
  );
}
