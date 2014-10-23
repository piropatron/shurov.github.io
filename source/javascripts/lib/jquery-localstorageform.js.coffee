$.fn.extend
  storage: ->
    restore = true
    try
      data = JSON.parse localStorage.getItem 'space-form'
    catch e
      console.error 'bad json'
      localStorage.removeItem 'space-form'
      restore = false
    if restore and data
      for item in data
        do (item) ->
          $('[name=' + item.name + ']').val item.value
    this.saveOnEvent "mousedown"
    this.saveOnEvent "keypress"

  saveOnEvent: (event) ->
    $(this).on event, ->
      localStorage.setItem 'space-form', JSON.stringify $(this).serializeArray()