interface OrganizationWorkerTaskWebhook {
    readonly id: string;
    readonly organization_code: string;
    readonly task: string;
    readonly url: string;
    readonly content_type: string;
    readonly is_active: boolean;
}
export { OrganizationWorkerTaskWebhook };
