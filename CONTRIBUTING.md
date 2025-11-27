# Contributing Guidelines

Thank you for your interest in contributing to this project! While this is primarily an assignment submission, feedback and suggestions are always welcome.

## 📋 Table of Contents
- [Code of Conduct](#code-of-conduct)
- [How to Contribute](#how-to-contribute)
- [Development Setup](#development-setup)
- [Coding Standards](#coding-standards)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)

## 🤝 Code of Conduct

This project follows a respectful and inclusive environment. Please:
- Be respectful and constructive in feedback
- Focus on the code, not the person
- Welcome newcomers and different perspectives

## 🚀 How to Contribute

### Reporting Bugs
If you find a bug:
1. Check if it's already reported in Issues
2. Create a new issue with:
   - Clear description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable

### Suggesting Enhancements
Enhancement suggestions are welcome! Please:
1. Check if it's already suggested
2. Explain the use case clearly
3. Consider backward compatibility

### Code Contributions
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Test thoroughly
5. Commit with meaningful messages
6. Push to your fork
7. Open a Pull Request

## 💻 Development Setup

```bash
# Clone your fork
git clone https://github.com/your-username/project-name.git

# Install dependencies
npm install

# Start development server
npm run dev

# Run linting
npm run lint

# Build for production
npm run build
```

## 📝 Coding Standards

### TypeScript
- Use TypeScript strict mode
- Define proper types/interfaces
- Avoid `any` type
- Use meaningful variable names

### React
- Functional components with hooks
- Props interface for every component
- Proper key props in lists
- Use semantic HTML

### Styling
- Follow Tailwind utility-first approach
- Use design system tokens from index.css
- Never use arbitrary color values
- Keep components responsive

### Accessibility
- Use semantic HTML tags
- Include ARIA labels where needed
- Ensure keyboard navigation
- Maintain color contrast ratios
- Test with screen readers

### File Structure
```
src/
├── components/      # Reusable UI components
│   └── Quiz/       # Feature-specific components
├── data/           # Static data and constants
├── pages/          # Route components
├── lib/            # Utility functions
└── hooks/          # Custom React hooks
```

## 📋 Commit Messages

Follow conventional commits format:

```
type(scope): subject

body (optional)

footer (optional)
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Build process or auxiliary tools

### Examples
```
feat(quiz): add timer functionality
fix(navigation): correct button disabled state
docs(readme): update deployment instructions
style(button): improve hover transition
refactor(quiz): extract answer logic to hook
```

## 🔄 Pull Request Process

1. **Update Documentation**
   - Update README if adding features
   - Add JSDoc comments for new functions
   - Update SUBMISSION.md if relevant

2. **Testing**
   - Test all changed functionality
   - Verify accessibility
   - Check browser compatibility
   - Ensure build succeeds

3. **Code Quality**
   - Run `npm run lint`
   - Fix all linting errors
   - Ensure TypeScript compiles
   - Check for console errors

4. **PR Description**
   - Describe what changed and why
   - Link related issues
   - Add screenshots for UI changes
   - Note breaking changes

5. **Review Process**
   - Address review comments
   - Update based on feedback
   - Maintain clean commit history

## 🧪 Testing Guidelines

### Manual Testing
- [ ] Visual comparison at 1440px
- [ ] Test all interactive elements
- [ ] Verify keyboard navigation
- [ ] Check focus states
- [ ] Test complete user flows

### Accessibility Testing
- [ ] Keyboard-only navigation
- [ ] Screen reader testing (NVDA/VoiceOver)
- [ ] Color contrast check
- [ ] Semantic HTML validation

### Browser Testing
Test on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📚 Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## ❓ Questions?

If you have questions about contributing:
- Open a Discussion thread
- Check existing Issues
- Review the README.md

---

Thank you for contributing to make this project better! 🎉
