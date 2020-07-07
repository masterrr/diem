initSidebarItems({"enum":[["Scheme","A `TransactionAuthenticator` is an an abstraction of a signature scheme. It must know: (1) How to check its signature against a message and public key (2) How to convert its public key into an `AuthenticationKeyPreimage` structured as (public_key | signaure_scheme_id). Each on-chain `LibraAccount` must store an `AuthenticationKey` (computed via a sha3 hash of an `AuthenticationKeyPreimage`). Each transaction submitted to the Libra blockchain contains a `TransactionAuthenticator`. During transaction execution, the executor will check if the `TransactionAuthenticator`'s signature on the transaction hash is well-formed (1) and whether the sha3 hash of the `TransactionAuthenticator`'s `AuthenticationKeyPreimage` matches the `AuthenticationKey` stored under the transaction's sender account address (2)."],["TransactionAuthenticator",""]],"struct":[["AuthenticationKey","A struct that represents an account authentication key. An account's address is the last 16 bytes of authentication key used to create it"],["AuthenticationKeyHasher","Cryptographic hasher for an LCS-serializable #item"],["AuthenticationKeyPreimage","A value that can be hashed to produce an authentication key"]]});