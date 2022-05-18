declare namespace Pwamap {
  type ShopData = {
    index: number;
    タイムスタンプ: string;
    緯度: string;
    経度: string;
    スポット名: string;
    カテゴリ: string;
    紹介文: string;
    広さ: number;
    トイレ: number;
    駐車場: boolean;
    水飲み場: number;
    画像: string;
    URL: string;
    Instagram: string;
    Twitter: string;
    公式サイト: string;
  };

  type LngLat = [number, number];
}
