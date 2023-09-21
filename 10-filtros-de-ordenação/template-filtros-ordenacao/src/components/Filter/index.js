import { FilterContainer } from "./style"

export function Filter(props) {
   return (
      <FilterContainer>
         <input
            type="text"
            placeholder="Pesquisa"
            value={props.query}
            onChange={(ev) => { props.setQuery(ev.target.value) }}
         />
         <input
            type="number"
            placeholder="Preço mínimo"
            value={props.minPrice}
            onChange={(ev) => { props.setMinPrice(ev.target.value) }}
         />
         <input
            type="number"
            placeholder="Preço máximo"
            value={props.maxPrice}
            onChange={(ev) => { props.setMaxPrice(ev.target.value) }}
         />

         <label htmlFor="sortingParameter">Ordenar por:</label>
         <select
            name="sortingParameter"
            id="sortingParameter"
            value={props.sortingParameter}
            onChange={ev => { props.setSortingParameter(ev.target.value) }}
         >
            <option value="">Selecione uma opção:</option>
            <option value="title">Título</option>
            <option value="price">Preço</option>
            <option value="dueDate">Prazo</option>
         </select>
      </FilterContainer>
   );
}