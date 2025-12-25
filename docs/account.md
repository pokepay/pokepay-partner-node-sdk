# Account

<a name="list-user-accounts"></a>
## ListUserAccounts: エンドユーザー、店舗ユーザーのウォレット一覧を表示する
ユーザーIDを指定してそのユーザーのウォレット一覧を取得します。

```typescript
const response: Response<PaginatedAccountDetails> = await client.send(new ListUserAccounts({
  user_id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", // ユーザーID
  page: 8920, // ページ番号
  per_page: 8198 // 1ページ分の取引数
}));
```



### Parameters
#### `user_id`
ユーザーIDです。

指定したユーザーIDのウォレット一覧を取得します。パートナーキーと紐づく組織が発行しているマネーのウォレットのみが表示されます。

<details>
<summary>スキーマ</summary>

```json
{
  "type": "string",
  "format": "uuid"
}
```

</details>

#### `page`
取得したいページ番号です。デフォルト値は1です。

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
1ページ当たりのウォレット数です。デフォルト値は50です。

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
[PaginatedAccountDetails](./responses.md#paginated-account-details)
を返します



---


<a name="create-user-account"></a>
## CreateUserAccount: エンドユーザーのウォレットを作成する
既存のエンドユーザーに対して、指定したマネーのウォレットを新規作成します

```typescript
const response: Response<AccountDetail> = await client.send(new CreateUserAccount({
  user_id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", // ユーザーID
  private_money_id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", // マネーID
  name: "EdtL2ujHbA770c9iXi2Q1VWdznJovLhT0BrHHw3tEdBOJZocfpIFBg2EP1IMpzVlOR0ZjHbJ4pIYeH1mIjK91BovJNiyan2Rg9xEgMUhIRyB0Lq7z8Ljil9JSMA7rA7mkLLtmKfguDK2IgQjODYIDOJbPEulQIvNSkQ", // ウォレット名
  external_id: "ALktsxpQNr6y6a28m0nRuldHpSu", // 外部ID
  metadata: "{\"key1\":\"foo\",\"key2\":\"bar\"}" // ウォレットに付加するメタデータ
}));
```



### Parameters
#### `user_id`
ユーザーIDです。

<details>
<summary>スキーマ</summary>

```json
{
  "type": "string",
  "format": "uuid"
}
```

</details>

#### `private_money_id`
マネーIDです。

作成するウォレットのマネーを指定します。このパラメータは必須です。

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

<details>
<summary>スキーマ</summary>

```json
{
  "type": "string",
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
  "maxLength": 50
}
```

</details>

#### `metadata`
ウォレットに付加するメタデータをJSON文字列で指定します。
指定できるJSON文字列には以下のような制約があります。
- フラットな構造のJSONを文字列化したものであること。
- keyは最大32文字の文字列(同じkeyを複数指定することはできません)
- valueには128文字以下の文字列が指定できます

<details>
<summary>スキーマ</summary>

```json
{
  "type": "string",
  "format": "json"
}
```

</details>



成功したときは
[AccountDetail](./responses.md#account-detail)
を返します



---



