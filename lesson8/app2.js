'use strcit';

const axios = require('axios');
const fs = require('fs');

const main = async (pageId) => {
    const BASE_URL = `https://www.intercom.com/blog/page/${pageId}`;
    const res = await axios.get(BASE_URL);
    const html = res.data; //ソースコード全体
    const parts = html.split('<article class="g__col post">'); //分割

    let blogData = [',author,category\r\n']; //データ格納用
    for(let i = 1, len = parts.length; i < len; i++){
      const author = parts[i].match(/class="f__no-und f__up author__link">(.*?)<\/a>/)[1];
      const category = parts[i].match(/class="f__up f__no-und categories__link  js__category-name">(.*?)<\/a>/)[1];

      console.log(author);
      console.log(category);

      //const article = {
      //  author: author,
      //  category: category,
      //  title: '',
      //  link: ''
      //};

      const article = `${author},${category}\r`;
      blogData.push(article);
    }
    fs.writeFileSync("blog.csv", blogData);
    //fs.writeFileSync("blog.json", JSON.stringify(blogData));
    console.log(blogData); //中身の確認
    // const link = parts[1].match(/class="post__title(*)class="f__no-und">(.*?)<\" class="f__no-und">/)[1];
    // console.log(link);

    //const post_title = parts[1].match(/class="post__title(*)<a href="(*)class="f__no-und">(.*?)<\/a>/[1];
    //console.log(post_title);

    main(++pageId);

};

main(1);
