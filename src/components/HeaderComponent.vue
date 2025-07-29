<template>
  <header>
    <div class="line1">
      <div class="banner">
        <h1 class="logobanner">ByteStore</h1>
      </div>
      <div class="search">
        <input id="src" type="search" placeholder="Pesquisar">
      </div>
      <div class="actions">
        <button><i class="fa-solid fa-cart-shopping"></i></button>
        <button><i class="fa-solid fa-user"></i></button>
        <button><i class="fa-solid fa-moon"></i></button>
      </div>
    </div>

    <div class="line2">
      <nav class="navbar">
        <div>
          <button>teste</button>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');

header {
  background-color: rgb(77, 77, 77);
}

.banner {
    flex: 1;
}

.line1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem;
}

.logobanner {
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 3.5rem;
  color: #0030ff;
  transform: skewX(-23deg);
  text-shadow:
    4px 1px 0px rgba(5, 91, 252, 0.945);
  letter-spacing: 3px;
  cursor: pointer;
  margin: 0;
}

.search {
  flex: 1;
  display: flex;
  justify-content: center;
}

#src {
  width: 70%;
  padding: 0.5rem 0.8rem;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
}

.actions {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  gap: 3.4rem;
}

.actions button {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
}

.line2 {
  background-color: #0030ff;
  padding: 0.5rem 2rem;
}

.navbar button {
  padding: 0.5rem 1rem;
  border: none;
  background-color: white;
  cursor: pointer;
  border-radius: 5px;
}
</style>
