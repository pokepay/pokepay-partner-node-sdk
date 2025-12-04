# Coupon
Couponは支払い時に指定し、支払い処理の前にCouponに指定の方法で値引き処理を行います。
Couponは特定店舗で利用できるものや利用可能期間、配信条件などを設定できます。


<a name="list-coupons"></a>
## ListCoupons: クーポン一覧の取得
指定したマネーのクーポン一覧を取得します

```typescript
const response: Response<PaginatedCoupons> = await client.send(new ListCoupons({
  private_money_id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", // 対象クーポンのマネーID
  coupon_id: "nzt", // クーポンID
  coupon_name: "M7BVf", // クーポン名
  issued_shop_name: "n4iFYyJ", // 発行店舗名
  available_shop_name: "frDUn2Z5d", // 利用可能店舗名
  available_from: "2020-02-11T21:12:34.000000Z", // 利用可能期間 (開始日時)
  available_to: "2020-12-20T06:12:13.000000Z", // 利用可能期間 (終了日時)
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
  name: "hYMOaLFSQqsldJHk3l4cpZ7fJl29A3O6y0fQnXOgwkIth5yMWiTVYzb9YasuIp7v4EzACicWq4Ul0b",
  starts_at: "2022-07-02T06:32:57.000000Z",
  ends_at: "2025-02-04T06:48:34.000000Z",
  issued_shop_id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", // 発行元の店舗ID
  description: "BFnJwjrPufrwL5Z4qM5cyeftMbZhJuNsCdqVbAgLZQKQXblhvdQVC38rMOaKHSf5htPpycWdWsbduWBxtfg1Kliu47KITpvwbo61t0xPHohZAfXS5WAq97VI0kJjyO9S00lRKqhRSKyv4aeUNiX5kIXisF2lvLdWFA",
  discount_amount: 8829,
  discount_percentage: 6073.0,
  discount_upper_limit: 9871,
  display_starts_at: "2024-10-08T21:40:21.000000Z", // クーポンの掲載期間(開始日時)
  display_ends_at: "2020-04-24T16:28:51.000000Z", // クーポンの掲載期間(終了日時)
  is_disabled: true, // 無効化フラグ
  is_hidden: false, // クーポン一覧に掲載されるかどうか
  is_public: true, // アプリ配信なしで受け取れるかどうか
  code: "yvO", // クーポン受け取りコード
  usage_limit: 2919, // ユーザごとの利用可能回数(NULLの場合は無制限)
  min_amount: 672, // クーポン適用可能な最小取引額
  is_shop_specified: true, // 特定店舗限定のクーポンかどうか
  available_shop_ids: ["xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"], // 利用可能店舗リスト
  storage_id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", // ストレージID
  num_recipients_cap: 4797 // クーポンを受け取ることができるユーザ数上限
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

**`num_recipients_cap`** 
  


```json
{
  "type": "integer",
  "minimum": 1
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
  name: "w2bcIoYI3B409EBsOM",
  description: "mHn7CA1SM3xNEFCgQheyCbSnP7P0SqnjQBF0gNpyvaBHzjlAdXU9fb",
  discount_amount: 2868,
  discount_percentage: 4418.0,
  discount_upper_limit: 2117,
  starts_at: "2023-06-22T08:03:37.000000Z",
  ends_at: "2025-07-28T21:42:34.000000Z",
  display_starts_at: "2021-12-29T12:28:19.000000Z", // クーポンの掲載期間(開始日時)
  display_ends_at: "2025-02-05T07:56:27.000000Z", // クーポンの掲載期間(終了日時)
  is_disabled: true, // 無効化フラグ
  is_hidden: false, // クーポン一覧に掲載されるかどうか
  is_public: false, // アプリ配信なしで受け取れるかどうか
  code: "miRof", // クーポン受け取りコード
  usage_limit: 783, // ユーザごとの利用可能回数(NULLの場合は無制限)
  min_amount: 4912, // クーポン適用可能な最小取引額
  is_shop_specified: true, // 特定店舗限定のクーポンかどうか
  available_shop_ids: ["xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"], // 利用可能店舗リスト
  storage_id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", // ストレージID
  num_recipients_cap: 2029 // クーポンを受け取ることができるユーザ数上限
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

**`num_recipients_cap`** 
  


```json
{
  "type": "integer",
  "minimum": 1
}
```



成功したときは
[CouponDetail](./responses.md#coupon-detail)
を返します



---



