import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import PageHeader from './../../components/PageHeader/index';
import TeacherItem, { Teacher } from './../../components/TeacherItem/index';

import styles from './styles';
import { useFocusEffect } from '@react-navigation/native';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  function loadFavorites() {
    AsyncStorage.getItem('favorites')
      .then(response => {
        if (response) {
          setFavorites(JSON.parse(response));
        }
      });
  }

  useFocusEffect(() => {
    loadFavorites();
  });


  return (
    <View style={styles.container}>
      <PageHeader title="Meus Proffys favoritos" />

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {favorites.map((teacher: Teacher) => {
          return (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favorited
            />
            )
        })}
      </ScrollView>
    </View>
  )
}

export default Favorites;