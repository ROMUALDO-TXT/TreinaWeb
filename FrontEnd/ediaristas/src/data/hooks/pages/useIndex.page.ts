import { useState, useMemo } from "react";
import { IUserShort } from "@data/@types/UserInterface";
import { ValidationService } from "@data/services/ValidationService";

export default function useIndex() {
  const [cep, setCep] = useState(""),
    cepValidated = useMemo(() => {
      return ValidationService.cep(cep);
    }, [cep]),
    [error, setError] = useState(""),
    [query, setQuery] = useState(false),
    [response, setResponse] = useState([] as IUserShort[]),
    [response_rest, setResponse_rest] = useState(0),
    [loading, setLoading] = useState(false);

  return {
    cep,
    setCep,
    cepValidated,
  };
}
