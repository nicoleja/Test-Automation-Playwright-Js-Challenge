import { test, expect } from '@playwright/test';

let tokenVal;
test.beforeAll("Basic Authentication", async ({ request }) => {
    const responseToken = await request.post("https://restful-booker.herokuapp.com/auth", {
        data: {
            "username": "admin",
            "password": "password123"
        }
    })
    tokenVal = (responseToken.json()).token;

})

test("Auth PUT call using basic auth", async ({ request }) => {
    const respPut = await request.put("https://restful-booker.herokuapp.com/booking/1", {
        headers: {
            Cookie: "token" + tokenValue
        },
        data: {
            "firstname": "Nicole",
            "lastname": "Brown",
            "totalprice": 111,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2018-01-01",
                "checkout": "2019-01-01"
            },
            "additionalneeds": "Breakfast"
        }
    });
    expect(respPut.status()).toBe(200);
})

test("Auth DELETE call using basic auth", async ({ request }) => {
    const respDelete = await request.delete("https://restful-booker.herokuapp.com/booking/1", {
        headers: {
            Cookie: "token=" + tokenValue
        }
    });
    expect(respDelete.status()).toBe(201);

})

test("Authentication API Key", async ({ request }) => {

    const response = await request.put("https://restful-booker.herokuapp.com/booking/1", {
        headers: {
            Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
        },
        data: {
            "firstname": "Nicole",
            "lastname": "Brown",
            "totalprice": 111,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2018-01-01",
                "checkout": "2019-01-01"
            },
            "additionalneeds": "Breakfast"
        }

    })

    expect(response.status()).toBe(200);
})