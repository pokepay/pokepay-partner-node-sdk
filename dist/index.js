"use strict";
// DO NOT EDIT: File is generated by code generator.
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPing = exports.SendEcho = exports.GetUser = exports.ListUserAccounts = exports.GetAccount = exports.UpdateAccount = exports.ListAccountBalances = exports.ListAccountExpiredBalances = exports.GetCustomerAccounts = exports.CreateCustomerAccount = exports.GetShopAccounts = exports.ListBills = exports.CreateBill = exports.UpdateBill = exports.CreateCheck = exports.ListTransactions = exports.CreateTransaction = exports.CreateTopupTransaction = exports.CreateTopupTransactionWithCheck = exports.CreatePaymentTransaction = exports.CreateTransferTransaction = exports.CreateExchangeTransaction = exports.BulkCreateTransaction = exports.GetTransaction = exports.RefundTransaction = exports.ListTransfers = exports.CreateOrganization = exports.ListShops = exports.CreateShop = exports.CreateShopV2 = exports.GetShop = exports.UpdateShop = exports.GetPrivateMoneys = exports.GetPrivateMoneyOrganizationSummaries = exports.ListCustomerTransactions = exports.GetBulkTransaction = exports.CreateCashtray = exports.GetCashtray = exports.CancelCashtray = exports.UpdateCashtray = exports.Response = exports.VERSION = exports.Client = void 0;
const client_1 = require("./client");
Object.defineProperty(exports, "Client", { enumerable: true, get: function () { return client_1.Client; } });
const version_1 = require("./version");
Object.defineProperty(exports, "VERSION", { enumerable: true, get: function () { return version_1.VERSION; } });
const Response_1 = require("./response/Response");
Object.defineProperty(exports, "Response", { enumerable: true, get: function () { return Response_1.Response; } });
const UpdateCashtray_1 = require("./request/UpdateCashtray");
Object.defineProperty(exports, "UpdateCashtray", { enumerable: true, get: function () { return UpdateCashtray_1.UpdateCashtray; } });
const CancelCashtray_1 = require("./request/CancelCashtray");
Object.defineProperty(exports, "CancelCashtray", { enumerable: true, get: function () { return CancelCashtray_1.CancelCashtray; } });
const GetCashtray_1 = require("./request/GetCashtray");
Object.defineProperty(exports, "GetCashtray", { enumerable: true, get: function () { return GetCashtray_1.GetCashtray; } });
const CreateCashtray_1 = require("./request/CreateCashtray");
Object.defineProperty(exports, "CreateCashtray", { enumerable: true, get: function () { return CreateCashtray_1.CreateCashtray; } });
const GetBulkTransaction_1 = require("./request/GetBulkTransaction");
Object.defineProperty(exports, "GetBulkTransaction", { enumerable: true, get: function () { return GetBulkTransaction_1.GetBulkTransaction; } });
const ListCustomerTransactions_1 = require("./request/ListCustomerTransactions");
Object.defineProperty(exports, "ListCustomerTransactions", { enumerable: true, get: function () { return ListCustomerTransactions_1.ListCustomerTransactions; } });
const GetPrivateMoneyOrganizationSummaries_1 = require("./request/GetPrivateMoneyOrganizationSummaries");
Object.defineProperty(exports, "GetPrivateMoneyOrganizationSummaries", { enumerable: true, get: function () { return GetPrivateMoneyOrganizationSummaries_1.GetPrivateMoneyOrganizationSummaries; } });
const GetPrivateMoneys_1 = require("./request/GetPrivateMoneys");
Object.defineProperty(exports, "GetPrivateMoneys", { enumerable: true, get: function () { return GetPrivateMoneys_1.GetPrivateMoneys; } });
const UpdateShop_1 = require("./request/UpdateShop");
Object.defineProperty(exports, "UpdateShop", { enumerable: true, get: function () { return UpdateShop_1.UpdateShop; } });
const GetShop_1 = require("./request/GetShop");
Object.defineProperty(exports, "GetShop", { enumerable: true, get: function () { return GetShop_1.GetShop; } });
const CreateShopV2_1 = require("./request/CreateShopV2");
Object.defineProperty(exports, "CreateShopV2", { enumerable: true, get: function () { return CreateShopV2_1.CreateShopV2; } });
const CreateShop_1 = require("./request/CreateShop");
Object.defineProperty(exports, "CreateShop", { enumerable: true, get: function () { return CreateShop_1.CreateShop; } });
const ListShops_1 = require("./request/ListShops");
Object.defineProperty(exports, "ListShops", { enumerable: true, get: function () { return ListShops_1.ListShops; } });
const CreateOrganization_1 = require("./request/CreateOrganization");
Object.defineProperty(exports, "CreateOrganization", { enumerable: true, get: function () { return CreateOrganization_1.CreateOrganization; } });
const ListTransfers_1 = require("./request/ListTransfers");
Object.defineProperty(exports, "ListTransfers", { enumerable: true, get: function () { return ListTransfers_1.ListTransfers; } });
const RefundTransaction_1 = require("./request/RefundTransaction");
Object.defineProperty(exports, "RefundTransaction", { enumerable: true, get: function () { return RefundTransaction_1.RefundTransaction; } });
const GetTransaction_1 = require("./request/GetTransaction");
Object.defineProperty(exports, "GetTransaction", { enumerable: true, get: function () { return GetTransaction_1.GetTransaction; } });
const BulkCreateTransaction_1 = require("./request/BulkCreateTransaction");
Object.defineProperty(exports, "BulkCreateTransaction", { enumerable: true, get: function () { return BulkCreateTransaction_1.BulkCreateTransaction; } });
const CreateExchangeTransaction_1 = require("./request/CreateExchangeTransaction");
Object.defineProperty(exports, "CreateExchangeTransaction", { enumerable: true, get: function () { return CreateExchangeTransaction_1.CreateExchangeTransaction; } });
const CreateTransferTransaction_1 = require("./request/CreateTransferTransaction");
Object.defineProperty(exports, "CreateTransferTransaction", { enumerable: true, get: function () { return CreateTransferTransaction_1.CreateTransferTransaction; } });
const CreatePaymentTransaction_1 = require("./request/CreatePaymentTransaction");
Object.defineProperty(exports, "CreatePaymentTransaction", { enumerable: true, get: function () { return CreatePaymentTransaction_1.CreatePaymentTransaction; } });
const CreateTopupTransactionWithCheck_1 = require("./request/CreateTopupTransactionWithCheck");
Object.defineProperty(exports, "CreateTopupTransactionWithCheck", { enumerable: true, get: function () { return CreateTopupTransactionWithCheck_1.CreateTopupTransactionWithCheck; } });
const CreateTopupTransaction_1 = require("./request/CreateTopupTransaction");
Object.defineProperty(exports, "CreateTopupTransaction", { enumerable: true, get: function () { return CreateTopupTransaction_1.CreateTopupTransaction; } });
const CreateTransaction_1 = require("./request/CreateTransaction");
Object.defineProperty(exports, "CreateTransaction", { enumerable: true, get: function () { return CreateTransaction_1.CreateTransaction; } });
const ListTransactions_1 = require("./request/ListTransactions");
Object.defineProperty(exports, "ListTransactions", { enumerable: true, get: function () { return ListTransactions_1.ListTransactions; } });
const CreateCheck_1 = require("./request/CreateCheck");
Object.defineProperty(exports, "CreateCheck", { enumerable: true, get: function () { return CreateCheck_1.CreateCheck; } });
const UpdateBill_1 = require("./request/UpdateBill");
Object.defineProperty(exports, "UpdateBill", { enumerable: true, get: function () { return UpdateBill_1.UpdateBill; } });
const CreateBill_1 = require("./request/CreateBill");
Object.defineProperty(exports, "CreateBill", { enumerable: true, get: function () { return CreateBill_1.CreateBill; } });
const ListBills_1 = require("./request/ListBills");
Object.defineProperty(exports, "ListBills", { enumerable: true, get: function () { return ListBills_1.ListBills; } });
const GetShopAccounts_1 = require("./request/GetShopAccounts");
Object.defineProperty(exports, "GetShopAccounts", { enumerable: true, get: function () { return GetShopAccounts_1.GetShopAccounts; } });
const CreateCustomerAccount_1 = require("./request/CreateCustomerAccount");
Object.defineProperty(exports, "CreateCustomerAccount", { enumerable: true, get: function () { return CreateCustomerAccount_1.CreateCustomerAccount; } });
const GetCustomerAccounts_1 = require("./request/GetCustomerAccounts");
Object.defineProperty(exports, "GetCustomerAccounts", { enumerable: true, get: function () { return GetCustomerAccounts_1.GetCustomerAccounts; } });
const ListAccountExpiredBalances_1 = require("./request/ListAccountExpiredBalances");
Object.defineProperty(exports, "ListAccountExpiredBalances", { enumerable: true, get: function () { return ListAccountExpiredBalances_1.ListAccountExpiredBalances; } });
const ListAccountBalances_1 = require("./request/ListAccountBalances");
Object.defineProperty(exports, "ListAccountBalances", { enumerable: true, get: function () { return ListAccountBalances_1.ListAccountBalances; } });
const UpdateAccount_1 = require("./request/UpdateAccount");
Object.defineProperty(exports, "UpdateAccount", { enumerable: true, get: function () { return UpdateAccount_1.UpdateAccount; } });
const GetAccount_1 = require("./request/GetAccount");
Object.defineProperty(exports, "GetAccount", { enumerable: true, get: function () { return GetAccount_1.GetAccount; } });
const ListUserAccounts_1 = require("./request/ListUserAccounts");
Object.defineProperty(exports, "ListUserAccounts", { enumerable: true, get: function () { return ListUserAccounts_1.ListUserAccounts; } });
const GetUser_1 = require("./request/GetUser");
Object.defineProperty(exports, "GetUser", { enumerable: true, get: function () { return GetUser_1.GetUser; } });
const SendEcho_1 = require("./request/SendEcho");
Object.defineProperty(exports, "SendEcho", { enumerable: true, get: function () { return SendEcho_1.SendEcho; } });
const GetPing_1 = require("./request/GetPing");
Object.defineProperty(exports, "GetPing", { enumerable: true, get: function () { return GetPing_1.GetPing; } });
async function example() {
    console.log(`Pokepay partner SDK ${version_1.VERSION} example.`);
    try {
        const configPath = process.argv[2];
        if (!configPath) {
            throw new Error("Please specify config file path. ex) $ npm run dev -- config.ini");
        }
        const client = new client_1.Client(configPath);
        {
            console.log("\n --- try ping\n\n");
            const req = new GetPing_1.GetPing();
            const res = await client.send(req);
            console.log("response:", res);
            console.log("response.object:", res.object);
            console.log("response.object.pong:", res.object.pong);
        }
        {
            console.log("\n --- try echo\n\n");
            const req = new SendEcho_1.SendEcho({ message: "echo message? echo PLEASE!" });
            const res = await client.send(req);
            console.log("response:", res);
            console.log("response.object:", res.object);
            console.log("response.object.message:", res.object.message);
        }
    }
    catch (e) {
        console.error(e);
        process.exit(1);
    }
}
if (require.main === module) {
    example().then(() => {
        console.log("example finished!");
    });
}
