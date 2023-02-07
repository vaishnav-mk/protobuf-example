# protobuf-example
🗜️ An example app that uses protobufs for serializing/deserializing JSON objects

## `.proto` file

```proto
package bookpackage;
syntax = "proto3";

message Book {
    string title = 1;
    optional string subtitle = 2;
    string author = 3;
    optional string published = 4;
    optional string publisher = 5;
    int32 pages = 6;
    string description = 7;
    optional string website = 8;
}
```

- The `.proto` file is the file that contains the schema for the JSON object. It is used to generate the code for the language you are using.
- The `package` is the name of the package that the code will be generated in.
- The `syntax` is the version of the protobuf syntax that you are using.
- The `message` is the name of the JSON object.

## `protobufjs` methods

- `decode` - decodes a buffer into a JSON object
- `encode` - encodes a JSON object into a buffer
- `verify` - verifies that a JSON object is valid

## What is protobuf?

Protobuf is a serialization format that is language agnostic. It is used to serialize/deserialize JSON objects. It is used in many Google products such as Google Maps, Google Drive, etc.

## Why use protobuf?

- It is language agnostic
- It is fast
- It is small
- It is easy to use

## How to use protobuf?

- Install the protobuf compiler (depending on the language you are using - I used [`protobufjs`](https://www.npmjs.com/package/protobufjs) for [Node.js](https://nodejs.org/en/))
- Create a .proto file
- Generate the code for the language you are using
- Use the generated code to serialize/deserialze JSON objects

## How to use this example?

- Clone this repo
- Run `npm install`
- Run `node .`

## How to use this example with Docker?

- Soon:tm: (I'm still learning Docker)

## Notes

- I used Node v19.3.0 and there were [changes](https://github.com/tc39/proposal-import-assertions) to the import syntax recently so you might have to use Node v18

## Resources

- [Google Protocol Buffers](https://developers.google.com/protocol-buffers)
- [protobufjs](https://www.npmjs.com/package/protobufjs)
- [protobufjs docs](https://protobufjs.github.io/protobuf.js/)

## What's next?

- Figure out [`grpc`](https://grpc.io/) and use it with protobuf
- Use protobuf with [Docker](https://www.docker.com/)
