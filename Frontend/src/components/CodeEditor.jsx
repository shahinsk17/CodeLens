import Editor from "react-simple-code-editor";
import Prism from "prismjs";

const CodeEditor = ({ code, setCode }) => {
  return (
    <div className="code">
      <Editor
        value={code}
        onValueChange={(code) => setCode(code)}
        highlight={(code) =>
          Prism.highlight(code, Prism.languages.javascript, "javascript")
        }
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 16,
          border: "1px solid #ddd",
          borderRadius: "5px",
          height: "100%",
          width: "100%",
        }}
      />
    </div>
  );
};

export default CodeEditor;
