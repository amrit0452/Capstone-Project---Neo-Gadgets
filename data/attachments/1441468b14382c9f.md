# Page snapshot

```yaml
- generic [ref=e3]:
  - link "⚡ NEO GADGETS" [ref=e5] [cursor=pointer]:
    - /url: /index.html
  - heading "New Operator" [level=1] [ref=e6]
  - paragraph [ref=e7]: Register your biometrics to the system
  - alert
  - status
  - generic [ref=e8]:
    - generic [ref=e9]:
      - text: Full Name
      - textbox "Full Name" [ref=e10]:
        - /placeholder: Your name
    - generic [ref=e11]:
      - text: Email Address
      - textbox "Email Address" [ref=e12]:
        - /placeholder: you@example.com
    - generic [ref=e13]:
      - text: Password
      - textbox "Password" [ref=e14]:
        - /placeholder: Minimum 6 characters
    - generic [ref=e15]:
      - text: Confirm Password
      - textbox "Confirm Password" [ref=e16]:
        - /placeholder: Repeat password
    - button "Create Account" [ref=e17]
  - generic [ref=e18]:
    - text: Already have an account?
    - link "Log in here" [ref=e19] [cursor=pointer]:
      - /url: /login.html
```