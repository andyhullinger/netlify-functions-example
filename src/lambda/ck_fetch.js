import fetch from "node-fetch";

const API_ENDPOINT = "http://purchaseorderprocessproxy.us-e2.cloudhub.io/api/PurchaseOrder";

exports.handler = async (event, context) => {
  return fetch(API_ENDPOINT, { headers: { "Accept": "application/json" } })
    .then(response => response.json())
    .then(data => ({
      statusCode: 200,
      body: data.orders
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
};
