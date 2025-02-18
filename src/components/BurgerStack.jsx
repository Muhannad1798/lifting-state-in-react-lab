const BurgerStack = ({ stack, onRemove }) => {
  return (
    <ul>
      {stack.map((currentStack, index) => (
        <li className="li" key={currentStack.name}>
          {currentStack.name}
          <button id={index} onClick={onRemove}>
            remove
          </button>
        </li>
      ))}
    </ul>
  )
}

export default BurgerStack
