// Original file: lib/proto/my.proto

import type { Trade as _myPackage_Trade, Trade__Output as _myPackage_Trade__Output } from '../myPackage/Trade';

export interface TradeListOutput {
  'requestedTrades'?: (_myPackage_Trade)[];
  'receivedTrades'?: (_myPackage_Trade)[];
}

export interface TradeListOutput__Output {
  'requestedTrades'?: (_myPackage_Trade__Output)[];
  'receivedTrades'?: (_myPackage_Trade__Output)[];
}
