/**
 * API Reference - https://www.blockchain.com/api/blockchain_api
 * https://blockchain.info/multiaddr?active=$address|$address
 */

export type AddressHash = string;

interface AddressData {
  address: AddressHash;
  n_tx: number;
  total_received: number;
  total_sent: number;
  final_balance: number;
}

type TransactionHash = string;

export interface TransactionTargetParam {
  addr: AddressHash;
  value: number;
}

export interface TransactionData {
  hash: TransactionHash;
  balance: number;
  fee: number;
  inputs: { prev_out: TransactionTargetParam }[];
  out: TransactionTargetParam[];
}

export interface GetAddressesDataResponse {
  addresses: AddressData[];
  txs: TransactionData[];
}

export async function getAddressesData(
  addresses: AddressHash[],
  limit: number,
  offset: number
): Promise<GetAddressesDataResponse> {
  const data = await fetch(
    `https://blockchain.info/multiaddr?active=${addresses.join(
      "|"
    )}&n=${limit}&offset=${offset}`
  );
  return await data.json();
}
