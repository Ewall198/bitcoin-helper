import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AddressHash } from "../api/addresses";
import TransactionsList from "./TransactionsList";

interface LocationState {
  addresses: AddressHash[];
}

const TransactionsPage = () => {
  const location = useLocation();
  const { addresses } = location.state as LocationState;
  return (
    <div>
      <Link to="/">
        <button>Home</button>
      </Link>
      <TransactionsList addresses={addresses} />
    </div>
  );
};

export default TransactionsPage;
