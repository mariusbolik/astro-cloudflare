import { type Models } from 'appwrite';

export interface SessionInit {
  sessionId: string,
  productId: string,
  shopId: string,
  sourceDevice: 'desktop' | 'mobile'
}

export interface SessionInitLegacy {
  uid: string;
  shop: string; // e.g. "groundies"
  model: string;
  host: string;
  client: 'desktop' | 'mobile';
}

export interface PhotoMeta {
  url?: string;
  width: number;
  height: number;
  aspectRatio: number;
  foot: 'left' | 'right';
}

export interface MeasurementResult {
  width: number,
  length: number,
}

export interface Scan extends Models.Document {
  a4_bottom_left: Coordinate;
  a4_bottom_right: Coordinate;
  a4_top_left: Coordinate;
  a4_top_right: Coordinate;
  alignment: null;
  code: string;
  name: string;
  date_created: string;
  date_updated: string;
  foot_central: Coordinate;
  foot_heel: Coordinate;
  foot_peripheral: Coordinate;
  foot_top: Coordinate;
  id: string;
  image: string;
  width: number;
  length: number;
  margin_height: number;
  margin_width: number;
  productId: null;
  ref_width: number;
  ref_height: number;
  rescale_height: number;
  rescale_width: number;
  status: string;
  deleted_at: string;
  reconstructed_from_three_corners: boolean;
}

export interface Shoe {
  name: string;
  shops: string[];
  brand: string;
  model_id: string; // TODO: Change to product_id in appwrite
  last_id: string[];
  shop_id: string[];
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  $permissions: any[];
  $collectionId: string;
  $databaseId: string;
}

export interface Shop extends Models.Document {
  name: string;
  url: string;
  coupon_code?: string;
  shop_system?: ShopSystem;
}

export interface ShopSystem extends Models.Document {
  name: string;
}

export type Coordinate = [number, number];

export interface ErrorResponse {
  error: {
    code: number;
    type: string;
    message: string;
  }
}
