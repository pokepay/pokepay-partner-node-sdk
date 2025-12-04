# Partner API SDK for NodeJS
## Installation

npmからインストールすることができます。
```
$ npm install --save pokepay-partner-sdk
```

プロジェクトにて、以下のようにロードできます。

```typescript
import ppsdk from "pokepay-partner-sdk";
// もしくは
import { Client, SendEcho } from "pokepay-partner-sdk";
```

## Getting started

基本的な使い方は次のようになります。

- ライブラリをロード
- 設定ファイル(後述)から `Client` オブジェクトを作る
- リクエストオブジェクトを作り、`Client` オブジェクトの `send` メソッドに対して渡す
- レスポンスオブジェクトを得る

```typescript
import { Client, SendEcho } from "pokepay-partner-sdk";
const client = new Client("/path/to/config.ini");
const request = new SendEcho({ message: 'hello' });
const response = await client.send(request);
```

レスポンスオブジェクト内にステータスコード、JSONをパースしたハッシュマップ、さらにレスポンス内容のオブジェクトが含まれています。

## Settings

設定はINIファイルに記述し、`Client` のコンストラクタにファイルパスを指定します。

SDKプロジェクトルートに `config.ini.sample` というファイルがありますのでそれを元に必要な情報を記述してください。特に以下の情報は通信の安全性のため必要な項目です。これらはパートナー契約時にお渡ししているものです。

- `CLIENT_ID`: パートナーAPI クライアントID
- `CLIENT_SECRET`: パートナーAPI クライアント秘密鍵
- `SSL_KEY_FILE`: SSL秘密鍵ファイルパス
- `SSL_CERT_FILE`: SSL証明書ファイルパス

この他に接続先のサーバURL情報が必要です。

- `API_BASE_URL`: パートナーAPI サーバURL

また、この設定ファイルには認証に必要な情報が含まれるため、ファイルの管理・取り扱いに十分注意してください。

設定ファイル記述例(`config.ini.sample`)

```
CLIENT_ID        = xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
CLIENT_SECRET    = yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
API_BASE_URL     = https://partnerapi-sandbox.pokepay.jp
SSL_KEY_FILE     = /path/to/key.pem
SSL_CERT_FILE    = /path/to/cert.pem
```

## Overview

### APIリクエスト

Partner APIへの通信はリクエストオブジェクトを作り、`Client.send` メソッドに渡すことで行われます。
また `Client.send` は `async function` で `Promise` を返します。`await` することができます。
たとえば `SendEcho` は送信した内容をそのまま返す処理です。

```typescript
const request = new SendEcho({ message: 'hello' });
const response = await client.send(request);
# => Response 200 OK
```

通信の結果として、レスポンスオブジェクトが得られます。  
これはステータスコードとレスポンスボディ、各レスポンスクラスのオブジェクトをインスタンス変数に持つオブジェクトです。

```typescript
response.code
# => 200

response.body
# => {
  response_data: 'T7hZYdaXYRC0oC8oRrowte89690bYL3Ly05V-IiSzTCslQG-TH0e1i9QYNTySwVS9hiTD6u2---xojelG-66rA',
  timestamp: '2021-07-20T02:03:07.835Z',
  partner_call_id: '7cd52e4a-b9a2-48e4-b921-80dcbc6b7f4c'
}

response.object
# => { status: 'ok', message: 'hello' }

response.object.message
# => 'hello'
```

