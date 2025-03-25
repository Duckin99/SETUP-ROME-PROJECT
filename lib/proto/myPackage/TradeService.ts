// Original file: lib/proto/my.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateTradeInput as _myPackage_CreateTradeInput, CreateTradeInput__Output as _myPackage_CreateTradeInput__Output } from '../myPackage/CreateTradeInput';
import type { Trade as _myPackage_Trade, Trade__Output as _myPackage_Trade__Output } from '../myPackage/Trade';
import type { TradeIdInput as _myPackage_TradeIdInput, TradeIdInput__Output as _myPackage_TradeIdInput__Output } from '../myPackage/TradeIdInput';
import type { TradeListOutput as _myPackage_TradeListOutput, TradeListOutput__Output as _myPackage_TradeListOutput__Output } from '../myPackage/TradeListOutput';
import type { UpdateTradeInput as _myPackage_UpdateTradeInput, UpdateTradeInput__Output as _myPackage_UpdateTradeInput__Output } from '../myPackage/UpdateTradeInput';
import type { UserIdInput as _myPackage_UserIdInput, UserIdInput__Output as _myPackage_UserIdInput__Output } from '../myPackage/UserIdInput';

export interface TradeServiceClient extends grpc.Client {
  CreateTrade(argument: _myPackage_CreateTradeInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_myPackage_Trade__Output>): grpc.ClientUnaryCall;
  CreateTrade(argument: _myPackage_CreateTradeInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_myPackage_Trade__Output>): grpc.ClientUnaryCall;
  CreateTrade(argument: _myPackage_CreateTradeInput, options: grpc.CallOptions, callback: grpc.requestCallback<_myPackage_Trade__Output>): grpc.ClientUnaryCall;
  CreateTrade(argument: _myPackage_CreateTradeInput, callback: grpc.requestCallback<_myPackage_Trade__Output>): grpc.ClientUnaryCall;
  createTrade(argument: _myPackage_CreateTradeInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_myPackage_Trade__Output>): grpc.ClientUnaryCall;
  createTrade(argument: _myPackage_CreateTradeInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_myPackage_Trade__Output>): grpc.ClientUnaryCall;
  createTrade(argument: _myPackage_CreateTradeInput, options: grpc.CallOptions, callback: grpc.requestCallback<_myPackage_Trade__Output>): grpc.ClientUnaryCall;
  createTrade(argument: _myPackage_CreateTradeInput, callback: grpc.requestCallback<_myPackage_Trade__Output>): grpc.ClientUnaryCall;
  
  GetAllTradesFromUser(argument: _myPackage_UserIdInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_myPackage_TradeListOutput__Output>): grpc.ClientUnaryCall;
  GetAllTradesFromUser(argument: _myPackage_UserIdInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_myPackage_TradeListOutput__Output>): grpc.ClientUnaryCall;
  GetAllTradesFromUser(argument: _myPackage_UserIdInput, options: grpc.CallOptions, callback: grpc.requestCallback<_myPackage_TradeListOutput__Output>): grpc.ClientUnaryCall;
  GetAllTradesFromUser(argument: _myPackage_UserIdInput, callback: grpc.requestCallback<_myPackage_TradeListOutput__Output>): grpc.ClientUnaryCall;
  getAllTradesFromUser(argument: _myPackage_UserIdInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_myPackage_TradeListOutput__Output>): grpc.ClientUnaryCall;
  getAllTradesFromUser(argument: _myPackage_UserIdInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_myPackage_TradeListOutput__Output>): grpc.ClientUnaryCall;
  getAllTradesFromUser(argument: _myPackage_UserIdInput, options: grpc.CallOptions, callback: grpc.requestCallback<_myPackage_TradeListOutput__Output>): grpc.ClientUnaryCall;
  getAllTradesFromUser(argument: _myPackage_UserIdInput, callback: grpc.requestCallback<_myPackage_TradeListOutput__Output>): grpc.ClientUnaryCall;
  
