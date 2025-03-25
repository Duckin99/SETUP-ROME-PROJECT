// Original file: packages/proto/user.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  input as _userPackage_input,
  input__Output as _userPackage_input__Output,
} from "./input";
import type {
  output as _userPackage_output,
  output__Output as _userPackage_output__Output,
} from "./output";

export interface UserServiceClient extends grpc.Client {
  hello(
    argument: _userPackage_input,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_userPackage_output__Output>
  ): grpc.ClientUnaryCall;
  hello(
    argument: _userPackage_input,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_userPackage_output__Output>
  ): grpc.ClientUnaryCall;
  hello(
    argument: _userPackage_input,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_userPackage_output__Output>
  ): grpc.ClientUnaryCall;
  hello(
    argument: _userPackage_input,
    callback: grpc.requestCallback<_userPackage_output__Output>
  ): grpc.ClientUnaryCall;
}

export interface UserServiceHandlers extends grpc.UntypedServiceImplementation {
  hello: grpc.handleUnaryCall<_userPackage_input__Output, _userPackage_output>;
}

export interface UserServiceDefinition extends grpc.ServiceDefinition {
  hello: MethodDefinition<
    _userPackage_input,
    _userPackage_output,
    _userPackage_input__Output,
    _userPackage_output__Output
  >;
}
