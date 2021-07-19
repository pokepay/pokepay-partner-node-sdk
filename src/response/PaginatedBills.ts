// DO NOT EDIT: File is generated by code generator.

import { Bill[] } from "./Bill[]"
import { Pagination } from "./Pagination"

interface PaginatedBills {
  readonly rows: Bill[];
  readonly count: number;
  readonly pagination: Pagination;
}

export { PaginatedBills };
