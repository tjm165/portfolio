localhost image issue https://onexlab-io.medium.com/aws-s3-bucket-local-testing-using-localstack-1918fb375280
http://localhost:4566/tommy/blog/posts/my-first-blog-post/metadata.json

aws --endpoint-url=http://localhost:4566 s3 mb s3://tommy
aws --endpoint-url=http://localhost:4566 s3 sync ./blog s3://tommy/blog

Next Styling PR

1. Header needs to have name and all pages
1. Gradient Welcome Pane and Hero section and NavBar same color

Next Architecture Blog PR

1. How to support local development of a blog post without pushing to cloudfront every few minutes.

Next Page PR

1. Add an About Me page

Tech debt

1. MediaContextProvider only once pls

1. How will metadata sort the files? I might need to still figure out how to write all at once
