# Customer

<a name="get-account"></a>
## GetAccount: ウォレット情報を表示する
ウォレットを取得します。

```typescript
const response: Response<AccountDetail> = await client.send(new GetAccount({
  account_id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" // ウォレットID
}));
```



### Parameters
**`account_id`** 
  

ウォレットIDです。

フィルターとして使われ、指定したウォレットIDのウォレットを取得します。

```json
{
  "type": "string",
  "format": "uuid"
}
```



成功したときは
[AccountDetail](./responses.md#account-detail)
を返します


---


<a name="update-account"></a>
## UpdateAccount: ウォレット情報を更新する
ウォレットの状態を更新します。
以下の項目が変更できます。

- ウォレットの凍結/凍結解除の切り替え(エンドユーザー、店舗ユーザー共通)
- 店舗でチャージ可能かどうか(店舗ユーザのみ)

エンドユーザーのウォレット情報更新には UpdateCustomerAccount が使用できます。

```typescript
const response: Response<AccountDetail> = await client.send(new UpdateAccount({
  account_id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", // ウォレットID
  is_suspended: true, // ウォレットが凍結されているかどうか
  status: "active", // ウォレット状態
  can_transfer_topup: true // チャージ可能かどうか
}));
```



### Parameters
**`account_id`** 
  

ウォレットIDです。

指定したウォレットIDのウォレットの状態を更新します。

```json
{
  "type": "string",
  "format": "uuid"
}
```

**`is_suspended`** 
  

ウォレットの凍結状態です。真にするとウォレットが凍結され、そのウォレットでは新規取引ができなくなります。偽にすると凍結解除されます。

```json
{
  "type": "boolean"
}
```

**`status`** 
  

ウォレットの状態です。

```json
{
  "type": "string",
  "enum": [
    "active",
    "suspended",
    "pre-closed"
  ]
}
```

**`can_transfer_topup`** 
  

店舗ユーザーがエンドユーザーにチャージ可能かどうかです。真にするとチャージ可能となり、偽にするとチャージ不可能となります。

```json
{
  "type": "boolean"
}
```



成功したときは
[AccountDetail](./responses.md#account-detail)
を返します


---


<a name="delete-account"></a>
## DeleteAccount: ウォレットを退会する
ウォレットを退会します。一度ウォレットを退会した後は、そのウォレットを再び利用可能な状態に戻すことは出来ません。

```typescript
const response: Response<AccountDeleted> = await client.send(new DeleteAccount({
  account_id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", // ウォレットID
  cashback: false // 返金有無
}));
```



### Parameters
**`account_id`** 
  

ウォレットIDです。

指定したウォレットIDのウォレットを退会します。

```json
{
  "type": "string",
  "format": "uuid"
}
```

**`cashback`** 
  

退会時の返金有無です。エンドユーザに返金を行う場合、真を指定して下さい。現在のマネー残高を全て現金で返金したものとして記録されます。

```json
{
  "type": "boolean"
}
```



成功したときは
[AccountDeleted](./responses.md#account-deleted)
を返します


---


<a name="list-account-balances"></a>
## ListAccountBalances: エンドユーザーの残高内訳を表示する
エンドユーザーのウォレット毎の残高を有効期限別のリストとして取得します。

```typescript
const response: Response<PaginatedAccountBalance> = await client.send(new ListAccountBalances({
  account_id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", // ウォレットID
  page: 4864, // ページ番号
  per_page: 2363, // 1ページ分の取引数
  expires_at_from: "2022-10-29T13:58:49.000000Z", // 有効期限の期間によるフィルター(開始時点)
  expires_at_to: "2022-12-20T05:38:25.000000Z", // 有効期限の期間によるフィルター(終了時点)
  direction: "desc" // 有効期限によるソート順序
}));
```



### Parameters
**`account_id`** 
  

ウォレットIDです。

フィルターとして使われ、指定したウォレットIDのウォレット残高を取得します。

```json
{
  "type": "string",
  "format": "uuid"
}
```

**`page`** 
  

取得したいページ番号です。デフォルト値は1です。

```json
{
  "type": "integer",
  "minimum": 1
}
```

**`per_page`** 
  

1ページ分のウォレット残高数です。デフォルト値は30です。

```json
{
  "type": "integer",
  "minimum": 1
}
```

**`expires_at_from`** 
  

有効期限の期間によるフィルターの開始時点のタイムスタンプです。デフォルトでは未指定です。

```json
{
  "type": "string",
  "format": "date-time"
}
```

**`expires_at_to`** 
  

有効期限の期間によるフィルターの終了時点のタイムスタンプです。デフォルトでは未指定です。

```json
{
  "type": "string",
  "format": "date-time"
}
```

**`direction`** 
  

有効期限によるソートの順序を指定します。デフォルト値はasc (昇順)です。

```json
{
  "type": "string",
  "enum": [
    "asc",
    "desc"
  ]
}
```



成功したときは
[PaginatedAccountBalance](./responses.md#paginated-account-balance)
を返します


---


<a name="list-account-expired-balances"></a>
## ListAccountExpiredBalances: エンドユーザーの失効済みの残高内訳を表示する
エンドユーザーのウォレット毎の失効済みの残高を有効期限別のリストとして取得します。

```typescript
const response: Response<PaginatedAccountBalance> = await client.send(new ListAccountExpiredBalances({
  account_id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", // ウォレットID
  page: 9610, // ページ番号
  per_page: 2603, // 1ページ分の取引数
  expires_at_from: "2020-05-11T07:12:37.000000Z", // 有効期限の期間によるフィルター(開始時点)
  expires_at_to: "2022-01-18T11:04:15.000000Z", // 有効期限の期間によるフィルター(終了時点)
  direction: "asc" // 有効期限によるソート順序
}));
```



### Parameters
**`account_id`** 
  

ウォレットIDです。

フィルターとして使われ、指定したウォレットIDのウォレット残高を取得します。

```json
{
  "type": "string",
  "format": "uuid"
}
```

**`page`** 
  

取得したいページ番号です。デフォルト値は1です。

```json
{
  "type": "integer",
  "minimum": 1
}
```

**`per_page`** 
  

1ページ分のウォレット残高数です。デフォルト値は30です。

```json
{
  "type": "integer",
  "minimum": 1
}
```

**`expires_at_from`** 
  

有効期限の期間によるフィルターの開始時点のタイムスタンプです。デフォルトでは未指定です。

```json
{
  "type": "string",
  "format": "date-time"
}
```

**`expires_at_to`** 
  

有効期限の期間によるフィルターの終了時点のタイムスタンプです。デフォルトでは未指定です。

```json
{
  "type": "string",
  "format": "date-time"
}
```

**`direction`** 
  

有効期限によるソートの順序を指定します。デフォルト値はdesc (降順)です。

```json
{
  "type": "string",
  "enum": [
    "asc",
    "desc"
  ]
}
```



成功したときは
[PaginatedAccountBalance](./responses.md#paginated-account-balance)
を返します


---


<a name="update-customer-account"></a>
## UpdateCustomerAccount: エンドユーザーのウォレット情報を更新する
エンドユーザーのウォレットの状態を更新します。

```typescript
const response: Response<AccountWithUser> = await client.send(new UpdateCustomerAccount({
  account_id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", // ウォレットID
  status: "pre-closed", // ウォレット状態
  account_name: "kLnY7y5P2vTc2kTDF85U9g31HpRLtjhMxgRT9FEddBtVan5HyW6Uan9MoYMbee", // アカウント名
  external_id: "KUX", // 外部ID
  metadata: "{\"key1\":\"foo\",\"key2\":\"bar\"}" // ウォレットに付加するメタデータ
}));
```



### Parameters
**`account_id`** 
  

ウォレットIDです。

指定したウォレットIDのウォレットの状態を更新します。

```json
{
  "type": "string",
  "format": "uuid"
}
```

**`status`** 
  

ウォレットの状態です。

```json
{
  "type": "string",
  "enum": [
    "active",
    "suspended",
    "pre-closed"
  ]
}
```

**`account_name`** 
  

変更するウォレット名です。

```json
{
  "type": "string",
  "maxLength": 256
}
```

**`external_id`** 
  

変更する外部IDです。

```json
{
  "type": "string",
  "maxLength": 50
}
```

**`metadata`** 
  

ウォレットに付加するメタデータをJSON文字列で指定します。
指定できるJSON文字列には以下のような制約があります。
- フラットな構造のJSONを文字列化したものであること。
- keyは最大32文字の文字列(同じkeyを複数指定することはできません)
- valueには128文字以下の文字列が指定できます

更新時に指定した内容でメタデータ全体が置き換えられることに注意してください。
例えば、元々のメタデータが以下だったときに、

'{"key1":"foo","key2":"bar"}'

更新APIで以下のように更新するとします。

'{"key1":"baz"}'

このときkey1はfooからbazに更新され、key2に対するデータは消去されます。

```json
{
  "type": "string",
  "format": "json"
}
```



成功したときは
[AccountWithUser](./responses.md#account-with-user)
を返します


---


<a name="get-customer-accounts"></a>
## GetCustomerAccounts: エンドユーザーのウォレット一覧を表示する
マネーを指定してエンドユーザーのウォレット一覧を取得します。

```typescript
const response: Response<PaginatedAccountWithUsers> = await client.send(new GetCustomerAccounts({
  private_money_id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", // マネーID
  page: 8901, // ページ番号
  per_page: 9982, // 1ページ分のウォレット数
  created_at_from: "2022-05-12T14:01:20.000000Z", // ウォレット作成日によるフィルター(開始時点)
  created_at_to: "2021-08-01T07:54:25.000000Z", // ウォレット作成日によるフィルター(終了時点)
  is_suspended: true, // ウォレットが凍結状態かどうかでフィルターする
  status: "active", // ウォレット状態
  external_id: "vqgIch5W6XuTL0vlIdvd", // 外部ID
  tel: "072777-896", // エンドユーザーの電話番号
  email: "BXoKUl0tR0@7369.com" // エンドユーザーのメールアドレス
}));
```



### Parameters
**`private_money_id`** 
  

マネーIDです。

一覧するウォレットのマネーを指定します。このパラメータは必須です。

```json
{
  "type": "string",
  "format": "uuid"
}
```

**`page`** 
  

取得したいページ番号です。デフォルト値は1です。

```json
{
  "type": "integer",
  "minimum": 1
}
```

**`per_page`** 
  

1ページ分のウォレット数です。デフォルト値は30です。

```json
{
  "type": "integer",
  "minimum": 1
}
```

**`created_at_from`** 
  

ウォレット作成日によるフィルターの開始時点のタイムスタンプです。デフォルトでは未指定です。

```json
{
  "type": "string",
  "format": "date-time"
}
```

**`created_at_to`** 
  

ウォレット作成日によるフィルターの終了時点のタイムスタンプです。デフォルトでは未指定です。

```json
{
  "type": "string",
  "format": "date-time"
}
```

**`is_suspended`** 
  

このパラメータが指定されている場合、ウォレットの凍結状態で結果がフィルターされます。デフォルトでは未指定です。

```json
{
  "type": "boolean"
}
```

**`status`** 
  

このパラメータが指定されている場合、ウォレットの状態で結果がフィルターされます。デフォルトでは未指定です。

```json
{
  "type": "string",
  "enum": [
    "active",
    "suspended",
    "pre-closed"
  ]
}
```

**`external_id`** 
  

外部IDでのフィルタリングです。デフォルトでは未指定です。

```json
{
  "type": "string",
  "maxLength": 50
}
```

**`tel`** 
  

エンドユーザーの電話番号でのフィルタリングです。デフォルトでは未指定です。

```json
{
  "type": "string",
  "pattern": "^0[0-9]{1,3}-?[0-9]{2,4}-?[0-9]{3,4}$"
}
```

**`email`** 
  

エンドユーザーのメールアドレスでのフィルタリングです。デフォルトでは未指定です。

```json
{
  "type": "string",
  "format": "email"
}
```



成功したときは
[PaginatedAccountWithUsers](./responses.md#paginated-account-with-users)
を返します


---


<a name="create-customer-account"></a>
## CreateCustomerAccount: 新規エンドユーザーをウォレットと共に追加する
指定したマネーのウォレットを作成し、同時にそのウォレットを保有するユーザも新規に作成します。
このAPIにより作成されたユーザは認証情報を持たないため、モバイルSDKやポケペイ標準アプリからはログインすることはできません。
Partner APIのみから操作可能な特殊なユーザになります。
システム全体をPartner APIのみで構成する場合にのみ使用してください。

```typescript
const response: Response<AccountWithUser> = await client.send(new CreateCustomerAccount({
  private_money_id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", // マネーID
  user_name: "ポケペイ太郎", // ユーザー名
  account_name: "ポケペイ太郎のアカウント", // アカウント名
  external_id: "BiPR32MXZafz3jf" // 外部ID
}));
```



### Parameters
**`private_money_id`** 
  

マネーIDです。

これによって作成するウォレットのマネーを指定します。

```json
{
  "type": "string",
  "format": "uuid"
}
```

**`user_name`** 
  

ウォレットと共に作成するユーザ名です。省略した場合は空文字となります。

```json
{
  "type": "string",
  "maxLength": 256
}
```

**`account_name`** 
  

作成するウォレット名です。省略した場合は空文字となります。

```json
{
  "type": "string",
  "maxLength": 256
}
```

**`external_id`** 
  

PAPIクライアントシステムから利用するPokepayユーザーのIDです。デフォルトでは未指定です。

```json
{
  "type": "string",
  "maxLength": 50
}
```



成功したときは
[AccountWithUser](./responses.md#account-with-user)
を返します


---


<a name="get-shop-accounts"></a>
## GetShopAccounts: 店舗ユーザーのウォレット一覧を表示する
マネーを指定して店舗ユーザーのウォレット一覧を取得します。

```typescript
const response: Response<PaginatedAccountWithUsers> = await client.send(new GetShopAccounts({
  private_money_id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", // マネーID
  page: 5375, // ページ番号
  per_page: 7186, // 1ページ分のウォレット数
  created_at_from: "2020-02-09T06:31:25.000000Z", // ウォレット作成日によるフィルター(開始時点)
  created_at_to: "2020-04-03T10:25:10.000000Z", // ウォレット作成日によるフィルター(終了時点)
  is_suspended: false // ウォレットが凍結状態かどうかでフィルターする
}));
```



### Parameters
**`private_money_id`** 
  

マネーIDです。

一覧するウォレットのマネーを指定します。このパラメータは必須です。

```json
{
  "type": "string",
  "format": "uuid"
}
```

**`page`** 
  

取得したいページ番号です。デフォルト値は1です。

```json
{
  "type": "integer",
  "minimum": 1
}
```

**`per_page`** 
  

1ページ分のウォレット数です。デフォルト値は30です。

```json
{
  "type": "integer",
  "minimum": 1
}
```

**`created_at_from`** 
  

ウォレット作成日によるフィルターの開始時点のタイムスタンプです。デフォルトでは未指定です。

```json
{
  "type": "string",
  "format": "date-time"
}
```

**`created_at_to`** 
  

ウォレット作成日によるフィルターの終了時点のタイムスタンプです。デフォルトでは未指定です。

```json
{
  "type": "string",
  "format": "date-time"
}
```

**`is_suspended`** 
  

このパラメータが指定されている場合、ウォレットの凍結状態で結果がフィルターされます。デフォルトでは未指定です。

```json
{
  "type": "boolean"
}
```



成功したときは
[PaginatedAccountWithUsers](./responses.md#paginated-account-with-users)
を返します


---


<a name="list-customer-transactions"></a>
## ListCustomerTransactions: 取引履歴を取得する
取引一覧を返します。

```typescript
const response: Response<PaginatedTransaction> = await client.send(new ListCustomerTransactions({
  private_money_id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", // マネーID
  sender_customer_id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", // 送金エンドユーザーID
  receiver_customer_id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", // 受取エンドユーザーID
  type: "topup", // 取引種別
  is_modified: false, // キャンセル済みかどうか
  from: "2021-06-10T14:16:07.000000Z", // 開始日時
  to: "2022-04-02T20:02:52.000000Z", // 終了日時
  page: 1, // ページ番号
  per_page: 50 // 1ページ分の取引数
}));
```



### Parameters
**`private_money_id`** 
  

マネーIDです。
フィルターとして使われ、指定したマネーでの取引のみ一覧に表示されます。

```json
{
  "type": "string",
  "format": "uuid"
}
```

**`sender_customer_id`** 
  

送金ユーザーIDです。

フィルターとして使われ、指定された送金ユーザーでの取引のみ一覧に表示されます。

```json
{
  "type": "string",
  "format": "uuid"
}
```

**`receiver_customer_id`** 
  

受取ユーザーIDです。

フィルターとして使われ、指定された受取ユーザーでの取引のみ一覧に表示されます。

```json
{
  "type": "string",
  "format": "uuid"
}
```

**`type`** 
  

取引の種類でフィルターします。

以下の種類を指定できます。

1. topup
   店舗からエンドユーザーへの送金取引(チャージ)
2. payment
   エンドユーザーから店舗への送金取引(支払い)
3. exchange
   他マネーへの流出(outflow)/他マネーからの流入(inflow)
4. transfer
   個人間送金
5. cashback
   ウォレット退会時返金
6. expire
   ウォレット退会時失効

```json
{
  "type": "string",
  "enum": [
    "topup",
    "payment",
    "exchange",
    "transfer",
    "cashback",
    "expire"
  ]
}
```

**`is_modified`** 
  

キャンセル済みかどうかを判定するフラグです。

これにtrueを指定するとキャンセルされた取引のみ一覧に表示されます。
falseを指定するとキャンセルされていない取引のみ一覧に表示されます
何も指定しなければキャンセルの有無にかかわらず一覧に表示されます。

```json
{
  "type": "boolean"
}
```

**`from`** 
  

抽出期間の開始日時です。

フィルターとして使われ、開始日時以降に発生した取引のみ一覧に表示されます。

```json
{
  "type": "string",
  "format": "date-time"
}
```

**`to`** 
  

抽出期間の終了日時です。

フィルターとして使われ、終了日時以前に発生した取引のみ一覧に表示されます。

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
  

1ページ分の取引数です。

```json
{
  "type": "integer",
  "minimum": 1
}
```



成功したときは
[PaginatedTransaction](./responses.md#paginated-transaction)
を返します


---