利用可能なAPI操作については [API Operations](#api-operations) で紹介します。

<a name="paging"></a>
### ページング

API操作によっては、大量のデータがある場合に備えてページング処理があります。
その処理では以下のようなプロパティを持つレスポンスオブジェクトを返します。

- rows : 列挙するレスポンスクラスのオブジェクトの配列
- count : 全体の要素数
- pagination : 以下のインスタンス変数を持つオブジェクト
  - current : 現在のページ位置(1からスタート)
  - per_page : 1ページ当たりの要素数
  - max_page : 最後のページ番号
  - has_prev : 前ページを持つかどうかの真理値
  - has_next : 次ページを持つかどうかの真理値

ページングクラスは `Pagination` で定義されています。

以下にコード例を示します。

```typescript
const request = new ListTransactions({ "page": 1, "per_page": 50 });
const response = await client.send(request);

if (response.object.pagination.has_next) {
  const next_page = response.object.pagination.current + 1;
  const request = new ListTransactions({ "page": next_page, "per_page": 50 });
  const response = await client.send(request);
}
```

### エラーハンドリング

JavaScript をご使用の場合、必須パラメーターがチェックされます。
TypeScript は型通りにお使いいただけます。

```javascript
const request = new SendEcho({});
=> Error: "message" is required;
```

API呼び出し時のエラーの場合は `axios` ライブラリのエラーが `throw` されます。
エラーレスポンスもステータスコードとレスポンスボディを持ちます。
参考: [axios handling errors](https://github.com/axios/axios#handling-errors)

```typescript
const axios = require('axios');

const request = SendEcho.new({ message: "hello" });

try {
  const response = await client.send(request);
} catch (error) {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      // APIサーバーがエラーレスポンス (2xx 以外) を返した場合
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of http.ClientRequest
      // リクエストは作られたが、レスポンスが受け取れなかった場合
      // `error.request` に `http.ClientRequest` が入ります
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      // リクエストを作る際に何かが起こった場合
      console.log('Error', error.message);
    }
  }
}
```
<a name="api-operations"></a>
## API Operations

### Transaction
- [GetCpmToken](./transaction.md#get-cpm-token): CPMトークンの状態取得
- [ListTransactions](./transaction.md#list-transactions): 【廃止】取引履歴を取得する
- [CreateTransaction](./transaction.md#create-transaction): 【廃止】チャージする
- [CreateTransactionGroup](./transaction.md#create-transaction-group): トランザクショングループを作成する
- [ShowTransactionGroup](./transaction.md#show-transaction-group): トランザクショングループを取得する
- [ListTransactionsV2](./transaction.md#list-transactions-v2): 取引履歴を取得する
- [ListBillTransactions](./transaction.md#list-bill-transactions): 支払い取引履歴を取得する
- [CreateTopupTransaction](./transaction.md#create-topup-transaction): チャージする
- [CreatePaymentTransaction](./transaction.md#create-payment-transaction): 支払いする
- [CreateCpmTransaction](./transaction.md#create-cpm-transaction): CPMトークンによる取引作成
- [CreateTransferTransaction](./transaction.md#create-transfer-transaction): 個人間送金
- [CreateExchangeTransaction](./transaction.md#create-exchange-transaction): 
- [GetTransaction](./transaction.md#get-transaction): 取引情報を取得する
- [RefundTransaction](./transaction.md#refund-transaction): 取引をキャンセルする
- [GetTransactionByRequestId](./transaction.md#get-transaction-by-request-id): リクエストIDから取引情報を取得する
- [GetBulkTransaction](./transaction.md#get-bulk-transaction): バルク取引ジョブの実行状況を取得する
- [ListBulkTransactionJobs](./transaction.md#list-bulk-transaction-jobs): バルク取引ジョブの詳細情報一覧を取得する
- [RequestUserStats](./transaction.md#request-user-stats): 指定期間内の顧客が行った取引の統計情報をCSVでダウンロードする
- [TerminateUserStats](./transaction.md#terminate-user-stats): RequestUserStatsのタスクを強制終了する

### Transfer
- [GetAccountTransferSummary](./transfer.md#get-account-transfer-summary): 
- [ListTransfers](./transfer.md#list-transfers): 
- [ListTransfersV2](./transfer.md#list-transfers-v2): 

### Check
- [ListChecks](./check.md#list-checks): チャージQRコード一覧の取得
- [CreateCheck](./check.md#create-check): チャージQRコードの発行
- [GetCheck](./check.md#get-check): チャージQRコードの表示
- [UpdateCheck](./check.md#update-check): チャージQRコードの更新
- [CreateTopupTransactionWithCheck](./check.md#create-topup-transaction-with-check): チャージQRコードを読み取ることでチャージする

### Bill
- [ListBills](./bill.md#list-bills): 支払いQRコード一覧を表示する
- [CreateBill](./bill.md#create-bill): 支払いQRコードの発行
- [GetBill](./bill.md#get-bill): 支払いQRコードの表示
- [UpdateBill](./bill.md#update-bill): 支払いQRコードの更新
- [CreatePaymentTransactionWithBill](./bill.md#create-payment-transaction-with-bill): 支払いQRコードを読み取ることで支払いをする

### Cashtray
- [CreateTransactionWithCashtray](./cashtray.md#create-transaction-with-cashtray): CashtrayQRコードを読み取ることで取引する
- [CreateCashtray](./cashtray.md#create-cashtray): Cashtrayを作る
- [CancelCashtray](./cashtray.md#cancel-cashtray): Cashtrayを無効化する
- [GetCashtray](./cashtray.md#get-cashtray): Cashtrayの情報を取得する
- [UpdateCashtray](./cashtray.md#update-cashtray): Cashtrayの情報を更新する

### Customer
- [DeleteAccount](./customer.md#delete-account): ウォレットを退会する
- [GetAccount](./customer.md#get-account): ウォレット情報を表示する
- [UpdateAccount](./customer.md#update-account): ウォレット情報を更新する
- [ListAccountBalances](./customer.md#list-account-balances): エンドユーザーの残高内訳を表示する
- [ListAccountExpiredBalances](./customer.md#list-account-expired-balances): エンドユーザーの失効済みの残高内訳を表示する
- [UpdateCustomerAccount](./customer.md#update-customer-account): エンドユーザーのウォレット情報を更新する
- [GetCustomerAccounts](./customer.md#get-customer-accounts): エンドユーザーのウォレット一覧を表示する
- [CreateCustomerAccount](./customer.md#create-customer-account): 新規エンドユーザーをウォレットと共に追加する
- [GetShopAccounts](./customer.md#get-shop-accounts): 店舗ユーザーのウォレット一覧を表示する
- [ListCustomerTransactions](./customer.md#list-customer-transactions): 取引履歴を取得する

### Organization
- [ListOrganizations](./organization.md#list-organizations): 加盟店組織の一覧を取得する
- [CreateOrganization](./organization.md#create-organization): 新規加盟店組織を追加する

### Shop
- [ListShops](./shop.md#list-shops): 店舗一覧を取得する
- [CreateShop](./shop.md#create-shop): 【廃止】新規店舗を追加する
- [CreateShopV2](./shop.md#create-shop-v2): 新規店舗を追加する
- [GetShop](./shop.md#get-shop): 店舗情報を表示する
- [UpdateShop](./shop.md#update-shop): 店舗情報を更新する

### User

### Account
- [ListUserAccounts](./account.md#list-user-accounts): エンドユーザー、店舗ユーザーのウォレット一覧を表示する
- [CreateUserAccount](./account.md#create-user-account): エンドユーザーのウォレットを作成する

### Private Money
- [GetPrivateMoneys](./private_money.md#get-private-moneys): マネー一覧を取得する
- [GetPrivateMoneyOrganizationSummaries](./private_money.md#get-private-money-organization-summaries): 決済加盟店の取引サマリを取得する
- [GetPrivateMoneySummary](./private_money.md#get-private-money-summary): 取引サマリを取得する

### Bulk
- [BulkCreateTransaction](./bulk.md#bulk-create-transaction): CSVファイル一括取引

### Event
- [CreateExternalTransaction](./event.md#create-external-transaction): ポケペイ外部取引を作成する
- [RefundExternalTransaction](./event.md#refund-external-transaction): ポケペイ外部取引をキャンセルする
- [GetExternalTransactionByRequestId](./event.md#get-external-transaction-by-request-id): リクエストIDからポケペイ外部取引を取得する

### Campaign
- [ListCampaigns](./campaign.md#list-campaigns): キャンペーン一覧を取得する
- [CreateCampaign](./campaign.md#create-campaign): ポイント付与キャンペーンを作る
- [GetCampaign](./campaign.md#get-campaign): キャンペーンを取得する
- [UpdateCampaign](./campaign.md#update-campaign): ポイント付与キャンペーンを更新する

### Webhook
- [ListWebhooks](./webhook.md#list-webhooks): 作成したWebhookの一覧を返す
- [CreateWebhook](./webhook.md#create-webhook): webhookの作成
- [DeleteWebhook](./webhook.md#delete-webhook): Webhookの削除
- [UpdateWebhook](./webhook.md#update-webhook): Webhookの更新

### Coupon
- [ListCoupons](./coupon.md#list-coupons): クーポン一覧の取得
- [CreateCoupon](./coupon.md#create-coupon): クーポンの登録
- [GetCoupon](./coupon.md#get-coupon): クーポンの取得
- [UpdateCoupon](./coupon.md#update-coupon): クーポンの更新

### UserDevice
- [CreateUserDevice](./user_device.md#create-user-device): ユーザーのデバイス登録
- [GetUserDevice](./user_device.md#get-user-device): ユーザーのデバイスを取得
- [ActivateUserDevice](./user_device.md#activate-user-device): デバイスの有効化

### BankPay
- [DeleteBank](./bank_pay.md#delete-bank): 銀行口座の削除
- [ListBanks](./bank_pay.md#list-banks): 登録した銀行の一覧
- [CreateBank](./bank_pay.md#create-bank): 銀行口座の登録
- [CreateBankTopupTransaction](./bank_pay.md#create-bank-topup-transaction): 銀行からのチャージ

### SevenBankATMSession
- [GetSevenBankATMSession](./seven_bank_atm_session.md#get-seven-bank-atm-session): セブン銀行ATMセッションの取得

