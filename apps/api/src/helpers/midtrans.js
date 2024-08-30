import midtransClient from "midtrans-client"
let snap = new midtransClient.Snap({
    // Set to true if you want Production Environment (accept real transaction).
    isProduction : false,
    serverKey : process.env.SERVER_KEY
});

export default snap;