initSidebarItems({"enum":[["LedgerInfoWithSignatures","Wrapper around LedgerInfoWithScheme to support future upgrades, this is the data being persisted."]],"struct":[["LedgerInfo","This structure serves a dual purpose."],["LedgerInfoHasher","Cryptographic hasher for an LCS-serializable #item"],["LedgerInfoWithV0","The validator node returns this structure which includes signatures from validators that confirm the state.  The client needs to only pass back the LedgerInfo element since the validator node doesn't need to know the signatures again when the client performs a query, those are only there for the client to be able to verify the state"]]});