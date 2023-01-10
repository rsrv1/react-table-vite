module.exports = {
    arrowParens: 'avoid',
    jsxBracketSameLine: true,
    semi: false,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'es5',
    printWidth: 150,
    endOfLine: 'lf',
    organizeImportsSkipDestructiveCodeActions: true,
    plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-tailwindcss'],
    tailwindConfig: './tailwind.config.cjs',
}
