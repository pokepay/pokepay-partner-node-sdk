# Shop
店舗（加盟店）を表すデータです。
Pokepayプラットフォーム上で支払いを受け取る店舗ユーザーを管理します。
店舗は組織（Organization）に所属し、店舗ごとにウォレットを持ちます。
店舗情報には住所、電話番号、メールアドレス、外部連携用IDなどが含まれます。
店舗ステータス（active/disabled）の管理も可能です。


<a name="list-shops"></a>
## ListShops: 店舗一覧を取得する

```typescript
const response: Response<PaginatedShops> = await client.send(new ListShops({
  organization_code: "pocketchange", // 組織コード
  private_money_id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", // マネーID
  name: "oxスーパー三田店", // 店舗名
  postal_code: "9747178", // 店舗の郵便番号
  address: "東京都港区芝...", // 店舗の住所
  tel: "09809-1875", // 店舗の電話番号
  email: "mw82VAIRkH@cNMg.com", // 店舗のメールアドレス
  external_id: "qN77FQwuiGtQW4pnFSkfz0ZAYuHKEr", // 店舗の外部ID
  with_disabled: false, // 無効な店舗を含める
  page: 1, // ページ番号
  per_page: 50 // 1ページ分の取引数
}));
```



### Parameters
#### `organization_code`
このパラメータを渡すとその組織の店舗のみが返され、省略すると加盟店も含む店舗が返されます。

<details>
<summary>スキーマ</summary>

```json
{
  "type": "string",
  "maxLength": 32,
  "pattern": "^[a-zA-Z0-9-]*$"
}
```

</details>

#### `private_money_id`
このパラメータを渡すとそのマネーのウォレットを持つ店舗のみが返されます。

<details>
<summary>スキーマ</summary>

```json
{
  "type": "string",
  "format": "uuid"
}
```

</details>

#### `name`
このパラメータを渡すとその名前の店舗のみが返されます。

<details>
<summary>スキーマ</summary>

```json
{
  "type": "string",
  "minLength": 1,
  "maxLength": 256
}
```

</details>

#### `postal_code`
このパラメータを渡すとその郵便番号が登録された店舗のみが返されます。

<details>
<summary>スキーマ</summary>

```json
{
  "type": "string",
  "pattern": "^[0-9]{3}-?[0-9]{4}$"
}
```

</details>

#### `address`
このパラメータを渡すとその住所が登録された店舗のみが返されます。

<details>
<summary>スキーマ</summary>

```json
{
  "type": "string",
  "maxLength": 256
}
```

</details>

#### `tel`
このパラメータを渡すとその電話番号が登録された店舗のみが返されます。

<details>
<summary>スキーマ</summary>

```json
{
  "type": "string",
  "pattern": "^0[0-9]{1,3}-?[0-9]{2,4}-?[0-9]{3,4}$"
}
```

</details>

#### `email`
このパラメータを渡すとそのメールアドレスが登録された店舗のみが返されます。

<details>
<summary>スキーマ</summary>

```json
{
  "type": "string",
  "format": "email",
  "maxLength": 256
}
```

</details>

#### `external_id`
このパラメータを渡すとその外部IDが登録された店舗のみが返されます。

<details>
<summary>スキーマ</summary>

```json
{
  "type": "string",
  "maxLength": 36
}
```

</details>

#### `with_disabled`
このパラメータを渡すと無効にされた店舗を含めて返されます。デフォルトでは無効にされた店舗は返されません。

<details>
<summary>スキーマ</summary>

```json
{
  "type": "boolean"
}
```

</details>

#### `page`
取得したいページ番号です。

<details>
<summary>スキーマ</summary>

```json
{
  "type": "integer",
  "minimum": 1
}
```

</details>

#### `per_page`
1ページ分の取引数です。

<details>
<summary>スキーマ</summary>

```json
{
  "type": "integer",
  "minimum": 1
}
```

</details>



