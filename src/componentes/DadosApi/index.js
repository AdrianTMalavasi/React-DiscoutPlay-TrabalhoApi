import React, { useState, useEffect } from 'react';
import ListagemItens from '../ListagemItens';
import MenuFilter from '../MenuFilter';
import estilos from './dados.module.css';

function GameDeals(props) {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchDeals();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [props.filterType, props.deals, searchQuery]); // Reaplica o filtro sempre que o tipo, os dados ou a consulta de pesquisa mudarem

  const fetchDeals = async () => {
    try {
      const response = await fetch('https://www.cheapshark.com/api/1.0/deals');
      const data = await response.json();
      props.setDeals(data);
      props.setFilteredDeals(data); // Inicialmente exibe todos os dados
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
    }
  };

  // Função para aplicar os filtros e a pesquisa
  const applyFilters = () => {
    let updatedDeals = [...props.deals];
    
    // Filtra com base na pesquisa
    if (searchQuery) {
      updatedDeals = updatedDeals.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    switch (props.filterType) {
      case 'alphabetical':
        updatedDeals.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'lowest':
        updatedDeals.sort((a, b) => a.salePrice - b.salePrice);
        break;
      case 'highest':
        updatedDeals.sort((a, b) => b.salePrice - a.salePrice);
        break;
      case 'promo':
        updatedDeals.sort((a, b) => b.savings - a.savings);
        break;
      default:
        // 'all': exibe todos os itens sem filtro
        break;
    }
    props.setFilteredDeals(updatedDeals);
  };

  return (
    <div>
      <h1 className={estilos.h2}>Promoções de Jogos</h1>

      {/* Componente para o menu de filtros e pesquisa */}
      <MenuFilter
        onFilterChange={props.setFilterType}
        onSearchChange={setSearchQuery}
      />

      {/* Listagem de itens filtrados */}
      <ListagemItens deals={props.filteredDeals} />
    </div>
  );
}

export default GameDeals;