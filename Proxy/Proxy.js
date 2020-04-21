const Cryptr = require("cryptr");

const encrypt = (obj, secretKey) => {
  const cryptr = new Cryptr(secretKey);
  let encObj = {};
  for (const prop of Object.keys(obj)) {
    encObj[prop] = cryptr.encrypt(obj[prop]);
  }

  return new Proxy(encObj, {
    set(encObj, prop, value) {
      return (encObj[prop] = cryptr.encrypt(value));
    },
    get(encObj, prop) {
      return encObj[prop];
    },
  });
};

const decrypt = (obj, secretKey) => {
  const cryptr = new Cryptr(secretKey);
  let decObj = {};
  for (const prop of Object.keys(obj)) {
    decObj[prop] = cryptr.decrypt(obj[prop]);
  }

  return new Proxy(decObj, {
    set() {
      throw new Error("This is a read-only object");
    },
    get(decObj, prop) {
      return decObj[prop];
    },
  });
};

module.exports = {
  encrypt,
  decrypt,
};
