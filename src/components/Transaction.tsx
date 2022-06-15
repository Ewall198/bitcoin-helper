import React from "react";
import { TransactionData, TransactionTargetParam } from "../api/addresses";

import "./Transaction.css";
/**
 * Display a single transaction target.
 */
const TransactionTargetElement = ({
  target,
}: {
  target: TransactionTargetParam;
}) => (
  <table>
    <tbody>
      <tr>
        <td>Address</td>
        <td>{target.addr}</td>
      </tr>
      <tr>
        <td>Value</td>
        <td>{target.value}</td>
      </tr>
    </tbody>
  </table>
);

/**
 * Display a single transaction.
 */
const Transaction = ({
  transactionData,
}: {
  transactionData: TransactionData;
}) => (
  <div className="transaction">
    <table>
      <tbody>
        <tr>
          <td>Transaction Hash</td>
          <td>{transactionData.hash}</td>
        </tr>
        <tr>
          <td>Balance</td>
          <td>{transactionData.balance}</td>
        </tr>
        <tr>
          <td>Fee</td>
          <td>{transactionData.fee}</td>
        </tr>
        <tr>
          <td>Inputs</td>
          <td>
            {transactionData.inputs.map((x, index) => (
              <TransactionTargetElement key={index} target={x.prev_out} />
            ))}
          </td>
        </tr>
        <tr>
          <td>Out</td>
          <td>
            {transactionData.out.map((x, index) => (
              <TransactionTargetElement key={index} target={x} />
            ))}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Transaction;
