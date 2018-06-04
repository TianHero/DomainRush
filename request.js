const request = require('request');
const fs = require('fs');
var userConfig = require('./config.js');
const user = new userConfig;
var domains = require('./domains.js')();
const utils = require('./utils.js');
let domainsArr = domains.domains;
let nsArr = domains.ns;
let timer = null;

timer = setInterval(function () {
  console.log('---------' + domainsArr.length + '---------');
  domainsArr.forEach((element, index) => {
    const isEU = utils.suffixEu(element);
    let contact_id = isEU ? user.eu_contact_id : user.common_contact_id;
    const euStr = '&admin-contact-id=-1&tech-contact-id=-1&billing-contact-id=-1';
    const url = 'https://httpapi.com/api/domains/register.json?domain-name=' + element + '&auth-userid=' + user.auth_userid + '&api-key=' + user.api_key + '&years=1&ns=' + nsArr[0] + '&ns='
      + nsArr[1] + '&customer-id=' + user.customer_id + '&reg-contact-id=' + contact_id + (isEU ? euStr : '') + '&admin-contact-id=' + contact_id + '&tech-contact-id=' + contact_id + '&billing-contact-id=' + contact_id + '&invoice-option=PayInvoice&protect-privacy=true'
    httprequest(url, index, element)
  });
}, 5000);

function httprequest(url, index, domain) {
  request({
    url: url,
    method: "POST",
    json: true,
    headers: {
      "content-type": "application/json",
    }
  }, function (error, response, body) {
    console.log(domain);
    // console.log(body);
    if (!error && response.statusCode == 200) {
      if (body.status === 'Success') {
        fs.writeFile('./success/success' + utils.fileDate() + '.txt', domain + '  ' +new Date().toISOString(), { 'flag': 'a', encoding: 'utf-8' }, (err, data) => {
          if (err) { throw err };
          domainsArr.splice(index, 1);
        });
      }
    }
  });
};
