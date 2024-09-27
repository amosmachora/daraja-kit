import axios, { AxiosError } from "axios";
import { BASE_URL, BUSINESS_SHORT_CODE } from "../env";
import {
  BillManagerOptin,
  BillManagerOptInResponse,
  BillManagerSingleInvoicingBody,
  BillManagerSingleInvoicingResponse,
} from "../types/types";
import { generateAccessToken } from "./access-token";
import {
  BulkInvoice,
  CancelSingleInvoice,
  ReconciliationBody,
  UpdateOptinDetails,
} from "../types/bill-manager-types";

export const billManagerOptIn = async (
  data: BillManagerOptin
): Promise<BillManagerOptInResponse> => {
  const { access_token } = await generateAccessToken();
  try {
    const res = await axios.post(
      `${BASE_URL}/v1/billmanager-invoice/optin`,
      { ...data, PartyA: BUSINESS_SHORT_CODE },
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    return res.data;
  } catch (error) {
    const err = error as AxiosError;
    console.error(error);
    throw new Error(
      `Error occurred with status code ${err.response?.status}, ${err.response?.statusText}`
    );
  }
};

export const billManagerSingleInvoicing = async (
  data: BillManagerSingleInvoicingBody
): Promise<BillManagerSingleInvoicingResponse> => {
  const { access_token } = await generateAccessToken();
  try {
    const res = await axios.post(
      `${BASE_URL}/v1/billmanager-invoice/single-invoicing`,
      data,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    return res.data;
  } catch (error) {
    const err = error as AxiosError;
    console.error(error);
    throw new Error(
      `Error occurred with status code ${err.response?.status}, ${err.response?.statusText}`
    );
  }
};

export const billManagerBulkInvoicing = async (
  data: BulkInvoice[]
): Promise<{
  Status_Message: string;
  resmsg: string;
  rescode: string;
}> => {
  const { access_token } = await generateAccessToken();
  try {
    const res = await axios.post(
      `${BASE_URL}/v1/billmanager-invoice/bulk-invoicing`,
      data,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    return res.data;
  } catch (error) {
    const err = error as AxiosError;
    console.error(error);
    throw new Error(
      `Error occurred with status code ${err.response?.status}, ${err.response?.statusText}`
    );
  }
};

export const billManagerReconciliation = async (
  data: Omit<ReconciliationBody, "shortCode">
): Promise<{
  resmsg: string;
  rescode: string;
}> => {
  const { access_token } = await generateAccessToken();
  try {
    const res = await axios.post(
      `${BASE_URL}/v1/billmanager-invoice/reconciliation`,
      { ...data, shortCode: BUSINESS_SHORT_CODE },
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    return res.data;
  } catch (error) {
    const err = error as AxiosError;
    console.error(error);
    throw new Error(
      `Error occurred with status code ${err.response?.status}, ${err.response?.statusText}`
    );
  }
};

export const cancelSingleInvoicing = async (data: {
  externalReference: string;
}): Promise<{
  resmsg: string;
  rescode: string;
}> => {
  const { access_token } = await generateAccessToken();
  try {
    const res = await axios.post(
      `${BASE_URL}/v1/billmanager-invoice/reconciliation`,
      data,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    return res.data;
  } catch (error) {
    const err = error as AxiosError;
    console.error(error);
    throw new Error(
      `Error occurred with status code ${err.response?.status}, ${err.response?.statusText}`
    );
  }
};

export const cancelBulkInvoicing = async (
  data: CancelSingleInvoice[]
): Promise<{
  Status_Message: string;
  resmsg: string;
  rescode: string;
  errors: string[];
}> => {
  const { access_token } = await generateAccessToken();
  try {
    const res = await axios.post(
      `${BASE_URL}/v1/billmanager-invoice/reconciliation`,
      data,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    return res.data;
  } catch (error) {
    const err = error as AxiosError;
    console.error(error);
    throw new Error(
      `Error occurred with status code ${err.response?.status}, ${err.response?.statusText}`
    );
  }
};

export const updateOptinDetails = async (
  data: Omit<UpdateOptinDetails, "shortcode">
): Promise<{
  resmsg: string;
  rescode: string;
}> => {
  const { access_token } = await generateAccessToken();
  try {
    const res = await axios.post(
      `${BASE_URL}/v1/billmanager-invoice/change-optin-details`,
      { ...data, shortCode: BUSINESS_SHORT_CODE },
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    return res.data;
  } catch (error) {
    const err = error as AxiosError;
    console.error(error);
    throw new Error(
      `Error occurred with status code ${err.response?.status}, ${err.response?.statusText}`
    );
  }
};
