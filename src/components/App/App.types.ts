export interface IUnsplashImage {
    id: string;
    description: string;
    alt_description: string;
    urls: {
      regular: string;
      small: string;
      thumb: string;
    };
  }

export interface IModal {
    src: string,
    alt: string
  }