/*import { useState, useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from "axios";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [code, setCode] = useState(` function sum() {
  return 1 + 1
}`);

  const [review, setReview] = useState(``);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    const response = await axios.post("http://localhost:5000/ai/get-review", {
      code,
    });
    setReview(response.data);
  }

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) =>
                prism.highlight(code, prism.languages.javascript, "javascript")
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
          <div onClick={reviewCode} className="review">
            Review
          </div>
        </div>
        <div className="right">
          <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
        </div>
      </main>
    </>
  );
}

export default App; */
/*
import { useState, useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from "axios";
import "./App.css";

function App() {
  const [code, setCode] = useState(` function sum() {
  return 1 + 1
}`);

  const [review, setReview] = useState(`Review Your Code easily`);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    const response = await axios.post("http://localhost:5000/ai/get-review", {
      code,
    });
    setReview(response.data);
  }

  return (
    <>
       

      <main style={{ marginTop: "50px" }}>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) =>
                prism.highlight(code, prism.languages.javascript, "javascript")
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
          <button
            onClick={reviewCode}
            style={{
              backgroundColor: "#fff",
              color: "#333",
              padding: "12px 20px",
              fontSize: "16px",
              fontWeight: "bold",
              border: "2px solid #333",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "15px",
              transition: "all 0.3s ease-in-out",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#f5f5f5")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#fff")}
          >
            Review
          </button>
        </div>
        <div className="right">
          <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
        </div>
      </main>
    </>
  );
}

export default App;
*/

import { useState, useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import axios from "axios";
import "./App.css";
import CodeEditor from "./components/CodeEditor";
import ReviewPanel from "./components/ReviewPanel";
import ControlButtons from "./components/ControlButtons";

function App() {
  const [code, setCode] = useState(`function sum() {\n  return 1 + 1;\n}`);
  const [review, setReview] = useState(``);

  useEffect(() => {
    window.Prism.highlightAll();
  }, []);

  async function reviewCode() {
    const response = await axios.post("http://localhost:5000/ai/get-review", {
      code,
    });
    setReview(response.data);
  }

  function clearCode() {
    setCode("");
  }

  function clearReview() {
    setReview("");
  }

  return (
    <>
      <header className="header"> 🧐 Review Mode: Fine-Tune Your Logic</header>

      <main className="main-container">
        <div className="left">
          <CodeEditor code={code} setCode={setCode} />
          <ControlButtons
            reviewCode={reviewCode}
            clearCode={clearCode}
            clearReview={clearReview}
          />
        </div>

        <div className="right">
          <ReviewPanel review={review} />
        </div>
      </main>
    </>
  );
}

export default App;
/*<header
        style={{
          textAlign: "center",
          fontSize: "28px",
          fontWeight: "800",
          padding: "20px",
          position: "absolute",
          top: "0",

          transform: "translateX(-50%)",
          width: "100%",

          boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        Elevate Your Code: Review & Refine ✨
      </header>*/
