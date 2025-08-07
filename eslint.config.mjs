import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),

  // 在這裡加入 rules 設定
  {
    rules: {
      "react/no-unescaped-entities": "off",
      // 其他規則關閉或調整可繼續新增
    },
  },
];

export default eslintConfig;
