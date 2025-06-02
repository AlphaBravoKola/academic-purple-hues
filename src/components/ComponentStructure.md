
# Component Structure Guide

## Extractable Components

### 1. ChatMessage Component
```typescript
interface ChatMessageProps {
  message: Message;
  isUser: boolean;
}
```

### 2. TypingIndicator Component
```typescript
interface TypingIndicatorProps {
  isVisible: boolean;
}
```

### 3. SuggestedQuestions Component
```typescript
interface SuggestedQuestionsProps {
  questions: string[];
  onQuestionClick: (question: string) => void;
}
```

### 4. ChatInput Component
```typescript
interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  disabled: boolean;
}
```

### 5. FlowStep Component
```typescript
interface FlowStepProps {
  step: Step;
  isSelected: boolean;
  onSelect: (id: number) => void;
  isFullscreen?: boolean;
}
```

### 6. StepDetails Component
```typescript
interface StepDetailsProps {
  step: Step;
  isFullscreen?: boolean;
}
```

## File Structure Recommendation

```
src/
├── components/
│   ├── chat/
│   │   ├── ChatMessage.tsx
│   │   ├── ChatInput.tsx
│   │   ├── TypingIndicator.tsx
│   │   └── SuggestedQuestions.tsx
│   ├── visualizations/
│   │   ├── BillToLawFlow.tsx
│   │   ├── FlowStep.tsx
│   │   └── StepDetails.tsx
│   └── ui/ (existing shadcn components)
├── hooks/
│   ├── useChat.ts
│   └── useBillFlow.ts
├── types/
│   ├── chat.ts
│   └── flow.ts
├── utils/
│   ├── chatResponses.ts
│   └── constants.ts
└── styles/
    ├── StyleGuide.md
    └── animations.css
```

## Type Definitions

### Chat Types
```typescript
interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  isTyping?: boolean;
  hasVisual?: boolean;
  visualType?: 'bill-to-law';
}
```

### Flow Types
```typescript
interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ReactElement;
  details: StepDetails;
  color: string;
  bgColor: string;
}

interface StepDetails {
  overview: string;
  keyPoints: string[];
  funFact: string;
}
```
