"use client";

import { TipoProduto } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Produtos() {

    const [lista, setLista] = useState<TipoProduto[]>([])

    useEffect(() => {
        const chamadaApi = async () => {
            const response = await fetch("http://localhost:3000/api");
            const data = await response.json();
            console.log(data);
            setLista(data);
        }
        chamadaApi();
    }, []);


    return (
        <div>
            <h1>FAMILIA</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Função</th>
                        <th>Hobby</th>
                        <th>Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {lista.map((produto) => (
                        <tr key={produto.id}>
                            <td>{produto.id}</td>
                            <td>{produto.nome}</td>
                            <td>{produto.função}</td>
                            <td>{produto.hobby}</td>
                            <td> <Link href={`/produtos/produto/${produto.id}`}>Editar</Link> </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={5}>Total de Integrantes: {lista.length}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}
