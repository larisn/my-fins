
import PropTypes from "prop-types";
import { useState } from "react";
import Fade from "react-reveal/Fade";
import Input from "../form/Input";
import SubmitButton from '../form/SubmitButton'


export default function PriorityForm({ handleSubmit, btnText, finsData }) {
  const [priority, setPriority] = useState({})

  function submit(e) {
    // manipular os dados da despesa adicionando prioridades
    e.preventDefault()
    finsData.priorities.push(priority)
    handleSubmit(finsData)
  }

  function handleChange(e) {
    // pegar o objeto atual e inserir um valor especifico para o name e value do input
    setPriority({ ...priority, [e.target.name]: e.target.value })
  }

  return (
    <form autoComplete="off" onSubmit={submit}>
      <Fade left duration={1500} delay={200}>
        <Input
          type="text"
          text="Nome da prioridade"
          name="name"
          placeholder="Insira o nome da prioridade"
          handleOnChange={handleChange}
        />
      </Fade>

      <Fade left duration={1500} delay={300}>
        <Input
          type="number"
          text="Valor da prioridade"
          name="cost"
          placeholder="Insira o valor total da sua prioridade"
          handleOnChange={handleChange}
        />
      </Fade>

      <Fade left duration={1500} delay={400}>
        <Input
          type="text"
          text="Descrição da prioridade"
          name="description"
          placeholder="Descreva sua prioridade"
          handleOnChange={handleChange}
        />
      </Fade>

      <Fade left duration={1500} delay={500}>
        <SubmitButton text={btnText} />
      </Fade>
    </form>
  );
}

PriorityForm.propTypes = {
  handleSubmit: PropTypes.func,
  btnText: PropTypes.string,
  finsData: PropTypes.string
}