const express = require('express'), app = express();
const http = require('http'),
  url = require('url');
const cors = require('cors'), bodyParser = require('body-parser');
app.use(bodyParser.json());
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

const db = require('./app/config/db.config.js');

// zaten varsa tabloyu düşür
db.sequelize.sync({ force: true }).then(() => {
  initial();
});

require('./app/route/product.route.js')(app);
require('./app/route/category.route.js')(app);
require('./app/route/topic.route.js')(app);
require('./app/route/auth.route.js')(app);
require('./app/route/comment.route.js')(app);
require('./app/route/contact.route.js')(app);
require('./app/route/data.route.js')(app);

// Server Oluştur

var server = app.listen(8080, function () {

  let host = server.address().address; // localhost
  let port = server.address().port;    //  8080

  console.log("App listening at http://%s:", host, port);
});
/* */
function initial() {

  let products = [
    {
      name: "Half-Blue",
      piece: 225,
      price: 15,
      categoryId: 4,
      desc: "Yetişkin",
      imageUrl: "https://www.nevertebrate.ro/images/Blue-Guppy.jpg"
    },
    {
      name: "Blue Grass",
      piece: 235,
      price: 15,
      categoryId: 3,
      desc: "Yetişkin",
      imageUrl: "https://i.ytimg.com/vi/UKb8kL9Wd9E/hqdefault.jpg"
    },
    {
      name: "Red Grass",
      piece: 12,
      price: 2,
      categoryId: 5,
      desc: "Yetişkin",
      imageUrl: "https://dlgdxii3fgupk.cloudfront.net/myaquariumclub.com/components/com_mojo/wp-content/uploads/2014/04/1albinored.jpg"
    },
    {
      name: "Red Grass",
      piece: 12,
      price: 2,
      categoryId: 5,
      desc: "Yetişkin",
      imageUrl: "https://dlgdxii3fgupk.cloudfront.net/myaquariumclub.com/components/com_mojo/wp-content/uploads/2014/04/1albinored.jpg"
    },
    {
      name: "Blue Grass",
      piece: 235,
      price: 15,
      categoryId: 3,
      desc: "Yetişkin",
      imageUrl: "https://i.ytimg.com/vi/UKb8kL9Wd9E/hqdefault.jpg"
    },
    {
      name: "Half-Blue",
      piece: 225,
      price: 15,
      categoryId: 4,
      desc: "Yetişkin",
      imageUrl: "https://www.nevertebrate.ro/images/Blue-Guppy.jpg"
    }

  ];
  let comments = [
    {
      topicName: "Akvaryum Tipleri",
      commentName: "Fatih Barış",
      commentMail: "fatih@mail.com",
      commentHeader: "Akvaryum Tavsiyesi",
      comment1: "Yeni Akvaryum almak istiyorum nasıl ucuz ve kaliteli bir akvaryum alabilirim?"
    },
    {
      topicName: "Akvaryum Bitkileri",
      commentName: "Fatih Barış",
      commentMail: "fatih@mail.com",
      commentHeader: "Akvaryum Tavsiyesi",
      comment1: "Yeni Akvaryum almak istiyorum nasıl ucuz ve kaliteli bir akvaryum alabilirim?"
    }
  ];
  let topics = [
    {
      title: "Akvaryum Tipleri",
      desc: "   Kurulacak akvaryuma, ebatına, içerisinde yaşayacak canlılara göre gerekli malzemeler elbetteki değişiklik gösterebilirler, örneğin akvaryum amaçlı kullanılan ufak cam kavanozlar için hem balığın hareket ",
      imageUrl: "https://ichef.bbci.co.uk/news/660/cpsprodpb/1575A/production/_100589878_tank2.jpg",
      minute: "15"
    },
    {
      title: "Akvaryum Temizliği",
      desc: "   Kurulacak akvaryuma, ebatına, içerisinde yaşayacak canlılara göre gerekli malzemeler elbetteki değişiklik gösterebilirler, örneğin akvaryum amaçlı kullanılan ufak cam kavanozlar için hem balığın hareket ",
      imageUrl: "https://blog.n11.com/wp-content/uploads/2015/09/akvaryum-temizleme.jpg",
      minute: "5"
    },
    {
      title: "Akvaryum Bitkileri",
      desc: "   Bitkiler akvaryuma, adabte olmak için yaşayacak canlılara göre gerekli malzemeler elbetteki değişiklik gösterebilirler, örneğin akvaryum amaçlı kullanılan ufak cam kavanozlar için hem balığın besini",
      imageUrl: "http://foto.akvaryum.com/fotolar/38143/28_11_2012_17_4_21_3.jpg",
      minute: "8"
    }
  ];
  let categories = [
    {
      id: 1,
      name: "Yerli"
    },
    {
      id: 2,
      name: "Red Grass"
    },
    {
      id: 3,
      name: "Blue Grass"
    },
    {
      id: 4,
      name: "Half Blue"
    },
    {
      id: 5,
      name: "Full Red"
    },
    {
      id: 6,
      name: "Fil Kulak"
    },
    {
      id: 7,
      name: "Vatoz"
    },
    {
      id: 8,
      name: "Çöpçü"
    },
    {
      id: 9,
      name: "Yeni"
    }
  ];
  let auths = [
    {
      userName: "Admin",
      password: "7280"
    },
    {
      userName: "Admin",
      password: "9042"
    },
  ];
  let contacts = [
    {
      fname: "User",
      lname: "Admin",
      email: "akyuvaryum@gmail.com",
      phone: "0555 555 22 22",
      message: "balıklarım ölyor acil yardım"
    }
  ];
  let datas = [
    {
      p: "page",
      qs: "query select",
      r: "refferer",
      i: "ip_adress",
      lt: "latitude" ,
      ln: "longuıge"
    }
  ];
  // Sql e kaydet datayı
  const Product = db.products;
  for (let i = 0; i < products.length; i++) {
    Product.create(products[i]);
  }
  const Category = db.categories;
  for (let i = 0; i < categories.length; i++) {
    Category.create(categories[i]);
  }
  const Topic = db.topics;
  for (let i = 0; i < topics.length; i++) {
    Topic.create(topics[i]);
  }
  const Auth = db.auths;
  for (let i = 0; i < auths.length; i++) {
    Auth.create(auths[i]);
  }
  const Comment = db.comments;
  for (let i = 0; i < comments.length; i++) {
    Comment.create(comments[i]);
  }
  const Contact = db.contacts;
  for (let i = 0; i < contacts.length; i++) {
    Contact.create(contacts[i]);
  }
  const Data = db.datas;
  for (let i = 0; i < datas.length; i++) {
    Data.create(datas[i]);
  }
}
module.exports = server;
