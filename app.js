/*
App Logic
signup - get data - create a new object in the $database - store signup data
login - match $username and $password with $database.username and $database.password - login
reset - if $username matches $database.username - update password for $database.username
login success - bank dashboard - show username

Bank Dashboard - Show current $database.username && ask for location access - fetch current weather and time and show()

moneyWithdraw() { 
//pop a modal
//current balance - withdrawn money
updateCurrBalance(update$database.username.currBalance)
ShowMessage("Money Withdrawn")
updateStatement()
}

moneyDeposit() {
current balance + deposited amount
updateCurrBalance(update$database.username.currBalance)
ShowMessage("Amount Credited")
updateStatement()
}

balanceEnquiry() {
    check $database.username.PIN === entered PIN
    get $database.username.currBalance
}

billPayment() {
select Service Provider
currentBalance - bill paid
updateCurrBalance(update$databsae.username.currBalance)
updateStatement()
ShowMessage("Bill Paid to $serviceProvide")
}

miniStatement() {
//maintain a log in objects with $database.username.statements['txn0', txn1, ...txnN];
ShowMessage("Mini Statement Generated")
updateStatement()
}

pinChange() {
set $database.username.password = "updated pin"
updateDatabaseObject();
updateStatement()
ShowMessage("Pin updpated")
}

charityDonation(){
currBalancce - moneyDonated
updateStatement()
updateCurrBalance()
}
*/

const selectors = {
  signUpUsername: document.getElementById("sign-up-username"),
  signUpEmail: document.getElementById("sign-up-email"),
  signUpPassword: document.getElementById("sign-up-password"),
  signUpPin: document.getElementById("sign-up-pin"),
  signUpMainBtn: document.getElementById("signup-main-btn"),
  loginMainBtn: document.getElementById("login-main-btn"),
  loginUsername: document.getElementById("login-username"),
  loginPassword: document.getElementById("login-password"),
  loginPasswordReset: document.getElementById("login-pswd-reset"),
  loginPasswordReset: document.getElementById("reset-username"),
};
