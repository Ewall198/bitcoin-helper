import React, { useEffect, useState } from "react";
import {
  AddressHash,
  GetAddressesDataResponse,
  getAddressesData,
} from "../api/addresses";
import Transaction from "./Transaction";
import PageSelector from "./PageSelector";

const PAGE_SIZE = 10;

/**
 * Display a list of Transactions. Supports pagination.
 */
const TransactionsList = ({ addresses }: { addresses: AddressHash[] }) => {
  const [page, setPage] = useState<number>(1); // The current page starting at 1.
  const [addressesData, setAddressesData] = useState<
    GetAddressesDataResponse | undefined
  >();

  const refreshAddressesData = async () => {
    const newAddressesData = await getAddressesData(
      addresses,
      PAGE_SIZE,
      (page - 1) * PAGE_SIZE
    );
    setAddressesData(newAddressesData);
  };

  useEffect(() => {
    refreshAddressesData();
  }, [addresses, page]);

  if (!addressesData) return null;

  const txCount = addressesData.addresses.reduce(
    (txCount, addr) => addr.n_tx + txCount,
    0
  );
  const lastPage = Math.ceil(txCount / PAGE_SIZE);

  return (
    <div>
      <button onClick={() => refreshAddressesData()}>
        Refresh Transactions
      </button>
      {addressesData.txs.map((transaction) => (
        <Transaction key={transaction.hash} transactionData={transaction} />
      ))}
      <PageSelector currentPage={page} lastPage={lastPage} setPage={setPage} />
    </div>
  );
};

export default TransactionsList;
