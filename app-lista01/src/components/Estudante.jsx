import PropTypes from 'prop-types'

function Estudante({ estudantes }) {
  if (estudantes) {
    return <h2>Você é um estudante</h2>
  } else {
    return <div>Você não é um estudante</div>
  }
}

// Validação das props
Estudante.propTypes = {
  estudantes: PropTypes.bool.isRequired,  // 'estudantes' é um booleano e obrigatório
}

export default Estudante

