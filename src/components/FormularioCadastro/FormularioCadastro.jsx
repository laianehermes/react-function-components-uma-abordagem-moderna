import React from "react";
import Button from "@material-ui/core/Button";

function FormularioCadastro() {
  return (
    <form>
      <label htmlFor="nome">Nome</label>
      <input type="text" name="nome" id="nome" />

      <label htmlFor="sobrenome">Sobrenome</label>
      <input type="text" name="sobrenome" id="sobrenome" />

      <label htmlFor="cpf">CPF</label>
      <input type="text" name="cpf" id="cpf" />

      <label htmlFor="promocoes">Promoções</label>
      <input type="checkbox" name="promocoes" id="promocoes" />

      <label htmlFor="novidades">Novidades</label>
      <input type="checkbox" name="novidades" id="novidades" />

      <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
    </form>
  );
}

export default FormularioCadastro;
