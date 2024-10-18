import { HTTP_STATUS_CODE } from '../index.js';

export default {
  BAD_REQUEST: (data) => ({
    type: 'BAD_REQUEST',
    message: data,
  }),

  USER_NOT_AUTHORISED: {
    type: 'USER_NOT_AUTHORISED',
    message: "You're not authorised to access this page",
  },

  PAYLOAD_TOO_LARGE: {
    type: 'PAYLOAD_TOO_LARGE',
    message: 'The payload has exceeded the maximum size limit',
  },

  SOMETHING_WENT_WRONG: {
    type: 'SOMETHING_WENT_WRONG',
    message: 'Something went wrong',
  },

  INTERNAL_SERVER_ERROR: (data) => ({
    type: 'INTERNAL_SERVER_ERROR',
    message: data,
  }),

  // user related
  TITLE_ALREADY_USED: {
    type: 'TITLE_ALREADY_USED',
    message: 'Title already in use',
  },

  USERNAME_ALREADY_REGISTERED: {
    type: 'USERNAME_ALREADY_REGISTERED',
    message: 'Username is already registered',
  },

  INVALID_CREDENTIALS: {
    status: HTTP_STATUS_CODE.BAD_REQUEST,
    type: 'INVALID_CREDENTIALS',
    message: 'You have entered invalid credentials',
  },

  INVALID_USER: {
    type: 'INVALID_USER',
    message: 'The provided user does not exist',
  },

  PACKAGE_ALREADY_EXISTS: {
    status: HTTP_STATUS_CODE.BAD_REQUEST,
    type: 'PACKAGE_ALREADY_EXISTS',
    message: 'A package with same name already exists',
  },
  PACKAGE_DOES_NOT_EXIST: {
    status: HTTP_STATUS_CODE.BAD_REQUEST,
    type: 'PACKAGE_DOES_NOT_EXIST',
    message: 'This package does not exist',
  },

  PRODUCT_ALREADY_EXISTS: {
    status: HTTP_STATUS_CODE.BAD_REQUEST,
    type: 'PRODUCT_ALREADY_EXISTS',
    message: 'A product with same name already exists',
  },
  PRODUCT_DOES_NOT_EXIST: {
    status: HTTP_STATUS_CODE.BAD_REQUEST,
    type: 'PRODUCT_DOES_NOT_EXIST',
    message: 'This product does not exist',
  },
  POS_STOCK_ITEM_INVENTORY_NOT_MANAGED: {
    status: HTTP_STATUS_CODE.BAD_REQUEST,
    type: 'POS_STOCK_ITEM_INVENTORY_NOT_MANAGED',
    message: 'Invalid items identified while adding stock',
  },
  POS_STOCK_ITEM_MISMATCH: {
    status: HTTP_STATUS_CODE.BAD_REQUEST,
    type: 'POS_STOCK_ITEM_MISMATCH',
    message: 'Something went wrong while adding stock',
  },
  POS_STOCK_DOES_NOT_EXIST: {
    status: HTTP_STATUS_CODE.BAD_REQUEST,
    type: 'POS_STOCK_DOES_NOT_EXIST',
    message: 'This stock does not exist',
  },
  EXPENSE_DOES_NOT_EXIST: {
    status: HTTP_STATUS_CODE.BAD_REQUEST,
    type: 'EXPENSE_DOES_NOT_EXIST',
    message: 'This expense does not exist',
  },
  SOURCE_DOES_NOT_EXIST: {
    status: HTTP_STATUS_CODE.BAD_REQUEST,
    type: 'SOURCE_DOES_NOT_EXIST',
    message: 'This source does not exist',
  },
  ENQUIRY_DOES_NOT_EXIST: {
    status: HTTP_STATUS_CODE.BAD_REQUEST,
    type: 'ENQUIRY_DOES_NOT_EXIST',
    message: 'This enquiry does not exist',
  },
  SLOT_DOES_NOT_EXIST: {
    status: HTTP_STATUS_CODE.BAD_REQUEST,
    type: 'SLOT_DOES_NOT_EXIST',
    message: 'This slot does not exist',
  },
  TRAINER_ALREADY_OCCUPIED_FOR_GIVEN_SPOT: {
    status: HTTP_STATUS_CODE.BAD_REQUEST,
    type: 'TRAINER_ALREADY_OCCUPIED_FOR_GIVEN_SPOT',
    message: 'Trainer already has a schedule for this time',
  },
};