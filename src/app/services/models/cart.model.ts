export interface SubPackage {
  name: string;
  price: number;
}

export interface Package {
  packageName: string;
  price: number;
  subPackages?: SubPackage[];
}
