import React from "react";

import { renderToString } from "react-dom/server";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { ReactComponent as BoldIcon } from "../assets/icons/bold.svg";
import { ReactComponent as ItalicIcon } from "../assets/icons/italic.svg";
import { ReactComponent as UnderlineIcon } from "../assets/icons/underline.svg";
import { ReactComponent as OlIcon } from "../assets/icons/list-ordered.svg";
import { ReactComponent as UlIcon } from "../assets/icons/list-unordered.svg";
import { ReactComponent as H1Icon } from "../assets/icons/h-1.svg";
import { ReactComponent as H2Icon } from "../assets/icons/h-2.svg";
import { ReactComponent as LinkIcon } from "../assets/icons/link-m.svg";
import { ReactComponent as FormatClearIcon } from "../assets/icons/format-clear.svg";

import { Tooltip } from "react-tooltip";

const icons = ReactQuill.Quill.import("ui/icons");

// Overwrite Quill defauls icons
icons.bold = renderToString(<BoldIcon />);
icons.italic = renderToString(<ItalicIcon />);
icons["underline"] = renderToString(<UnderlineIcon />);
icons["list"]["ordered"] = renderToString(<OlIcon />);
icons["list"]["bullet"] = renderToString(<UlIcon />);
icons["header"]["1"] = renderToString(<H1Icon />);
icons["header"]["2"] = renderToString(<H2Icon />);
icons["link"] = renderToString(<LinkIcon />);
icons["clean"] = renderToString(<FormatClearIcon />);

// implement charachter counting
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

function getTooltipHtml(title, shortcut) {
  let cut = shortcut ? `<span>${shortcut}</span>` : "";
  return `<div><strong>${title}</strong> ${cut}</div>`;
}

const CustomToolbar = () => {
  return (
    <div id="toolbar">
      <button
        className="ql-bold my-anchor-element"
        data-tooltip-html={getTooltipHtml("Bold", "Ctrl + B")}
        data-tooltip-place="bottom"
      ></button>
      <button
        className="ql-italic my-anchor-element"
        data-tooltip-html={getTooltipHtml("Italic", "Ctrl + I")}
        data-tooltip-place="bottom"
      ></button>
      <button
        className="ql-underline my-anchor-element"
        data-tooltip-html={getTooltipHtml("Underline", "Ctrl + U")}
        data-tooltip-place="bottom"
      ></button>
      <button
        className="ql-list my-anchor-element"
        value="ordered"
        data-tooltip-html={getTooltipHtml("Ordered List")}
        data-tooltip-place="bottom"
      ></button>
      <button
        className="ql-list my-anchor-element"
        value="bullet"
        data-tooltip-html={getTooltipHtml("Unordered List")}
        data-tooltip-place="bottom"
      ></button>
      <button
        className="ql-header my-anchor-element"
        value="1"
        data-tooltip-html={getTooltipHtml("Heading 1")}
        data-tooltip-place="bottom"
      ></button>
      <button
        className="ql-header my-anchor-element"
        value="2"
        data-tooltip-html={getTooltipHtml("Heading 2")}
        data-tooltip-place="bottom"
      ></button>
      <button
        className="ql-link my-anchor-element"
        data-tooltip-html={getTooltipHtml("Link")}
        data-tooltip-place="bottom"
      ></button>
      <button
        className="ql-clean my-anchor-element"
        data-tooltip-html={getTooltipHtml("Clear Formatting")}
        data-tooltip-place="bottom"
      ></button>
      <Tooltip
        anchorSelect=".my-anchor-element"
        delayShow={100}
        delayHide={200}
        style={{
          background: "#001849",
          borderRadius: "4px",
          padding: "10px",
          fontSize: "12px",
        }}
      />
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
