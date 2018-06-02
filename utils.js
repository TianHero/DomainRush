function Utils() {

}
Utils.prototype = {
  constructor: Utils,
  fileDate: function () {
    let myDate = new Date();
    myDate.getMonth();
    myDate.getDate();
    return myDate.getMonth() + 1 + '-' + myDate.getDate();
  },
  suffixEu: function (domain) {
    let tmpArr = domain.split('.');
    const suf = tmpArr[tmpArr.length - 1];
    return suf === 'eu';
  }

}
const utils = new Utils();
module.exports = utils;