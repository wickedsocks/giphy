export interface ITrendingResponse {
  data: IGiphyTrendingDataItem[];
  pagination: IPagination;
  meta: IMeta;
}

export interface IGiphyTrendingDataItem {
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
  images: IGiphyTrendingDataImages;
  user: IUser;
  analytics: IAnalytics;
}

export interface IGiphyTrendingDataImagesWidthHeight {
  height: string;
  width: string;
}

export interface IGiphyTrendingDataImagesDefaultShape
  extends IGiphyTrendingDataImagesWidthHeight,
  IUrl {
  size: string;
}

export interface IGiphyTrendingDataImagesOriginalShape
  extends IGiphyTrendingDataImagesDefaultShape {
  frames: string;
  hash: string;
  mp4: string;
  mp4_size: string;
  webp: string;
  webp_size: string;
}

export interface IGiphyTrendingDataImagesDefaultShapeWEBP
  extends IGiphyTrendingDataImagesDefaultShape {
  webp: string;
  webp_size: string;
}

export interface IGiphyTrendingDataMP4Shape {
  mp4: string;
  mp4_size: string;
}

export interface IGiphyTrendingDataImagesMP4
  extends IGiphyTrendingDataImagesWidthHeight,
  IGiphyTrendingDataMP4Shape {
}

export interface IGiphyTrendingDataImagesMP4AndWEBPSize
  extends IGiphyTrendingDataImagesMP4,
  IGiphyTrendingDataImagesDefaultShapeWEBP,
  IGiphyTrendingDataImagesDefaultShapeWEBP { }

export interface IGiphyTrendingDataImagesWStill
  extends IGiphyTrendingDataImagesWidthHeight,
  IUrl {
}

export interface IGiphyTrendingDataImages {
  downsized_large: IGiphyTrendingDataImagesDefaultShape;
  fixed_height_small_still: IGiphyTrendingDataImagesDefaultShape;
  original: IGiphyTrendingDataImagesOriginalShape;
  fixed_height_downsampled: IGiphyTrendingDataImagesDefaultShapeWEBP;
  downsized_still: IGiphyTrendingDataImagesDefaultShape;
  fixed_height_still: IGiphyTrendingDataImagesDefaultShape;
  downsized_medium: IGiphyTrendingDataImagesDefaultShape;
  downsized: IGiphyTrendingDataImagesDefaultShape;
  preview_webp: IGiphyTrendingDataImagesDefaultShape;
  original_mp4: IGiphyTrendingDataImagesMP4;
  fixed_height_small: IGiphyTrendingDataImagesMP4AndWEBPSize;
  fixed_height: IGiphyTrendingDataImagesMP4AndWEBPSize;
  downsized_small: IGiphyTrendingDataImagesMP4;
  preview: IGiphyTrendingDataImagesMP4;
  fixed_width_downsampled: IGiphyTrendingDataImagesMP4AndWEBPSize;
  fixed_width_small_still: IGiphyTrendingDataImagesDefaultShape;
  fixed_width_small: IGiphyTrendingDataImagesMP4AndWEBPSize;
  original_still: IGiphyTrendingDataImagesDefaultShape;
  fixed_width_still: IGiphyTrendingDataImagesDefaultShape;
  looping: IGiphyTrendingDataMP4Shape;
  fixed_width: IGiphyTrendingDataImagesMP4AndWEBPSize;
  preview_gif: IGiphyTrendingDataImagesDefaultShape;
  '480w_still': IGiphyTrendingDataImagesWStill;
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
  onset: IUrl;
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
