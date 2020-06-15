declare module "*.svg" {
  type ReactSVGElement = React.StatelessComponent<
    React.SVGAttributes<SVGElement>
  >;

  const content: ReactSVGElement;
  export default content;
}
