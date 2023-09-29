declare module '@mui/material/styles' {
  interface TypographyVariants {
    titleCard: React.CSSProperties;
    priceCard: React.CSSProperties;
    dateCard: React.CSSProperties;
    titleModal: React.CSSProperties;
    descriptionModal: React.CSSProperties;
    priceModal: React.CSSProperties;
    categoryModal: React.CSSProperties;
    filter: React.CSSProperties;
    menuOptions: React.CSSProperties;
    theme: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    titleCard: React.CSSProperties;
    priceCard: React.CSSProperties;
    dateCard: React.CSSProperties;
    titleModal: React.CSSProperties;
    descriptionModal: React.CSSProperties;
    priceModal: React.CSSProperties;
    categoryModal: React.CSSProperties;
    filter: React.CSSProperties;
    menuOptions: React.CSSProperties;
    theme: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    titleCard: true;
    priceCard: true;
    dateCard: true;
    titleModal: true;
    descriptionModal: true;
    priceModal: true;
    categoryModal: true;
    filter: true;
    menuOptions: true;
    theme: true;
  }
}