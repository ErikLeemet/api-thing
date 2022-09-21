import axios from "./axios/lib/env/data";

const options = {
  method: 'GET',
  url: 'https://bloomberg-market-and-financial-news.p.rapidapi.com/stock/get-statistics',
  params: {id: 'aapl:us', template: 'STOCK'},
  headers: {
    'X-RapidAPI-Key': '7ade6e6705msh79ce1a3734d88a8p1c05a7jsnf2f01fb46996',
    'X-RapidAPI-Host': 'bloomberg-market-and-financial-news.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
