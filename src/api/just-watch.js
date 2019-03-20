const axios = require("axios");

axios
  .get("https://apis.justwatch.com/content/titles/show/6410/locale/de_DE")
  .then(response => {
    console.log(response);
  })
  .catch(error => console.error(error));
