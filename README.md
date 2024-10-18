# Pokepay Partner SDK for NodeJS

### How to test it
```
$ npm install
$ npm run dev -- config.ini
```

To run full tests, put settings and testdata to `~/.pokepay/test-config.ini`. then,

```
$ npm run test
```

test-confg.ini is like below inifile.

```
CLIENT_ID        = xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
CLIENT_SECRET    = yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
API_BASE_URL     = https://partnerapi-dev.pokepay.jp
SSL_KEY_FILE     = /path/to/key.pem
SSL_CERT_FILE    = /path/to/cert.pem

TIMEZONE         = Asia/Tokyo
CONNECTTIMEOUT   = 10
TIMEOUT          = 10
MAX_RETRIES      = 0

[testdata]
shop_id = zzzzzzzz-zzzz-zzzz-zzzz-zzzzzzzzzzzz
customer_id = wwwwwwww-wwww-wwww-wwww-wwwwwwwwwwww
private_money_id = vvvvvvvv-vvvv-vvvv-vvvv-vvvvvvvvvvvv
```

### Minimum supported Node LTS
- Node v8.17.0 (LTS)

### How to use
- [Document](https://github.com/pokepay/pokepay-partner-node-sdk/blob/main/docs/index.md)
