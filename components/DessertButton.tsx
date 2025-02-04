import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { styles } from "@/global";
import { ExternalPathString, Link, RelativePathString } from 'expo-router';
import React from 'react';

type Props = {
    name: string;
};


export default function DessertButton({ name }: Props) {

    const path : RelativePathString = `../${name}` ;
    return (<Link href={path} style={styles.buttonM}>{name}</Link>)

}



