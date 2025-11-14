import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  ActivityIndicator,
  Image // Importado para exibir a imagem do personagem
} from 'react-native';

// 1. Definição das Interfaces (Tipagem)
// A tipagem é mais complexa aqui, para refletir a estrutura da API
interface Character {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  image: string; // URL da imagem
}

// A API retorna um objeto que contém a lista de personagens em 'results'
interface ApiResponse {
  results: Character[];
  // Há outros campos como 'info' (metadados de paginação), mas focaremos em 'results'
}

const API_URL = 'https://rickandmortyapi.com/api/character';

// Componente principal em TSX
const RickAndMortyApp: React.FC = () => {
  // Estado para armazenar os personagens
  const [characters, setCharacters] = useState<Character[]>([]);
  // Estado para controlar o carregamento
  const [loading, setLoading] = useState<boolean>(true);

  // 2. Função de Efeito (Data Fetching)
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(API_URL);
        // Tipamos o JSON como ApiResponse
        const data: ApiResponse = await response.json();
        
        // Armazena a lista de resultados no estado
        setCharacters(data.results); 
      } catch (error) {
        console.error("Erro ao buscar os personagens:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  // 3. Renderização do Estado de Carregamento
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#4CAF50" />
        <Text style={{ marginTop: 10 }}>Carregando dados da dimensão...</Text>
      </View>
    );
  }

  // 4. Renderização dos Dados com Imagem
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personagens de Rick and Morty</Text>
      
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.characterCard}>
            
            {/* Exibe a imagem do personagem */}
            <Image 
              style={styles.characterImage}
              source={{ uri: item.image }}
            />

            <View style={styles.detailsContainer}>
              <Text style={styles.characterName}>{item.name}</Text>
              <Text style={styles.characterSpecies}>Espécie: {item.species}</Text>
              
              {/* Exibe o status com cores diferentes */}
              <Text style={[
                styles.characterStatus, 
                { color: item.status === 'Alive' ? '#4CAF50' : item.status === 'Dead' ? '#F44336' : '#FF9800' }
              ]}>
                Status: {item.status}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

// 5. Estilos Atualizados
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 10,
    backgroundColor: '#272b33', // Fundo mais escuro, no tema R&M
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#00B0C8', // Cor de destaque
  },
  characterCard: {
    flexDirection: 'row',
    backgroundColor: '#3c3e44',
    padding: 10,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  characterImage: {
    width: 80,
    height: 80,
    borderRadius: 40, // Deixa a imagem redonda
    marginRight: 15,
    borderWidth: 2,
    borderColor: '#00B0C8',
  },
  detailsContainer: {
    flex: 1,
  },
  characterName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F0F0F0',
    marginBottom: 3,
  },
  characterSpecies: {
    fontSize: 14,
    color: '#B0B0B0',
    marginBottom: 3,
  },
  characterStatus: {
    fontSize: 14,
    fontWeight: '500',
  },
});

export default RickAndMortyApp;