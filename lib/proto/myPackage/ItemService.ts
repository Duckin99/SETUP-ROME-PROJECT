// Original file: lib/proto/my.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateItemInput as _myPackage_CreateItemInput, CreateItemInput__Output as _myPackage_CreateItemInput__Output } from '../myPackage/CreateItemInput';
import type { EmptyInput as _myPackage_EmptyInput, EmptyInput__Output as _myPackage_EmptyInput__Output } from '../myPackage/EmptyInput';
import type { Item as _myPackage_Item, Item__Output as _myPackage_Item__Output } from '../myPackage/Item';
import type { ItemIdInput as _myPackage_ItemIdInput, ItemIdInput__Output as _myPackage_ItemIdInput__Output } from '../myPackage/ItemIdInput';
import type { ItemListOutput as _myPackage_ItemListOutput, ItemListOutput__Output as _myPackage_ItemListOutput__Output } from '../myPackage/ItemListOutput';
import type { UpdateItemInput as _myPackage_UpdateItemInput, UpdateItemInput__Output as _myPackage_UpdateItemInput__Output } from '../myPackage/UpdateItemInput';

export interface ItemServiceClient extends grpc.Client {
  CreateItem(argument: _myPackage_CreateItemInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_myPackage_Item__Output>): grpc.ClientUnaryCall;
  CreateItem(argument: _myPackage_CreateItemInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_myPackage_Item__Output>): grpc.ClientUnaryCall;
  CreateItem(argument: _myPackage_CreateItemInput, options: grpc.CallOptions, callback: grpc.requestCallback<_myPackage_Item__Output>): grpc.ClientUnaryCall;
  CreateItem(argument: _myPackage_CreateItemInput, callback: grpc.requestCallback<_myPackage_Item__Output>): grpc.ClientUnaryCall;
  createItem(argument: _myPackage_CreateItemInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_myPackage_Item__Output>): grpc.ClientUnaryCall;
  createItem(argument: _myPackage_CreateItemInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_myPackage_Item__Output>): grpc.ClientUnaryCall;
  createItem(argument: _myPackage_CreateItemInput, options: grpc.CallOptions, callback: grpc.requestCallback<_myPackage_Item__Output>): grpc.ClientUnaryCall;
  createItem(argument: _myPackage_CreateItemInput, callback: grpc.requestCallback<_myPackage_Item__Output>): grpc.ClientUnaryCall;
  
  DeleteItem(argument: _myPackage_ItemIdInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_myPackage_Item__Output>): grpc.ClientUnaryCall;
  DeleteItem(argument: _myPackage_ItemIdInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_myPackage_Item__Output>): grpc.ClientUnaryCall;
  DeleteItem(argument: _myPackage_ItemIdInput, options: grpc.CallOptions, callback: grpc.requestCallback<_myPackage_Item__Output>): grpc.ClientUnaryCall;
  DeleteItem(argument: _myPackage_ItemIdInput, callback: grpc.requestCallback<_myPackage_Item__Output>): grpc.ClientUnaryCall;
  deleteItem(argument: _myPackage_ItemIdInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_myPackage_Item__Output>): grpc.ClientUnaryCall;
  deleteItem(argument: _myPackage_ItemIdInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_myPackage_Item__Output>): grpc.ClientUnaryCall;
  deleteItem(argument: _myPackage_ItemIdInput, options: grpc.CallOptions, callback: grpc.requestCallback<_myPackage_Item__Output>): grpc.ClientUnaryCall;
  deleteItem(argument: _myPackage_ItemIdInput, callback: grpc.requestCallback<_myPackage_Item__Output>): grpc.ClientUnaryCall;
  
  GetAllItems(argument: _myPackage_EmptyInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_myPackage_ItemListOutput__Output>): grpc.ClientUnaryCall;
  GetAllItems(argument: _myPackage_EmptyInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_myPackage_ItemListOutput__Output>): grpc.ClientUnaryCall;
  GetAllItems(argument: _myPackage_EmptyInput, options: grpc.CallOptions, callback: grpc.requestCallback<_myPackage_ItemListOutput__Output>): grpc.ClientUnaryCall;
  GetAllItems(argument: _myPackage_EmptyInput, callback: grpc.requestCallback<_myPackage_ItemListOutput__Output>): grpc.ClientUnaryCall;
  getAllItems(argument: _myPackage_EmptyInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_myPackage_ItemListOutput__Output>): grpc.ClientUnaryCall;
  getAllItems(argument: _myPackage_EmptyInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_myPackage_ItemListOutput__Output>): grpc.ClientUnaryCall;
  getAllItems(argument: _myPackage_EmptyInput, options: grpc.CallOptions, callback: grpc.requestCallback<_myPackage_ItemListOutput__Output>): grpc.ClientUnaryCall;
  getAllItems(argument: _myPackage_EmptyInput, callback: grpc.requestCallback<_myPackage_ItemListOutput__Output>): grpc.ClientUnaryCall;
  
