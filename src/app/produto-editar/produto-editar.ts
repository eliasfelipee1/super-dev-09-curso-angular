import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoModel } from '../models/produto.model';

@Component({
  selector: 'app-produto-editar',
  imports: [FormsModule],
  templateUrl: './produto-editar.html',
  styleUrl: './produto-editar.scss',
})
export class ProdutoEditar {
  private _produto = signal<ProdutoModel>({
    id: "",
    nome: "",
    estoque: null,
    preco: null
  });
  public get produto() {
    return this._produto;
  }
  public set produto(value) {
    this._produto = value;
  }

  // Método que é utilizado quando é instaciado um objeto da classe Produtoeditar
  constructor(private activeRoute: ActivatedRoute, private router: Router) {
    // activeRoute é a rota que o usuário está neste momento
    // snapshot é uma captura da rota atual com os dados daquela rota
    // paramMap é um dicionário com as variáveis da rota
    // get pegamos o id definido na rota /produtos/editar/:id
    const idParaEditar = activeRoute.snapshot.paramMap.get("id");

    // Carregar a lista de produtos do localStorage
    const produtoStrings = localStorage.getItem("produtos");
    if (produtoStrings === null) {
      alert("Nenhum produto cadastrado")
      router.navigate(["/produtos"]);
      return;
    }

    const produtos = JSON.parse(produtoStrings) as ProdutoModel[];
    debugger;
    const produtosEncontrados = produtos.filter(produto => produto.id === idParaEditar);
    if (produtosEncontrados.length === 0) {
      alert("Produto não econtrado")
      router.navigate(["/produtos"]);
      return;
    }

    this.produto.set(produtosEncontrados[0]);

  }

  salvar(): void {
    const produtos = this.carregarProdutosDoLocalStorage();

    const indiceProdutoParaEditar = produtos.findIndex(x => x.id === this.produto().id);
    produtos[indiceProdutoParaEditar].nome = this.produto().nome;
    produtos[indiceProdutoParaEditar].estoque = this.produto().estoque;
    produtos[indiceProdutoParaEditar].preco = this.produto().preco;
    
    const produtoString = JSON.stringify(produtos);
    localStorage.setItem("produtos", produtoString)

    alert("Produto alterado com sucesso");

    this.router.navigate(["/produtos"]);
  }

  carregarProdutosDoLocalStorage(): ProdutoModel[] {
    const produtosString = localStorage.getItem("produtos");

    if (produtosString === null) {
      return [];
    }

    return JSON.parse(produtosString) as ProdutoModel[];
  }
}