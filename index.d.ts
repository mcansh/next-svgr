declare module "*.svg" {
  export type ReactSVGElement = React.StatelessComponent<
    React.SVGAttributes<SVGElement>
  >;

  const content: ReactSVGElement;
  export default content;
}
