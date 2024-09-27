import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MyCheckbox({ onChange, checked }) {
  return (
    <Pressable
      style={[styles.checkboxBase, checked && styles.checkboxChecked]}
      onPress={onChange}>
      {checked && <Ionicons name="checkmark" size={16} color="#47b994" style={{alignSelf: 'center'}} />}
    </Pressable>
  );
}

// export default function App() {
//   const [checked, setChecked] = useState(false);
//   return (
//     <View style={styles.appContainer}>
//       <Text style={styles.appTitle}>Checkbox Example</Text>
//       <View style={styles.checkboxContainer}>
//         <MyCheckbox onChange={() => setChecked(!checked)} checked={checked} />
//         <Text style={styles.checkboxLabel}>{`⬅️ Click!`}</Text>
//       </View>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#47b994',
    backgroundColor: 'transparent',
    alignItems: 'center'
  },
  checkboxChecked: {
    backgroundColor: 'transparent',
  },
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appTitle: {
    marginVertical: 16,
    fontWeight: 'bold',
    fontSize: 24,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    marginLeft: 8,
    fontWeight: '500',
    fontSize: 18,
  },
});
