import eslintPluginReact from "eslint-plugin-react";
import typescriptParser from "@typescript-eslint/parser";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default [
  {
    // TypeScript files use @typescript-eslint/parser
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: "./tsconfig.json", // Optional, helps with type-checking
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      react: eslintPluginReact,
    },
    rules: {
      "react/jsx-sort-props": [
        "error",
        {
          callbacksLast: true,
          shorthandFirst: false,
          shorthandLast: true,
          ignoreCase: true,
          noSortAlphabetically: false,
        },
      ],
    },
  },
];
