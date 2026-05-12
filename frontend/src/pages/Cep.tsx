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
    <div className="card-container">
      <h2>Buscar CEP</h2>

      <input
        placeholder="Digite o CEP"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
      />

      <button onClick={buscarCep}>Buscar</button>

      {address && (
        <div className="address-box">
          <p><strong>Rua:</strong> {address.logradouro}</p>
          <p><strong>Bairro:</strong> {address.bairro}</p>
          <p>
            <strong>Cidade:</strong> {address.localidade} - {address.uf}
          </p>
        </div>
      )}
    </div>
  );
}