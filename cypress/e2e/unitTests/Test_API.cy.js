
describe.only("API Testing ", ()=>{
    it("GET Request", ()=>{
        cy.request({
            method:'GET',
            url: 'https://reqres.in/api/users?page=2'
        }).then((response) =>{
            expect(response.status).to.eq(200)
            expect(response.body.page).to.eq(2)
            expect(response.body.per_page).to.eq(response.body.data.length)
        
        //to validate a spectific email address presnt or not 
        const responseBody = response.body;
        const users = responseBody.data;
        const specificEmail = 'tobias.funke@reqres.in'; 
        let emailExists = false;

    
        for (let i = 0; i < users.length; i++) {
          if (users[i].email === specificEmail) {
            emailExists = true;
            break;
          }
        }

        // Assertion to check if the specific email exists
        expect(emailExists).to.be.true;

        })
    })


    it("POST Request", ()=>{
    //const payload = require('../fixtures/apiTestData.json')
    const jsonSchema = require('../../fixtures/schema.json')

        cy.request({
            method:'POST',
            url: 'https://reqres.in/api/users',
            body:{
                "name": "morpheus",
                "job": "leader"
            }
        }).then(($response) =>{
            expect($response.status).to.eq(201)
            expect($response.body.id).is.not.empty
            expect($response.body).to.have.property('createdAt')
            expect($response.body.name).to.eq('morpheus')
            expect($response.headers).to.have.property('content-type', 'application/json; charset=utf-8')
            expect($response.duration).to.be.a('number')
            expect($response.duration).to.be.lessThan(500)


            const responseBody = $response.body;
            const users = responseBody.data;
            const specificEmail = 'tobias.funke@reqres.in'; 
         
          expect($response.body).to.be.jsonSchema(jsonSchema)

            // const $userId = $response.body.id
            //     return $userId

        })
        
    })
})