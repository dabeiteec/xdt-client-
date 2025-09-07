import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import { rules } from "eslint-config-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname
});

const eslintConfig = [
    ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
    {
        ignores: [
            "node_modules/**",
            ".next/**",
            "out/**",
            "build/**",
            "next-env.d.ts"
        ]
    },
    {
        files: ["src/**/*.{js,jsx,ts,tsx}"],
        rules: {
            ...rules, // отключает правила, конфликтующие с prettier
            "no-await-in-loop": "error", // разрешает await внутри циклов
            "no-compare-neg-zero": "error", // запрещает сравнение с -0
            "no-empty-pattern": "error", // запрещает пустые шаблоны деструктуризации
            "no-var": "error", // запрещает var, только let и const
            "no-empty-function": "error", // предупреждает о пустых функциях
            "no-const-assign": "error", // запрещает переназначение const
            "no-ex-assign": "error", // запрещает переназначение исключений
            "no-func-assign": "error", // запрещает переназначение функций ВОЗМОЖНО УБРАТЬ ЕСЛИ СИЛЬНО МЕШАЕТ
            "no-import-assign": "error", // запрещает переназначение импортов
            "no-unreachable-loop": "warn", // запрещает циклы, которые не могут быть достигнуты
            semi: ["error", "always"], // точка с запятой в конце строки
            quotes: [
                "error",
                "double",
                { avoidEscape: true, allowTemplateLiterals: true }
            ],
            "jsx-quotes": ["error", "prefer-single"], // двойные кавычки в JSX
            "arrow-parens": ["error", "as-needed"], // стрелочные функции без скобок, если один аргумент
            "object-curly-spacing": ["warn", "always"], // пробелы внутри фигурных скобок
            "array-bracket-spacing": ["warn", "always"], // без пробелов внутри квадратных скобок
            indent: ["error", 4], // отступ в 4 пробела
            "linebreak-style": ["error", "unix"], // на всякий случай, чтобы избежать конфликтов с разными ОС

            "react/react-in-jsx-scope": "off",
            "react/jsx-uses-react": "off",
            "@next/next/no-img-element": "off"
        }
    }
];

export default eslintConfig;
