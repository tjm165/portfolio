Tests are important for ensuring the reliability of your system. While unit tests test components within a sub-system, it misses a huge level of uncertainty in how your sub systems interact with each other. For this you need integration tests. However, to run local integration tests you must be able to fully run your system locally. This becomes an issue when your production system uses a central domain name to route to several sub-systems. Suppose that our production system have two sub-systems (possibly EC2's or Lambdas) which typically use a central API. How would you integrate this in a local environment? You cannot have multiple ports or (systems in this case) routed on the same localhost port. This is where the need to mock your API Gateway or other router comes into play. We can use

## Example:

Suppose that we have two services:

- `service1` is usually accessible through `http://example.com/service1/querystring`
- `service2` is usually accessible through `http://example.com/service2/querystring`

We can use <a href="https://www.npmjs.com/package/http-proxy-middleware" target="_blank">http-proxy-middleware</a> which is satisfyingly elegant.
Based on the documentation we can create the following file

```js
import * as express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

app.use(
  createProxyMiddleware("/service1", {
    target: "localhost://2001",
    changeOrigin: true,
  })
);

app.use(
  createProxyMiddleware("/service2", {
    target: "localhost://2002",
    changeOrigin: true,
  })
);

app.listen(3000);
```

We can now run this and hit both services on port 3000
