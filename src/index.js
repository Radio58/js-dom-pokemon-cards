
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

data.forEach(pokemon => {

    const main = document.querySelector('.cards')

    const mainlist = document.createElement('li')

    const title = document.createElement('h2')
    const sprite = document.createElement('img')
    const statslist = document.createElement('ul')

    const name = pokemon.name
    name[0] = name[0].toUpperCase()

    title.innerText = pokemon.name
    sprite.src = pokemon.sprites.other['official-artwork'].front_default
    sprite.width = 256
    sprite.alt = `${pokemon.name}s sprite`

    mainlist.className = 'card'
    title.className = 'card--title'
    sprite.className = 'card--img'
    statslist.className = 'card--text'

    pokemon.stats.forEach(stat => {
        const s = document.createElement('li')
        s.innerText = `${stat.stat.name.toUpperCase()}: ${stat.base_stat}`
        statslist.append(s)
    })

    mainlist.append(title, sprite, statslist)
    
    main.append(mainlist)
    console.log(mainlist)

    // const hp_el = document.createElement('li')
    // const attack_el = document.createElement('li')
    // const defense_el = document.createElement('li')
    // const specialattack_el = document.createElement('li')
    // const specialdefense_el = document.createElement('li')
    // const speed_el = document.createElement('li')




    //console.log(name, hp, attack, defense, specialattack, specialdefense, speed)
});

