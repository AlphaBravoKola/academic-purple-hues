
# Political Chat App - Style Guide

## Color Palette

### Primary Colors
- **Purple Theme**: `from-purple-500 to-purple-700`
- **Indigo Accents**: `from-indigo-500 to-indigo-600`
- **Background**: `from-gray-50 to-gray-100` (light) / `from-gray-900 to-gray-800` (dark)

### Component Colors
- **Cards**: `bg-white/95 dark:bg-gray-800/95` with `backdrop-blur-sm`
- **Buttons**: `bg-gradient-to-r from-purple-500 to-purple-700`
- **Borders**: `border-gray-200 dark:border-gray-700`
- **Text**: `text-gray-900 dark:text-white`

## Typography

### Font Sizes
- **Headers**: `text-2xl font-bold`
- **Subheaders**: `text-lg font-semibold`
- **Body**: `text-base leading-relaxed`
- **Small**: `text-sm`

### Font Weights
- **Bold**: `font-bold`
- **Semi-bold**: `font-semibold`
- **Medium**: `font-medium`
- **Regular**: `font-normal`

## Spacing

### Padding
- **Small**: `p-4`
- **Medium**: `p-6`
- **Large**: `p-8`

### Margins
- **Small**: `m-4`
- **Medium**: `m-6`
- **Large**: `m-8`

### Gaps
- **Small**: `gap-3`
- **Medium**: `gap-4`
- **Large**: `gap-6`

## Components

### Chat Messages
```css
User Message:
- Background: gradient purple (`from-purple-500 to-purple-600`)
- Text: white
- Rounded: `rounded-2xl`
- Padding: `p-6`
- Shadow: `shadow-sm`

Bot Message:
- Background: white with border (`bg-white dark:bg-gray-700 border border-gray-100`)
- Text: gray-900 dark:text-gray-100
- Rounded: `rounded-2xl`
- Padding: `p-6`
```

### Buttons
```css
Primary:
- Background: `bg-gradient-to-r from-purple-500 to-purple-700`
- Hover: `hover:from-purple-600 hover:to-purple-800`
- Text: white
- Height: `h-12`
- Rounded: `rounded-xl`
- Shadow: `shadow-md`

Secondary:
- Variant: outline
- Border: `border-gray-200 dark:border-gray-600`
- Hover: `hover:bg-purple-50 dark:hover:bg-gray-600`
```

### Cards
```css
Standard Card:
- Background: `bg-white/95 dark:bg-gray-800/95`
- Backdrop: `backdrop-blur-sm`
- Border: `border border-gray-200 dark:border-gray-700`
- Shadow: `shadow-xl`
- Rounded: `rounded-lg` or `rounded-2xl`

Interactive Card:
- Hover: `hover:scale-110`
- Transition: `transition-all duration-300`
```

### Visual Flow Components
```css
Step Indicators:
- Size: `w-20 h-20` (normal) / `w-24 h-24` (fullscreen)
- Rounded: `rounded-2xl`
- Shadow: `shadow-lg`
- Gradient backgrounds with step-specific colors

Step Number Badge:
- Size: `w-8 h-8` (normal) / `w-10 h-10` (fullscreen)
- Background: `bg-gradient-to-br from-purple-500 to-purple-700`
- Position: `absolute -top-2 -right-2`
```

## Animations

### Transitions
- **Default**: `transition-all duration-200`
- **Hover Scale**: `transform group-hover:scale-110`
- **Fade In**: `animate-fade-in`

### Loading States
```css
Typing Indicator:
- Dots: `w-3 h-3 bg-gray-400 rounded-full animate-bounce`
- Delays: `style={{ animationDelay: '0.1s' }}`
```

## Responsive Design

### Breakpoints
- **Mobile**: Default styles
- **Tablet**: `md:` prefix
- **Desktop**: `lg:` prefix
- **Large**: `xl:` prefix

### Container Widths
- **Chat**: `max-w-5xl mx-auto`
- **Content**: `max-w-2xl mx-auto`
- **Fullscreen**: `max-w-7xl mx-auto`

## Icons

### Sizes
- **Small**: `w-4 h-4`
- **Medium**: `w-5 h-5`
- **Large**: `w-6 h-6`
- **XL**: `w-8 h-8`

### Colors
- **Primary**: `text-purple-600 dark:text-purple-400`
- **Secondary**: `text-gray-600 dark:text-gray-400`
- **White**: `text-white`

## Layout Patterns

### Chat Layout
```css
Container: min-h-screen bg-gradient-to-br
Header: border-b with backdrop-blur
Main: max-w-5xl mx-auto px-6 py-8
Messages: flex justify-start/end with space-x-4
Input: border-t with bg-white/50
```

### Fullscreen Modal
```css
Overlay: fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm
Content: relative w-full h-full max-w-7xl bg-white rounded-3xl
Close: absolute top-6 right-6 z-10
```

## Dark Mode

### Implementation
- Uses CSS variables and Tailwind's dark: prefix
- Toggle between light/dark themes
- Maintains contrast ratios
- Smooth transitions between modes

## Accessibility

### Focus States
- Visible focus rings
- Keyboard navigation support
- ARIA labels where needed
- Semantic HTML structure

## Performance

### Optimizations
- Lazy loading for fullscreen components
- Efficient re-renders with React.memo
- Minimal DOM updates
- Optimized images and assets
