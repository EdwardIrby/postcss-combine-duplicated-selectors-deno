# Clean old files
# rm README.md
rm LICENSE
rm mod.js
rm -rf postcss-combine-duplicated-selectors

# Clone the repo
git clone --depth 1 --branch main https://github.com/ChristianMurphy/postcss-combine-duplicated-selectors.git
cd postcss-combine-duplicated-selectors
npm i && cd ../

# Run the script
deno run --unstable --allow-read=. --allow-write=. to_deno.js

# Autoformat the code
deno fmt deno

# Cleanup
rm -rf postcss-combine-duplicated-selectors