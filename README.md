# 7Solution Frontend Challenge 🚀

A React + TypeScript implementation of an auto-deleting todo list with categorization by item type (Fruit/Vegetable).

## Note 📝

Even though I'm applying for a backend position but I think that this challenge looks fun so I want to try it out.

## Features ✨

- Three-column layout (All Items, Fruits, Vegetables)
- Items automatically return to the main list after 5 seconds
- Immediate return on click from category columns
- Built with React, TypeScript, and Tailwind CSS

## How It Works 🎮

1. Click any item in the main list to move it to its corresponding category
2. Items in category columns will automatically return to the main list after 5 seconds
3. Click an item in a category column to return it to the main list immediately

## Technologies Used 🛠️

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Hooks (useState, useRef)

## Getting Started 🚀

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
## How It Works 🔄

The application manages 3 main states:
- **Main List**: Contains all available items
- **Fruit List**: Displays items categorized as fruits
- **Vegetable List**: Shows items categorized as vegetables

### Key Functionality

1. **Moving Items to Categories**
   - Clicking an item in the main list moves it to the appropriate category (Fruit or Vegetable)
   - A 5-second timer starts when the item enters a category
   - The timer ID is stored for reference (using useRef so it doesn't get reset on re-renders)

2. **Returning Items**
   - Clicking an item in either category list immediately returns it to the main list
   - This action also clears any pending timer for that item

3. **Automatic Cleanup**
   - If left untouched, items in category lists automatically return to the main list after 5 seconds
   - This is managed through the stored timer references
