// DO NOT EDIT: File is generated by code generator.

import { Client } from "./client";
import { VERSION } from "./version";
import { Request, Method } from "./request/Request";
import { Response } from "./response/Response";

import { UserStatsOperationServiceUnavailable } from "./response/UserStatsOperationServiceUnavailable";
import { UnpermittedAdminUser } from "./response/UnpermittedAdminUser";
import { InvalidParameters } from "./response/InvalidParameters";
import { PartnerRequestAlreadyDone } from "./response/PartnerRequestAlreadyDone";
import { PartnerRequestExpired } from "./response/PartnerRequestExpired";
import { PartnerDecryptionFailed } from "./response/PartnerDecryptionFailed";
import { PartnerClientNotFound } from "./response/PartnerClientNotFound";
import { BadRequest } from "./response/BadRequest";
import { AccountTransferSummary } from "./response/AccountTransferSummary";
import { AccountTransferSummaryElement } from "./response/AccountTransferSummaryElement";
import { PaginatedCampaigns } from "./response/PaginatedCampaigns";
import { Campaign } from "./response/Campaign";
import { PaginatedPrivateMoneys } from "./response/PaginatedPrivateMoneys";
import { PaginatedBills } from "./response/PaginatedBills";
import { PaginatedShops } from "./response/PaginatedShops";
import { PaginatedAccountBalance } from "./response/PaginatedAccountBalance";
import { PaginatedAccountDetails } from "./response/PaginatedAccountDetails";
import { PaginatedAccountWithUsers } from "./response/PaginatedAccountWithUsers";
import { PaginatedAccounts } from "./response/PaginatedAccounts";
import { PaginatedTransfersV2 } from "./response/PaginatedTransfersV2";
import { PaginatedTransfers } from "./response/PaginatedTransfers";
import { PaginatedTransactionV2 } from "./response/PaginatedTransactionV2";
import { PaginatedTransaction } from "./response/PaginatedTransaction";
import { UserStatsOperation } from "./response/UserStatsOperation";
import { PrivateMoneySummary } from "./response/PrivateMoneySummary";
import { PaginatedPrivateMoneyOrganizationSummaries } from "./response/PaginatedPrivateMoneyOrganizationSummaries";
import { PrivateMoneyOrganizationSummary } from "./response/PrivateMoneyOrganizationSummary";
import { OrganizationSummary } from "./response/OrganizationSummary";
import { Product } from "./response/Product";
import { ExternalTransaction } from "./response/ExternalTransaction";
import { Transfer } from "./response/Transfer";
import { AccountWithoutPrivateMoneyDetail } from "./response/AccountWithoutPrivateMoneyDetail";
import { BulkTransaction } from "./response/BulkTransaction";
import { UserTransaction } from "./response/UserTransaction";
import { ShopWithAccounts } from "./response/ShopWithAccounts";
import { ShopWithMetadata } from "./response/ShopWithMetadata";
import { TransactionDetail } from "./response/TransactionDetail";
import { Transaction } from "./response/Transaction";
import { Organization } from "./response/Organization";
import { PrivateMoney } from "./response/PrivateMoney";
import { User } from "./response/User";
import { CashtrayAttempt } from "./response/CashtrayAttempt";
import { CashtrayWithResult } from "./response/CashtrayWithResult";
import { Cashtray } from "./response/Cashtray";
import { CpmToken } from "./response/CpmToken";
import { Check } from "./response/Check";
import { Bill } from "./response/Bill";
import { AccountBalance } from "./response/AccountBalance";
import { AccountDeleted } from "./response/AccountDeleted";
import { ShopAccount } from "./response/ShopAccount";
import { AccountDetail } from "./response/AccountDetail";
import { AccountWithUser } from "./response/AccountWithUser";
import { Account } from "./response/Account";
import { AdminUserWithShopsAndPrivateMoneys } from "./response/AdminUserWithShopsAndPrivateMoneys";
import { Pagination } from "./response/Pagination";
import { Echo } from "./response/Echo";
import { Pong } from "./response/Pong";
import { RequestUserStats } from "./request/RequestUserStats";
import { UpdateCampaign } from "./request/UpdateCampaign";
import { GetCampaign } from "./request/GetCampaign";
import { ListCampaigns } from "./request/ListCampaigns";
import { CreateCampaign } from "./request/CreateCampaign";
import { UpdateCashtray } from "./request/UpdateCashtray";
import { CancelCashtray } from "./request/CancelCashtray";
import { GetCashtray } from "./request/GetCashtray";
import { CreateCashtray } from "./request/CreateCashtray";
import { GetBulkTransaction } from "./request/GetBulkTransaction";
import { ListCustomerTransactions } from "./request/ListCustomerTransactions";
import { GetPrivateMoneySummary } from "./request/GetPrivateMoneySummary";
import { GetPrivateMoneyOrganizationSummaries } from "./request/GetPrivateMoneyOrganizationSummaries";
import { GetPrivateMoneys } from "./request/GetPrivateMoneys";
import { UpdateShop } from "./request/UpdateShop";
import { GetShop } from "./request/GetShop";
import { CreateShopV2 } from "./request/CreateShopV2";
import { CreateShop } from "./request/CreateShop";
import { ListShops } from "./request/ListShops";
import { CreateOrganization } from "./request/CreateOrganization";
import { ListTransfersV2 } from "./request/ListTransfersV2";
import { ListTransfers } from "./request/ListTransfers";
import { RefundExternalTransaction } from "./request/RefundExternalTransaction";
import { CreateExternalTransaction } from "./request/CreateExternalTransaction";
import { GetTransactionByRequestId } from "./request/GetTransactionByRequestId";
import { RefundTransaction } from "./request/RefundTransaction";
import { GetTransaction } from "./request/GetTransaction";
import { BulkCreateTransaction } from "./request/BulkCreateTransaction";
import { CreateExchangeTransaction } from "./request/CreateExchangeTransaction";
import { CreateTransferTransaction } from "./request/CreateTransferTransaction";
import { CreateCpmTransaction } from "./request/CreateCpmTransaction";
import { CreatePaymentTransaction } from "./request/CreatePaymentTransaction";
import { CreateTopupTransactionWithCheck } from "./request/CreateTopupTransactionWithCheck";
import { CreateTopupTransaction } from "./request/CreateTopupTransaction";
import { ListTransactionsV2 } from "./request/ListTransactionsV2";
import { CreateTransaction } from "./request/CreateTransaction";
import { ListTransactions } from "./request/ListTransactions";
import { GetCpmToken } from "./request/GetCpmToken";
import { CreateCheck } from "./request/CreateCheck";
import { UpdateBill } from "./request/UpdateBill";
import { CreateBill } from "./request/CreateBill";
import { ListBills } from "./request/ListBills";
import { GetShopAccounts } from "./request/GetShopAccounts";
import { CreateCustomerAccount } from "./request/CreateCustomerAccount";
import { GetCustomerAccounts } from "./request/GetCustomerAccounts";
import { GetAccountTransferSummary } from "./request/GetAccountTransferSummary";
import { UpdateCustomerAccount } from "./request/UpdateCustomerAccount";
import { ListAccountExpiredBalances } from "./request/ListAccountExpiredBalances";
import { ListAccountBalances } from "./request/ListAccountBalances";
import { DeleteAccount } from "./request/DeleteAccount";
import { UpdateAccount } from "./request/UpdateAccount";
import { GetAccount } from "./request/GetAccount";
import { CreateUserAccount } from "./request/CreateUserAccount";
import { ListUserAccounts } from "./request/ListUserAccounts";
import { GetUser } from "./request/GetUser";
import { SendEcho } from "./request/SendEcho";
import { GetPing } from "./request/GetPing";

