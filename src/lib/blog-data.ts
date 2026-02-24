export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
}

export const articles: Article[] = [
  {
    slug: 'understanding-typescript-generics',
    title: 'Understanding TypeScript Generics',
    excerpt: 'A deep dive into TypeScript generics - from basic usage patterns to advanced type constraints.',
    date: '2024-01-15',
    readTime: '8 min read',
    tags: ['typescript', 'generics', 'programming'],
    content: `
# Understanding TypeScript Generics

Generics are one of the most powerful features in TypeScript, allowing you to write reusable, type-safe code. In this article, we'll explore how to leverage generics effectively.

## What Are Generics?

Generics provide a way to create components that can work over a variety of types rather than a single one. This allows users to consume these components while using their own types.

\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}

const result = identity<string>("hello");
const numResult = identity<number>(42);
\`\`\`

## Generic Constraints

Sometimes you want to limit what types can be used with your generic. You can use constraints:

\`\`\`typescript
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

logLength("hello"); // Works
logLength([1, 2, 3]); // Works
logLength({ length: 10 }); // Works
\`\`\`

## Generic Interfaces

Interfaces can also be generic:

\`\`\`typescript
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

interface User {
  id: number;
  name: string;
}

const userResponse: ApiResponse<User> = {
  data: { id: 1, name: "John" },
  status: 200,
  message: "Success"
};
\`\`\`

## Conclusion

Generics are essential for building scalable TypeScript applications. They provide type safety while maintaining flexibility.
    `,
  },
  {
    slug: 'building-scalable-apis-nodejs',
    title: 'Building Scalable APIs with Node.js',
    excerpt: 'Learn how to build production-ready REST APIs using Node.js, Express, and best practices.',
    date: '2024-01-10',
    readTime: '12 min read',
    tags: ['nodejs', 'api', 'backend', 'express'],
    content: `
# Building Scalable APIs with Node.js

Creating a scalable API requires more than just handling requests. Let's explore best practices for building robust APIs.

## Project Structure

A well-organized project structure is crucial for maintainability:

\`\`\`
src/
  ├── controllers/
  ├── services/
  ├── routes/
  ├── middleware/
  └── utils/
\`\`\`

## Error Handling Middleware

Always implement centralized error handling:

\`\`\`typescript
// errorHandler.ts
export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(err.stack);

  if (err instanceof ValidationError) {
    return res.status(400).json({
      error: err.message,
      details: err.details
    });
  }

  res.status(500).json({
    error: 'Internal Server Error'
  });
}
\`\`\`

## Rate Limiting

Protect your API from abuse:

\`\`\`typescript
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP'
});

app.use('/api/', limiter);
\`\`\`

## Conclusion

Building scalable APIs requires careful consideration of error handling, rate limiting, and proper project organization.
    `,
  },
  {
    slug: 'react-server-components',
    title: 'React Server Components Explained',
    excerpt: 'A comprehensive guide to understanding React Server Components and when to use them.',
    date: '2024-01-05',
    readTime: '10 min read',
    tags: ['react', 'rsc', 'nextjs'],
    content: `
# React Server Components Explained

React Server Components (RSC) represent a paradigm shift in how we build React applications.

## What Are Server Components?

Server Components are React components that render exclusively on the server. They never ship JavaScript to the client:

\`\`\`typescript
// This is a Server Component
async function UserProfile({ userId }: { userId: string }) {
  const user = await fetchUser(userId);

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}
\`\`\`

## When to Use Server Components

- Fetching data
- Accessing backend resources directly
- Keeping sensitive information on the server
- Large dependencies that shouldn't be included in the client bundle

## Client Components

Use the 'use client' directive for interactive components:

\`\`\`typescript
'use client';

import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(c => c + 1)}>
      Count: {count}
    </button>
  );
}
\`\`\`

## Conclusion

RSC offers a new mental model for building React applications, enabling better performance and developer experience.
    `,
  },
  {
    slug: 'postgresql-performance',
    title: 'PostgreSQL Performance Optimization',
    excerpt: 'Essential tips and techniques for optimizing PostgreSQL database performance.',
    date: '2023-12-28',
    readTime: '15 min read',
    tags: ['postgresql', 'database', 'performance'],
    content: `
# PostgreSQL Performance Optimization

Database performance is critical for application responsiveness. Let's explore optimization techniques.

## Indexing Strategies

Proper indexing can dramatically improve query performance:

\`\`\`sql
-- Create a composite index for common queries
CREATE INDEX idx_orders_user_date
ON orders(user_id, created_at DESC);

-- Partial index for active records
CREATE INDEX idx_active_users
ON users(email)
WHERE status = 'active';
\`\`\`

## Query Optimization

Use EXPLAIN ANALYZE to understand query performance:

\`\`\`sql
EXPLAIN ANALYZE
SELECT * FROM orders
WHERE user_id = 123
AND created_at > '2024-01-01';
\`\`\`

## Connection Pooling

Use connection pooling to manage database connections efficiently:

\`\`\`typescript
import { Pool } from 'pg';

const pool = new Pool({
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});
\`\`\`

## Conclusion

Regular monitoring and optimization of your PostgreSQL database ensures consistent application performance.
    `,
  },
  {
    slug: 'docker-best-practices',
    title: 'Docker Best Practices for Development',
    excerpt: 'Best practices for using Docker in your development workflow.',
    date: '2023-12-20',
    readTime: '9 min read',
    tags: ['docker', 'devops', 'containers'],
    content: `
# Docker Best Practices for Development

Docker has become essential for modern development. Here are best practices to follow.

## Multi-Stage Builds

Use multi-stage builds to reduce image size:

\`\`\`dockerfile
# Build stage
FROM node:20 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY package*.json ./
RUN npm ci --only=production
CMD ["node", "dist/index.js"]
\`\`\`

## Layer Caching

Order your Dockerfile instructions to maximize layer caching:

\`\`\`dockerfile
# Copy package files first
COPY package*.json ./
RUN npm ci

# Copy source code last
COPY . .
\`\`\`

## Docker Compose for Development

Use docker-compose for local development:

\`\`\`yaml
services:
  app:
    build: .
    volumes:
      - .:/app
      - /app/node_modules
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development
\`\`\`

## Conclusion

Following these practices will improve your Docker workflow and create more efficient containers.
    `,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
