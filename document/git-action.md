# Commit convention

<aside>
ℹ️ [https://www.conventionalcommits.org/en/v1.0.0/](https://www.conventionalcommits.org/en/v1.0.0/)

</aside>

# Cấu trúc

```bash
<type>[optional scope]:<description>
[optional body]
[optional footer]
```

- type: kiểu

  - feat: A new feature or enhancement added to the codebase.

  - fix: A bug fix or correction to resolve an issue.
  - docs: Documentation changes or updates.
  - style: Changes related to code formatting, indentation, or whitespace.
  - refactor: Code refactoring without adding new features or fixing bugs.
  - test: Addition or modification of test cases.
  - chore: Other changes not directly affecting the code (e.g., build scripts, dependencies).

- scope: nó ảnh hưởng tới phần nào
- description: mô tả

---

# Benefits

Browsing history

```bash
git log --oneline --grep "^feat\|^fix"
```
