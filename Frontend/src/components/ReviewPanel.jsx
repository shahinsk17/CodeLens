import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

const ReviewPanel = ({ review }) => {
  return (
    <div className="review-panel">
      <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
    </div>
  );
};

export default ReviewPanel;
