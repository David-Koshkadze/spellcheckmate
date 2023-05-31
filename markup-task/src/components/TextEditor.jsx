import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    ["bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ header: 1 }, { header: 2 }],
    ["link"],
    ["clean"],
  ],
};

export default function TextEditor() {
  return (
    <div className="editor__container">
      <ReactQuill
        modules={modules}
        theme="snow"
        placeholder="Type or paste (⌘+V) something here."
      />
      <div className="editor__count__box">12 Characters, 3 words</div>
    </div>
  );
}
