function User() {
  this.auth_userid = "";//代理账号id
  this.api_key = "";//api_key

  this.customer_id = "";//客户id

  this.common_contact_id = "";//通用联系人id
  this.eu_contact_id = "";//eu联系人id
  this.nl_contact_id = "";//nl联系人id
}
module.exports = User;