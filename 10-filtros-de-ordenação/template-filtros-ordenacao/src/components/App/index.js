import React, { useState } from "react";
import { Header } from "../Header";
import { Card } from "../Card";
import { FilterContainer } from "./style";
import jobList from "../../data/jobs.json";
import { Filter } from "../Filter";

export function App() {
  const [jobs] = useState(jobList);
  const [query, setQuery] = useState("");
  const [minPrice, setMinPrice] = useState(-Infinity)
  const [maxPrice, setMaxPrice] = useState(Infinity)
  const [sortingParameter, setSortingParameter] = useState("title")

  const normalizedQuery = query.toLowerCase(); // Converte a consulta para letras minúsculas

  return (
    <>
      <Header />

      <Filter
        query={query}
        minPrice={minPrice}
        maxPrice={maxPrice}
        sortingParameter={sortingParameter}
        setQuery={setQuery}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
        setSortingParameter={setSortingParameter}
      />

      <FilterContainer>
        {jobs
          .filter((job) => {
            // Converte título e descrição para letras minúsculas e compara
            const title = job.title.toLowerCase();
            const description = job.description.toLowerCase();
            return title.includes(normalizedQuery) || description.includes(normalizedQuery);
          })
          .filter((job) => {
            return job.price >= minPrice || minPrice === ""
          })
          .filter((job) => {
            return job.price <= maxPrice || maxPrice === ""
          })
          .sort((currentJob, nextJob) => {
            switch (sortingParameter) {
              case "price":
                return currentJob.price - nextJob.price;
              case "dueDate":
                return new Date(currentJob) - new Date(nextJob.dueDate)
              default:
                return currentJob.title.localeCompare(nextJob.title)
            }
          })
          .map((job) => {
            return <Card key={job.id} job={job} />;
          })}
      </FilterContainer>
    </>
  );
}
