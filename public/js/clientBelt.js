function send () {
    var sendData = {
      value: document.getElementById('addPokemon').value
    }
    var xhr = new window.XMLHttpRequest()
    xhr.open('POST', '/addToBelt', true)
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
    xhr.send(JSON.stringify(sendData))
  }

send()