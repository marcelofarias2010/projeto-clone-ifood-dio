import React from 'react';
import { SafeAreaView, Text, SectionList, StyleSheet,StatusBar, View } from 'react-native';
import { Image } from './style';
import imgUser from '../../assets/img/profile.png';

const DATA = [
  {
    title: "Dados pessoais",
    data: ["Marcelo Farias ", "40 anos", "Casado"]
  },
  {
    title: "Endereço",
    data: ["Quadra: Qnn 12 ", "Rua 04", "Apto 205 "]
  },
  {
    title: "Cidade",
    data: ["Ceilândia Sul ", "Brasília", "DF"]
  },
  {
    title: "Telefones",
    data: ["(61) 3373-7688", "(61) 98659-8515"]
  },
  {
    title: "E-mail",
    data: ["mljinformatica@gmail.com", "marcelo.4622@df.senac.br"]
  }
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function Perfil() {
  return (
    <>
      <StatusBar style="theme-dark" />
      <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Área do usuário</Text>
      <Image source={imgUser}/> 
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Item title={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />      
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#ccc",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  }
});