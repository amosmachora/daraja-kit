/**
 * Definition of the BulkInvoice type used for sending multiple invoices at once.
 */
export type BulkInvoice = {
  /**
   * Unique invoice name on your system's end. Used for referencing invoices from both Bill Manager and your system.
   * Must exist, otherwise the invoice will not be sent.
   */
  externalReference: string;

  /**
   * Name of the recipient to receive the invoice details. Appears in the SMS sent.
   */
  billedFullName: string;

  /**
   * Phone number to receive invoice details via SMS. Must be a Safaricom number.
   */
  billedPhoneNumber: string;

  /**
   * Month and year of the billed period.
   */
  billedPeriod: string; // Date(M/Y)

  /**
   * Descriptive invoice name for what the customer is being billed. Appears in the invoice SMS sent to the customer.
   */
  invoiceName: string;

  /**
   * Date by which the customer is expected to have paid the invoice amount.
   * Reminders are sent seven and three days before the due date and on the due date.
   */
  dueDate: string; // String (Varchar)

  /**
   * Account number being invoiced that uniquely identifies a customer.
   * Can be a customer name, business name, property unit, student's name, etc.
   */
  accountReference: string; // String (Varchar)

  /**
   * Total invoice amount to be paid in Kenyan Shillings. No special characters like commas should be included.
   */
  amount: string; // Numeric

  /**
   * Additional billable items to be included in the invoice. These items will appear on the e-invoice.
   */
  invoiceItems?: {
    /**
     * Name of the additional billable item.
     */
    itemName: string;

    /**
     * Amount associated with the additional billable item.
     */
    amount: string;
  }[];
};

/**
 * Definition of the ReconciliationBody type used for reconciling transactions.
 */
export type ReconciliationBody = {
  /**
   * M-PESA generated reference for the transaction.
   */
  transactionId: string;

  /**
   * Amount paid in Kenyan Shillings.
   */
  paidAmount: string;

  /**
   * Customer's phone number debited.
   */
  msisdn: string;

  /**
   * Date the payment was recorded in the BillManager System.
   */
  dateCreated: string;

  /**
   * Account number being invoiced that uniquely identifies a customer.
   * Can be a customer name, business name, property unit, student's name, etc.
   */
  accountReference: string;

  /**
   * Organization's shortcode (Paybill or Buygoods - A 5 to 6 digit account number) used to identify an organization and receive the transaction.
   */
  shortCode: string;
};

/**
 * Definition of the UpdateOptinDetails type used for updating opt-in details in the Bill Manager system.
 */
export type UpdateOptinDetails = {
  /**
   * Organization's shortcode used to identify the organization.
   */
  shortcode: string;

  /**
   * Official contact email address for the organization signing up to Bill Manager.
   * Appears in features sent to the customer such as invoices and payment receipts for customers to reach out to the business.
   */
  email: string;

  /**
   * Official contact phone number for the organization signing up to Bill Manager.
   * Appears in features sent to the customer such as invoices and payment receipts for customers to reach out to the business.
   */
  officialContact: string;

  /**
   * Flag to enable or disable SMS payment reminders for invoices sent.
   * 0 - Disable Reminders
   * 1 - Enable Reminders
   */
  sendReminders: number;

  /**
   * Image to be embedded in the invoices and receipts sent to the customer.
   * Supported formats: JPEG, JPG
   */
  logo: string;

  /**
   * Callback URL provided by the organization to Bill Manager during the initial opt-in process.
   * Invoked by the payments API to push payments done to the paybill.
   * More details on the callback URL are in the payments and reconciliation API documentation.
   */
  callbackurl: string;
};

export type CancelSingleInvoice = {
  externalReference: string;
};
