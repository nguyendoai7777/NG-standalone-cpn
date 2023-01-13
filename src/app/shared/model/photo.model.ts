export interface Photo {
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  alt: string;
  url: string;
  src: {
    landscape: string;
    large: string;
    large2x: string;
    medium: string;
    original: string;
    portrait: string;
    small: string;
    tiny: string;
  };
  avg_color: string;
  height: number;
  id: number;
  width: number;
}

export interface PhotoPaginationProps {
  photos: Photo[];
  page: number;
  total_results: number;
  next_page?: string;
  per_page: number;
  prev_page?: string;
}
