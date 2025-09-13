---
layout: default
title: Setup & Deployment Guide
permalink: /docs/SETUP_DEPLOYMENT_GUIDE.md
---

# 🚀 Business Services Hub - Setup & Deployment Guide

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Development Environment Setup](#development-environment-setup)
3. [Database Setup](#database-setup)
4. [Environment Configuration](#environment-configuration)
5. [Local Development](#local-development)
6. [Production Deployment](#production-deployment)
7. [Docker Deployment](#docker-deployment)
8. [CI/CD Pipeline](#cicd-pipeline)
9. [Monitoring & Logging](#monitoring--logging)
10. [Troubleshooting](#troubleshooting)

---

## 🔧 Prerequisites

### System Requirements

#### Minimum Requirements

- **Node.js**: Version 18.0 or higher
- **npm**: Version 8.0 or higher
- **Git**: Version 2.30 or higher
- **PostgreSQL**: Version 13 or higher
- **Redis**: Version 6.0 or higher

#### Recommended Requirements

- **Node.js**: Version 20.0 or higher
- **npm**: Version 9.0 or higher
- **Git**: Latest version
- **PostgreSQL**: Version 15 or higher
- **Redis**: Version 7.0 or higher
- **Docker**: Version 20.10 or higher
- **Docker Compose**: Version 2.0 or higher

### Required Accounts & Services

#### Essential Services

- **Supabase Account**: Database and authentication
- **Stripe Account**: Payment processing
- **SendGrid Account**: Email services
- **Twilio Account**: SMS services
- **Google Cloud Platform**: Maps and additional services

#### Optional Services

- **AWS Account**: Cloud hosting and services
- **CloudFlare Account**: CDN and security
- **Sentry Account**: Error monitoring
- **LogRocket Account**: User session monitoring

---

## 🛠️ Development Environment Setup

### 1. Clone the Repository

```bash
# Clone the main repository
git clone https://github.com/your-org/business-services-hub.git
cd business-services-hub

# Install dependencies
npm install
```

### 2. Install Required Tools

#### Node.js and npm

```bash
# Check current versions
node --version
npm --version

# Install Node.js (if needed)
# Using Node Version Manager (nvm)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 20
nvm use 20

# Or download from https://nodejs.org/
```

#### Git Configuration

```bash
# Configure Git
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Set up SSH key (optional but recommended)
ssh-keygen -t rsa -b 4096 -C "your.email@example.com"
```

#### Database Tools

```bash
# Install PostgreSQL (macOS with Homebrew)
brew install postgresql
brew services start postgresql

# Install PostgreSQL (Ubuntu/Debian)
sudo apt update
sudo apt install postgresql postgresql-contrib

# Install Redis (macOS with Homebrew)
brew install redis
brew services start redis

# Install Redis (Ubuntu/Debian)
sudo apt install redis-server
sudo systemctl start redis-server
```

### 3. IDE and Development Tools

#### Recommended IDEs

- **Visual Studio Code** with extensions:
  - ES7+ React/Redux/React-Native snippets
  - TypeScript Importer
  - Prettier - Code formatter
  - ESLint
  - GitLens
  - Thunder Client (API testing)

#### Development Tools

```bash
# Install global development tools
npm install -g @supabase/cli
npm install -g typescript
npm install -g ts-node
npm install -g nodemon
npm install -g pm2
```

---

## 🗄️ Database Setup

### 1. Supabase Setup

#### Create Supabase Project

1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Click "New Project"
3. Choose organization and enter project details
4. Select region and database password
5. Wait for project creation (2-3 minutes)

#### Install Supabase CLI

```bash
# Install Supabase CLI
npm install -g @supabase/cli

# Login to Supabase
supabase login

# Link to your project
supabase link --project-ref your-project-ref
```

#### Database Schema Setup

```bash
# Pull existing schema
supabase db pull

# Apply migrations
supabase db push

# Generate TypeScript types
supabase gen types typescript --local > src/types/database.types.ts
```

### 2. Local Database Setup (Alternative)

#### PostgreSQL Setup

```bash
# Create database
createdb business_services_hub

# Create user
psql -c "CREATE USER bsh_user WITH PASSWORD 'your_password';"
psql -c "GRANT ALL PRIVILEGES ON DATABASE business_services_hub TO bsh_user;"

# Connect to database
psql -d business_services_hub -U bsh_user
```

#### Database Schema

```sql
-- Create tables
\i scripts/schema.sql

-- Insert seed data
\i scripts/seed.sql
```

### 3. Redis Setup

#### Local Redis

```bash
# Start Redis server
redis-server

# Test Redis connection
redis-cli ping
# Should return: PONG
```

#### Redis Configuration

```bash
# Edit Redis configuration
sudo nano /etc/redis/redis.conf

# Key settings:
# bind 127.0.0.1
# port 6379
# requirepass your_redis_password
# maxmemory 256mb
# maxmemory-policy allkeys-lru
```

---

## ⚙️ Environment Configuration

### 1. Environment Variables

#### Create Environment Files

```bash
# Copy example environment file
cp .env.example .env.local

# Copy production environment file
cp .env.example .env.production
```

#### Development Environment (.env.local)

```env
# Database
DATABASE_URL=postgresql://bsh_user:your_password@localhost:5432/business_services_hub
SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key

# Redis
REDIS_URL=redis://localhost:6379
REDIS_PASSWORD=your_redis_password

# Authentication
JWT_SECRET=your-jwt-secret-key
JWT_EXPIRES_IN=7d
REFRESH_TOKEN_SECRET=your-refresh-token-secret

# Payment Processing
STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret

# Email Service
SENDGRID_API_KEY=SG.your_sendgrid_api_key
SENDGRID_FROM_EMAIL=noreply@yourdomain.com

# SMS Service
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=+1234567890

# Google Services
GOOGLE_MAPS_API_KEY=your_google_maps_api_key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Application
NODE_ENV=development
PORT=3000
API_BASE_URL=http://localhost:3000/api
CLIENT_BASE_URL=http://localhost:3001

# File Upload
MAX_FILE_SIZE=10485760
ALLOWED_FILE_TYPES=image/jpeg,image/png,image/gif,image/webp

# Security
CORS_ORIGIN=http://localhost:3001
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# Monitoring
SENTRY_DSN=your_sentry_dsn
LOG_LEVEL=debug
```

#### Production Environment (.env.production)

```env
# Database
DATABASE_URL=postgresql://username:password@host:port/database
SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key

# Redis
REDIS_URL=redis://username:password@host:port
REDIS_PASSWORD=your_redis_password

# Authentication
JWT_SECRET=your-production-jwt-secret-key
JWT_EXPIRES_IN=7d
REFRESH_TOKEN_SECRET=your-production-refresh-token-secret

# Payment Processing
STRIPE_PUBLISHABLE_KEY=pk_live_your_stripe_publishable_key
STRIPE_SECRET_KEY=sk_live_your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret

# Email Service
SENDGRID_API_KEY=SG.your_production_sendgrid_api_key
SENDGRID_FROM_EMAIL=noreply@yourdomain.com

# SMS Service
TWILIO_ACCOUNT_SID=your_production_twilio_account_sid
TWILIO_AUTH_TOKEN=your_production_twilio_auth_token
TWILIO_PHONE_NUMBER=+1234567890

# Google Services
GOOGLE_MAPS_API_KEY=your_production_google_maps_api_key
GOOGLE_CLIENT_ID=your_production_google_client_id
GOOGLE_CLIENT_SECRET=your_production_google_client_secret

# Application
NODE_ENV=production
PORT=3000
API_BASE_URL=https://api.yourdomain.com
CLIENT_BASE_URL=https://yourdomain.com

# File Upload
MAX_FILE_SIZE=10485760
ALLOWED_FILE_TYPES=image/jpeg,image/png,image/gif,image/webp

# Security
CORS_ORIGIN=https://yourdomain.com
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# Monitoring
SENTRY_DSN=your_production_sentry_dsn
LOG_LEVEL=info
```

### 2. Service Configuration

#### Supabase Configuration

1. Go to Supabase Dashboard → Settings → API
2. Copy Project URL and API keys
3. Configure Row Level Security (RLS) policies
4. Set up authentication providers
5. Configure storage buckets

#### Stripe Configuration

1. Go to Stripe Dashboard → Developers → API keys
2. Copy publishable and secret keys
3. Set up webhook endpoints
4. Configure payment methods
5. Set up tax settings

#### SendGrid Configuration

1. Go to SendGrid Dashboard → Settings → API keys
2. Create API key with full access
3. Verify sender identity
4. Set up domain authentication
5. Configure email templates

---

## 💻 Local Development

### 1. Start Development Server

#### Backend Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Or with specific environment
NODE_ENV=development npm run dev

# With debugging
DEBUG=app:* npm run dev
```

#### Frontend Development

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev

# Or with specific port
PORT=3001 npm run dev
```

#### Full Stack Development

```bash
# Start both backend and frontend
npm run dev:full

# Or using concurrently
npm run dev:concurrent
```

### 2. Database Operations

#### Run Migrations

```bash
# Run pending migrations
npm run db:migrate

# Rollback last migration
npm run db:rollback

# Reset database
npm run db:reset

# Seed database
npm run db:seed
```

#### Database Management

```bash
# Open database console
npm run db:console

# Backup database
npm run db:backup

# Restore database
npm run db:restore
```

### 3. Testing

#### Run Tests

```bash
# Run all tests
npm test

# Run specific test suite
npm run test:unit
npm run test:integration
npm run test:e2e

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

#### Test Database Setup

```bash
# Set up test database
npm run test:db:setup

# Clean test database
npm run test:db:clean

# Run tests with fresh database
npm run test:fresh
```

### 4. Code Quality

#### Linting and Formatting

```bash
# Run ESLint
npm run lint

# Fix ESLint issues
npm run lint:fix

# Run Prettier
npm run format

# Check code formatting
npm run format:check
```

#### Type Checking

```bash
# Run TypeScript compiler
npm run type-check

# Watch for type changes
npm run type-check:watch
```

---

## 🚀 Production Deployment

### 1. Server Preparation

#### System Requirements

- **CPU**: 2+ cores
- **RAM**: 4GB+ (8GB recommended)
- **Storage**: 50GB+ SSD
- **OS**: Ubuntu 20.04+ or CentOS 8+

#### Server Setup

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2
sudo npm install -g pm2

# Install Nginx
sudo apt install nginx -y

# Install PostgreSQL
sudo apt install postgresql postgresql-contrib -y

# Install Redis
sudo apt install redis-server -y
```

### 2. Application Deployment

#### Clone and Setup

```bash
# Clone repository
git clone https://github.com/your-org/business-services-hub.git
cd business-services-hub

# Install dependencies
npm ci --production

# Build application
npm run build

# Set up environment
cp .env.production .env
```

#### Database Setup

```bash
# Create production database
sudo -u postgres createdb business_services_hub_prod

# Create user
sudo -u postgres psql -c "CREATE USER bsh_prod WITH PASSWORD 'secure_password';"
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE business_services_hub_prod TO bsh_prod;"

# Run migrations
npm run db:migrate
```

#### Start Application

```bash
# Start with PM2
pm2 start ecosystem.config.js

# Save PM2 configuration
pm2 save

# Setup PM2 startup
pm2 startup
```

### 3. Nginx Configuration

#### Nginx Setup

```bash
# Create Nginx configuration
sudo nano /etc/nginx/sites-available/business-services-hub
```

#### Nginx Configuration

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name yourdomain.com www.yourdomain.com;

    # SSL Configuration
    ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;

    # Security Headers
    add_header X-Frame-Options DENY;
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

    # API Routes
    location /api {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Static Files
    location / {
        root /var/www/business-services-hub/dist;
        try_files $uri $uri/ /index.html;

        # Cache static assets
        location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }
    }

    # File Upload Size
    client_max_body_size 10M;
}
```

#### Enable Site

```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/business-services-hub /etc/nginx/sites-enabled/

# Test configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

### 4. SSL Certificate

#### Let's Encrypt Setup

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Obtain SSL certificate
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Test renewal
sudo certbot renew --dry-run
```

---

## 🐳 Docker Deployment

### 1. Docker Configuration

#### Dockerfile

```dockerfile
# Use Node.js 20 Alpine
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build application
RUN npm run build

# Expose port
EXPOSE 3000

# Start application
CMD ["npm", "start"]
```

#### Docker Compose

```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - '3000:3000'
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://bsh_user:password@db:5432/business_services_hub
      - REDIS_URL=redis://redis:6379
    depends_on:
      - db
      - redis
    volumes:
      - ./uploads:/app/uploads

  db:
    image: postgres:15-alpine
    environment:
      - POSTGRES_DB=business_services_hub
      - POSTGRES_USER=bsh_user
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - '5432:5432'

  redis:
    image: redis:7-alpine
    ports:
      - '6379:6379'
    volumes:
      - redis_data:/data

  nginx:
    image: nginx:alpine
    ports:
      - '80:80'
      - '443:443'
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/ssl
    depends_on:
      - app

volumes:
  postgres_data:
  redis_data:
```

### 2. Docker Deployment

#### Build and Run

```bash
# Build images
docker-compose build

# Start services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

#### Production Deployment

```bash
# Build production image
docker build -t business-services-hub:latest .

# Run production container
docker run -d \
  --name business-services-hub \
  -p 3000:3000 \
  -e NODE_ENV=production \
  -e DATABASE_URL=your_database_url \
  business-services-hub:latest
```

---

## 🔄 CI/CD Pipeline

### 1. GitHub Actions

#### Workflow Configuration

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest

    services:
      postgres:
        image: postgres:15
        env:
          POSTGRES_PASSWORD: postgres
          POSTGRES_DB: test_db
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5

      redis:
        image: redis:7
        options: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm test
        env:
          DATABASE_URL: postgresql://postgres:postgres@localhost:5432/test_db
          REDIS_URL: redis://localhost:6379

      - name: Run linting
        run: npm run lint

      - name: Run type checking
        run: npm run type-check

  build:
    needs: test
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build application
        run: npm run build

      - name: Upload build artifacts
        uses: actions/upload-artifact@v3
        with:
          name: build-files
          path: dist/

  deploy:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    steps:
      - uses: actions/checkout@v3

      - name: Deploy to production
        run: |
          # Add your deployment commands here
          echo "Deploying to production..."
```

### 2. Deployment Scripts

#### Deploy Script

```bash
#!/bin/bash
# deploy.sh

set -e

echo "Starting deployment..."

# Pull latest code
git pull origin main

# Install dependencies
npm ci --production

# Run migrations
npm run db:migrate

# Build application
npm run build

# Restart services
pm2 restart business-services-hub

echo "Deployment completed successfully!"
```

---

## 📊 Monitoring & Logging

### 1. Application Monitoring

#### PM2 Monitoring

```bash
# Monitor application
pm2 monit

# View logs
pm2 logs business-services-hub

# View specific log
pm2 logs business-services-hub --lines 100

# Restart application
pm2 restart business-services-hub

# Reload application
pm2 reload business-services-hub
```

#### Health Checks

```bash
# Create health check script
cat > health-check.sh << 'EOF'
#!/bin/bash

# Check if application is running
if ! curl -f http://localhost:3000/health > /dev/null 2>&1; then
    echo "Application is not responding"
    pm2 restart business-services-hub
    exit 1
fi

echo "Application is healthy"
EOF

chmod +x health-check.sh

# Add to crontab for regular checks
(crontab -l 2>/dev/null; echo "*/5 * * * * /path/to/health-check.sh") | crontab -
```

### 2. Log Management

#### Log Rotation

```bash
# Install logrotate
sudo apt install logrotate -y

# Create logrotate configuration
sudo nano /etc/logrotate.d/business-services-hub
```

#### Logrotate Configuration

```
/var/log/business-services-hub/*.log {
    daily
    missingok
    rotate 30
    compress
    delaycompress
    notifempty
    create 644 root root
    postrotate
        pm2 reload business-services-hub
    endscript
}
```

### 3. Error Monitoring

#### Sentry Integration

```javascript
// sentry.js
const Sentry = require('@sentry/node');

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 1.0,
});

module.exports = Sentry;
```

---

## 🔧 Troubleshooting

### Common Issues

#### 1. Database Connection Issues

```bash
# Check database status
sudo systemctl status postgresql

# Check database logs
sudo journalctl -u postgresql

# Test database connection
psql -h localhost -U bsh_user -d business_services_hub

# Reset database password
sudo -u postgres psql -c "ALTER USER bsh_user PASSWORD 'new_password';"
```

#### 2. Redis Connection Issues

```bash
# Check Redis status
sudo systemctl status redis

# Check Redis logs
sudo journalctl -u redis

# Test Redis connection
redis-cli ping

# Check Redis configuration
redis-cli config get "*"
```

#### 3. Application Issues

```bash
# Check application logs
pm2 logs business-services-hub

# Check application status
pm2 status

# Restart application
pm2 restart business-services-hub

# Check system resources
htop
df -h
free -h
```

#### 4. Nginx Issues

```bash
# Check Nginx status
sudo systemctl status nginx

# Check Nginx configuration
sudo nginx -t

# Check Nginx logs
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log

# Reload Nginx
sudo systemctl reload nginx
```

### Performance Optimization

#### 1. Database Optimization

```sql
-- Check slow queries
SELECT query, mean_time, calls, total_time
FROM pg_stat_statements
ORDER BY mean_time DESC
LIMIT 10;

-- Analyze table statistics
ANALYZE;

-- Check index usage
SELECT schemaname, tablename, attname, n_distinct, correlation
FROM pg_stats
WHERE tablename = 'your_table_name';
```

#### 2. Application Optimization

```bash
# Monitor memory usage
pm2 monit

# Check CPU usage
top -p $(pgrep -f "node.*business-services-hub")

# Monitor network connections
netstat -tulpn | grep :3000

# Check file descriptors
lsof -p $(pgrep -f "node.*business-services-hub")
```

### Security Checklist

#### 1. Server Security

- [ ] Firewall configured (UFW)
- [ ] SSH key authentication only
- [ ] Regular security updates
- [ ] Fail2ban installed and configured
- [ ] SSL certificate valid and auto-renewing

#### 2. Application Security

- [ ] Environment variables secured
- [ ] Database credentials encrypted
- [ ] API rate limiting enabled
- [ ] CORS properly configured
- [ ] Input validation implemented
- [ ] SQL injection prevention
- [ ] XSS protection enabled

#### 3. Database Security

- [ ] Database user permissions minimal
- [ ] Row Level Security (RLS) enabled
- [ ] Regular backups configured
- [ ] Database encryption at rest
- [ ] Connection encryption enabled

---

## 📚 Additional Resources

### Documentation Links

- [Node.js Documentation](https://nodejs.org/docs/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Redis Documentation](https://redis.io/documentation)
- [PM2 Documentation](https://pm2.keymetrics.io/docs/)
- [Nginx Documentation](https://nginx.org/en/docs/)
- [Docker Documentation](https://docs.docker.com/)

### Support Channels

- **GitHub Issues**: [Create an issue](https://github.com/your-org/business-services-hub/issues)
- **Discord Community**: [Join our Discord](https://discord.gg/your-discord)
- **Email Support**: support@yourdomain.com
- **Documentation**: [Read the docs](https://docs.yourdomain.com)

---

This comprehensive setup and deployment guide provides step-by-step instructions for setting up the Business Services Hub in development and production environments, including troubleshooting tips and best practices for maintaining a healthy deployment.
