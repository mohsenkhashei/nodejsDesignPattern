const obj = Singleton.getInstance()
const obj2 = Singleton.getInstance()

obj.printValue()
obj2.printValue()

console.log("Equals:: ", obj === obj2)

/* outputs:
0.5035326348000628
0.5035326348000628
Equals::  true
*/