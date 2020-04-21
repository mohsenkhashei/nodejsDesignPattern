const { encrypt, decrypt } = require('./proxy');
const secretKey = 'grokonez.com';
 
const obj = {
  title: 'grokonez',
  age: 2,
  domain: 'grokonez.com',
  country: 'US'
};
 
const encObj = encrypt(obj, secretKey);
console.log(encObj);
/**
{ title: '2b6e0af648eb4ea0aadc8e7f6a101e3830eae133c3ee9545',
  age: 'dfc19adaa87b121e94efe70944afd6811d',
  domain: 'b1d6dc68c403d9054d8618eb429460850797788019654dee5f89d920',
  country: 'ebfde53088929f74360fe8f5523c8074af1d' }
 */
 
encObj.description = 'Programming Tutorials';
console.log(encObj);
/**
{ title: '2b6e0af648eb4ea0aadc8e7f6a101e3830eae133c3ee9545',
  age: 'dfc19adaa87b121e94efe70944afd6811d',
  domain: 'b1d6dc68c403d9054d8618eb429460850797788019654dee5f89d920',
  country: 'ebfde53088929f74360fe8f5523c8074af1d',
  description: 'ef56fa3ee340b6cd2881724c9ac2038e4323defe10cb02d19b003a6433ed012b82296d1bbf' }
 */
 
const decObj = decrypt(encObj, secretKey);
console.log(decObj);
/**
{ title: 'grokonez',
  age: '2',
  domain: 'grokonez.com',
  country: 'US',
  description: 'Programming Tutorials' }
 */
 
console.log(`get domain: ${decObj.domain}`);
/**
get domain: grokonez.com
 */
 
decObj.domain = 'crawl.com';
/**
throw new Error('This is a read-only object');
      ^
 
  Error: This is a read - only object
 */