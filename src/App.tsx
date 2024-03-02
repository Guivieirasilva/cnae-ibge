import axios, { AxiosResponse } from "axios";
import { Card } from "./components/Card"
import { Header } from "./components/Header"
import { Input } from "./components/Input"
import {Pagination} from "./components/Pagination"
import { ISubClasseCNAE } from "./interfaces/Cnae";
import { ChangeEvent, useEffect, useState } from "react";
import { Loading } from "./components/Loading";

function App() {

  const [search, setSearch] = useState<string>('')
  const [CNAEs, setCNAEs] = useState<ISubClasseCNAE[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false)


  const itemsPerPage = 10
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const getCNAEs = async () => {
    try {
      setIsLoading(true)
      const { data } = await axios.get<ISubClasseCNAE[]>("https://servicodados.ibge.gov.br/api/v2/cnae/classes")
      setCNAEs(data)
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false)
    }
  };
  
  const filterCNAE = (search: string, CNAEs: ISubClasseCNAE[]) => {
    if (!search.trim()) {
      return CNAEs;
    } else {
      return CNAEs.filter((cnae) =>
        cnae.descricao.toLowerCase().includes(search.toLowerCase())
      );
    }
  };

  const CNAEFiltered = filterCNAE(search, CNAEs);
  const currentItems = CNAEFiltered.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(CNAEFiltered.length / itemsPerPage);

  function handleChangeInput(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value)
  }

  useEffect(() => {getCNAEs()},[])

  return (
    <div className="flex flex-col items-center justify-center gap-5" > 
      <Header />
      <main className=" flex flex-col gap-5 px-10 max-w-[1280px]" >
        <div>
          <h1 className="font-bold text-4xl " >Classificação Nacional de Atividades Econômicas (CNAE)</h1>
          <span className="text-base-span" >Explore os códigos de atividades econômicas no Brasil</span>
        </div>
     
          <Input value={search} onChange={handleChangeInput} placeholder="Pesquisar por CNAE" />

          <h2 className="font-bold text-xl" >Códigos CNAE</h2>

          { 
            isLoading 
            ? 
              <Loading /> 
            :
          (
            <div className="flex items-center justify-center">
            {CNAEFiltered.length === 0 ? 
            (
              <div className="text-center">
                <p>Não há CNAEs para exibir.</p>
              </div>
            ) 
            : 
            (
              <div className="w-full" >
                <table className="w-full"  >
                  <tbody>
                    {currentItems.map((cnae) => (
                      <tr key={cnae.id} >
                        <td>
                          <Card code={cnae.id} name={cnae.descricao} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
              </div>
            )}
            </div>
          )}
      </main>
    </div>
  )
} 

export default App
