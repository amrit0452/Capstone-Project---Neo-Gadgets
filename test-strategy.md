# 🧪 Test Strategy Document – Neo Gadgets

## 1. Introduction
This document defines the testing strategy for the Neo Gadgets e-commerce application. 
The goal is to ensure system quality, reliability, and seamless user experience.

---

## 2. Scope

### In Scope Modules:
- User Registration & Authentication
- Login & Session Management
- Product Catalog & Search
- Shopping Cart Management
- Order Processing & Payment
- Order History
- User Profile
- Product Reviews

### Out of Scope:
- Performance Testing
- Security Testing
- Mobile Testing

---

## 3. Test Approach

### Manual Testing:
- Exploratory Testing
- Usability Testing
- Negative Testing

### Automation Testing:
- End-to-End flow automation (Login → Checkout)
- Regression Testing
- Smoke Testing

---

## 4. Test Levels

- Unit Testing (by developers)
- Integration Testing
- System Testing
- Regression Testing

---

## 5. Test Types

- Functional Testing
- UI Testing
- Database Testing
- Negative Testing

---

## 6. Entry Criteria

- Application is deployed and accessible
- Requirements are defined
- Test environment is ready

---

## 7. Exit Criteria

- All critical test cases executed
- No high severity defects open
- Test report generated

---

## 8. Risk Analysis

| Risk | Impact | Mitigation |
|------|--------|-----------|
| Payment failure | High | Test with multiple scenarios |
| Cart calculation issues | High | Validate price logic |
| Login failure | High | Strong validation checks |

---

## 9. Tools Used

- Playwright / Selenium
- Java / JavaScript
- SQL (Database validation)
- GitHub (Version control)

---

## 10. Deliverables

- Test Plan
- Test Cases
- RTM
- Test Execution Report
