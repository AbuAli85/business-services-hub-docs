---
layout: default
title: Contributing Guide
permalink: /docs/CONTRIBUTING.md
---

# 🤝 Contributing to Business Services Hub

Thank you for your interest in contributing to the Business Services Hub! This guide will help you get started with contributing to our project.

## 📋 Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [Development Setup](#development-setup)
4. [Contribution Process](#contribution-process)
5. [Coding Standards](#coding-standards)
6. [Testing Guidelines](#testing-guidelines)
7. [Documentation Guidelines](#documentation-guidelines)
8. [Issue Reporting](#issue-reporting)
9. [Pull Request Process](#pull-request-process)
10. [Release Process](#release-process)

---

## 📜 Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inclusive environment for all contributors, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

### Our Standards

#### Positive Behavior

- Use welcoming and inclusive language
- Be respectful of differing viewpoints and experiences
- Gracefully accept constructive criticism
- Focus on what is best for the community
- Show empathy towards other community members

#### Unacceptable Behavior

- The use of sexualized language or imagery
- Trolling, insulting/derogatory comments, and personal or political attacks
- Public or private harassment
- Publishing others' private information without explicit permission
- Other conduct which could reasonably be considered inappropriate

### Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting the project team at conduct@abuali.com. All complaints will be reviewed and investigated and will result in a response that is deemed necessary and appropriate to the circumstances.

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 8.0.0 or higher
- **Git**: Version 2.30.0 or higher
- **Code Editor**: VS Code (recommended) or your preferred editor

### Fork and Clone

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/yourusername/business-services-hub.git
   cd business-services-hub
   ```
3. **Add upstream remote**:
   ```bash
   git remote add upstream https://github.com/business-services-hub/business-services-hub.git
   ```

### Development Setup

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Set up environment variables**:

   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

3. **Start development server**:

   ```bash
   npm run dev
   ```

4. **Verify setup**:
   - Visit `http://localhost:3000`
   - Run tests: `npm test`
   - Run linting: `npm run lint`

---

## 🔧 Development Setup

### Project Structure

```
business-services-hub/
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # Reusable UI components
│   │   ├── forms/          # Form components
│   │   ├── layout/         # Layout components
│   │   └── features/       # Feature-specific components
│   ├── pages/              # Next.js pages
│   │   ├── api/            # API routes
│   │   ├── auth/           # Authentication pages
│   │   ├── dashboard/      # Dashboard pages
│   │   └── services/       # Service-related pages
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   ├── store/              # State management
│   └── types/              # TypeScript type definitions
├── docs/                   # Documentation
├── tests/                  # Test files
├── public/                 # Static assets
└── scripts/                # Build and utility scripts
```

### Development Workflow

1. **Create a feature branch**:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**:
   - Write code following our coding standards
   - Add tests for new functionality
   - Update documentation as needed

3. **Test your changes**:

   ```bash
   npm run test
   npm run lint
   npm run type-check
   ```

4. **Commit your changes**:

   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

5. **Push to your fork**:

   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request** on GitHub

---

## 🔄 Contribution Process

### Types of Contributions

#### 🐛 Bug Fixes

- Fix existing bugs and issues
- Improve error handling
- Enhance stability

#### ✨ New Features

- Add new functionality
- Implement new components
- Add new API endpoints

#### 📚 Documentation

- Improve existing documentation
- Add new guides and tutorials
- Fix documentation errors

#### 🧪 Testing

- Add new tests
- Improve test coverage
- Fix failing tests

#### 🎨 UI/UX Improvements

- Improve user interface
- Enhance user experience
- Fix accessibility issues

#### ⚡ Performance

- Optimize performance
- Reduce bundle size
- Improve loading times

### Contribution Guidelines

#### Before You Start

1. **Check existing issues** to see if your contribution is already being worked on
2. **Create an issue** if you're planning a significant change
3. **Discuss your approach** with the maintainers for large changes

#### During Development

1. **Follow coding standards** outlined in this guide
2. **Write tests** for new functionality
3. **Update documentation** as needed
4. **Keep commits focused** and atomic

#### After Development

1. **Test thoroughly** before submitting
2. **Update CHANGELOG.md** if applicable
3. **Create a clear PR description**
4. **Respond to feedback** promptly

---

## 📝 Coding Standards

### TypeScript Guidelines

#### Type Definitions

```typescript
// Use interfaces for object shapes
interface User {
  id: string;
  email: string;
  role: UserRole;
  createdAt: Date;
}

// Use enums for constants
enum UserRole {
  CLIENT = 'client',
  PROVIDER = 'provider',
  ADMIN = 'admin',
  SUPER_ADMIN = 'super_admin',
}

// Use type aliases for unions
type Status = 'pending' | 'approved' | 'rejected';
```

#### Function Definitions

```typescript
// Use explicit return types for public functions
export function getUserById(id: string): Promise<User | null> {
  // Implementation
}

// Use arrow functions for simple operations
const formatDate = (date: Date): string => {
  return date.toISOString().split('T')[0];
};
```

#### Error Handling

```typescript
// Use custom error classes
class ValidationError extends Error {
  constructor(
    message: string,
    public field: string
  ) {
    super(message);
    this.name = 'ValidationError';
  }
}

// Handle errors gracefully
try {
  const result = await riskyOperation();
  return result;
} catch (error) {
  if (error instanceof ValidationError) {
    throw error;
  }
  throw new Error('An unexpected error occurred');
}
```

### React Guidelines

#### Component Structure

```typescript
// Use functional components with hooks
interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export function Button({
  children,
  onClick,
  variant = 'primary',
  disabled = false
}: ButtonProps) {
  return (
    <button
      className={`btn btn-${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
```

#### Hooks Usage

```typescript
// Use custom hooks for complex logic
function useUser(userId: string) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchUser(userId)
      .then(setUser)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [userId]);

  return { user, loading, error };
}
```

#### State Management

```typescript
// Use Zustand for global state
interface AppState {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
}

export const useAppStore = create<AppState>(set => ({
  user: null,
  setUser: user => set({ user }),
  logout: () => set({ user: null }),
}));
```

### API Guidelines

#### Route Handlers

```typescript
// Use proper HTTP methods and status codes
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const data = await getData();
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}
```

#### Input Validation

```typescript
// Use Zod for input validation
const createUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  role: z.enum(['client', 'provider', 'admin']),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const validatedData = createUserSchema.parse(req.body);
    // Process validated data
  } catch (error) {
    return res.status(400).json({ error: 'Validation failed' });
  }
}
```

### Database Guidelines

#### Query Patterns

```typescript
// Use Supabase client for database operations
export async function getServices(filters: ServiceFilters) {
  let query = supabase.from('services').select('*').eq('status', 'active');

  if (filters.category) {
    query = query.eq('category', filters.category);
  }

  if (filters.minPrice) {
    query = query.gte('base_price', filters.minPrice);
  }

  return await query;
}
```

#### RLS Policies

```sql
-- Always use RLS policies for data access
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);
```

---

## 🧪 Testing Guidelines

### Test Structure

#### Unit Tests

```typescript
// Test individual functions
describe('formatDate', () => {
  it('should format date correctly', () => {
    const date = new Date('2025-01-13T10:30:00Z');
    const result = formatDate(date);
    expect(result).toBe('2025-01-13');
  });
});
```

#### Component Tests

```typescript
// Test React components
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('should render with correct text', () => {
    render(<Button onClick={() => {}}>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('should call onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

#### API Tests

```typescript
// Test API endpoints
import { createMocks } from 'node-mocks-http';
import handler from '../pages/api/users';

describe('/api/users', () => {
  it('should return users list', async () => {
    const { req, res } = createMocks({
      method: 'GET',
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toHaveProperty('data');
  });
});
```

### Test Coverage

#### Coverage Requirements

- **Unit Tests**: 80% minimum coverage
- **Integration Tests**: 70% minimum coverage
- **E2E Tests**: Critical user flows covered

#### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run specific test file
npm test Button.test.tsx
```

---

## 📚 Documentation Guidelines

### Code Documentation

#### JSDoc Comments

```typescript
/**
 * Creates a new user account
 * @param userData - User information
 * @param userData.email - User's email address
 * @param userData.password - User's password
 * @param userData.role - User's role
 * @returns Promise resolving to created user
 * @throws {ValidationError} When user data is invalid
 * @throws {ConflictError} When user already exists
 */
export async function createUser(userData: CreateUserData): Promise<User> {
  // Implementation
}
```

#### README Files

````markdown
# Component Name

Brief description of what this component does.

## Usage

```typescript
import { ComponentName } from './ComponentName';

<ComponentName prop1="value" prop2={123} />
```
````

## Props

| Prop  | Type   | Default | Description          |
| ----- | ------ | ------- | -------------------- |
| prop1 | string | -       | Description of prop1 |
| prop2 | number | 0       | Description of prop2 |

## Examples

### Basic Usage

[Example code]

### Advanced Usage

[Example code]

````

### API Documentation

#### Endpoint Documentation
```typescript
/**
 * @api {get} /api/services Get Services
 * @apiName GetServices
 * @apiGroup Services
 * @apiVersion 1.0.0
 *
 * @apiQuery {string} [category] Service category filter
 * @apiQuery {number} [minPrice] Minimum price filter
 * @apiQuery {number} [maxPrice] Maximum price filter
 *
 * @apiSuccess {Object[]} data Array of services
 * @apiSuccess {string} data.id Service ID
 * @apiSuccess {string} data.title Service title
 * @apiSuccess {number} data.price Service price
 *
 * @apiError {Object} 400 Bad Request
 * @apiError {string} 400.error Error message
 */
````

---

## 🐛 Issue Reporting

### Bug Reports

When reporting bugs, please include:

1. **Clear title** describing the issue
2. **Steps to reproduce** the bug
3. **Expected behavior** vs actual behavior
4. **Environment details** (OS, browser, Node.js version)
5. **Screenshots** or error messages if applicable
6. **Code snippets** if relevant

#### Bug Report Template

```markdown
## Bug Description

Brief description of the bug

## Steps to Reproduce

1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

## Expected Behavior

What you expected to happen

## Actual Behavior

What actually happened

## Environment

- OS: [e.g. Windows 10, macOS 12.0]
- Browser: [e.g. Chrome 96, Firefox 95]
- Node.js: [e.g. 18.0.0]

## Additional Context

Any other context about the problem
```

### Feature Requests

When requesting features, please include:

1. **Clear title** describing the feature
2. **Problem description** - what problem does this solve?
3. **Proposed solution** - how should it work?
4. **Alternatives considered** - other solutions you've thought about
5. **Additional context** - any other relevant information

---

## 🔀 Pull Request Process

### PR Guidelines

#### Before Submitting

1. **Ensure tests pass**: `npm test`
2. **Run linting**: `npm run lint`
3. **Check types**: `npm run type-check`
4. **Update documentation** if needed
5. **Update CHANGELOG.md** if applicable

#### PR Description Template

```markdown
## Description

Brief description of changes

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing

- [ ] Unit tests added/updated
- [ ] Integration tests added/updated
- [ ] Manual testing completed

## Checklist

- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] CHANGELOG.md updated
- [ ] No breaking changes (or breaking changes documented)
```

#### Review Process

1. **Automated checks** must pass
2. **Code review** by maintainers
3. **Testing** by QA team (if applicable)
4. **Approval** from at least one maintainer
5. **Merge** after approval

### Commit Message Format

Use conventional commits format:

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

#### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Test changes
- `chore`: Build process or auxiliary tool changes

#### Examples

```
feat(auth): add two-factor authentication
fix(api): resolve user creation validation error
docs(readme): update installation instructions
test(components): add Button component tests
```

---

## 🚀 Release Process

### Version Numbering

We use [Semantic Versioning](https://semver.org/):

- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes (backward compatible)

### Release Steps

1. **Update version** in `package.json`
2. **Update CHANGELOG.md** with new features/fixes
3. **Create release branch** from `main`
4. **Run full test suite**
5. **Create release PR** for review
6. **Merge release PR** after approval
7. **Create GitHub release** with release notes
8. **Deploy to production**

### Release Checklist

- [ ] All tests passing
- [ ] Documentation updated
- [ ] CHANGELOG.md updated
- [ ] Version bumped
- [ ] Release notes prepared
- [ ] Production deployment tested

---

## 🆘 Getting Help

### Resources

- **Documentation**: [docs.businessserviceshub.com](https://docs.businessserviceshub.com)
- **Discord**: [discord.gg/business-services-hub](https://discord.gg/business-services-hub)
- **GitHub Discussions**: [GitHub Discussions](https://github.com/business-services-hub/business-services-hub/discussions)
- **Email**: contributors@businessserviceshub.com

### Common Issues

#### Development Setup Issues

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Reset Supabase local development
supabase stop
supabase start
```

#### Build Issues

```bash
# Clear Next.js cache
rm -rf .next
npm run build

# Check TypeScript errors
npm run type-check
```

#### Test Issues

```bash
# Clear test cache
npm test -- --clearCache

# Run tests in verbose mode
npm test -- --verbose
```

---

## 🎯 Contribution Recognition

### Contributors

We recognize all contributors in our:

- **README.md** contributors section
- **GitHub contributors** page
- **Release notes** for significant contributions
- **Annual contributor** appreciation

### Types of Recognition

- **Code Contributors**: Code, tests, documentation
- **Bug Reporters**: Quality bug reports
- **Feature Requesters**: Valuable feature suggestions
- **Community Helpers**: Helping other contributors
- **Documentation Writers**: Improving documentation

---

## 📞 Contact

### Maintainers

- **Project Lead**: [@project-lead](https://github.com/project-lead)
- **Technical Lead**: [@tech-lead](https://github.com/tech-lead)
- **Community Manager**: [@community-manager](https://github.com/community-manager)

### Communication Channels

- **GitHub Issues**: For bug reports and feature requests
- **GitHub Discussions**: For general questions and discussions
- **Discord**: For real-time chat and quick questions
- **Email**: For private or sensitive matters

---

_Thank you for contributing to the Business Services Hub! Your contributions help make our platform better for everyone._

_Last updated: January 2025_
_Contributing Guide version: 1.0.0_
