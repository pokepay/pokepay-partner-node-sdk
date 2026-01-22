# CreditSession
クレジットカード決済セッションを管理するためのAPIです。
Veritrans（決済ゲートウェイ）との連携でクレジットカード決済を実現します。
セッションには有効期限があり、セッション作成後に取引の実行や売上確定（キャプチャ）を行います。
3Dセキュア認証にも対応しています。


<a name="post-credit-session"></a>
## PostCreditSession: Create credit session

```typescript
const response: Response<CreditSession> = await client.send(new PostCreditSession({
  customer_id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  private_money_id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  card_id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  expires_at: "2020-04-21T02:06:42.000000Z" // セッション有効期限
}));
```



### Parameters
#### `customer_id`

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

<details>
<summary>スキーマ</summary>

```json
{
  "type": "string",
  "format": "uuid"
}
```

</details>

#### `card_id`

<details>
<summary>スキーマ</summary>

```json
{
  "type": "string",
  "format": "uuid"
}
```

</details>

#### `expires_at`
セッション有効期限
制約: リクエスト時刻から30日以内
例: "2024-01-15T10:30:00+00:00"

<details>
<summary>スキーマ</summary>

```json
{
  "type": "string",
  "format": "date-time"
}
```

</details>



成功したときは
[CreditSession](./responses.md#credit-session)
を返します

### Error Responses
|status|type|ja|en|
|---|---|---|---|
|503|temporarily_unavailable||Service Unavailable|



---


<a name="create-credit-session-transaction"></a>
## CreateCreditSessionTransaction: Create transaction with credit session
クレジットセッションを使用して取引を作成します。
セッションIDと取引金額を指定します。

```typescript
const response: Response<NIL> = await client.send(new CreateCreditSessionTransaction({
  session_id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", // クレジットセッションID
  amount: 4247.0, // 取引金額
  shop_id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", // 店舗ID
  description: "GwTADg0EGo2" // 取引説明
}));
```



### Parameters
#### `session_id`
クレジットセッションID

事前に作成されたクレジットセッションのIDを指定します。

<details>
<summary>スキーマ</summary>

```json
{
  "type": "string",
  "format": "uuid"
}
```

</details>

#### `amount`
取引金額
支払い金額を指定します。

<details>
<summary>スキーマ</summary>

```json
{
  "type": "number",
  "minimum": 0
}
```

</details>

#### `shop_id`
店舗ID
支払いを行う店舗のIDを指定します。

<details>
<summary>スキーマ</summary>

```json
{
  "type": "string",
  "format": "uuid"
}
```

</details>

#### `description`
取引説明
取引の説明や備考を指定します。

<details>
<summary>スキーマ</summary>

```json
{
  "type": "string",
  "maxLength": 200
}
```

</details>






---


<a name="capture-credit-session"></a>
## CaptureCreditSession: Capture credit session
クレジットセッションの売上確定（キャプチャ）を行います。
セッション内で行われた支払いの合計金額をクレジットカードに請求します。

```typescript
const response: Response<NIL> = await client.send(new CaptureCreditSession({
  session_id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" // クレジットセッションID
}));
```



### Parameters
#### `session_id`
クレジットセッションID

キャプチャ対象のクレジットセッションのIDを指定します。

<details>
<summary>スキーマ</summary>

```json
{
  "type": "string",
  "format": "uuid"
}
```

</details>






---



