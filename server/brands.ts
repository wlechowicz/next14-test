export type Brand = {
  name: string;
  description: string;
  theme: {
    header: {
      logoColor: string;
    };
  };
};

type BrandsConfig = {
  [key: string]: Brand;
};

const brands: BrandsConfig = {
  fooflix: {
    name: "Fooflix",
    description: "Get flixed, foo!",
    theme: {
      header: {
        logoColor: "text-rose-800",
      },
    },
  },
  barflix: {
    name: "Barflix",
    description: "Get flixed, bar!",
    theme: {
      header: {
        logoColor: "text-yellow-500",
      },
    },
  },
};

export function getKnownBrands() {
  return Object.keys(brands);
}

export function getBrandData(brand: string) {
  return brands[brand];
}
