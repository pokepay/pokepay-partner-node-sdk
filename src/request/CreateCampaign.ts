// DO NOT EDIT: File is generated by code generator.

import { Request, Method } from "./Request";
import { Campaign } from "../response/Campaign";

class CreateCampaign implements Request<Campaign> {
  public readonly __r: Campaign | undefined;
  public readonly method: Method = "POST";
  public readonly path: string;
  public readonly bodyParams: {
    name: string,
    private_money_id: string,
    starts_at: string,
    ends_at: string,
    priority: number,
    event: string,
    bear_point_shop_id?: string,
    description?: string,
    status?: string,
    point_expires_at?: string,
    point_expires_in_days?: number,
    is_exclusive?: boolean,
    subject?: string,
    amount_based_point_rules?: Object[],
    product_based_point_rules?: Object[],
    applicable_days_of_week?: number[],
    applicable_time_ranges?: Object[],
    applicable_shop_ids?: string[],
    minimum_number_for_combination_purchase?: number,
    exist_in_each_product_groups?: boolean,
    max_point_amount?: number,
    max_total_point_amount?: number,
    dest_private_money_id?: string,
    applicable_account_metadata?: Object
  };
  public constructor(params: {
    name: string,
    private_money_id: string,
    starts_at: string,
    ends_at: string,
    priority: number,
    event: string,
    bear_point_shop_id?: string,
    description?: string,
    status?: string,
    point_expires_at?: string,
    point_expires_in_days?: number,
    is_exclusive?: boolean,
    subject?: string,
    amount_based_point_rules?: Object[],
    product_based_point_rules?: Object[],
    applicable_days_of_week?: number[],
    applicable_time_ranges?: Object[],
    applicable_shop_ids?: string[],
    minimum_number_for_combination_purchase?: number,
    exist_in_each_product_groups?: boolean,
    max_point_amount?: number,
    max_total_point_amount?: number,
    dest_private_money_id?: string,
    applicable_account_metadata?: Object
  }) {
    if (params.name === void 0) throw new Error('"name" is required');
    if (params.private_money_id === void 0) throw new Error('"private_money_id" is required');
    if (params.starts_at === void 0) throw new Error('"starts_at" is required');
    if (params.ends_at === void 0) throw new Error('"ends_at" is required');
    if (params.priority === void 0) throw new Error('"priority" is required');
    if (params.event === void 0) throw new Error('"event" is required');
    this.path = "/campaigns";
    this.bodyParams = {
      name: params.name,
      private_money_id: params.private_money_id,
      starts_at: params.starts_at,
      ends_at: params.ends_at,
      priority: params.priority,
      event: params.event,
    };
    if (params.bear_point_shop_id !== void 0) this.bodyParams.bear_point_shop_id = params.bear_point_shop_id;
    if (params.description !== void 0) this.bodyParams.description = params.description;
    if (params.status !== void 0) this.bodyParams.status = params.status;
    if (params.point_expires_at !== void 0) this.bodyParams.point_expires_at = params.point_expires_at;
    if (params.point_expires_in_days !== void 0) this.bodyParams.point_expires_in_days = params.point_expires_in_days;
    if (params.is_exclusive !== void 0) this.bodyParams.is_exclusive = params.is_exclusive;
    if (params.subject !== void 0) this.bodyParams.subject = params.subject;
    if (params.amount_based_point_rules !== void 0) this.bodyParams.amount_based_point_rules = params.amount_based_point_rules;
    if (params.product_based_point_rules !== void 0) this.bodyParams.product_based_point_rules = params.product_based_point_rules;
    if (params.applicable_days_of_week !== void 0) this.bodyParams.applicable_days_of_week = params.applicable_days_of_week;
    if (params.applicable_time_ranges !== void 0) this.bodyParams.applicable_time_ranges = params.applicable_time_ranges;
    if (params.applicable_shop_ids !== void 0) this.bodyParams.applicable_shop_ids = params.applicable_shop_ids;
    if (params.minimum_number_for_combination_purchase !== void 0) this.bodyParams.minimum_number_for_combination_purchase = params.minimum_number_for_combination_purchase;
    if (params.exist_in_each_product_groups !== void 0) this.bodyParams.exist_in_each_product_groups = params.exist_in_each_product_groups;
    if (params.max_point_amount !== void 0) this.bodyParams.max_point_amount = params.max_point_amount;
    if (params.max_total_point_amount !== void 0) this.bodyParams.max_total_point_amount = params.max_total_point_amount;
    if (params.dest_private_money_id !== void 0) this.bodyParams.dest_private_money_id = params.dest_private_money_id;
    if (params.applicable_account_metadata !== void 0) this.bodyParams.applicable_account_metadata = params.applicable_account_metadata;
  }
}

export { CreateCampaign };