成功したときは
[PaginatedShops](./responses.md#paginated-shops)
を返します

### Error Responses
|status|type|ja|en|
|---|---|---|---|
|403|unpermitted_admin_user|この管理ユーザには権限がありません|Admin does not have permission|
|422|private_money_not_found|マネーが見つかりません|Private money not found|
|422|organization_not_found||Organization not found|
|503|temporarily_unavailable||Service Unavailable|



---


<a name="create-shop"></a>
## CreateShop: 【廃止】新規店舗を追加する
新規店舗を追加します。このAPIは廃止予定です。以降は `CreateShopV2` を使用してください。

```typescript
const response: Response<User> = await client.send(new CreateShop({
  shop_name: "oxスーパー三田店", // 店舗名
  shop_postal_code: "3180984", // 店舗の郵便番号
  shop_address: "東京都港区芝...", // 店舗の住所
  shop_tel: "071807019", // 店舗の電話番号
  shop_email: "qwTxt1HL4w@Wzmk.com", // 店舗のメールアドレス
  shop_external_id: "DA4SVfWD13Zj3L", // 店舗の外部ID
  organization_code: "ox-supermarket" // 組織コード
}));
```



### Parameters
#### `shop_name`

<details>
<summary>スキーマ</summary>

```json
{
  "type": "string",
  "minLength": 1,
  "maxLength": 256
}
```

</details>

#### `shop_postal_code`

<details>
<summary>スキーマ</summary>

```json
{
  "type": "string",
  "pattern": "^[0-9]{3}-?[0-9]{4}$"
}
```

</details>

#### `shop_address`

<details>
<summary>スキーマ</summary>

```json
{
  "type": "string",
  "maxLength": 256
}
```

</details>

#### `shop_tel`

<details>
<summary>スキーマ</summary>

```json
{
  "type": "string",
  "pattern": "^0[0-9]{1,3}-?[0-9]{2,4}-?[0-9]{3,4}$"
}
```

</details>

#### `shop_email`

<details>
<summary>スキーマ</summary>

```json
{
  "type": "string",
  "format": "email",
  "maxLength": 256
}
```

</details>

#### `shop_external_id`

<details>
<summary>スキーマ</summary>

```json
{
  "type": "string",
  "maxLength": 36
}
```

</details>

#### `organization_code`

<details>
<summary>スキーマ</summary>

```json
{
  "type": "string",
  "maxLength": 32,
  "pattern": "^[a-zA-Z0-9-]*$"
}
```

</details>



成功したときは
[User](./responses.md#user)
を返します

### Error Responses
|status|type|ja|en|
|---|---|---|---|
|403|NULL|NULL|NULL|
|409|email_conflict|このメールアドレスは既に使われています|The E-mail address is already registered|
|409|shop_name_conflict||The shop name is already used|
|422|organization_not_member_organization||The specified organization is not a member organization of the organization accessing this API|
|422|organization_not_found||Organization not found|
|422|unavailable_private_money||Given private money(s) is/are not available|



---


<a name="create-shop-v2"></a>
## CreateShopV2: 新規店舗を追加する

```typescript
const response: Response<ShopWithAccounts> = await client.send(new CreateShopV2({
  name: "oxスーパー三田店", // 店舗名
  postal_code: "946-6109", // 店舗の郵便番号
  address: "東京都港区芝...", // 店舗の住所
  tel: "012920864", // 店舗の電話番号
  email: "WEdtL2ujHb@A770.com", // 店舗のメールアドレス
  external_id: "c9iXi2Q1VWdznJovLhT0BrHHw3tEdBOJZoc", // 店舗の外部ID
  organization_code: "ox-supermarket", // 組織コード
  private_money_ids: ["xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"], // 店舗で有効にするマネーIDの配列
  can_topup_private_money_ids: [] // 店舗でチャージ可能にするマネーIDの配列
}));
```



### Parameters
#### `name`
店舗名です。

同一組織内に同名の店舗があった場合は`name_conflict`エラーが返ります。

<details>
<summary>スキーマ</summary>

```json
{
  "type": "string",
  "minLength": 1,
  "maxLength": 256
}
```

</details>

#### `postal_code`

<details>
<summary>スキーマ</summary>

```json
{
  "type": "string",
  "pattern": "^[0-9]{3}-?[0-9]{4}$"
}
```

</details>

#### `address`

<details>
<summary>スキーマ</summary>

```json
{
  "type": "string",
  "maxLength": 256
}
```

</details>

#### `tel`

<details>
<summary>スキーマ</summary>

```json
{
  "type": "string",
  "pattern": "^0[0-9]{1,3}-?[0-9]{2,4}-?[0-9]{3,4}$"
}
```

</details>

#### `email`

<details>
<summary>スキーマ</summary>

```json
{
  "type": "string",
  "format": "email",
  "maxLength": 256
}
```

</details>

#### `external_id`

<details>
<summary>スキーマ</summary>

```json
{
  "type": "string",
  "maxLength": 36
}
```

</details>

#### `organization_code`

<details>
<summary>スキーマ</summary>

```json
{
  "type": "string",
  "maxLength": 32,
  "pattern": "^[a-zA-Z0-9-]*$"
}
```

</details>

#### `private_money_ids`
店舗で有効にするマネーIDの配列を指定します。

店舗が所属する組織が発行または加盟しているマネーのみが指定できます。利用できないマネーが指定された場合は`unavailable_private_money`エラーが返ります。
このパラメータを省略したときは、店舗が所属する組織が発行または加盟している全てのマネーのウォレットができます。

<details>
<summary>スキーマ</summary>

```json
{
  "type": "array",
  "minItems": 1,
  "items": {
    "type": "string",
    "format": "uuid"
  }
}
```

</details>

#### `can_topup_private_money_ids`
店舗でチャージ可能にするマネーIDの配列を指定します。

このパラメータは発行体のみが指定でき、自身が発行しているマネーのみを指定できます。加盟店が他発行体のマネーに加盟している場合でも、そのチャージ可否を変更することはできません。
省略したときは対象店舗のその発行体の全てのマネーのアカウントがチャージ不可となります。

<details>
<summary>スキーマ</summary>

```json
{
  "type": "array",
  "minItems": 0,
  "items": {
    "type": "string",
    "format": "uuid"
  }
}
```

</details>



成功したときは
[ShopWithAccounts](./responses.md#shop-with-accounts)
を返します

### Error Responses
|status|type|ja|en|
|---|---|---|---|
|400|invalid_parameters|項目が無効です|Invalid parameters|
|403|unpermitted_admin_user|この管理ユーザには権限がありません|Admin does not have permission|
|409|shop_name_conflict||The shop name is already used|
|422|organization_not_found||Organization not found|
|422|unpermitted_private_money|このマネーは使えません|This money is not available|
|422|unavailable_private_money||Given private money(s) is/are not available|
|422|organization_not_member_organization||The specified organization is not a member organization of the organization accessing this API|



---


<a name="get-shop"></a>
## GetShop: 店舗情報を表示する
店舗情報を表示します。

権限に関わらず自組織の店舗情報は表示可能です。それに加え、発行体は自組織の発行しているマネーの加盟店組織の店舗情報を表示できます。

```typescript
const response: Response<ShopWithAccounts> = await client.send(new GetShop({
  shop_id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" // 店舗ユーザーID
}));
```



### Parameters
#### `shop_id`

<details>
<summary>スキーマ</summary>

```json
{
  "type": "string",
  "format": "uuid"
}
```

</details>



成功したときは
[ShopWithAccounts](./responses.md#shop-with-accounts)
を返します



---


<a name="update-shop"></a>
## UpdateShop: 店舗情報を更新する
店舗情報を更新します。bodyパラメーターは全て省略可能で、指定したもののみ更新されます。

```typescript
const response: Response<ShopWithAccounts> = await client.send(new UpdateShop({
  shop_id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", // 店舗ユーザーID
  name: "oxスーパー三田店", // 店舗名
  postal_code: "962-7022", // 店舗の郵便番号
  address: "東京都港区芝...", // 店舗の住所
  tel: "001-360162", // 店舗の電話番号
  email: "0ZjHbJ4pIY@eH1m.com", // 店舗のメールアドレス
  external_id: "jK91BovJNi", // 店舗の外部ID
  private_money_ids: [], // 店舗で有効にするマネーIDの配列
  can_topup_private_money_ids: ["xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"], // 店舗でチャージ可能にするマネーIDの配列
  status: "disabled" // 店舗の状態
}));
```



### Parameters
#### `shop_id`

<details>
<summary>スキーマ</summary>

```json
{
  "type": "string",
  "format": "uuid"
}
```

</details>

#### `name`
店舗名です。

同一組織内に同名の店舗があった場合は`shop_name_conflict`エラーが返ります。

<details>
<summary>スキーマ</summary>

```json
{
  "type": "string",
  "minLength": 1,
  "maxLength": 256
}
```

</details>

#### `postal_code`
店舗住所の郵便番号(7桁の数字)です。ハイフンは無視されます。明示的に空の値を設定するにはNULLを指定します。

<details>
<summary>スキーマ</summary>

```json
{
  "type": "string",
  "pattern": "^[0-9]{3}-?[0-9]{4}$"
}
```

</details>

#### `address`

<details>
<summary>スキーマ</summary>

```json
{
  "type": "string",
  "maxLength": 256
}
```

</details>

#### `tel`
店舗の電話番号です。ハイフンは無視されます。明示的に空の値を設定するにはNULLを指定します。

<details>
<summary>スキーマ</summary>

```json
{
  "type": "string",
  "pattern": "^0[0-9]{1,3}-?[0-9]{2,4}-?[0-9]{3,4}$"
}
```

</details>

#### `email`
店舗の連絡先メールアドレスです。明示的に空の値を設定するにはNULLを指定します。

<details>
<summary>スキーマ</summary>

```json
{
  "type": "string",
  "format": "email",
  "maxLength": 256
}
```

</details>

#### `external_id`
店舗の外部IDです(最大36文字)。明示的に空の値を設定するにはNULLを指定します。

<details>
<summary>スキーマ</summary>

```json
{
  "type": "string",
  "maxLength": 36
}
```

</details>

#### `private_money_ids`
店舗で有効にするマネーIDの配列を指定します。

店舗が所属する組織が発行または加盟しているマネーのみが指定できます。利用できないマネーが指定された場合は`unavailable_private_money`エラーが返ります。
店舗が既にウォレットを持っている場合に、ここでそのウォレットのマネーIDを指定しないで更新すると、そのマネーのウォレットは凍結(無効化)されます。

<details>
<summary>スキーマ</summary>

```json
{
  "type": "array",
  "minItems": 0,
  "items": {
    "type": "string",
    "format": "uuid"
  }
}
```

</details>

#### `can_topup_private_money_ids`
店舗でチャージ可能にするマネーIDの配列を指定します。

このパラメータは発行体のみが指定でき、発行しているマネーのみを指定できます。加盟店が他発行体のマネーに加盟している場合でも、そのチャージ可否を変更することはできません。
省略したときは対象店舗のその発行体の全てのマネーのアカウントがチャージ不可となります。

<details>
<summary>スキーマ</summary>

```json
{
  "type": "array",
  "minItems": 0,
  "items": {
    "type": "string",
    "format": "uuid"
  }
}
```

</details>

#### `status`
店舗の状態です。activeを指定すると有効となり、disabledを指定するとリスト表示から除外されます。

<details>
<summary>スキーマ</summary>

```json
{
  "type": "string",
  "enum": [
    "active",
    "disabled"
  ]
}
```

</details>



成功したときは
[ShopWithAccounts](./responses.md#shop-with-accounts)
を返します



---



