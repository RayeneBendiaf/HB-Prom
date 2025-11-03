import js from "@eslint/js";
import tseslint from "typescript-eslint";
import next from "eslint-config-next";

export default tseslint.config(
  js.configs.recommended,
  next,
  {
    languageOptions: {
      globals: {
        React: true,
      },
    },
  },

  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "node_modules/**",
    ],
  }
);
