import React from "react";
import { useLocation } from "react-router-dom";
import { AddressHash } from "../api/addresses";
import TransactionsList from "./TransactionsList";

interface LocationState {
  addresses: AddressHash[];
}

const TransactionsPage = () => {
  const location = useLocation();
  const { addresses } = location.state as LocationState;
  return <TransactionsList addresses={addresses} />;
};

export default TransactionsPage;
