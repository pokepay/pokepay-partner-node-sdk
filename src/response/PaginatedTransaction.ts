// DO NOT EDIT: File is generated by code generator.

import { Transaction } from "./Transaction";
import { Pagination } from "./Pagination";

interface PaginatedTransaction {
  readonly rows: Transaction[];
  readonly count: number;
  readonly pagination: Pagination;
}

export { PaginatedTransaction };
