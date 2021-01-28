import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputBase = styled.input`
    width: 100%;
    padding: 15px;
    font-size: 14px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.contrastText};
    background-color: ${({ theme }) => theme.colors.mainBg};
    border-radius: ${({ theme }) => theme.colors.borderRadius};
    outline: 0;
    margin-bottom: 25px;
`;

// ao inves de colocar props pode fazer destruction e informar entre chaves o evento para uso direto
// outra dica: podemos usar eventor explicitos para tratativas gerais e para os demais eventos
// usar reticiencias props (...props) e alimentar na tag do componente como um objeto unico.
// eles chamam as chaves de "bigodinho", nao recomendado nas boas prat. pois nao sabemos o que está
// sendo passado nas propriedades, entao podemos desativar a validação eslint ou nao usar.
export default function Input({ onChange, placeholder, ...props }) {
  return (
    <div>
      <InputBase
        placeholder={placeholder}
        onChange={onChange}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
    </div>
  );
}

Input.defaultProps = {
  value: '',
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};
