import { format as formatFn } from "date-fns/format";
import { ptBR as ptBRLocale } from "date-fns/locale/pt-BR";

// date-fns v4 typings re-export through `.ts` specifiers. TypeScript 4.9
// resolves the package root and the locale barrel, but drops those
// re-exports, so `format` and `ptBR` look missing. These augmentations
// forward the real subpath types. Runtime imports stay on the public API.
declare module "date-fns" {
    export const format: typeof formatFn;
}

declare module "date-fns/locale" {
    export const ptBR: typeof ptBRLocale;
}
