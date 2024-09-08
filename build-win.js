import path from "path";
import builder from "electron-builder";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

builder
  .build({
    projectDir: path.resolve(__dirname),
    win: ["portable", "nsis"], // Windows向けのビルド形式
    config: {
      appId: "React Based Electron",
      productName: "React Based Electron",
      copyright: "Copyright © 2023 MKSC",
      directories: {
        output: "electron-build/win",  // macOS向けのビルド出力ディレクトリ
      },
      files: [
        "build/**/*",
        "node_modules/**/*",
        "package.json",
        "main.js",
        "preload.js",
        "index.html",
        "styles.css",
        "renderer.js",
      ],
      extraFiles: [
        {
          from: "backend",  // バックエンドファイルのパス
          to: "resources/backend",
          filter: ["**/*"],
        },
      ],
      extends: null,
    },
  })
  .then(
    (data) => console.log(data),
    (err) => console.error(err)
  );
