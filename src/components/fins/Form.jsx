
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";

import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";


export default function Form({ handleSubmit, btnText, finsData }) {
  const [categories, setCategories] = useState([])
  const [fins, setFins] = useState(finsData || {})

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resp) => resp.json()) // transforma dados da resposta em json
      .then((data) => { // dados do json no hook
        setCategories(data);
      })
      .catch((err) => console.log(err));
  }, [])
  
  const submit = (e) => {
    e.preventDefault()
    handleSubmit(fins)
  }

  // método dinamico para alterar o valor de um objeto de um módulo que quero inserir no banco
  function handleChange(e) {
    setFins({ ...fins, [e.target.name]: e.target.value })
  }

  function handleCategory(e) {
    setFins({
      ...fins,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text, // acessa a opção selecionada pelo índice
      },
    })
  }

  return (
    <form autoComplete="off" onSubmit={submit}>
      <Fade left duration={1500} delay={200}>
        <Input
          type="text"
          text="Nome da despesa:"
          name="name"
          placeholder="Digite o nome"
          handleOnChange={handleChange}
          value={fins.name ? fins.name : ""}
        />
      </Fade>

      <Fade left duration={1500} delay={300}>
        <Input
          type="number"
          text="Valor da despesa:"
          name="value"
          placeholder="Informe o valor"
          handleOnChange={handleChange}
          value={fins.value ? fins.value : ""}
        />
      </Fade>

      <Fade left duration={1500} delay={400}>
        <Select
          name="categoryId"
          text="Selecione uma categoria:"
          options={categories}
          handleOnChange={handleCategory}
          value={fins.category ? fins.category.id : ""}
        />
      </Fade>

      <Fade left duration={1500} delay={500}>
        <SubmitButton text={btnText} />
      </Fade>
    </form>
  );
}

Form.propTypes = {
  btnText: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  finsData: PropTypes.string
}
