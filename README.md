# protobuf-example
🗜️ An example app that uses protobufs for serializing/deserializing JSON objects

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