'use strcit';

const axios = require('axios');
const fs = require('fs');

const main = async (pageId) => {
    const BASE_URL = `https://www.intercom.com/blog/page/${pageId}`;
    const res = await axios.get(BASE_URL);
    const html = res.data; //ソースコード全体
    const parts = html.split('<article class="g__col post">'); //分割

    let blogData = [`,author,category\r\n`]; //データ格納用
    for(let i = 1, len = parts.length; i < len; i++){
        const author = parts[i].match(/class="f__no-und f__up author__link">(.*?)<\/a>/)[1];
        const category = parts[i].match(/class="f__up f__no-und categories__link  js__category-name">(.*?)<\/a>/)[1];
        const title = parts[i].match(/class="f__no-und">(.*?)<\/a>/)[1];
        const link = parts[i].match(/a href="(.*?)"> <img width=<\/a>/)[1];

        console.log(author);
        console.log(category);
        console.log(title);
        console.log(link);

        //const article = {
        //    author: author,
        //    category: category,
        //    title: title,
        //    link: link
        //};

        const article = `${author},${category},${title},${link}\r`;
        blogData.push(article);
    }
    fs.writeFileSync("blog.csv", blogData);
    // fs.writeFileSync("blog.json", JSON.stringify(blogData));

    console.log(blogData); //中身の確認
    // console.log(`autohr: 「${author}」`);
    // console.log('category: 「%s」', category);

    main(++pageId);
};

main(1);
