import { convert } from "https://deno.land/x/nodedeno@v0.2.8/mod.js";

// Convert the code
await convert({
  src: "postcss-combine-duplicated-selectors",
  input: ["src"],
  output: "deno",
  transpile: false,
  modules: {
    "": "mod.js",
  },
  copy: {
    // "source_map.ts": "lib/source_map.ts",
    // "deps.js": "lib/deps.js",
    // "test": "test",
    "postcss-combine-duplicated-selectors/README.md": "README.md",
    "postcss-combine-duplicated-selectors/LICENSE": "LICENSE",
  },
  beforeConvert(_src, { replaceAll, rename }) {
    // Rename lib/purgecss.esm.js => mod.js
    rename(
      "src/index.js",
      "mod.js",
      (code) => code.replaceAll(`./`, `./src/`),
    );
  },
  afterConvert(_src, { replaceAll }) {
    replaceAll((code) => {
        code = code.replaceAll('"./deps.js"', '"https://deno.land/x/postcss_selector_parser@v6.0.2/mod.js"');
        code = code.replaceAll('import { name } from "../src/package.json";', 'const name = "postcss-combine-duplicated-selectors"');
        return code
    }
    );
  },
});