Automated tests are absolutely critical in ensuring the reliability and functionality of your system. While unit tests are effective at assessing individual components within a sub-system, they fail to address the significant uncertainty that arises from the interactions between different sub-systems. To tackle this challenge, integration tests become essential. However, running integration tests locally can pose difficulties, particularly when your production system relies on a central domain name to route to multiple sub-systems.

Consider a scenario in which our production system comprises two microservices, like EC2 instances or Lambdas, that communicate via a central API. Now, how can we replicate this setup in a local environment? The challenge arises from the inability to route multiple ports or systems to the same localhost port. However, when it comes to base URI paths, this approach can introduce additional complexity which does not accurately reflect the production system. Furthermore, this intricacy is likely be missed during testing. This additional complexity Here's where the need to mock our API Gateway or other routing mechanism arises.

To address this issue, we can create a mock version of the API layer. This mock allow us to centralize our system behind a common local port. This is satisfyingly elegant by using <a href="https://www.npmjs.com/package/http-proxy-middleware" target="_blank">http-proxy-middleware</a> with Express.

## Example:

Suppose that we have two services:

- `service1` can be accessed locally through `http://localhost:2001/querystring` and externally through `https://example.com/service1/querystring`
- `service2` can be accessed locally through `http://localhost:2002/querystring` and externally through `https://example.com/service2/querystring`

Using a proxy, we can map particular paths to a target localhost port.

```javascript
// mock-router.ts

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

To start the process run `ts-node mock-router.ts`. We can now interact with a local system on `http://localhost:3000` and are ready to run integration tests. Remember, thorough integration testing is crucial to verifying the reliability of your system.
