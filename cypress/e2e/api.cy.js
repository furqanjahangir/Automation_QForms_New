it.only('testApI',()=>
{
      cy.request('https://m.stripe.com/6').then((response)=>{
          expect(response.status).equal(200)
                })

 })
       