  GetItem(argument: _myPackage_ItemIdInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_myPackage_Item__Output>): grpc.ClientUnaryCall;
  GetItem(argument: _myPackage_ItemIdInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_myPackage_Item__Output>): grpc.ClientUnaryCall;
  GetItem(argument: _myPackage_ItemIdInput, options: grpc.CallOptions, callback: grpc.requestCallback<_myPackage_Item__Output>): grpc.ClientUnaryCall;
  GetItem(argument: _myPackage_ItemIdInput, callback: grpc.requestCallback<_myPackage_Item__Output>): grpc.ClientUnaryCall;
  getItem(argument: _myPackage_ItemIdInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_myPackage_Item__Output>): grpc.ClientUnaryCall;
  getItem(argument: _myPackage_ItemIdInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_myPackage_Item__Output>): grpc.ClientUnaryCall;
  getItem(argument: _myPackage_ItemIdInput, options: grpc.CallOptions, callback: grpc.requestCallback<_myPackage_Item__Output>): grpc.ClientUnaryCall;
  getItem(argument: _myPackage_ItemIdInput, callback: grpc.requestCallback<_myPackage_Item__Output>): grpc.ClientUnaryCall;
  
  UpdateItem(argument: _myPackage_UpdateItemInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_myPackage_Item__Output>): grpc.ClientUnaryCall;
  UpdateItem(argument: _myPackage_UpdateItemInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_myPackage_Item__Output>): grpc.ClientUnaryCall;
  UpdateItem(argument: _myPackage_UpdateItemInput, options: grpc.CallOptions, callback: grpc.requestCallback<_myPackage_Item__Output>): grpc.ClientUnaryCall;
  UpdateItem(argument: _myPackage_UpdateItemInput, callback: grpc.requestCallback<_myPackage_Item__Output>): grpc.ClientUnaryCall;
  updateItem(argument: _myPackage_UpdateItemInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_myPackage_Item__Output>): grpc.ClientUnaryCall;
  updateItem(argument: _myPackage_UpdateItemInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_myPackage_Item__Output>): grpc.ClientUnaryCall;
  updateItem(argument: _myPackage_UpdateItemInput, options: grpc.CallOptions, callback: grpc.requestCallback<_myPackage_Item__Output>): grpc.ClientUnaryCall;
  updateItem(argument: _myPackage_UpdateItemInput, callback: grpc.requestCallback<_myPackage_Item__Output>): grpc.ClientUnaryCall;
  
}

export interface ItemServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateItem: grpc.handleUnaryCall<_myPackage_CreateItemInput__Output, _myPackage_Item>;
  
  DeleteItem: grpc.handleUnaryCall<_myPackage_ItemIdInput__Output, _myPackage_Item>;
  
  GetAllItems: grpc.handleUnaryCall<_myPackage_EmptyInput__Output, _myPackage_ItemListOutput>;
  
  GetItem: grpc.handleUnaryCall<_myPackage_ItemIdInput__Output, _myPackage_Item>;
  
  UpdateItem: grpc.handleUnaryCall<_myPackage_UpdateItemInput__Output, _myPackage_Item>;
  
}

export interface ItemServiceDefinition extends grpc.ServiceDefinition {
  CreateItem: MethodDefinition<_myPackage_CreateItemInput, _myPackage_Item, _myPackage_CreateItemInput__Output, _myPackage_Item__Output>
  DeleteItem: MethodDefinition<_myPackage_ItemIdInput, _myPackage_Item, _myPackage_ItemIdInput__Output, _myPackage_Item__Output>
  GetAllItems: MethodDefinition<_myPackage_EmptyInput, _myPackage_ItemListOutput, _myPackage_EmptyInput__Output, _myPackage_ItemListOutput__Output>
  GetItem: MethodDefinition<_myPackage_ItemIdInput, _myPackage_Item, _myPackage_ItemIdInput__Output, _myPackage_Item__Output>
  UpdateItem: MethodDefinition<_myPackage_UpdateItemInput, _myPackage_Item, _myPackage_UpdateItemInput__Output, _myPackage_Item__Output>
}