  GetTrade(argument: _myPackage_TradeIdInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_myPackage_Trade__Output>): grpc.ClientUnaryCall;
  GetTrade(argument: _myPackage_TradeIdInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_myPackage_Trade__Output>): grpc.ClientUnaryCall;
  GetTrade(argument: _myPackage_TradeIdInput, options: grpc.CallOptions, callback: grpc.requestCallback<_myPackage_Trade__Output>): grpc.ClientUnaryCall;
  GetTrade(argument: _myPackage_TradeIdInput, callback: grpc.requestCallback<_myPackage_Trade__Output>): grpc.ClientUnaryCall;
  getTrade(argument: _myPackage_TradeIdInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_myPackage_Trade__Output>): grpc.ClientUnaryCall;
  getTrade(argument: _myPackage_TradeIdInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_myPackage_Trade__Output>): grpc.ClientUnaryCall;
  getTrade(argument: _myPackage_TradeIdInput, options: grpc.CallOptions, callback: grpc.requestCallback<_myPackage_Trade__Output>): grpc.ClientUnaryCall;
  getTrade(argument: _myPackage_TradeIdInput, callback: grpc.requestCallback<_myPackage_Trade__Output>): grpc.ClientUnaryCall;
  
  UpdateTradeStatus(argument: _myPackage_UpdateTradeInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_myPackage_Trade__Output>): grpc.ClientUnaryCall;
  UpdateTradeStatus(argument: _myPackage_UpdateTradeInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_myPackage_Trade__Output>): grpc.ClientUnaryCall;
  UpdateTradeStatus(argument: _myPackage_UpdateTradeInput, options: grpc.CallOptions, callback: grpc.requestCallback<_myPackage_Trade__Output>): grpc.ClientUnaryCall;
  UpdateTradeStatus(argument: _myPackage_UpdateTradeInput, callback: grpc.requestCallback<_myPackage_Trade__Output>): grpc.ClientUnaryCall;
  updateTradeStatus(argument: _myPackage_UpdateTradeInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_myPackage_Trade__Output>): grpc.ClientUnaryCall;
  updateTradeStatus(argument: _myPackage_UpdateTradeInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_myPackage_Trade__Output>): grpc.ClientUnaryCall;
  updateTradeStatus(argument: _myPackage_UpdateTradeInput, options: grpc.CallOptions, callback: grpc.requestCallback<_myPackage_Trade__Output>): grpc.ClientUnaryCall;
  updateTradeStatus(argument: _myPackage_UpdateTradeInput, callback: grpc.requestCallback<_myPackage_Trade__Output>): grpc.ClientUnaryCall;
  
}

export interface TradeServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateTrade: grpc.handleUnaryCall<_myPackage_CreateTradeInput__Output, _myPackage_Trade>;
  
  GetAllTradesFromUser: grpc.handleUnaryCall<_myPackage_UserIdInput__Output, _myPackage_TradeListOutput>;
  
  GetTrade: grpc.handleUnaryCall<_myPackage_TradeIdInput__Output, _myPackage_Trade>;
  
  UpdateTradeStatus: grpc.handleUnaryCall<_myPackage_UpdateTradeInput__Output, _myPackage_Trade>;
  
}

export interface TradeServiceDefinition extends grpc.ServiceDefinition {
  CreateTrade: MethodDefinition<_myPackage_CreateTradeInput, _myPackage_Trade, _myPackage_CreateTradeInput__Output, _myPackage_Trade__Output>
  GetAllTradesFromUser: MethodDefinition<_myPackage_UserIdInput, _myPackage_TradeListOutput, _myPackage_UserIdInput__Output, _myPackage_TradeListOutput__Output>
  GetTrade: MethodDefinition<_myPackage_TradeIdInput, _myPackage_Trade, _myPackage_TradeIdInput__Output, _myPackage_Trade__Output>
  UpdateTradeStatus: MethodDefinition<_myPackage_UpdateTradeInput, _myPackage_Trade, _myPackage_UpdateTradeInput__Output, _myPackage_Trade__Output>
}
