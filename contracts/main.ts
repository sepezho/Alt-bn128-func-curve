import { Cell, beginCell, Address } from "ton";

export function data(params: { ownerAddress: Address; number: number }): Cell {
  return beginCell().storeAddress(params.ownerAddress).storeUint(params.number, 64).endCell();
}

function bufferToChunks(buff: Buffer, chunkSize: number) {
  let chunks: Buffer[] = [];
  while (buff.byteLength > 0) {
    chunks.push(buff.slice(0, chunkSize));
    buff = buff.slice(chunkSize);
  }
  return chunks;
}

export function calculate(params: { hash: string }): Cell {
  return beginCell().storeUint(0x292eb3bc, 32).storeBuffer(new Buffer(params.hash)).endCell();
}
