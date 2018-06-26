const koa = require('koa');
const Router = require('koa-router');
const fs = require('fs');
const path = require('path');
const views = require('koa-views');
const Static = require('koa-static');

const app = new koa();
const router = new Router();


setInterval(() => {
    throw new Error('this is bad');
}, 10000);


router.get('/index', async(ctx) => {
    // var html = fs.readFileSync(path.resolve(__dirname, './view/index.html'), { encoding: 'utf-8' });
    // console.log(ss);
    // ctx.response.body = html;
    ctx.state = {
        name: "linfeng",
        origin: "海南"
    };
    console.log('请求一次' + (new Date()));
    await ctx.render('index');
});

router.get('/account', async(ctx) => {

});

app.use(views(__dirname + '/view', {
    map: {
        html: 'ejs'
    },
    extension: 'html'
}));

app.use(Static(path.resolve(__dirname, 'static')));
app.use(router.routes(), router.allowedMethods());
app.listen(8775);
