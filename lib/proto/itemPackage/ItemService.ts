// Original file: packages/proto/item.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  input as _itemPackage_input,
  input__Output as _itemPackage_input__Output,
} from "./input";
import type {
  output as _itemPackage_output,
  output__Output as _itemPackage_output__Output,
} from "./output";

export interface ItemServiceClient extends grpc.Client {
  hello(
    argument: _itemPackage_input,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_itemPackage_output__Output>
  ): grpc.ClientUnaryCall;
  hello(
    argument: _itemPackage_input,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_itemPackage_output__Output>
  ): grpc.ClientUnaryCall;
  hello(
    argument: _itemPackage_input,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_itemPackage_output__Output>
  ): grpc.ClientUnaryCall;
  hello(
    argument: _itemPackage_input,
    callback: grpc.requestCallback<_itemPackage_output__Output>
  ): grpc.ClientUnaryCall;
}

export interface ItemServiceHandlers extends grpc.UntypedServiceImplementation {
  hello: grpc.handleUnaryCall<_itemPackage_input__Output, _itemPackage_output>;
}

export interface ItemServiceDefinition extends grpc.ServiceDefinition {
  hello: MethodDefinition<
    _itemPackage_input,
    _itemPackage_output,
    _itemPackage_input__Output,
    _itemPackage_output__Output
  >;
}
