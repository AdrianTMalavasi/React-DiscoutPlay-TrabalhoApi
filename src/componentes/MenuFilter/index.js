import React, { useState, useEffect } from 'react';
import estilos from './MenuFilter.module.css';
import { Icon } from '@iconify/react';

function MenuFilter({ onFilterChange, onSearchChange }) {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    onSearchChange(searchQuery);
  }, [searchQuery, onSearchChange]);

  return (
    <div className={estilos.menu}>
      {/* Contêiner para botões */}
      <div className={estilos.buttonContainer}>
        {/* Botão para listar todos */}
        <button className={estilos.button} onClick={() => onFilterChange('all')}>Listar Todos</button>
        
        {/* Botão para ordenar por ordem alfabética */}
        <button className={estilos.button} onClick={() => onFilterChange('alphabetical')}>Ordem Alfabética</button>
        
        {/* Botão para ordenar por menor preço */}
        <button className={estilos.button} onClick={() => onFilterChange('lowest')}>Menor Preço</button>
        
        {/* Botão para ordenar por maior preço */}
        <button className={estilos.button} onClick={() => onFilterChange('highest')}>Maior Preço</button>
        
        {/* Botão para exibir apenas promoções */}
        <button className={estilos.button} onClick={() => onFilterChange('promo')}>Promoções</button>
      </div>

      {/* Filtro de pesquisa alinhado à direita */}
      <div className={estilos.filterContainer}>
        <div className={estilos.input}>
          <input
            type="text"
            placeholder="Pesquisar por título..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default MenuFilter;

