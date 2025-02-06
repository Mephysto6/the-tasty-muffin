import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { styles } from "@/global";
import { DessertTags } from "@/assets/images/desserts"

type Props = {
    label: string;
    theme?: string;
    tag_dict?: Array<string> ;
    selected?: boolean ;
};

function SelectTag(label: string, selected: boolean) {
  selected = !selected
}

export default function Button({ label, theme, selected = false }: Props) {
  if (theme === "tag") {
    return (
      <View style={styles.tagContainer}>
        <Pressable style={styles.tagButton} onPress={() => SelectTag(label, selected)}>
          <Text style={styles.tagLabel}>{label}</Text>
          <Text>selected : {selected}</Text>
        </Pressable>
      </View>
    )
  }


  if (theme === 'primary') {
    return (
      <View
        style={[
          styles.buttonContainer,
          { borderWidth: 4, borderColor: '#ffd33d', borderRadius: 18 },
        ]}>
        <Pressable
          style={[styles.buttonM, { backgroundColor: '#fff' }]}
          onPress={() => alert('You pressed a button.')}>
          <FontAwesome name="picture-o" size={18} color="#25292e" style={styles.buttonIcon} />
          <Text style={[styles.buttonLabel, { color: '#25292e' }]}>{label}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
    <Pressable style={styles.buttonM} onPress={() => alert('You pressed a button.')}>
        <Text style={styles.buttonLabel}>{label}</Text>
    </Pressable>
    </View>
  );

}
