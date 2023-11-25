import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return {
    h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    h2: ({ children }) => <h2 style={{ fontSize: "80px" }}>{children}</h2>,
    ...components,
  };
}
