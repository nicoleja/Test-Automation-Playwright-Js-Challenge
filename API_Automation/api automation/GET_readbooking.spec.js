import { test, expect } from '@playwright/test';

test ('API GET Read Booking Request', async({request}) =>{

    const response = await request.get('https://restful-booker.herokuapp.com/booking/2')

    expect(response.status()).toBe(200);

    const body = await response.json();  
    console.log('Booking details:', body);
 
    expect(body.firstname).toBeDefined();
    expect(body.bookingdates.checkin).toMatch(/\d{4}-\d{2}-\d{2}/);
});

