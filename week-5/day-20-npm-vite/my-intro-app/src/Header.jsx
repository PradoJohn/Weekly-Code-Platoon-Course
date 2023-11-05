

function Header(){
  return(
    <>
    <header>
      
      <h1 className="site-name">VITE+REACT</h1>
      <ul class="nav">
        <li><a href="/">Pokemon</a></li>
        <li><a href="/tdl" class="active">ToDoList</a></li>
        <li><a href="/gg">Guessing Game</a></li>
      </ul>
    </header>
    </>
  );
}

export default Header