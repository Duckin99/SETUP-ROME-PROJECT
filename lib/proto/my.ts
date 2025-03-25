import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { ItemServiceClient as _myPackage_ItemServiceClient, ItemServiceDefinition as _myPackage_ItemServiceDefinition } from './myPackage/ItemService';
import type { TradeServiceClient as _myPackage_TradeServiceClient, TradeServiceDefinition as _myPackage_TradeServiceDefinition } from './myPackage/TradeService';
import type { UserServiceClient as _myPackage_UserServiceClient, UserServiceDefinition as _myPackage_UserServiceDefinition } from './myPackage/UserService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  myPackage: {
    CreateItemInput: MessageTypeDefinition
    CreateTradeInput: MessageTypeDefinition
    EmptyInput: MessageTypeDefinition
    Item: MessageTypeDefinition
    ItemIdInput: MessageTypeDefinition
    ItemListOutput: MessageTypeDefinition
    ItemService: SubtypeConstructor<typeof grpc.Client, _myPackage_ItemServiceClient> & { service: _myPackage_ItemServiceDefinition }
    Trade: MessageTypeDefinition
    TradeIdInput: MessageTypeDefinition
    TradeListOutput: MessageTypeDefinition
    TradeService: SubtypeConstructor<typeof grpc.Client, _myPackage_TradeServiceClient> & { service: _myPackage_TradeServiceDefinition }
    UpdateItemInput: MessageTypeDefinition
    UpdateTradeInput: MessageTypeDefinition
    UpdateUserInput: MessageTypeDefinition
    User: MessageTypeDefinition
    UserIdInput: MessageTypeDefinition
    UserService: SubtypeConstructor<typeof grpc.Client, _myPackage_UserServiceClient> & { service: _myPackage_UserServiceDefinition }
  }
}

