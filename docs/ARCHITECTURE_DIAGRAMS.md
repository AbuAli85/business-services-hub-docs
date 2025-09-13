---
layout: default
title: Architecture Diagrams
permalink: /docs/ARCHITECTURE_DIAGRAMS.html
---

# 🏗️ Business Services Hub - Architecture Diagrams

## 📋 Table of Contents

1. [System Architecture Overview](#system-architecture-overview)
2. [Database Schema](#database-schema)
3. [API Flow Diagram](#api-flow-diagram)
4. [Security Architecture](#security-architecture)
5. [User Journey Flow](#user-journey-flow)
6. [Deployment Architecture](#deployment-architecture)
7. [Component Architecture](#component-architecture)

---

## 🎯 System Architecture Overview

### High-Level System Architecture

```mermaid
graph TB
    subgraph "Client Layer"
        WEB[Web Application<br/>React + TypeScript]
        MOBILE[Mobile App<br/>React Native]
        ADMIN[Admin Dashboard<br/>React + TypeScript]
    end

    subgraph "API Gateway"
        GATEWAY[API Gateway<br/>Rate Limiting & Auth]
    end

    subgraph "Core Services"
        AUTH[Authentication Service<br/>Supabase Auth]
        USER[User Management<br/>Profile & Preferences]
        SERVICE[Service Management<br/>Listings & Categories]
        BOOKING[Booking System<br/>Scheduling & Payments]
        NOTIFICATION[Notification Service<br/>Email & SMS]
        PAYMENT[Payment Processing<br/>Stripe Integration]
    end

    subgraph "Data Layer"
        DB[(PostgreSQL<br/>Supabase)]
        STORAGE[File Storage<br/>Supabase Storage]
        CACHE[Redis Cache<br/>Session & Data]
    end

    subgraph "External Services"
        STRIPE[Stripe<br/>Payment Processing]
        EMAIL[Email Service<br/>SendGrid]
        SMS[SMS Service<br/>Twilio]
        MAPS[Maps API<br/>Google Maps]
    end

    WEB --> GATEWAY
    MOBILE --> GATEWAY
    ADMIN --> GATEWAY

    GATEWAY --> AUTH
    GATEWAY --> USER
    GATEWAY --> SERVICE
    GATEWAY --> BOOKING
    GATEWAY --> NOTIFICATION
    GATEWAY --> PAYMENT

    AUTH --> DB
    USER --> DB
    SERVICE --> DB
    BOOKING --> DB
    NOTIFICATION --> DB
    PAYMENT --> DB

    SERVICE --> STORAGE
    USER --> STORAGE

    AUTH --> CACHE
    USER --> CACHE

    PAYMENT --> STRIPE
    NOTIFICATION --> EMAIL
    NOTIFICATION --> SMS
    SERVICE --> MAPS
```

---

## 🗄️ Database Schema

### Core Tables and Relationships

```mermaid
erDiagram
    USERS {
        uuid id PK
        string email
        string full_name
        string avatar_url
        string phone
        enum role
        timestamp created_at
        timestamp updated_at
    }

    PROFILES {
        uuid id PK
        uuid user_id FK
        text bio
        string location
        json preferences
        boolean is_verified
        timestamp created_at
        timestamp updated_at
    }

    SERVICE_CATEGORIES {
        uuid id PK
        string name
        string description
        string icon
        boolean is_active
        timestamp created_at
    }

    SERVICES {
        uuid id PK
        uuid provider_id FK
        uuid category_id FK
        string title
        text description
        decimal price
        string currency
        json pricing_options
        json images
        json location
        boolean is_active
        timestamp created_at
        timestamp updated_at
    }

    BOOKINGS {
        uuid id PK
        uuid client_id FK
        uuid service_id FK
        uuid provider_id FK
        datetime scheduled_at
        enum status
        decimal total_amount
        string currency
        text notes
        json metadata
        timestamp created_at
        timestamp updated_at
    }

    PAYMENTS {
        uuid id PK
        uuid booking_id FK
        string stripe_payment_intent_id
        decimal amount
        string currency
        enum status
        json payment_method
        timestamp created_at
        timestamp updated_at
    }

    REVIEWS {
        uuid id PK
        uuid booking_id FK
        uuid reviewer_id FK
        uuid reviewee_id FK
        integer rating
        text comment
        timestamp created_at
    }

    NOTIFICATIONS {
        uuid id PK
        uuid user_id FK
        string type
        string title
        text message
        json data
        boolean is_read
        timestamp created_at
    }

    USERS ||--|| PROFILES : has
    USERS ||--o{ SERVICES : provides
    USERS ||--o{ BOOKINGS : books
    USERS ||--o{ REVIEWS : writes
    USERS ||--o{ NOTIFICATIONS : receives

    SERVICE_CATEGORIES ||--o{ SERVICES : contains
    SERVICES ||--o{ BOOKINGS : booked_for
    BOOKINGS ||--|| PAYMENTS : has
    BOOKINGS ||--o{ REVIEWS : generates
```

---

## 🔄 API Flow Diagram

### Request Flow and Data Processing

```mermaid
sequenceDiagram
    participant Client
    participant Gateway
    participant Auth
    participant Service
    participant Database
    participant Payment
    participant Notification

    Client->>Gateway: API Request
    Gateway->>Auth: Validate Token
    Auth-->>Gateway: Token Valid
    Gateway->>Service: Process Request
    Service->>Database: Query Data
    Database-->>Service: Return Data
    Service-->>Gateway: Response Data
    Gateway-->>Client: API Response

    Note over Client,Notification: Booking Flow
    Client->>Gateway: Create Booking
    Gateway->>Service: Process Booking
    Service->>Database: Save Booking
    Service->>Payment: Process Payment
    Payment-->>Service: Payment Success
    Service->>Notification: Send Confirmation
    Notification-->>Client: Email/SMS Notification
```

---

## 🔒 Security Architecture

### Authentication and Authorization Flow

```mermaid
graph TB
    subgraph "Client Authentication"
        LOGIN[User Login]
        REGISTER[User Registration]
        FORGOT[Password Reset]
    end

    subgraph "Authentication Layer"
        SUPABASE[Supabase Auth]
        JWT[JWT Token Generation]
        RLS[Row Level Security]
    end

    subgraph "Authorization"
        ROLE[Role-Based Access]
        PERM[Permission Check]
        RESOURCE[Resource Access]
    end

    subgraph "Security Features"
        RATE[Rate Limiting]
        CORS[CORS Protection]
        VALID[Input Validation]
        ENCRYPT[Data Encryption]
    end

    LOGIN --> SUPABASE
    REGISTER --> SUPABASE
    FORGOT --> SUPABASE

    SUPABASE --> JWT
    JWT --> RLS

    RLS --> ROLE
    ROLE --> PERM
    PERM --> RESOURCE

    RESOURCE --> RATE
    RATE --> CORS
    CORS --> VALID
    VALID --> ENCRYPT
```

---

## 👤 User Journey Flow

### Complete User Experience Flow

```mermaid
journey
    title User Journey: Service Booking
    section Discovery
      Browse Services: 5: User
      Filter by Category: 4: User
      View Service Details: 5: User
      Read Reviews: 4: User
    section Booking
      Select Time Slot: 5: User
      Enter Details: 3: User
      Review Booking: 4: User
      Make Payment: 5: User
    section Confirmation
      Receive Confirmation: 5: User
      Get Provider Contact: 4: User
      Prepare for Service: 3: User
    section Completion
      Receive Service: 5: User
      Leave Review: 4: User
      Rate Experience: 5: User
```

---

## 🚀 Deployment Architecture

### Production Environment Setup

```mermaid
graph TB
    subgraph "CDN & Load Balancer"
        CDN[CloudFlare CDN]
        LB[Load Balancer]
    end

    subgraph "Application Servers"
        APP1[App Server 1<br/>Node.js]
        APP2[App Server 2<br/>Node.js]
        APP3[App Server 3<br/>Node.js]
    end

    subgraph "Database Layer"
        PRIMARY[(Primary DB<br/>PostgreSQL)]
        REPLICA[(Read Replica<br/>PostgreSQL)]
        REDIS[(Redis Cache)]
    end

    subgraph "Storage & Files"
        S3[Supabase Storage<br/>File Storage]
        BACKUP[Backup Storage<br/>Automated Backups]
    end

    subgraph "Monitoring & Logs"
        MONITOR[Application Monitoring]
        LOGS[Centralized Logging]
        ALERTS[Alert System]
    end

    CDN --> LB
    LB --> APP1
    LB --> APP2
    LB --> APP3

    APP1 --> PRIMARY
    APP2 --> PRIMARY
    APP3 --> PRIMARY

    APP1 --> REPLICA
    APP2 --> REPLICA
    APP3 --> REPLICA

    APP1 --> REDIS
    APP2 --> REDIS
    APP3 --> REDIS

    APP1 --> S3
    APP2 --> S3
    APP3 --> S3

    PRIMARY --> BACKUP

    APP1 --> MONITOR
    APP2 --> MONITOR
    APP3 --> MONITOR

    MONITOR --> LOGS
    LOGS --> ALERTS
```

---

## 🧩 Component Architecture

### Frontend Component Structure

```mermaid
graph TB
    subgraph "App Root"
        APP[App Component]
        ROUTER[React Router]
        PROVIDER[Context Providers]
    end

    subgraph "Layout Components"
        HEADER[Header Component]
        SIDEBAR[Sidebar Component]
        FOOTER[Footer Component]
        NAV[Navigation Component]
    end

    subgraph "Feature Components"
        AUTH[Authentication]
        DASHBOARD[Dashboard]
        SERVICES[Service Management]
        BOOKINGS[Booking System]
        PROFILE[User Profile]
        PAYMENT[Payment Processing]
    end

    subgraph "Shared Components"
        MODAL[Modal Components]
        FORM[Form Components]
        CARD[Card Components]
        BUTTON[Button Components]
        LOADING[Loading States]
    end

    subgraph "Hooks & Utils"
        API[API Hooks]
        AUTH_HOOK[Auth Hooks]
        UTILS[Utility Functions]
        VALIDATION[Form Validation]
    end

    APP --> ROUTER
    ROUTER --> PROVIDER

    PROVIDER --> HEADER
    PROVIDER --> SIDEBAR
    PROVIDER --> FOOTER
    PROVIDER --> NAV

    PROVIDER --> AUTH
    PROVIDER --> DASHBOARD
    PROVIDER --> SERVICES
    PROVIDER --> BOOKINGS
    PROVIDER --> PROFILE
    PROVIDER --> PAYMENT

    AUTH --> MODAL
    DASHBOARD --> CARD
    SERVICES --> FORM
    BOOKINGS --> MODAL
    PROFILE --> FORM
    PAYMENT --> MODAL

    AUTH --> API
    DASHBOARD --> AUTH_HOOK
    SERVICES --> UTILS
    BOOKINGS --> VALIDATION
    PROFILE --> API
    PAYMENT --> AUTH_HOOK
```

---

## 📊 Performance Architecture

### Caching and Optimization Strategy

```mermaid
graph TB
    subgraph "Client-Side Caching"
        BROWSER[Browser Cache]
        LOCAL[Local Storage]
        SESSION[Session Storage]
    end

    subgraph "CDN Caching"
        STATIC[Static Assets]
        IMAGES[Image Optimization]
        FONTS[Font Caching]
    end

    subgraph "Server-Side Caching"
        REDIS[Redis Cache]
        QUERY[Query Caching]
        SESSION_CACHE[Session Cache]
    end

    subgraph "Database Optimization"
        INDEXES[Database Indexes]
        PARTITIONS[Table Partitioning]
        CONNECTION[Connection Pooling]
    end

    BROWSER --> STATIC
    LOCAL --> QUERY
    SESSION --> SESSION_CACHE

    STATIC --> IMAGES
    IMAGES --> FONTS

    REDIS --> QUERY
    QUERY --> SESSION_CACHE

    QUERY --> INDEXES
    INDEXES --> PARTITIONS
    PARTITIONS --> CONNECTION
```

---

## 🔧 Development Architecture

### Local Development Setup

```mermaid
graph TB
    subgraph "Development Environment"
        DEV[Local Development]
        HOT[Hot Reload]
        DEBUG[Debug Tools]
    end

    subgraph "Build Process"
        WEBPACK[Webpack Bundler]
        BABEL[Babel Transpiler]
        POSTCSS[PostCSS Processor]
    end

    subgraph "Testing"
        UNIT[Unit Tests]
        INTEGRATION[Integration Tests]
        E2E[End-to-End Tests]
    end

    subgraph "Code Quality"
        LINT[ESLint]
        FORMAT[Prettier]
        TYPE[TypeScript Checker]
    end

    DEV --> HOT
    HOT --> DEBUG

    DEBUG --> WEBPACK
    WEBPACK --> BABEL
    BABEL --> POSTCSS

    WEBPACK --> UNIT
    UNIT --> INTEGRATION
    INTEGRATION --> E2E

    WEBPACK --> LINT
    LINT --> FORMAT
    FORMAT --> TYPE
```

---

## 📈 Monitoring and Analytics

### System Monitoring Architecture

```mermaid
graph TB
    subgraph "Application Metrics"
        PERFORMANCE[Performance Metrics]
        ERRORS[Error Tracking]
        USAGE[Usage Analytics]
    end

    subgraph "Infrastructure Metrics"
        CPU[CPU Usage]
        MEMORY[Memory Usage]
        DISK[Disk Usage]
        NETWORK[Network Traffic]
    end

    subgraph "Business Metrics"
        BOOKINGS[Booking Metrics]
        REVENUE[Revenue Tracking]
        USERS[User Growth]
        RETENTION[User Retention]
    end

    subgraph "Alerting System"
        THRESHOLDS[Threshold Monitoring]
        NOTIFICATIONS[Alert Notifications]
        ESCALATION[Escalation Rules]
    end

    PERFORMANCE --> THRESHOLDS
    ERRORS --> THRESHOLDS
    USAGE --> THRESHOLDS

    CPU --> THRESHOLDS
    MEMORY --> THRESHOLDS
    DISK --> THRESHOLDS
    NETWORK --> THRESHOLDS

    BOOKINGS --> THRESHOLDS
    REVENUE --> THRESHOLDS
    USERS --> THRESHOLDS
    RETENTION --> THRESHOLDS

    THRESHOLDS --> NOTIFICATIONS
    NOTIFICATIONS --> ESCALATION
```

---

## 🎯 Key Architecture Principles

### Design Patterns and Best Practices

1. **Microservices Architecture**: Modular, scalable service design
2. **Event-Driven Architecture**: Asynchronous communication between services
3. **CQRS Pattern**: Command Query Responsibility Segregation
4. **Repository Pattern**: Data access abstraction
5. **Dependency Injection**: Loose coupling and testability
6. **Circuit Breaker**: Fault tolerance and resilience
7. **Rate Limiting**: API protection and resource management
8. **Caching Strategy**: Multi-layer caching for performance
9. **Security by Design**: Built-in security at every layer
10. **Observability**: Comprehensive monitoring and logging

---

## 🔄 Data Flow Patterns

### Request Processing Flow

```mermaid
flowchart TD
    START[Client Request] --> VALIDATE{Input Validation}
    VALIDATE -->|Valid| AUTH{Authentication}
    VALIDATE -->|Invalid| ERROR[Return Error]

    AUTH -->|Authenticated| AUTHORIZE{Authorization}
    AUTH -->|Not Authenticated| UNAUTHORIZED[Return 401]

    AUTHORIZE -->|Authorized| PROCESS[Process Request]
    AUTHORIZE -->|Not Authorized| FORBIDDEN[Return 403]

    PROCESS --> CACHE{Cache Check}
    CACHE -->|Hit| RETURN[Return Cached Data]
    CACHE -->|Miss| DATABASE[Query Database]

    DATABASE --> TRANSFORM[Transform Data]
    TRANSFORM --> CACHE_STORE[Store in Cache]
    CACHE_STORE --> RETURN

    RETURN --> LOG[Log Request]
    LOG --> RESPONSE[Send Response]

    ERROR --> LOG
    UNAUTHORIZED --> LOG
    FORBIDDEN --> LOG
```

---

This comprehensive architecture documentation provides a complete visual and technical overview of the Business Services Hub system, covering all aspects from high-level system design to detailed component relationships and data flows.
