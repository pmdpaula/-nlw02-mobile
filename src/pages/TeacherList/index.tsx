import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import { Feather } from '@expo/vector-icons';

import styles from './styles';

const TeacherList = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  function handleToogleFiltersVisible() {
    setIsFilterVisible(!isFilterVisible)
  }

  return (
  <View style={styles.container}>
    <PageHeader
      title="Proffys disponíveis"
      headerRight={(
        <BorderlessButton>
          <Feather name="filter" size={20} color='#fff' onPress={handleToogleFiltersVisible} />
        </BorderlessButton>
      )}
    >
      {isFilterVisible && (
        <View style={styles.searchForm}>
          <Text style={styles.label}>Matéria</Text>
          <TextInput
            style={styles.input}
            placeholder="Qual a matéria?"
            placeholderTextColor='#c1bccc'
          />

          <View style={styles.inputGroup}>
            <View style={styles.inputBlock}>
            <Text style={styles.label}>Dia da semana</Text>
              <TextInput
                style={styles.input}
                placeholder="Qual o  dia?"
                placeholderTextColor='#c1bccc'
              />
            </View>

            <View style={styles.inputBlock}>
              <Text style={styles.label}>Horário</Text>
              <TextInput
                style={styles.input}
                placeholder="Qual horário?"
                placeholderTextColor='#c1bccc'
              />
            </View>
          </View>

          <RectButton style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Filtrar</Text>
          </RectButton>
        </View>
      )}
    </PageHeader>

    <ScrollView
      style={styles.teacherList}
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingBottom: 16,
      }}
    >
      <TeacherItem />
      <TeacherItem />
      <TeacherItem />
    </ScrollView>
  </View>
  )
}

// 28min
export default TeacherList;