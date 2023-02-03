import { type Plugin } from "https://deno.land/x/postcss@8.4.16/lib/postcss.d.ts";
declare function combineDuplicatedSelectors(options: any): {
    postcssPlugin: string;
    prepare(): {
        Rule: (rule: any) => void;
    };
};
declare namespace combineDuplicatedSelectors {
    var postcss: boolean;
}
export default combineDuplicatedSelectors as Plugin;