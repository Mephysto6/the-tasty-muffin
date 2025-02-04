import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { styles } from "@/global" ;
import ImageViewer from '@/components/ImageViewer';
import Button from '@/components/Button';

const PlaceholderImage = require('@/assets/images/react-logo.png');

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        The Tasty Muffin
      </Text>
      <Link href="/search" style={styles.buttonS}>
        Go to search for a dessert !
      </Link>
      <Text style={styles.text}>
        Or just browse :3
      </Text>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" />
        <Button label="Use this photo" />
      </View>
    </View>
  );
}
