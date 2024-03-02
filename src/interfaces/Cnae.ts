interface ISecaoCNAE {
  id: string
  descricao: string
}

interface IDivisaoCNAE {
  id: string
  descricao: string
  secao: ISecaoCNAE
}

interface IGrupoCNAE {
  id: string
  descricao: string
  divisao: IDivisaoCNAE
}
interface IClasseCNAE {
  id: string
  descricao: string
  grupo: IGrupoCNAE
  observacoes: string[]
}
export interface ISubClasseCNAE {
  id: string
  descricao: string
  classe: IClasseCNAE
  atividades: string[]
  observacoes: string[]
}
