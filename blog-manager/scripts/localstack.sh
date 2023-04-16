# Start the Docker Compose containers
docker compose -f scripts/localstack.yml up -d 

# Init S3
aws --endpoint-url=http://localhost:4566 s3 mb s3://tommy
aws --endpoint-url=http://localhost:4566 s3api put-bucket-cors --bucket tommy --cors-configuration '{"CORSRules": [{"AllowedHeaders": ["*"],"AllowedMethods": ["GET", "PUT", "POST", "DELETE"],"AllowedOrigins": ["http://localhost:3000"],"ExposeHeaders": []}]}'
aws --endpoint-url=http://localhost:4566 s3 sync ./blog s3://tommy/portfolio/blog

# Attach to container
echo "Localstack Ready"
docker attach scripts-localstack-1 