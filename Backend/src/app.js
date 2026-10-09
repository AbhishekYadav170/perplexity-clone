// import express from "express";
// import cookieParser from "cookie-parser";
// import authRouter from "./routes/auth.routes.js";
// import morgan from "morgan"
// import cors from "cors"
// import chatRouter from "./routes/chat.routes.js";

// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({extended: true }));
// app.use(cookieParser());
// app.use(morgan("dev"));

// app.use(
//   cors({
//     origin: process.env.CLIENT_URL || "http://localhost:5173",
//     credentials: true,
//   })
// );


// app.get("/", (req,res) => {
//     res.json({message: "Server is running" });
// });

// app.use("/api/auth", authRouter);
// app.use("/api/chats", chatRouter);

// export default app;





import express from "express";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.routes.js";
import morgan from "morgan";
import cors from "cors";
import chatRouter from "./routes/chat.routes.js";

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "https://perplexity-clone-psi-six.vercel.app",
];

// CORS: allow both local development and the live frontend.
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error(`Origin not allowed by CORS: ${origin}`));
    },
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({ message: "Server is running" });
});

app.use("/api/auth", authRouter);
app.use("/api/chats", chatRouter);

export default app;
