export interface ISearchResponse {
  data: IGiphySearchDataItem[];
  pagination: IPagination;
  meta: IMeta;
}

export interface IGiphySearchDataItem {
  type: string;
  id: string;
  url: string;
  slug: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  title: string;
  rating: string;
  content_url: string;
  source_tld: string;
  source_post_url: string;
  is_sticker: number;
  import_datetime: string;
  trending_datetime: string;
  images: IGiphySearchDataImages;
  analytics: IAnalytics;
}

export interface IGiphySearchDataImagesWidthHeight {
  height: string;
  width: string;
}

export interface IGiphySearchDataImagesDefaultShape
  extends IGiphySearchDataImagesWidthHeight,
  IUrl {
  size: string;
}

export interface IGiphySearchDataImagesOriginalShape
  extends IGiphySearchDataImagesDefaultShape {
  frames: string;
  hash: string;
  mp4: string;
  mp4_size: string;
  webp: string;
  webp_size: string;
}

export interface IGiphySearchDataImagesDefaultShapeWEBP
  extends IGiphySearchDataImagesDefaultShape {
  webp: string;
  webp_size: string;
}

export interface IGiphySearchDataMP4Shape {
  mp4: string;
  mp4_size: string;
}

export interface IGiphySearchDataImagesMP4
  extends IGiphySearchDataImagesWidthHeight,
  IGiphySearchDataMP4Shape {
}

export interface IGiphySearchDataImagesMP4AndWEBPSize
  extends IGiphySearchDataImagesMP4,
  IGiphySearchDataImagesDefaultShapeWEBP { }

export interface IGiphySearchDataImagesWStill
  extends IGiphySearchDataImagesWidthHeight,
  IUrl {
}

export interface IGiphySearchDataImages {
  downsized_large: IGiphySearchDataImagesDefaultShape;
  fixed_height_small_still: IGiphySearchDataImagesDefaultShape;
  original: IGiphySearchDataImagesOriginalShape;
  fixed_height_downsampled: IGiphySearchDataImagesDefaultShapeWEBP;
  downsized_still: IGiphySearchDataImagesDefaultShape;
  fixed_height_still: IGiphySearchDataImagesDefaultShape;
  downsized_medium: IGiphySearchDataImagesDefaultShape;
  downsized: IGiphySearchDataImagesDefaultShape;
  preview_webp: IGiphySearchDataImagesDefaultShape;
  original_mp4: IGiphySearchDataImagesMP4;
  fixed_height_small: IGiphySearchDataImagesMP4AndWEBPSize;
  fixed_height: IGiphySearchDataImagesMP4AndWEBPSize;
  downsized_small: IGiphySearchDataImagesMP4;
  preview: IGiphySearchDataImagesMP4;
  fixed_width_downsampled: IGiphySearchDataImagesDefaultShapeWEBP;
  fixed_width_small_still: IGiphySearchDataImagesDefaultShape;
  fixed_width_small: IGiphySearchDataImagesMP4AndWEBPSize;
  original_still: IGiphySearchDataImagesDefaultShape;
  fixed_width_still: IGiphySearchDataImagesDefaultShape;
  looping: IGiphySearchDataMP4Shape;
  fixed_width: IGiphySearchDataImagesMP4AndWEBPSize;
  preview_gif: IGiphySearchDataImagesDefaultShape;
  '480w_still': IGiphySearchDataImagesWStill;
}

export interface IUser {
  avatar_url: string;
  banner_image: string;
  banner_url: string;
  profile_url: string;
  username: string;
  display_name: string;
  is_verified: boolean;
}

export interface IAnalytics {
  onload: IUrl;
  onclick: IUrl;
  onsent: IUrl;
}


export interface IUrl {
  url: string;
}

export interface IPagination {
  total_count: number;
  count: number;
  offset: number;
}

export interface IMeta {
  status: number;
  msg: string;
  response_id: string;
}
