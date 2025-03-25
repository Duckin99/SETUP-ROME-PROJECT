// Original file: lib/proto/my.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Item as _myPackage_Item, Item__Output as _myPackage_Item__Output } from '../myPackage/Item';
import type { UpdateUserInput as _myPackage_UpdateUserInput, UpdateUserInput__Output as _myPackage_UpdateUserInput__Output } from '../myPackage/UpdateUserInput';
import type { User as _myPackage_User, User__Output as _myPackage_User__Output } from '../myPackage/User';
import type { UserIdInput as _myPackage_UserIdInput, UserIdInput__Output as _myPackage_UserIdInput__Output } from '../myPackage/UserIdInput';

export interface UserServiceClient extends grpc.Client {
  DeleteUser(argument: _myPackage_UserIdInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_myPackage_User__Output>): grpc.ClientUnaryCall;
  DeleteUser(argument: _myPackage_UserIdInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_myPackage_User__Output>): grpc.ClientUnaryCall;
  DeleteUser(argument: _myPackage_UserIdInput, options: grpc.CallOptions, callback: grpc.requestCallback<_myPackage_User__Output>): grpc.ClientUnaryCall;
  DeleteUser(argument: _myPackage_UserIdInput, callback: grpc.requestCallback<_myPackage_User__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _myPackage_UserIdInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_myPackage_User__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _myPackage_UserIdInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_myPackage_User__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _myPackage_UserIdInput, options: grpc.CallOptions, callback: grpc.requestCallback<_myPackage_User__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _myPackage_UserIdInput, callback: grpc.requestCallback<_myPackage_User__Output>): grpc.ClientUnaryCall;
  
  GetItemsFromUser(argument: _myPackage_UserIdInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_myPackage_Item__Output>): grpc.ClientUnaryCall;
  GetItemsFromUser(argument: _myPackage_UserIdInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_myPackage_Item__Output>): grpc.ClientUnaryCall;
  GetItemsFromUser(argument: _myPackage_UserIdInput, options: grpc.CallOptions, callback: grpc.requestCallback<_myPackage_Item__Output>): grpc.ClientUnaryCall;
  GetItemsFromUser(argument: _myPackage_UserIdInput, callback: grpc.requestCallback<_myPackage_Item__Output>): grpc.ClientUnaryCall;
  getItemsFromUser(argument: _myPackage_UserIdInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_myPackage_Item__Output>): grpc.ClientUnaryCall;
  getItemsFromUser(argument: _myPackage_UserIdInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_myPackage_Item__Output>): grpc.ClientUnaryCall;
  getItemsFromUser(argument: _myPackage_UserIdInput, options: grpc.CallOptions, callback: grpc.requestCallback<_myPackage_Item__Output>): grpc.ClientUnaryCall;
  getItemsFromUser(argument: _myPackage_UserIdInput, callback: grpc.requestCallback<_myPackage_Item__Output>): grpc.ClientUnaryCall;
  
  GetUser(argument: _myPackage_UserIdInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_myPackage_User__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _myPackage_UserIdInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_myPackage_User__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _myPackage_UserIdInput, options: grpc.CallOptions, callback: grpc.requestCallback<_myPackage_User__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _myPackage_UserIdInput, callback: grpc.requestCallback<_myPackage_User__Output>): grpc.ClientUnaryCall;
  getUser(argument: _myPackage_UserIdInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_myPackage_User__Output>): grpc.ClientUnaryCall;
  getUser(argument: _myPackage_UserIdInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_myPackage_User__Output>): grpc.ClientUnaryCall;
  getUser(argument: _myPackage_UserIdInput, options: grpc.CallOptions, callback: grpc.requestCallback<_myPackage_User__Output>): grpc.ClientUnaryCall;
  getUser(argument: _myPackage_UserIdInput, callback: grpc.requestCallback<_myPackage_User__Output>): grpc.ClientUnaryCall;
  
  UpdateUser(argument: _myPackage_UpdateUserInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_myPackage_User__Output>): grpc.ClientUnaryCall;
  UpdateUser(argument: _myPackage_UpdateUserInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_myPackage_User__Output>): grpc.ClientUnaryCall;
  UpdateUser(argument: _myPackage_UpdateUserInput, options: grpc.CallOptions, callback: grpc.requestCallback<_myPackage_User__Output>): grpc.ClientUnaryCall;
  UpdateUser(argument: _myPackage_UpdateUserInput, callback: grpc.requestCallback<_myPackage_User__Output>): grpc.ClientUnaryCall;
  updateUser(argument: _myPackage_UpdateUserInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_myPackage_User__Output>): grpc.ClientUnaryCall;
  updateUser(argument: _myPackage_UpdateUserInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_myPackage_User__Output>): grpc.ClientUnaryCall;
  updateUser(argument: _myPackage_UpdateUserInput, options: grpc.CallOptions, callback: grpc.requestCallback<_myPackage_User__Output>): grpc.ClientUnaryCall;
  updateUser(argument: _myPackage_UpdateUserInput, callback: grpc.requestCallback<_myPackage_User__Output>): grpc.ClientUnaryCall;
  
}

export interface UserServiceHandlers extends grpc.UntypedServiceImplementation {
  DeleteUser: grpc.handleUnaryCall<_myPackage_UserIdInput__Output, _myPackage_User>;
  
  GetItemsFromUser: grpc.handleUnaryCall<_myPackage_UserIdInput__Output, _myPackage_Item>;
  
  GetUser: grpc.handleUnaryCall<_myPackage_UserIdInput__Output, _myPackage_User>;
  
  UpdateUser: grpc.handleUnaryCall<_myPackage_UpdateUserInput__Output, _myPackage_User>;
  
}

export interface UserServiceDefinition extends grpc.ServiceDefinition {
  DeleteUser: MethodDefinition<_myPackage_UserIdInput, _myPackage_User, _myPackage_UserIdInput__Output, _myPackage_User__Output>
  GetItemsFromUser: MethodDefinition<_myPackage_UserIdInput, _myPackage_Item, _myPackage_UserIdInput__Output, _myPackage_Item__Output>
  GetUser: MethodDefinition<_myPackage_UserIdInput, _myPackage_User, _myPackage_UserIdInput__Output, _myPackage_User__Output>
  UpdateUser: MethodDefinition<_myPackage_UpdateUserInput, _myPackage_User, _myPackage_UpdateUserInput__Output, _myPackage_User__Output>
}
