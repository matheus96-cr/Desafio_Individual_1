## 🚀 Desafio 1: Consumo de API em React Native com TypeScript

O primeiro desafio consiste em implementar um aplicativo mobile utilizando a stack **React Native** e **TypeScript (TSX)** para consumir dados de uma API pública e exibi-los em uma lista.

### ✨ Tecnologias Utilizadas

* **Framework:** React Native
* **Plataforma:** Expo
* **Linguagem:** TypeScript (TSX)
* **Gerenciamento de Estado:** React Hooks (`useState`, `useEffect`)

### 🌐 API Consumida

| Nome da API | Endpoint Principal | Propósito |
| :--- | :--- | :--- |
| **Rick and Morty API** | `https://rickandmortyapi.com/api/character` | Exibir uma lista de personagens, seus status e imagens. |

### 🛠️ Funcionalidades Implementadas

1.  **Tipagem Estrita:** Uso de Interfaces (`Character`, `ApiResponse`) para garantir a segurança de tipos (TypeScript).
2.  **Ciclo de Vida:** Utilização do `useEffect` para realizar a requisição HTTP.
3.  **Indicador de Carregamento:** Exibição de um `ActivityIndicator` (loading) enquanto os dados são buscados.
4.  **Exibição em Lista:** Uso do componente `FlatList` para renderizar os personagens.
5.  **Estilos Dinâmicos:** Estilização condicional do status (`Alive`, `Dead`, `unknown`).

---

## ⚙️ Como Rodar e Visualizar o Projeto

### 1\. Setup do Projeto

O projeto foi iniciado utilizando a ferramenta **Expo CLI** com o *template* TypeScript, garantindo um ambiente pronto para desenvolvimento React Native:

```bash
npx create-expo-app@latest hello-rn -t expo-template-blank-typescript
