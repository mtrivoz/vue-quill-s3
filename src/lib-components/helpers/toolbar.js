export default [
  ["bold", "italic", "underline", "strike"],
  ["blockquote", "code-block"],
  [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
  [{ script: "super" }, { script: "sub" }],
  [{ font: [] }, { size: [] }],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ header: "1" }, { header: "2" }, "blockquote", "code-block"],
  [{ color: [] }, { background: [] }],
  ["direction", { align: [] }],
  ["link", "image", "video", "formula"],
  [
    { table: "TD" },
    { "table-insert-row": "TIR" },
    { "table-insert-column": "TIC" },
    { "table-delete-row": "TDR" },
    { "table-delete-column": "TDC" }
  ],
  ["clean"],
  ["showHtml"]
];
