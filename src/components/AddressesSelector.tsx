import React, { useEffect, KeyboardEventHandler, useState } from "react";

import {
  AddressHash,
  GetAddressesDataResponse,
  getAddressesData,
} from "../api/addresses";
import TransactionsList from "./TransactionsList";

import "./AddressesSelector.css";

/**
 * Allows user to manage a list of Addresses and display their balances.
 */
const AddressesSelector = () => {
  const [addresses, setAddresses] = useState<AddressHash[]>([
    "3E8ociqZa9mZUSwGdSmAEMAoAxBK3FNDcd",
    "bc1q0sg9rdst255gtldsmcf8rk0764avqy2h2ksqs5",
  ]);
  const [inputAddress, setInputAddress] = useState<AddressHash>("");
  const [addressesData, setAddressesData] = useState<
    GetAddressesDataResponse | undefined
  >();

  const refreshAddressesData = async () => {
    const newAddressesData = await getAddressesData(addresses, 0, 0);
    setAddressesData(newAddressesData);
  };

  useEffect(() => {
    refreshAddressesData();
  }, [addresses]);

  const submitInputAddress = () => {
    if (inputAddress === "") return;
    setAddresses([...addresses, inputAddress]);
    setInputAddress("");
  };

  const getAddressBalance = (address: AddressHash) => {
    // Note: This is somewhat inefficient, but is unlikely to cause noticeable performance impact.
    return addressesData?.addresses?.find((a) => a.address === address)
      ?.final_balance;
  };

  const addressElements = addresses.map((address: AddressHash) => {
    return (
      <tr key={address}>
        <td>
          <button
            onClick={() => setAddresses(addresses.filter((x) => x !== address))}
          >
            -
          </button>
        </td>
        <td>{address}</td>
        <td>{getAddressBalance(address) ?? "-"}</td>
      </tr>
    );
  });

  const handleInputKeyDown: KeyboardEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (event.key === "Enter") submitInputAddress();
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Add address"
          onChange={(evt) => setInputAddress(evt.target.value)}
          value={inputAddress}
          onKeyDown={handleInputKeyDown}
        />
        <button onClick={() => submitInputAddress()}>Add</button>
      </div>
      <button onClick={() => refreshAddressesData()}>Refresh Balances</button>
      <table className="addressesTable">
        <thead>
          <tr>
            <th>Remove</th>
            <th>Address</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>{addressElements}</tbody>
      </table>
      <TransactionsList addresses={addresses} />
    </div>
  );
};

export default AddressesSelector;
