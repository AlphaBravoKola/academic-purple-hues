
# React Native Conversion Guide

## Key Differences from React Web

### 1. Import Changes
```typescript
// Web (current)
import { Button } from '@/components/ui/button';

// React Native
import { TouchableOpacity, Text } from 'react-native';
```

### 2. Styling Changes
```typescript
// Web (Tailwind)
className="bg-purple-500 text-white px-4 py-2 rounded"

// React Native (StyleSheet)
style={styles.button}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#8B5CF6',
    color: 'white',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  }
});
```

### 3. Component Replacements
```typescript
// Web -> React Native
div -> View
span -> Text
button -> TouchableOpacity
input -> TextInput
img -> Image
ScrollArea -> ScrollView
```

### 4. Layout Differences
```typescript
// Web flexbox is similar, but some differences:
flex-1 -> flex: 1
space-y-4 -> marginVertical: 16 (between items)
justify-center -> justifyContent: 'center'
items-center -> alignItems: 'center'
```

## Component Conversion Examples

### Button Component
```typescript
// Web
<Button className="bg-purple-500 text-white">
  Send
</Button>

// React Native
<TouchableOpacity style={styles.button}>
  <Text style={styles.buttonText}>Send</Text>
</TouchableOpacity>
```

### Card Component
```typescript
// Web
<Card className="p-6 shadow-lg">
  <CardContent>Content</CardContent>
</Card>

// React Native
<View style={styles.card}>
  <View style={styles.cardContent}>
    <Text>Content</Text>
  </View>
</View>
```

### Icons
```typescript
// Web (Lucide React)
import { Send } from 'lucide-react';
<Send className="w-5 h-5" />

// React Native (Vector Icons or similar)
import Icon from 'react-native-vector-icons/Feather';
<Icon name="send" size={20} color="#000" />
```

## Recommended React Native Libraries

1. **Navigation**: `@react-navigation/native`
2. **Icons**: `react-native-vector-icons`
3. **Animations**: `react-native-reanimated`
4. **Styling**: `styled-components/native` or built-in StyleSheet
5. **State Management**: Same (React Query, Context, etc.)

## File Structure for React Native

```
src/
├── components/
│   ├── chat/
│   │   ├── ChatMessage.tsx
│   │   ├── ChatInput.tsx
│   │   └── MessageBubble.tsx
│   ├── visualizations/
│   │   └── BillToLawFlow.tsx
│   └── common/
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Typography.tsx
├── screens/
│   ├── ChatScreen.tsx
│   └── HomeScreen.tsx
├── navigation/
│   └── AppNavigator.tsx
├── styles/
│   ├── colors.ts
│   ├── typography.ts
│   └── spacing.ts
└── utils/
    └── chatResponses.ts
```

## Cross-Platform Considerations

1. **Platform-specific code**:
```typescript
import { Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 50 : 25,
  }
});
```

2. **Safe Area handling**:
```typescript
import { SafeAreaView } from 'react-native-safe-area-context';

<SafeAreaView style={styles.container}>
  {/* Your content */}
</SafeAreaView>
```

3. **Responsive design**:
```typescript
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const isTablet = width > 768;
```
