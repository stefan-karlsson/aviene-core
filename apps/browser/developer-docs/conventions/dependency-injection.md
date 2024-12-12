# Dependency Injection

We have chosen **Awilix** as our Dependency Injection (DI) library for this project. Awilix provides a simple, flexible, and powerful way to manage dependencies in our Node.js application, enabling us to build a modular, testable, and maintainable codebase.

## Why Awilix?

Awilix was selected after considering several factors crucial to our project's architecture and development needs:

### 1. **Flexibility and Modularity**
   - Awilix allows us to configure dependencies as **SINGLETON**, **SCOPED**, or **TRANSIENT**, giving us control over how instances are shared or recreated. This flexibility is essential for creating modules that can scale independently.
   - We can easily organize dependencies by modules (such as domain, infrastructure, and application layers), which aligns well with our Domain-Driven Design (DDD) approach.

### 2. **Lightweight and Focused**
   - Unlike more complex DI frameworks, Awilix is lightweight and focuses solely on DI without introducing unnecessary overhead. This keeps our setup simple and efficient, making it ideal for a clean and modular codebase.

### 3. **Excellent TypeScript Support**
   - Awilix integrates seamlessly with TypeScript, providing type-safe configurations that help prevent runtime errors and enhance developer productivity. This aligns with our commitment to type safety and code reliability.

### 4. **Easily Testable Code**
   - By centralizing dependencies, Awilix makes our application components more testable. Each module or service can have its dependencies easily mocked or replaced, making unit tests straightforward to write and maintain.

## How We Use Awilix

- **Shared DI Container**: We’ve set up a centralized DI container to register dependencies, with separate containers as needed for each module.
- **Scoped Registrations**: Dependencies are registered as SINGLETON, SCOPED, or TRANSIENT based on usage, ensuring resources are efficiently managed.
- **Context-Aware DI**: Awilix allows for hierarchical injection, so each module can define its specific dependencies while sharing common ones.

## Getting Started

To use the DI container and register dependencies, check the `/src/container` directory. Here, you’ll find examples and instructions for adding new services or modules to the Awilix container.

For any questions or support, please reach out to the development team!

---

**Happy Coding!**
