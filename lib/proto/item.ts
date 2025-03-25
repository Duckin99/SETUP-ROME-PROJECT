import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { ItemServiceClient as _itemPackage_ItemServiceClient, ItemServiceDefinition as _itemPackage_ItemServiceDefinition } from './itemPackage/ItemService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  itemPackage: {
    ItemService: SubtypeConstructor<typeof grpc.Client, _itemPackage_ItemServiceClient> & { service: _itemPackage_ItemServiceDefinition }
    input: MessageTypeDefinition
    output: MessageTypeDefinition
  }
}

