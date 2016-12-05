

| Challenge/Error  | Solution       | Comments |   
| ---------------- |:--------------:|---------:|

## Challenges/Errors

1.  Pointed request to wrong URL.  Needs to be sent to https://api.github.com.  Not explicitly listed in docs.
2.  Error: Timeout of 2000ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves.
  1. Tested with HTTPie to make sure that a GET request to the same route /users/octocat/repos worked. Responded with 200 Ok and all repos.
    ```s
    http GET https://api.github.com/users/octocat/repos
    ```
  2. Noticed that the response came back as HTTP/1.1 200 and not https
    * Switched URL to http://api.github.com, and the test passes.
  3. Noticed that I was having network connectivity issues which caused the timeouts.
    * Increased timeout to 10 seconds when calling tests.  Test passes, but I discovered you can use either http or https. This leads me to be suspicious.
    `$ mocha test.js --timeout 10000`
    * Found later that you can set ```js this.timeout(10000);``` instead of setting timeout in shell.

  4. Subtests are not described in reporter output.
    1. Tried to add nested it('...') and/or describe('...') statements around each assertion;
      * Did not work, still does not display.  Consider breaking out into separate tests.
3.  