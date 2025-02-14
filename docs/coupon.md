# Coupon
Couponは支払い時に指定し、支払い処理の前にCouponに指定の方法で値引き処理を行います。
Couponは特定店舗で利用できるものや利用可能期間、配信条件などを設定できます。


<a name="list-coupons"></a>
## ListCoupons: クーポン一覧の取得
指定したマネーのクーポン一覧を取得します

```typescript
const response: Response<PaginatedCoupons> = await client.send(new ListCoupons({
  private_money_id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", // 対象クーポンのマネーID
  coupon_id: "M3xNEFCgQ", // クーポンID
  coupon_name: "heyCbSnP", // クーポン名
  issued_shop_name: "P0SqnjQB", // 発行店舗名
  available_shop_name: "0gNpyva", // 利用可能店舗名
  available_from: "2022-05-19T13:43:27.000000Z", // 利用可能期間 (開始日時)
  available_to: "2020-03-28T09:46:43.000000Z", // 利用可能期間 (終了日時)
  page: 1, // ページ番号
  per_page: 50 // 1ページ分の取得数
}));
```



### Parameters
**`private_money_id`** 
  

対象クーポンのマネーIDです(必須項目)。
存在しないマネーIDを指定した場合はprivate_money_not_foundエラー(422)が返ります。


```json
{
  "type": "string",
  "format": "uuid"
}
```

**`coupon_id`** 
  

指定されたクーポンIDで結果をフィルターします。
部分一致(前方一致)します。


```json
{
  "type": "string"
}
```

**`coupon_name`** 
  

指定されたクーポン名で結果をフィルターします。


```json
{
  "type": "string"
}
```

**`issued_shop_name`** 
  

指定された発行店舗で結果をフィルターします。


```json
{
  "type": "string"
}
```

**`available_shop_name`** 
  

指定された利用可能店舗で結果をフィルターします。


```json
{
  "type": "string"
}
```

**`available_from`** 
  

利用可能期間でフィルターします。フィルターの開始日時をISO8601形式で指定します。


```json
{
  "type": "string",
  "format": "date-time"
}
```

**`available_to`** 
  

利用可能期間でフィルターします。フィルターの終了日時をISO8601形式で指定します。


```json
{
  "type": "string",
  "format": "date-time"
}
```

**`page`** 
  

取得したいページ番号です。

```json
{
  "type": "integer",
  "minimum": 1
}
```

**`per_page`** 
  

1ページ分の取得数です。デフォルトでは 50 になっています。

```json
{
  "type": "integer",
  "minimum": 1
}
```



