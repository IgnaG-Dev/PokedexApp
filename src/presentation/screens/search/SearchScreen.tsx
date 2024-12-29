/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useMemo, useState} from 'react';
import {FlatList, View} from 'react-native';
import {globalTheme} from '../../../config/theme/global-theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ActivityIndicator, Button, Text, TextInput} from 'react-native-paper';
import {Pokemon} from '../../../domain/entities/pokemon';
import {PokemonCard} from '../../components/pokemons/PokemonCard';
import {RootStackParams} from '../../navigator/StackNavigator';
import {StackScreenProps} from '@react-navigation/stack';
import {useQuery} from '@tanstack/react-query';
import {
  getPokemonNamesWithId,
  getPokemonsByIds,
} from '../../../actions/pokemons';
import {FullScreenLoader} from '../../components/ui/FullScreenLoader';

interface Props extends StackScreenProps<RootStackParams, 'HomeScreen'> {}

export const SearchScreen = ({navigation}: Props) => {
  const {top} = useSafeAreaInsets();
  const [term, setTerm] = useState('');

  const {isLoading, data: pokemonNameList = []} = useQuery({
    queryKey: ['pokemons', 'all'],
    queryFn: () => getPokemonNamesWithId(),
  });

  const pokemonNameIdList = useMemo(() => {
    // Es un número
    if (!isNaN(Number(term))) {
      const pokemon = pokemonNameList.find(
        pokemon => pokemon.id === Number(term),
      );
      return pokemon ? [pokemon] : [];
    }

    if (term.length === 0) {
      return [];
    }

    if (term.length < 3) {
      return [];
    }

    return pokemonNameList.filter(pokemon =>
      pokemon.name.includes(term.toLocaleLowerCase()),
    );
  }, [term]);

  const {isLoading: isLoadingPokemons, data: pokemons = []} = useQuery({
    queryKey: ['pokemons', 'by', pokemonNameIdList],
    queryFn: () =>
      getPokemonsByIds(pokemonNameIdList.map(pokemon => pokemon.id)),
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <View style={[globalTheme.globalMargin, {paddingTop: top * 10}]}>
      <Button
        icon="keyboard-backspace"
        onPress={() => navigation.goBack()}
        style={{paddingVertical: 10, alignSelf: 'flex-start'}}>
        Volver
      </Button>

      <TextInput
        placeholder="Buscar Pokémon"
        mode="flat"
        autoFocus
        autoCorrect={false}
        onChangeText={setTerm}
        value={term}
      />

      {isLoadingPokemons && <ActivityIndicator style={{paddingTop: 50}} />}

      <FlatList
        data={pokemons}
        keyExtractor={(pokemon, index) => `${pokemon.id}-${index}`}
        numColumns={2}
        style={{paddingTop: top + 20}}
        renderItem={({item}) => <PokemonCard pokemon={item} />}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{height: 150}} />}
      />
    </View>
  );
};
