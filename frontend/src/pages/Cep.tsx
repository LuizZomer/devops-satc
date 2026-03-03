import { useState } from "react";
import axios from "axios";

interface Address {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export default function Cep() {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState<Address | null>(null);

  async function buscarCep() {
    const response = await axios.get(
      `https://viacep.com.br/ws/${cep}/json/`
    );

    setAddress(response.data);
  }

  return (
    <div>
      <h2>Buscar CEP</h2>

      <input
        placeholder="Digite o CEP"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
      />

      <button onClick={buscarCep}>Buscar</button>

      {address && (
        <div>
          <p>{address.logradouro}</p>
          <p>{address.bairro}</p>
          <p>{address.localidade} - {address.uf}</p>
        </div>
      )}
    </div>
  );
}