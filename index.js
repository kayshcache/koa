const Koa = require('koa');
const app = new Koa();

// add a date method to the context
app.context.date = Date();
app.context.userData = {
    first: 'Manny',
    last: 'Henri',
};

// response
app.use(ctx => {
    // use state
    ctx.state.user = 'Mrs Stateless';
    // request obj usage
    let from = ctx.request;
   // print date 
    ctx.response.body = ctx.userData;
    console.log(typeof(from));
    // Error checking
    if (ctx.userData) {
	ctx.body = ctx.userData;
    } else {
	ctx.throw(400, 'no data found');
    }
});

app.listen(3000);
