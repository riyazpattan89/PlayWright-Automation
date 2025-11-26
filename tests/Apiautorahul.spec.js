
import { test, expect, request } from '@playwright/test';

test('API testing - Create Order', async ({}) => {
  const createOrderAPI = 'https://rahulshettyacademy.com/api/ecom/order/create-order';

  const body = {
    orders: [
      {
        country: 'Bahrain',
        productOrderedId: '68a961959320a140fe1ca57e'
      }
    ]
  };

  // Create API context
  const apiContext = await request.newContext();

  // Send POST request
  const apiResponse = await apiContext.post(createOrderAPI, {
    data: body,
    headers: {
      authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTFlZTA5NjUwMDhmNmE5MDkyZDEwM2MiLCJ1c2VyRW1haWwiOiJyaXlhejlAZ21haWwuY29tIiwidXNlck1vYmlsZSI6OTIyMjAxOTM4NywidXNlclJvbGUiOiJjdXN0b21lciIsImlhdCI6MTc2MzYzMTI4MiwiZXhwIjoxNzk1MTg4ODgyfQ.2pWQROUXc4mbG5kPNGUfjIovjNygNPC8JKzsTxzk5ug'
    }
  });

  // Validate response
  expect(apiResponse.status()).toBe(201);

  const orderJsonResponse = await apiResponse.json();
  console.log(orderJsonResponse.orders[0]);

  // Close API context
  await apiContext.dispose();
});


//apiContext.post()

// API - https://rahulshettyacademy.com/api/ecom/order/create-order
// Method - POST
// Body - {orders: [{country: "Bahrain", productOrderedId: "68a961959320a140fe1ca57e"} ]}

// Response - Response status should be 201
// //print the order ID