export { Client, VERSION, Request, Method, Response, UserStatsOperationServiceUnavailable, UnpermittedAdminUser, InvalidParameters, PartnerRequestAlreadyDone, PartnerRequestExpired, PartnerDecryptionFailed, PartnerClientNotFound, BadRequest, AccountTransferSummary, AccountTransferSummaryElement, PaginatedCampaigns, Campaign, PaginatedPrivateMoneys, PaginatedBills, PaginatedShops, PaginatedAccountBalance, PaginatedAccountDetails, PaginatedAccountWithUsers, PaginatedAccounts, PaginatedTransfersV2, PaginatedTransfers, PaginatedTransactionV2, PaginatedTransaction, UserStatsOperation, PrivateMoneySummary, PaginatedPrivateMoneyOrganizationSummaries, PrivateMoneyOrganizationSummary, OrganizationSummary, Product, ExternalTransaction, Transfer, AccountWithoutPrivateMoneyDetail, BulkTransaction, UserTransaction, ShopWithAccounts, ShopWithMetadata, TransactionDetail, Transaction, Organization, PrivateMoney, User, CashtrayAttempt, CashtrayWithResult, Cashtray, CpmToken, Check, Bill, AccountBalance, AccountDeleted, ShopAccount, AccountDetail, AccountWithUser, Account, AdminUserWithShopsAndPrivateMoneys, Pagination, Echo, Pong, RequestUserStats, UpdateCampaign, GetCampaign, ListCampaigns, CreateCampaign, UpdateCashtray, CancelCashtray, GetCashtray, CreateCashtray, GetBulkTransaction, ListCustomerTransactions, GetPrivateMoneySummary, GetPrivateMoneyOrganizationSummaries, GetPrivateMoneys, UpdateShop, GetShop, CreateShopV2, CreateShop, ListShops, CreateOrganization, ListTransfersV2, ListTransfers, RefundExternalTransaction, CreateExternalTransaction, GetTransactionByRequestId, RefundTransaction, GetTransaction, BulkCreateTransaction, CreateExchangeTransaction, CreateTransferTransaction, CreateCpmTransaction, CreatePaymentTransaction, CreateTopupTransactionWithCheck, CreateTopupTransaction, ListTransactionsV2, CreateTransaction, ListTransactions, GetCpmToken, CreateCheck, UpdateBill, CreateBill, ListBills, GetShopAccounts, CreateCustomerAccount, GetCustomerAccounts, GetAccountTransferSummary, UpdateCustomerAccount, ListAccountExpiredBalances, ListAccountBalances, DeleteAccount, UpdateAccount, GetAccount, CreateUserAccount, ListUserAccounts, GetUser, SendEcho, GetPing };

async function example(): Promise<void> {
  console.log(`Pokepay partner SDK ${VERSION} example.`);
  try {
    const configPath = process.argv[2];
    if (!configPath) {
      throw new Error(
        "Please specify config file path. ex) $ npm run dev -- config.ini"
      );
    }
    const client = new Client(configPath);
    {
      console.log("\n --- try ping\n\n");
      const req = new GetPing();
      const res = await client.send(req);
      console.log("response:", res);
      console.log("response.object:", res.object);
      console.log("response.object.pong:", res.object.pong);
    }
    {
      console.log("\n --- try echo\n\n");
      const req = new SendEcho({ message: "echo message? echo PLEASE!" });
      const res = await client.send(req);
      console.log("response:", res);
      console.log("response.object:", res.object);
      console.log("response.object.message:", res.object.message);
    }
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

if (require.main === module) {
  example().then(() => {
    console.log("example finished!");
  });
}
