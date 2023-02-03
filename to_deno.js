import { convert } from "https://deno.land/x/nodedeno@v0.2.8/mod.js";

await convert({
  src: "postcss-combine-duplicated-selectors",
  input: ["src"],
  output: "./",
  transpile: false,
  modules: {
    "": "mod.js",
  },
  copy: {
    "postcss-combine-duplicated-selectors/README.md": "README.md",
    "postcss-combine-duplicated-selectors/LICENSE": "LICENSE",
  },
  beforeConvert(_src, { replaceAll, rename }) {
    rename(
      "src/index.js",
      "mod.js",
      (code) => code.replaceAll(`./`, `./src/`),
    );
  },
  afterConvert(_src, { replaceAll }) {
    replaceAll((code) => {
        code = code.replaceAll('{ parser }', 'parser');
        code = code.replaceAll('"./deps.js"', '"https://deno.land/x/postcss_selector_parser@v6.0.2/mod.js"');
        code = code.replaceAll('"./deps.js"', '"https://deno.land/x/postcss_selector_parser@v6.0.2/mod.js"');
        code = code.replaceAll('import { name } from "../src/package.json"', 'const name = "postcss-combine-duplicated-selectors"');
        code = code.replaceAll('(options) =>', 'function combineDuplicatedSelectors(options)');
        code = code.replaceAll('export const ', 'combineDuplicatedSelectors.');
        return code
    }
    );
  },
});