//You can start simple and just render a single 
//pokemon card from the first element

data.forEach(pokemon => {
    const main = document.querySelector('.cards')

    const mainlist = document.createElement('li')

    const title = document.createElement('h2')
    const sprite = document.createElement('img')
    const statslist = document.createElement('ul')

    const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)

    title.innerText = name
    
    sprite.src = pokemon.sprites.other['official-artwork'].front_default
    sprite.width = 256
    sprite.alt = `${name}s sprite`

    mainlist.style.listStyle = 'none'
    statslist.style.listStyle = 'none'
    

    mainlist.className = 'card'
    title.className = 'card--title'
    sprite.className = 'card--img'
    statslist.className = 'card--text'

    pokemon.stats.forEach(stat => {
        const s = document.createElement('li')
        s.innerText = `${stat.stat.name.toUpperCase()}: ${stat.base_stat}`
        s.style.padding = '5px'
        statslist.append(s)
    })

    mainlist.append(title, sprite, statslist)
    
    main.append(mainlist)
    console.log(mainlist)
});

