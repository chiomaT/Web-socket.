const CryptoJS = require("crypto-js");

export default function decryptText(ciphertext) {
     var bytes  = CryptoJS.AES.decrypt(ciphertext, "uEKBcN7kMKayW6SF8d0BtaJq60Musbp0");
var originalText = bytes.toString(CryptoJS.enc.Utf8);

return originalText;
}