# Monorepo Directory Structure

This document provides an overview of the folder structure used in this monorepo, detailing the purpose of each folder and key concepts to understand while working with this codebase.

## File Tree

/apps
└── browser
    └── tenant-registration            # Web application for registering new tenants
└── server
    └── tenant-management              # Back-end service for managing tenant operations
        └── docs
            └── architecture
                ├── overview.md                    # High-level overview of the architecture
                ├── architecture-reasoning.md      # Reasons behind architectural decisions
                └── domain-model                   # Documentation focused on the domain model
                    ├── assets
                    │   └── domain-model.diagram.drawio  # Diagram of the domain model
                    └── building-blocks            # Key components of the domain model
                        ├── entities.md            # Details on domain entities
                        ├── value-objects.md       # Description of value objects used in the domain
                        ├── errors.md              # Common errors and exceptions in the domain
                        └── aggregates.md          # Information about aggregates and their boundaries
                    ├── introduction.md            # Introduction to the domain model
                    └── overview.md                # Summary of the domain model concepts
                └── common-terminology.md          # Definitions of architectural and domain-specific terms
            └── entry-points
                ├── api                            # General API-related entry points
                │   ├── restful                    # RESTful API documentation
                │   ├── graphql                    # GraphQL API documentation (if applicable)
                │   └── websocket                  # WebSocket API documentation (if applicable)
                ├── cli                            # Command Line Interface documentation
                │   ├── commands                   # Specific commands and usage
                │   ├── options                    # Available options and flags for CLI
                │   └── examples                   # Usage examples for CLI commands
                └── events                         # Event-driven architecture documentation
                    ├── event-types                # Types of events used in the system
                    ├── producers                  # How to produce events
                    └── consumers                  # How to consume events
        └── src
            └── config                              # Configuration files for the application
                ├── app-routes.config.ts           # Configuration for application routes
                └── data-access.config.ts          # Configuration for data access
            └── modules                             # Contains modules specific to tenant management functionality
                └── tenant
                    ├── __tests__                   # Tests for the tenant module
                    │   ├── unit                    # Unit tests for tenant functionality
                    │   │   ├── __setup             # Setup files for unit tests
                    │   │   └── tenant              # Tests specific to tenant operations
                    │   │       ├── create-tenant.unit-test.ts  # Unit test for creating a tenant
                    │   │       └── delete-tenant.unit-test.ts  # Unit test for deleting a tenant
                    │   └── e2e                     # End-to-end tests for the tenant module
                    │       ├── __setup             # Setup files for end-to-end tests
                    │       └── tenant              # End-to-end tests for tenant operations
                    │           ├── create-tenant
                    │           │   ├── create-tenant.data-seed.yaml     # Data seeds for create tenant E2E test
                    │           │   ├── create-tenant.e2e-test.ts         # End-to-end test for creating a tenant
                    │           │   └── create-tenant.expected-behavior   # Expected behavior for create tenant E2E test
                    │           └── delete-tenant
                    │               ├── delete-tenant.e2e-test.ts         # End-to-end test for deleting a tenant
                    │               └── delete-tenant.expected-behavior   # Expected behavior for delete tenant E2E test
                    └── utils                     # Utility functions and mocks for testing
                        └── mocks
                            ├── tenant.repository.mock.ts       # Mock implementation of tenant repository
                            └── tenant.http-client.ts           # HTTP client for tenant operations
                        ├── tenant.cli-client.ts                # CLI client for tenant operations
                        ├── tenant.message-client.ts            # Message client for tenant operations
                        └── tenant.test-context.ts              # Test context setup for tenant tests
            └── application                      # Application layer components for tenant management
                └── event-handlers
                    └── create-user-when-tenant-is-created.domain-event-handler.ts  # Domain event handler for creating user when tenant is created
            └── domain                           # Domain model components for tenant management
                ├── events
                │   ├── tenant-created.domain-event.ts           # Event triggered when a tenant is created
                │   ├── tenant-deleted.domain-event.ts           # Event triggered when a tenant is deleted
                │   └── tenant-legal-entity-updated.domain-event.ts # Event triggered when a tenant's legal entity is updated
                ├── value-objects
                │   └── legal-entity.value-object.ts             # Value object representing a legal entity
                ├── tenant.entity.ts                             # Definition of the tenant entity
                ├── tenant.errors.ts                             # Common errors related to tenants
                └── tenant.types.ts                              # Type definitions for tenants
            └── interface                        # Interfaces for commands and queries
                ├── commands                     # Command handlers for tenant operations
                │   ├── create-tenant
                │   │   ├── create-tenant.command.ts            # Command definition for creating a tenant
                │   │   ├── create-tenant.cli-controller.ts     # CLI controller for create tenant command
                │   │   ├── create-tenant.http-controller.ts    # HTTP controller for create tenant command
                │   │   ├── create-tenant.message-controller.ts # Message controller for create tenant command
                │   │   ├── create-tenant.request-dto.ts        # Request DTO for creating a tenant
                │   │   └── create-tenant.service.ts            # Service implementation for creating a tenant
                │   ├── delete-tenant
                │   │   ├── delete-tenant.command.ts            # Command definition for deleting a tenant
                │   │   ├── delete-tenant.cli-controller.ts     # CLI controller for delete tenant command
                │   │   ├── delete-tenant.http-controller.ts    # HTTP controller for delete tenant command
                │   │   ├── delete-tenant.message-controller.ts # Message controller for delete tenant command
                │   │   ├── delete-tenant.request-dto.ts        # Request DTO for deleting a tenant
                │   │   └── delete-tenant.service.ts            # Service implementation for deleting a tenant
                │   └── update-tenant-legal-entity
                │       ├── update-tenant-legal-entity.command.ts # Command definition for updating tenant legal entity
                │       ├── update-tenant-legal-entity.cli-controller.ts # CLI controller for update tenant legal entity command
                │       ├── update-tenant-legal-entity.http-controller.ts # HTTP controller for update tenant legal entity command
                │       ├── update-tenant-legal-entity.message-controller.ts # Message controller for update tenant legal entity command
                │       ├── update-tenant-legal-entity.request-dto.ts # Request DTO for updating tenant legal entity
                │       └── update-tenant-legal-entity.service.ts # Service implementation for updating tenant legal entity
                └── queries                      # Query handlers for retrieving tenant information
                    └── find-tenants
                        ├── find-tenants.query.ts                    # Query definition for finding tenants
                        ├── find-tenants.cli-controller.ts           # CLI controller for find tenants query
                        ├── find-tenants.http-controller.ts          # HTTP controller for find tenants query
                        ├── find-tenants.message-controller.ts       # Message controller for find tenants query
                        ├── find-tenants.response-dto.ts             # Response DTO for find tenants query
                        └── find-tenants.query-handler.ts            # Handler for processing find tenants query
            └── infrastructure                   # Infrastructure components for data access
                └── data-access
                    ├── tenant.repository.ts                       # Implementation of the tenant repository
                    └── tenant.repository.port.ts                  # Port interface for the tenant repository
            └── data-transfer                    # Data transfer objects for the tenant module
                ├── tenant-paginated.response-dto.ts               # Paginated response DTO for tenants
                └── tenant.response-dto.ts                         # Response DTO for tenant details
            ├── tenant.di-tokens.ts                        # Dependency injection tokens for tenant module
            ├── tenant.mapper.ts                             # Mapper for transforming tenant entities
            └── tenant.module.ts                             # Main module for the tenant functionality
        ├── app.module.ts                                   # Main application module for the service
        └── main.ts                                         # Entry point for the tenant management service
    └── project.json                                       # Configuration file for the tenant management project