成功したときは
[PaginatedCoupons](./responses.md#paginated-coupons)
を返します

### Error Responses
|status|type|ja|en|
|---|---|---|---|
|403|unpermitted_admin_user|この管理ユーザには権限がありません|Admin does not have permission|
|422|shop_user_not_found|店舗が見つかりません|The shop user is not found|
|422|private_money_not_found|マネーが見つかりません|Private money not found|



---


<a name="create-coupon"></a>
## CreateCoupon: クーポンの登録
新しいクーポンを登録します

```typescript
const response: Response<CouponDetail> = await client.send(new CreateCoupon({
  private_money_id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  name: "HzjlAdXU9fbl4BElEfYJcTmiRof0lbldCRsSSTgoxqh3aCnDQum7xlHp8mSoN73gaH3XPjunt8NgffostplBJ13qPcXVXQ9E7",
  starts_at: "2020-01-18T20:54:43.000000Z",
  ends_at: "2023-09-17T17:12:17.000000Z",
  issued_shop_id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", // 発行元の店舗ID
  description: "fuC0zsB8aQbgel1VXLZNhM7VCGfzH0EqAidHGV4baZPNRUSJ9iQNhB3KMhlAuhO2DrrEN6v7h6DIeIXBVaS0Zi07XrJykFEWCqS7fIGsgSUetvzhcyY8O4aW8dVGclxW2nJI1LDT3BhMLUADblZz6ydgd6gveWK49xDzlQxtC3xLL1ERUl6NhqKkDSvghab5bsImY7PcHPZH7mHIXsOqC2xcKBYhL1xCfnaEpD",
  discount_amount: 8652,
  discount_percentage: 2663.0,
  discount_upper_limit: 9723,
  display_starts_at: "2022-01-17T14:03:05.000000Z", // クーポンの掲載期間(開始日時)
  display_ends_at: "2024-12-22T01:47:18.000000Z", // クーポンの掲載期間(終了日時)
  is_disabled: true, // 無効化フラグ
  is_hidden: true, // クーポン一覧に掲載されるかどうか
  is_public: true, // アプリ配信なしで受け取れるかどうか
  code: "zsu", // クーポン受け取りコード
  usage_limit: 2025, // ユーザごとの利用可能回数(NULLの場合は無制限)
  min_amount: 3297, // クーポン適用可能な最小取引額
  is_shop_specified: false, // 特定店舗限定のクーポンかどうか
  available_shop_ids: ["xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"], // 利用可能店舗リスト
  storage_id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" // ストレージID
}));
```

`is_shop_specified`と`available_shop_ids`は同時に指定する必要があります。


### Parameters
**`private_money_id`** 
  


```json
{
  "type": "string",
  "format": "uuid"
}
```

**`name`** 
  


```json
{
  "type": "string",
  "maxLength": 128
}
```

**`description`** 
  


```json
{
  "type": "string",
  "maxLength": 256
}
```

**`discount_amount`** 
  


```json
{
  "type": "integer",
  "minimum": 0
}
```

**`discount_percentage`** 
  


```json
{
  "type": "number",
  "minimum": 0
}
```

**`discount_upper_limit`** 
  


```json
{
  "type": "integer",
  "minimum": 0
}
```

**`starts_at`** 
  


```json
{
  "type": "string",
  "format": "date-time"
}
```

**`ends_at`** 
  


```json
{
  "type": "string",
  "format": "date-time"
}
```

**`display_starts_at`** 
  


```json
{
  "type": "string",
  "format": "date-time"
}
```

**`display_ends_at`** 
  


```json
{
  "type": "string",
  "format": "date-time"
}
```

**`is_disabled`** 
  


```json
{
  "type": "boolean"
}
```

**`is_hidden`** 
  

アプリに表示されるクーポン一覧に掲載されるかどうか。
主に一時的に掲載から外したいときに用いられる。そのためis_publicの設定よりも優先される。


```json
{
  "type": "boolean"
}
```

**`is_public`** 
  


```json
{
  "type": "boolean"
}
```

**`code`** 
  


```json
{
  "type": "string"
}
```

**`usage_limit`** 
  


```json
{
  "type": "integer"
}
```

**`min_amount`** 
  


```json
{
  "type": "integer"
}
```

**`issued_shop_id`** 
  


```json
{
  "type": "string",
  "format": "uuid"
}
```

**`is_shop_specified`** 
  


```json
{
  "type": "boolean"
}
```

**`available_shop_ids`** 
  


```json
{
  "type": "array",
  "items": {
    "type": "string",
    "format": "uuid"
  }
}
```

**`storage_id`** 
  

Storage APIでアップロードしたクーポン画像のStorage IDを指定します

```json
{
  "type": "string",
  "format": "uuid"
}
```



成功したときは
[CouponDetail](./responses.md#coupon-detail)
を返します

### Error Responses
|status|type|ja|en|
|---|---|---|---|
|400|invalid_parameters|項目が無効です|Invalid parameters|
|403|unpermitted_admin_user|この管理ユーザには権限がありません|Admin does not have permission|
|404|partner_storage_not_found|指定したIDのデータは保存されていません|Not found by storage_id|
|422|shop_user_not_found|店舗が見つかりません|The shop user is not found|
|422|private_money_not_found|マネーが見つかりません|Private money not found|
|422|coupon_image_storage_conflict|クーポン画像のストレージIDは既に存在します|The coupon image storage_id is already exists|



---


<a name="get-coupon"></a>
## GetCoupon: クーポンの取得
指定したIDを持つクーポンを取得します

```typescript
const response: Response<CouponDetail> = await client.send(new GetCoupon({
  coupon_id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" // クーポンID
}));
```



### Parameters
**`coupon_id`** 
  

取得するクーポンのIDです。
UUIDv4フォーマットである必要があり、フォーマットが異なる場合は InvalidParametersエラー(400)が返ります。
指定したIDのクーポンが存在しない場合はCouponNotFoundエラー(422)が返ります。

```json
{
  "type": "string",
  "format": "uuid"
}
```



成功したときは
[CouponDetail](./responses.md#coupon-detail)
を返します



---


<a name="update-coupon"></a>
## UpdateCoupon: クーポンの更新
指定したクーポンを更新します

```typescript
const response: Response<CouponDetail> = await client.send(new UpdateCoupon({
  coupon_id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", // クーポンID
  name: "cQf4nuECfdVUoATZ0pZ1FEusk3svdOIWNVHFftM1EZPsd7jOCTvYgQYDODNTX3YU3qGQBWGDfb1wlkuiN7kKWKFoxKeA9tuL5LH4EHPGJy8ZSoJ1k",
  description: "FHQyhzGXerHPOPDvrwRgeSOaGF6stofVWAQmmxPEjbZK4rVxAUW7FWHkKwdg6799FNaTUuVqVNtvvxMPy8uYVQrlAwBlTLDHylYVoU0Lud9b5MHdM8U",
  discount_amount: 3515,
  discount_percentage: 5250.0,
  discount_upper_limit: 4909,
  starts_at: "2020-12-10T00:16:55.000000Z",
  ends_at: "2020-08-30T17:03:13.000000Z",
  display_starts_at: "2024-09-18T11:48:48.000000Z", // クーポンの掲載期間(開始日時)
  display_ends_at: "2020-07-23T02:55:51.000000Z", // クーポンの掲載期間(終了日時)
  is_disabled: true, // 無効化フラグ
  is_hidden: true, // クーポン一覧に掲載されるかどうか
  is_public: false, // アプリ配信なしで受け取れるかどうか
  code: "ul", // クーポン受け取りコード
  usage_limit: 5464, // ユーザごとの利用可能回数(NULLの場合は無制限)
  min_amount: 3365, // クーポン適用可能な最小取引額
  is_shop_specified: true, // 特定店舗限定のクーポンかどうか
  available_shop_ids: ["xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"], // 利用可能店舗リスト
  storage_id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" // ストレージID
}));
```


`discount_amount`と`discount_percentage`の少なくとも一方は指定する必要があります。



### Parameters
**`coupon_id`** 
  


```json
{
  "type": "string",
  "format": "uuid"
}
```

**`name`** 
  


```json
{
  "type": "string",
  "maxLength": 128
}
```

**`description`** 
  


```json
{
  "type": "string",
  "maxLength": 256
}
```

**`discount_amount`** 
  


```json
{
  "type": "integer",
  "minimum": 0
}
```

**`discount_percentage`** 
  


```json
{
  "type": "number",
  "minimum": 0
}
```

**`discount_upper_limit`** 
  


```json
{
  "type": "integer",
  "minimum": 0
}
```

**`starts_at`** 
  


```json
{
  "type": "string",
  "format": "date-time"
}
```

**`ends_at`** 
  


```json
{
  "type": "string",
  "format": "date-time"
}
```

**`display_starts_at`** 
  


```json
{
  "type": "string",
  "format": "date-time"
}
```

**`display_ends_at`** 
  


```json
{
  "type": "string",
  "format": "date-time"
}
```

**`is_disabled`** 
  


```json
{
  "type": "boolean"
}
```

**`is_hidden`** 
  

アプリに表示されるクーポン一覧に掲載されるかどうか。
主に一時的に掲載から外したいときに用いられる。そのためis_publicの設定よりも優先される。


```json
{
  "type": "boolean"
}
```

**`is_public`** 
  


```json
{
  "type": "boolean"
}
```

**`code`** 
  


```json
{
  "type": "string"
}
```

**`usage_limit`** 
  


```json
{
  "type": "integer"
}
```

**`min_amount`** 
  


```json
{
  "type": "integer"
}
```

**`is_shop_specified`** 
  


```json
{
  "type": "boolean"
}
```

**`available_shop_ids`** 
  


```json
{
  "type": "array",
  "items": {
    "type": "string",
    "format": "uuid"
  }
}
```

**`storage_id`** 
  

Storage APIでアップロードしたクーポン画像のStorage IDを指定します

```json
{
  "type": "string",
  "format": "uuid"
}
```



成功したときは
[CouponDetail](./responses.md#coupon-detail)
を返します



---



