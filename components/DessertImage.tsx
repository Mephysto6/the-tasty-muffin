import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { styles } from "@/global";
import { ExternalPathString, Link, RelativePathString } from 'expo-router';
import React from 'react';
import ImageViewer from "@/components/ImageViewer";
import { DessertPathList, DessertImgList } from "@/assets/images/desserts/index"
import { ImageSource } from 'expo-image';

type Props = {
    name: string;
    image: ImageSource;
};


export default function DessertImage({ name, image }: Props) {
    const path : RelativePathString = `./${name}` ;
    return (
      <View style={styles.imageContainer}>
        <Pressable>
          <Link href={path}>
            <ImageViewer imgSource={image} />
          </Link>
        </Pressable>
      </View>
    )


}



