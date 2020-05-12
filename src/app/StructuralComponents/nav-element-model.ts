export interface NavElementModel {
  displayName: string;
  menuName?: string;
  route?: string;
  expand?: boolean;
  children?: NavElementModel[];
}