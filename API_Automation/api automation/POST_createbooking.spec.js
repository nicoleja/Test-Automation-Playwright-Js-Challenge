import { test, expect } from '@playwright/test';

test('Create booking via Restful Booker API', async ({ request }) => {
  const response = await request.post('https://restful-booker.herokuapp.com/booking', {
    data: {
      firstname: 'Jim',
      lastname: 'Brown',
      totalprice: 111,
      depositpaid: true,
      bookingdates: {
        checkin: '2025-08-01',
        checkout: '2025-08-05'
      },
      additionalneeds: 'Breakfast'
    }
  });

  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.bookingid).toBeDefined();
  expect(body.booking.firstname).toBe('Jim');
  expect(body.booking.bookingdates.checkin).toMatch(/\d{4}-\d{2}-\d{2}/);

  console.log('Booking created with ID:', body.bookingid);
});