/packages
└── browser
    └── apps
        └── developer-tools                                 # Tools for developers to assist with development and debugging
            └── __tests__                                   # Testing structure for developer tools
                ├── unit                                    # Unit tests for developer tools functionality
                │   ├── __setup                             # Setup files for unit tests
                │   └── open-developer-tools                # Tests for opening developer tools
                │       └── open-developer-tools.unit-test.ts  # Unit test for opening developer tools
                └── e2e                                     # End-to-end tests for developer tools
                    ├── __setup                             # Setup files for end-to-end tests
                    └── load-developer-tools                # End-to-end tests for loading developer tools
                        ├── load-developer-tools.data-seed.yaml  # Data seeds for loading developer tools E2E test
                        ├── load-developer-tools.e2e-test.ts      # End-to-end test for loading developer tools
                        └── load-developer-tools.expected-behavior # Expected behavior for loading developer tools E2E test
                    └── close-developer-tools                # End-to-end tests for closing developer tools
                        ├── close-developer-tools.data-seed.yaml  # Data seeds for closing developer tools
                        └── close-developer-tools.e2e-test.ts      # End-to-end test for closing developer tools


## /apps

### /browser
- **/tenant-registration**  
  _Web application for registering new tenants_

### /server
- **/tenant-management**  
  _Back-end service for managing tenant operations_

  - **/docs**
    - **/architecture**
      - `overview.md` - High-level overview of the architecture
      - `architecture-reasoning.md` - Reasons behind architectural decisions
      - **/domain-model** - Documentation focused on the domain model
        - **/assets**
          - `domain-model.diagram.drawio` - Diagram of the domain model
        - **/building-blocks** - Key components of the domain model
          - `entities.md` - Details on domain entities
          - `value-objects.md` - Description of value objects used in the domain
          - `errors.md` - Common errors and exceptions in the domain
          - `aggregates.md` - Information about aggregates and their boundaries
        - `introduction.md` - Introduction to the domain model
        - `overview.md` - Summary of the domain model concepts
      - `common-terminology.md` - Definitions of architectural and domain-specific terms

    - **/entry-points**
      - **/api/** - General API-related entry points
        - **/restful/** - RESTful API documentation
        - **/graphql/** - GraphQL API documentation (if applicable)
        - **/websocket/** - WebSocket API documentation (if applicable)

      - **/cli/** - Command Line Interface documentation
        - **/commands/** - Specific commands and usage
        - **/options/** - Available options and flags for CLI
        - **/examples/** - Usage examples for CLI commands

      - **/events/** - Event-driven architecture documentation
        - **/event-types/** - Types of events used in the system
        - **/producers/** - How to produce events
        - **/consumers/** - How to consume events

  - **/src**
    - **/config** - Configuration files for the application
      - `app-routes.config.ts` - Configuration for application routes
      - `data-access.config.ts` - Configuration for data access

    - **/modules** - Contains modules specific to tenant management functionality
      - **/tenant**
        - **/__tests__** - Tests for the tenant module
          - **/unit** - Unit tests for tenant functionality
            - **/__setup** - Setup files for unit tests
            - **/tenant** - Tests specific to tenant operations
              - `create-tenant.unit-test.ts` - Unit test for creating a tenant
              - `delete-tenant.unit-test.ts` - Unit test for deleting a tenant
            - **/tenant-legal-entity** - Tests related to tenant legal entities
              - `update-tenant-legal-entity.unit-test.ts` - Unit test for updating tenant legal entity
          - **/e2e** - End-to-end tests for the tenant module
            - **/__setup** - Setup files for end-to-end tests
            - **/tenant** - End-to-end tests for tenant operations
              - **/create-tenant**
                - `create-tenant.data-seed.yaml` - Data seeds for create tenant E2E test
                - `create-tenant.e2e-test.ts` - End-to-end test for creating a tenant
                - `create-tenant.expected-behavior` - Expected behavior for create tenant E2E test
              - **/delete-tenant**
                - `delete-tenant.e2e-test.ts` - End-to-end test for deleting a tenant
                - `delete-tenant.expected-behavior` - Expected behavior for delete tenant E2E test
            - **/tenant-legal-entity**
              - `update-tenant-legal-entity.unit-test.ts` - Unit test for updating tenant legal entity
        - **/utils** - Utility functions and mocks for testing
          - **/mocks**
            - `tenant.repository.mock.ts` - Mock implementation of tenant repository
          - `tenant.http-client.ts` - HTTP client for tenant operations
          - `tenant.cli-client.ts` - CLI client for tenant operations
          - `tenant.message-client.ts` - Message client for tenant operations
          - `tenant.test-context.ts` - Test context setup for tenant tests

      - **/application** - Application layer components for tenant management
        - **/event-handlers**
          - `create-user-when-tenant-is-created.domain-event-handler.ts` - Domain event handler for creating user when tenant is created

      - **/domain** - Domain model components for tenant management
        - **/events**
          - `tenant-created.domain-event.ts` - Event triggered when a tenant is created
          - `tenant-deleted.domain-event.ts` - Event triggered when a tenant is deleted
          - `tenant-legal-entity-updated.domain-event.ts` - Event triggered when a tenant's legal entity is updated
        - **/value-objects**
          - `legal-entity.value-object.ts` - Value object representing a legal entity
        - `tenant.entity.ts` - Definition of the tenant entity
        - `tenant.errors.ts` - Common errors related to tenants
        - `tenant.types.ts` - Type definitions for tenants

      - **/interface** - Interfaces for commands and queries
        - **/commands** - Command handlers for tenant operations
          - **/create-tenant**
            - `create-tenant.command.ts` - Command definition for creating a tenant
            - `create-tenant.cli-controller.ts` - CLI controller for create tenant command
            - `create-tenant.http-controller.ts` - HTTP controller for create tenant command
            - `create-tenant.message-controller.ts` - Message controller for create tenant command
            - `create-tenant.request-dto.ts` - Request DTO for creating a tenant
            - `create-tenant.service.ts` - Service implementation for creating a tenant
          - **/delete-tenant**
            - `delete-tenant.command.ts` - Command definition for deleting a tenant
            - `delete-tenant.cli-controller.ts` - CLI controller for delete tenant command
            - `delete-tenant.http-controller.ts` - HTTP controller for delete tenant command
            - `delete-tenant.message-controller.ts` - Message controller for delete tenant command
            - `delete-tenant.request-dto.ts` - Request DTO for deleting a tenant
            - `delete-tenant.service.ts` - Service implementation for deleting a tenant
          - **/update-tenant-legal-entity**
            - `update-tenant-legal-entity.command.ts` - Command definition for updating tenant legal entity
            - `update-tenant-legal-entity.cli-controller.ts` - CLI controller for update tenant legal entity command
            - `update-tenant-legal-entity.http-controller.ts` - HTTP controller for update tenant legal entity command
            - `update-tenant-legal-entity.message-controller.ts` - Message controller for update tenant legal entity command
            - `update-tenant-legal-entity.request-dto.ts` - Request DTO for updating tenant legal entity
            - `update-tenant-legal-entity.service.ts` - Service implementation for updating tenant legal entity
        - **/queries** - Query handlers for retrieving tenant information
          - **/find-tenants**
            - `find-tenants.query.ts` - Query definition for finding tenants
            - `find-tenants.cli-controller.ts` - CLI controller for find tenants query
            - `find-tenants.http-controller.ts` - HTTP controller for find tenants query
            - `find-tenants.message-controller.ts` - Message controller for find tenants query
            - `find-tenants.response-dto.ts` - Response DTO for find tenants query
            - `find-tenants.query-handler.ts` - Handler for processing find tenants query

      - **/infrastructure** - Infrastructure components for data access
        - **/data-access**
          - `tenant.repository.ts` - Implementation of the tenant repository
          - `tenant.repository.port.ts` - Port interface for the tenant repository

      - **/data-transfer** - Data transfer objects for the tenant module
        - `tenant-paginated.response-dto.ts` - Paginated response DTO for tenants
        - `tenant.response-dto.ts` - Response DTO for tenant details

      - `tenant.di-tokens.ts` - Dependency injection tokens for tenant module
      - `tenant.mapper.ts` - Mapper for transforming tenant entities
      - `tenant.module.ts` - Main module for the tenant functionality

    - `app.module.ts` - Main application module for the service
    - `main.ts` - Entry point for the tenant management service

  - `project.json` - Configuration file for the tenant management project

## /packages

### /browser
- **/apps**
  - **/developer-tools** - Tools for developers to assist with development and debugging
    - **/__tests__** - Testing structure for developer tools
      - **/unit** - Unit tests for developer tools functionality
        - **/__setup** - Setup files for unit tests
        - **/open-developer-tools**
          - `open-developer-tools.unit-test.ts` - Unit test for opening developer tools
      - **/e2e** - End-to-end tests for developer tools
        - **/__setup** - Setup files for end-to-end tests
        - **/load-developer-tools**
          - `load-developer-tools.data-seed.yaml` - Data seeds for loading developer tools E2E test
          - `load-developer-tools.e2e-test.ts` - End-to-end test for loading developer tools
          -
