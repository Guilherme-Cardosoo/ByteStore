const cpfInput = document.getElementById("cpf");

  cpfInput.addEventListener("input", function () {
    let value = this.value.replace(/\D/g, "");
    value = value.slice(0, 11);

    if (value.length >= 4 && value.length <= 6)
      value = value.replace(/(\d{3})(\d+)/, "$1.$2");
    else if (value.length > 6 && value.length <= 9)
      value = value.replace(/(\d{3})(\d{3})(\d+)/, "$1.$2.$3");
    else if (value.length > 9)
      value = value.replace(/(\d{3})(\d{3})(\d{3})(\d+)/, "$1.$2.$3-$4");

    this.value = value;
  });