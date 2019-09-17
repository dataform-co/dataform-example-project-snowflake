/* 
   You can define multiple assertions using the Javascript API.
   You can see all the compiled assertions on the right sidebar.
   https://docs.dataform.co/guides/js-api/
*/

const fields = ["first_name", "last_name", "id"];

fields.forEach(field => {
    assert(`null_values_customer_${field}`).tags(["reporting","daily"]).query(ctx=>`SELECT * FROM ${ctx.ref('customers')} WHERE ${field} IS NULL`);
})
