import { useState, useMemo } from "react";
import { IUserShort } from "@data/@types/UserInterface";
import { ValidationService } from "@data/services/ValidationService";
import { ApiService } from "@data/services/ApiService";

export default function useIndex() {
  const [cep, setCep] = useState(""),
    cepValidated = useMemo(() => {
      return ValidationService.cep(cep);
    }, [cep]),
    [error, setError] = useState(""),
    [request_done, setRequest_done] = useState(false),
    [diaristas, setDiaristas] = useState([] as IUserShort[]),
    [num_diaristas, setNum_diaristas] = useState(0),
    [loading, setLoading] = useState(false);

  async function listProfessionals(cep: string) {
    setRequest_done(false);
    setLoading(true);
    setError("");

    try {
      const { data } = await ApiService.get<{
        diaristas: IUserShort[];
        quantidade_diaristas: number;
      }>("/api/diaristas-cidade?cep=" + cep.replace(/\D/g, ""));
      setDiaristas(data.diaristas);
      setNum_diaristas(num_diaristas - 6);
      setRequest_done(true);
    } catch (error) {
      setError("CEP não encontrado!");
    }
    setLoading(false);
  }

  return {
    cep,
    setCep,
    cepValidated,
    listProfessionals,
    error,
    diaristas,
    request_done,
    loading,
    num_diaristas,
  };
}
