/* 
   You can define multiple assertions using the Javascript API.
   You can see all the compiled assertions on the right sidebar.
   https://docs.dataform.co/guides/js-api/
*/

assert("null_values_customer_firstname").query(ctx=>`SELECT * FROM ${ctx.ref('customers')} WHERE first_name IS NULL`);
assert("null_values_customer_lastname").query(ctx=>`SELECT * FROM ${ctx.ref('customers')} WHERE last_name IS NULL`);
assert("null_values_customer_id").query(ctx=>`SELECT * FROM ${ctx.ref('customers')} WHERE id IS NULL`);

