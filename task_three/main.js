function greeting(name) {
  alert(`Приветствую Вас, ${name}, на нашем сайте!`)
  return name
}

const namePols = prompt("Введите Ваше имя: ");
console.log(greeting(namePols));