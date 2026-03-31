# Page snapshot

```yaml
- generic [ref=e3]:
  - link "⚡ NEO GADGETS" [ref=e5] [cursor=pointer]:
    - /url: /index.html
  - heading "New Operator" [level=1] [ref=e6]
  - paragraph [ref=e7]: Register your biometrics to the system
  - generic [ref=e8]:
    - generic [ref=e9]:
      - generic [ref=e10]: Full Name
      - textbox "Full Name" [ref=e11]:
        - /placeholder: Your name
        - text: Amrit
    - generic [ref=e12]:
      - generic [ref=e13]: Email Address
      - textbox "Email Address" [ref=e14]:
        - /placeholder: you@example.com
        - text: invalidemail
      - generic [ref=e15]: Please enter a valid email address (e.g. you@example.com).
    - generic [ref=e16]:
      - generic [ref=e17]: Password
      - textbox "Password" [ref=e18]:
        - /placeholder: Minimum 6 characters
        - text: "123456"
    - generic [ref=e19]:
      - generic [ref=e20]: Confirm Password
      - textbox "Confirm Password" [ref=e21]:
        - /placeholder: Repeat password
        - text: "123456"
    - button "Create Account" [active] [ref=e22] [cursor=pointer]
  - generic [ref=e23]:
    - text: Already have an account?
    - link "Log in here" [ref=e24] [cursor=pointer]:
      - /url: /login.html
```