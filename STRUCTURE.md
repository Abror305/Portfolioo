# 📁 Project Structure Guide

## Overview
Your portfolio has been reorganized with a clean, scalable structure following React best practices.

## New Directory Structure

```
src/
├── components/
│   ├── layout/
│   │   └── Navbar.jsx          # Navigation header with mode toggle
│   └── skills/
│       └── Skills.jsx          # Tech stack display component
├── sections/
│   ├── Hero.jsx                # Hero section with intro
│   └── Terminal.jsx            # Interactive terminal component
├── constants/
│   └── index.js                # Centralized app constants & data
├── utils/
│   └── themeHelpers.js         # Theme utility functions
├── App.jsx                     # Main app component
├── main.jsx                    # React DOM entry point
├── index.css                   # Global styles
└── App.css                     # App-specific styles
```

## Key Improvements

### 1. **Constants Centralization** (`src/constants/index.js`)
All hardcoded data moved to constants:
- `SKILLS_DEV` - Development skills array
- `SKILLS_HACKER` - Hacker mode skills array
- `TERMINAL_COMMANDS` - Terminal command responses
- `TERMINAL_HELP` - Help menu structure
- `THEME` - Color theme configuration

### 2. **Better Component Organization**
- Skills component moved from `Skills/Skils.jsx` → `components/skills/Skills.jsx`
- Fixed filename typo: `Skils.jsx` → `Skills.jsx`
- Components properly imported with correct paths

### 3. **Reduced Code Duplication**
- Terminal command logic simplified using `TERMINAL_COMMANDS` object
- Navbar navigation links moved to constant array
- Eliminated repeated hardcoded strings

### 4. **Utility Functions** (`src/utils/themeHelpers.js`)
- `getThemeClass()` - Helper for conditional classes
- `getThemeColor()` - Helper for theme color selection

## Import Examples

```javascript
// ✅ Correct (new structure)
import { Skills } from './components/skills/Skills';
import { SKILLS_DEV, TERMINAL_COMMANDS } from './constants';
import { getThemeClass } from './utils/themeHelpers';

// ❌ Outdated (old structure)
import { Skills } from './Skills/Skils';
```

## Files Modified

| File | Changes |
|------|---------|
| `src/App.jsx` | Updated Skills import path |
| `src/sections/Terminal.jsx` | Refactored to use constants, cleaner logic |
| `src/components/layout/Navbar.jsx` | Nav links to constant, better accessibility |
| `src/components/skills/Skills.jsx` | **New location**, imports from constants |

## Next Steps

1. **Remove old folder** (when ready):
   ```bash
   # Delete the old Skills folder if no longer needed
   rm -rf src/Skills/
   ```

2. **Consider extracting more data**:
   - User profile data (name, bio, stats)
   - External links and social profiles
   - Feature flags for different modes

3. **Add TypeScript** (optional):
   - Define types for components and constants
   - Better IDE autocomplete and error catching

## Component Props

### `<Navbar />`
- `isHackerMode: boolean` - Current theme mode
- `setIsHackerMode: (bool) => void` - Mode toggle function

### `<Skills />`
- `isHackerMode: boolean` - Determines which skill array to display

### `<Hero />`
- `isHackerMode: boolean` - Adapts UI and messaging

### `<TerminalSection />`
- `isHackerMode: boolean` - Changes terminal prompt colors

## Notes
- All comments now in English for better maintainability
- Code is more DRY (Don't Repeat Yourself)
- Easier to add new features or modify existing data
- Better performance with constant references instead of creating new objects on render
