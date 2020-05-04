export interface NavElementModel {
  displayName: string;
  disabled?: boolean;
  iconName?: string;
  route?: string;
  expand?: boolean;
  children?: NavElementModel[];
}