# GitHub Copilot Instructions

## General Guidelines

- Follow **SOLID** principles and **clean architecture**.
- Adhere to **domain-driven design (DDD)** where applicable.
- Prioritize readability and maintainability in all code suggestions.
- Follow existing linter rules and style guidelines within the workspace.

---

## SOLID Principles

### 1. Single Responsibility Principle (SRP)

- Ensure that each class, function, or module has only one responsibility and one reason to change.

```typescript
// Create a "UserService" class that only handles user operations like createUser(), updateUser(), deleteUser().
```

### 2. Open/Closed Principle (OCP)

- Classes and functions should be open for extension but closed for modification. Favor the use of abstractions and interfaces.

```typescript
// Create a base interface "PaymentGateway". Allow for the creation of different implementations like "StripePayment" or "PayPalPayment" without modifying existing classes.
```

### 3. Liskov Substitution Principle (LSP)

- Subclasses should be replaceable by their base classes without breaking the application.

```typescript
// Define a base class "Shape" with a method "calculateArea()". Ensure derived classes (e.g., Circle, Square) can replace the base class without issues.
```

### 4. Interface Segregation Principle (ISP)

- Prefer small, specific interfaces to large, general ones. Clients should not be forced to implement methods they do not need.

```typescript
// Split a large "Vehicle" interface into smaller interfaces like "Drivable" and "Flyable" to avoid unnecessary method implementations.
```

### 5. Dependency Inversion Principle (DIP)

- Depend on abstractions rather than concrete implementations. High-level modules should not depend on low-level modules.

```typescript
// Implement a "NotificationService" that depends on an interface "MessageSender" instead of a specific class like "EmailSender" or "SMSSender".
```

## Domain-Driven Design (DDD) Guidelines

- Always start by identifying core domain models.
- Keep domain logic within domain models and avoid leaking it into services or controllers.
- Use value objects to encapsulate small, immutable data types with behavior.

```typescript
// Create a domain model for "Order" with properties like orderId, customer, and orderItems. Include methods like calculateTotal() and validateOrder() to keep business logic within the model.
```

## Clean Code & Architecture

### Separation of Concerns

- Keep business logic out of controllers and views.
- Delegate business logic to service classes, and data access to repository classes.

```typescript
// Write a "ProductController" that only handles HTTP requests, delegating business logic to a "ProductService" and data access to a "ProductRepository".
```

### Meaningful Names

- Use descriptive and meaningful variable and function names.

```typescript
// Use "userName" instead of "u", "totalAmount" instead of "t".
```

### Avoid Magic Numbers

- Replace magic numbers with constants or named values.

```typescript
// Replace `60` with `const SECONDS_IN_MINUTE = 60;`.
```

### Small Functions
- Keep functions small and focused on a single task.

```typescript
// Break down large functions into smaller, reusable functions. For example, split a function that processes payments and sends notifications into two distinct functions.
```

## Testing Guidelines
- Always generate unit tests for the code.
- Follow Arrange-Act-Assert (AAA) pattern in tests.

```typescript
// Write unit tests for the "Order" domain model, covering methods like calculateTotal() and validateOrder().
```

## Miscellaneous

- Use async/await for asynchronous code and handle errors gracefully.
- Avoid using "any" type. Always use specific types or generics.
- Ensure the generated code is compatible with TypeScript strict mode.

```typescript
// Always specify types for function arguments and return values, avoiding the use of "any".
// Use async/await in functions that involve asynchronous operations.
```

## Use Immutability Wherever Possible

-Favor immutability, especially for domain models and value objects, to ensure consistency and avoid unintended side effects.

```typescript
// Make sure to use readonly or immutability techniques for objects and arrays that shouldn’t change after initialization.
const user: Readonly<User> = { id: 1, name: 'Alice' };
// Use immutable array methods like map, filter, and reduce.
```

## Use Dependency Injection (DI)

-Implement dependency injection to manage dependencies between classes. This decouples the components, making them easier to test and more flexible.

```typescript
// Use a constructor to inject dependencies like a repository into a service.
class UserService {
  constructor(private userRepository: UserRepository) {}
  // Methods here...
}
```

## Favor Composition Over Inheritance

- Use composition instead of inheritance where possible, as this allows more flexibility and reduces tight coupling between classes.


```typescript
// Instead of inheriting, inject behaviors via composition.
class Car {
  constructor(private engine: Engine) {}
  drive() {
    this.engine.start();
  }
}
```

## Use Functional Programming Concepts

- Embrace functional programming (FP) principles where appropriate, such as pure functions, higher-order functions, and avoiding side effects.


```typescript
// Create pure functions without side effects. Given the same inputs, they should always return the same result.
function calculateTax(price: number): number {
  return price * 0.2;
}
```

## Prefer Specific Exception Handling

- Always handle specific exceptions instead of using generic error handling mechanisms. This makes debugging and maintenance easier.

```typescript
// Catch specific errors rather than generic ones.
try {
  await processOrder(orderId);
} catch (e: OrderNotFoundError) {
  // Handle the order not found scenario
}
```

## Type-Safe Null and Undefined Handling

- Always check for null and undefined explicitly and avoid using any. Use Optional or Maybe types where applicable to prevent runtime errors.

```typescript
// Use strict type checking to avoid null/undefined issues.
function getUserName(user?: User): string {
  return user?.name ?? 'Guest';  // Avoid null or undefined
}
```

## Modularize Your Code

- Break your code into small, independent modules that are reusable and testable. Use the barrel pattern (index.ts) to organize and re-export modules.

```typescript
// index.ts
export * from './user.service';
export * from './order.service';
```

## Favor Type Guards and Narrowing

- Take advantage of TypeScript's type guards to check and narrow types in runtime, providing more safety.

```typescript
// Use type guards to narrow down types.
function isUser(obj: any): obj is User {
  return (obj as User).name !== undefined;
}
```

## Avoid Overusing Classes for Everything

- Use TypeScript's powerful type system with interfaces, types, and utility types (like Partial, Pick, Readonly, etc.) when a full class is unnecessary.

```typescript
// Use types and interfaces for simple data structures instead of creating classes.
type Product = {
  id: number;
  name: string;
  price: number;
};
```

## Apply Consistent Error Handling

- Have a consistent strategy for error handling throughout the codebase, whether it’s using Result types, throwing exceptions, or propagating errors.

```typescript
// Return Result types to avoid throwing exceptions and for easier error handling.
class Result<T, E> {
  private constructor(public value?: T, public error?: E) {}
  static success<T>(value: T): Result<T, null> {
    return new Result(value);
  }
  static failure<E>(error: E): Result<null, E> {
    return new Result(undefined, error);
  }
}
```
## Use Effective Documentation

- Maintain self-documenting code, but also document public APIs, interfaces, and complex business rules clearly with JSDoc comments.

```typescript
/**
 * Calculates the price after applying a discount.
 * @param price - The original price
 * @param discount - The discount percentage (0-100)
 * @returns The discounted price
 */
function applyDiscount(price: number, discount: number): number {
  return price * (1 - discount / 100);
}
```
## Test-Driven Development (TDD)

- Whenever possible, write tests first to guide your implementation. This results in cleaner, more testable code.

```typescript
// Write unit tests with clear Arrange-Act-Assert pattern.
test('should calculate total price with tax', () => {
  // Arrange
  const price = 100;

  // Act
  const result = calculateTax(price);

  // Assert
  expect(result).toBe(120);
});
```