import React from 'react';
import AnimatedIntro from '@/components/ui/AnimatedIntro';
import BottomLoginSheet from '@/components/ui/BottomLoginSheet';
import { View, StyleSheet } from 'react-native';
const Page = () => {
  return (
    <View style={styles.container}>
      <AnimatedIntro />
      <BottomLoginSheet />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Page;
