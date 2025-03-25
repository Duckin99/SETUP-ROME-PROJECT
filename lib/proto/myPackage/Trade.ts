// Original file: lib/proto/my.proto

import type { User as _myPackage_User, User__Output as _myPackage_User__Output } from '../myPackage/User';
import type { Item as _myPackage_Item, Item__Output as _myPackage_Item__Output } from '../myPackage/Item';

export interface Trade {
  'id'?: (number);
  'requesterId'?: (number);
  'receiverId'?: (number);
  'requestItemId'?: (number);
  'receiveItemId'?: (number);
  'requester'?: (_myPackage_User | null);
  'receiver'?: (_myPackage_User | null);
  'requestItem'?: (_myPackage_Item | null);
  'receiveItem'?: (_myPackage_Item | null);
  'status'?: (string);
}

export interface Trade__Output {
  'id'?: (number);
  'requesterId'?: (number);
  'receiverId'?: (number);
  'requestItemId'?: (number);
  'receiveItemId'?: (number);
  'requester'?: (_myPackage_User__Output);
  'receiver'?: (_myPackage_User__Output);
  'requestItem'?: (_myPackage_Item__Output);
  'receiveItem'?: (_myPackage_Item__Output);
  'status'?: (string);
}
