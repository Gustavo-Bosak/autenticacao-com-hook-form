import type { tipoFuncionario } from "./tipoFuncionario";

export type tipoContext = {
    funcionario: tipoFuncionario | null;
    login: (funcionario: tipoFuncionario) => void;
    logout: () => void;
}