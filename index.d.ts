declare module "@mcansh/next-svgr" {
  export type ReactSVGElement = React.StatelessComponent<
    React.SVGAttributes<SVGElement>
  >;
}

declare module "*.svg" {
  import { ReactSVGElement } from "@mcansh/next-svgr";
  const content: ReactSVGElement;
  export default content;
}
