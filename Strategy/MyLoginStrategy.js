class MyLoginStrategy {
  login(username, password) {
    return new Promise((resolve) => {
      doSomeWork();
      return resolve({ strategy: "my strategy", success: true });
    });
  }

  useStrategy() {
    return testSomeCondition === true;
  }
}
