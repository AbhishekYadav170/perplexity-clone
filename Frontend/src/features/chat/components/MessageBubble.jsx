

import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";



const MessageBubble = ({ message }) => {
  const isUser = message.role === "user";

  const [copied, setCopied] = useState(false);

  const copyCode = async (code) => {
     await navigator.clipboard.writeText(code);

     setCopied(true);

    setTimeout(() => {
        setCopied(false);
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`relative max-w-3xl rounded-3xl px-5 py-4
        ${
          isUser
            ? "bg-blue-600 text-white"
            : "glass border border-white/10 text-gray-100"
        }`}
      >
        {isUser ? (
          <p>{message.content}</p>
        ) : (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ inline, className, children }) {
                const match = /language-(\w+)/.exec(className || "");

                if (!inline && match) {
                  return (
                    <div className="relative">

                      {/* <button
                        className="absolute right-3 top-3 rounded-lg bg-black/40 p-2 hover:bg-black/70"
                      >
                        <Copy size={15} />
                      </button> */}

                      <button
                           onClick={() => copyCode(String(children).replace(/\n$/, ""))}
                           className="absolute right-3 top-3 rounded-lg bg-black/40 p-2 transition hover:bg-black/70"
                      >
                        {copied ? <Check size={15} /> : <Copy size={15} />}
                      </button>

                      <SyntaxHighlighter
                        language={match[1]}
                        style={oneDark}
                        customStyle={{
                          borderRadius: "14px",
                          padding: "18px",
                        }}
                      >
                        {String(children).replace(/\n$/, "")}
                      </SyntaxHighlighter>

                    </div>
                  );
                }

                return (
                  <code className="rounded bg-white/10 px-1 py-0.5">
                    {children}
                  </code>
                );
              },
            }}
          >
            {message.content}
          </ReactMarkdown>
        )}
      </div>
    </motion.div>
  );
};

export default MessageBubble;