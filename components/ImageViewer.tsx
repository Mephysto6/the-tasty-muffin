import { StyleSheet } from 'react-native';
import { Image, type ImageSource } from 'expo-image';
import { styles } from "@/global";

type Props = {
  imgSource: ImageSource;
};

export default function ImageViewer({ imgSource }: Props) {
  return <Image source={imgSource} style={styles.image} />;
}
