// import { motion } from "framer-motion";
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";
// import { Check, Copy } from "lucide-react";
// import { useState } from "react";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";



// const MessageBubble = ({ message }) => {
//   const isUser = message.role === "user";

//   const [copied, setCopied] = useState(false);

//   const copyCode = async (code) => {
//      await navigator.clipboard.writeText(code);

//      setCopied(true);

//     setTimeout(() => {
//         setCopied(false);
//     }, 2000);
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 15 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.25 }}
//       className={`flex ${isUser ? "justify-end" : "justify-start"}`}
//     >
//       <div
//         className={`relative max-w-3xl rounded-3xl px-5 py-4
//         ${
//           isUser
//             ? "bg-blue-600 text-white"
//             : "glass border border-white/10 text-gray-100"
//         }`}
//       >
//         {isUser ? (
//           <p>{message.content}</p>
//         ) : (
//           <ReactMarkdown
//             remarkPlugins={[remarkGfm]}
//             components={{
//               code({ inline, className, children }) {
//                 const match = /language-(\w+)/.exec(className || "");

//                 if (!inline && match) {
//                   return (
//                     <div className="relative">

//                       {/* <button
//                         className="absolute right-3 top-3 rounded-lg bg-black/40 p-2 hover:bg-black/70"
//                       >
//                         <Copy size={15} />
//                       </button> */}

//                       <button
//                            onClick={() => copyCode(String(children).replace(/\n$/, ""))}
//                            className="absolute right-3 top-3 rounded-lg bg-black/40 p-2 transition hover:bg-black/70"
//                       >
//                         {copied ? <Check size={15} /> : <Copy size={15} />}
//                       </button>

//                       <SyntaxHighlighter
//                         language={match[1]}
//                         style={oneDark}
//                         customStyle={{
//                           borderRadius: "14px",
//                           padding: "18px",
//                         }}
//                       >
//                         {String(children).replace(/\n$/, "")}
//                       </SyntaxHighlighter>

//                     </div>
//                   );
//                 }

//                 return (
//                   <code className="rounded bg-white/10 px-1 py-0.5">
//                     {children}
//                   </code>
//                 );
//               },
//             }}
//           >
//             {message.content}
//           </ReactMarkdown>
//         )}
//       </div>
//     </motion.div>
//   );
// };

// export default MessageBubble;





import { useState } from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Check, Copy } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const MessageBubble = ({ message }) => {
  const [copied, setCopied] = useState(false);

  const isUser = message?.role === "user";
  const content = message?.content ?? "";

  const copyCode = async (code) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch (error) {
      console.error("Unable to copy code:", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={`flex w-full min-w-0 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <article
        className={`min-w-0 max-w-[96%] overflow-hidden rounded-2xl px-3 py-3 text-sm leading-7 sm:max-w-[90%] sm:px-5 sm:py-4 sm:text-base lg:max-w-3xl ${
          isUser
            ? "break-words bg-blue-600 text-white [overflow-wrap:anywhere]"
            : "glass border border-white/10 text-gray-100"
        }`}
      >
        {isUser ? (
          <p className="whitespace-pre-wrap break-words [overflow-wrap:anywhere]">
            {content}
          </p>
        ) : (
          <div className="min-w-0 max-w-full break-words [overflow-wrap:anywhere] [&_a]:break-all [&_blockquote]:my-3 [&_blockquote]:border-l-4 [&_blockquote]:border-blue-400 [&_blockquote]:pl-3 [&_h1]:mb-3 [&_h1]:mt-5 [&_h1]:text-xl [&_h1]:font-bold [&_h2]:mb-2 [&_h2]:mt-4 [&_h2]:text-lg [&_h2]:font-semibold [&_h3]:mb-2 [&_h3]:mt-3 [&_h3]:font-semibold [&_li]:my-1 [&_ol]:ml-5 [&_ol]:list-decimal [&_p]:my-2 [&_strong]:font-semibold [&_ul]:ml-5 [&_ul]:list-disc">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                // Render fenced code blocks with syntax highlighting.
                code({ className, children, ...props }) {
                  const match = /language-([\w+#.-]+)/.exec(
                    className || ""
                  );

                  const code = String(children).replace(/\n$/, "");

                  if (match) {
                    const language = match[1];

                    return (
                      <div className="my-3 min-w-0 max-w-full overflow-hidden rounded-xl border border-white/10 bg-[#111827]">
                        <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-black/30 px-3 py-2">
                          <span className="truncate text-xs font-medium text-gray-400">
                            {language}
                          </span>

                          <button
                            type="button"
                            onClick={() => copyCode(code)}
                            aria-label="Copy code"
                            className="flex shrink-0 items-center gap-1.5 rounded-lg px-2 py-1 text-xs text-gray-300 transition hover:bg-white/10 hover:text-white"
                          >
                            {copied ? (
                              <Check size={14} />
                            ) : (
                              <Copy size={14} />
                            )}
                            <span>{copied ? "Copied" : "Copy"}</span>
                          </button>
                        </div>

                        <div className="max-w-full overflow-x-auto">
                          <SyntaxHighlighter
                            language={language}
                            style={oneDark}
                            PreTag="pre"
                            customStyle={{
                              margin: 0,
                              minWidth: "max-content",
                              maxWidth: "100%",
                              padding: "14px",
                              borderRadius: 0,
                              fontSize: "0.82rem",
                              lineHeight: "1.65",
                              background: "#111827",
                            }}
                            codeTagProps={{
                              style: {
                                fontFamily:
                                  "ui-monospace, SFMono-Regular, Menlo, monospace",
                              },
                            }}
                          >
                            {code}
                          </SyntaxHighlighter>
                        </div>
                      </div>
                    );
                  }

                  // Inline code.
                  return (
                    <code
                      {...props}
                      className="rounded-md bg-white/10 px-1.5 py-0.5 font-mono text-[0.85em] [overflow-wrap:anywhere]"
                    >
                      {children}
                    </code>
                  );
                },

                // Prevent an extra <pre> wrapper around highlighted blocks.
                pre({ children }) {
                  return <>{children}</>;
                },

                // Keep wide tables scrollable on narrow screens.
                table({ children }) {
                  return (
                    <div className="my-3 max-w-full overflow-x-auto rounded-lg">
                      <table className="min-w-full border-collapse text-left text-sm">
                        {children}
                      </table>
                    </div>
                  );
                },

                thead({ children }) {
                  return (
                    <thead className="bg-white/10">{children}</thead>
                  );
                },

                th({ children }) {
                  return (
                    <th className="border border-white/15 px-3 py-2 font-semibold">
                      {children}
                    </th>
                  );
                },

                td({ children }) {
                  return (
                    <td className="border border-white/10 px-3 py-2 align-top">
                      {children}
                    </td>
                  );
                },

                a({ children, href, ...props }) {
                  return (
                    <a
                      {...props}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
                    >
                      {children}
                    </a>
                  );
                },

                img({ src, alt }) {
                  return (
                    <img
                      src={src}
                      alt={alt || "Image"}
                      loading="lazy"
                      className="my-3 h-auto max-w-full rounded-xl"
                    />
                  );
                },
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        )}
      </article>
    </motion.div>
  );
};

export default MessageBubble;
