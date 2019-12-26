import {
    GET_USERS,
    GET_USERS_PENDING,
  } from "../config/constant";
  
  export const getUsers = users => {
    return {
      type: GET_USERS,
      payload: users
    };
  };
  
  export const getUsersPending = () => {
    return {
      type: GET_USERS_PENDING
    };
  };